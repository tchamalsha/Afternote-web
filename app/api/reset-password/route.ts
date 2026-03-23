import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export async function POST(req: Request) {
  try {
    const { accessToken, newPassword } = await req.json()

    if (!accessToken || !newPassword) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Use the service role key to update password
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)

    // First, get the user from the access token
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(accessToken)

    if (userError || !userData.user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
    }

    // Update the user's password
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(userData.user.id, {
      password: newPassword,
    })

    if (updateError) {
      console.error("Password update error:", updateError)
      return NextResponse.json(
        { error: "Failed to update password" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Reset password error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
