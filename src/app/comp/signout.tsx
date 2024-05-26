'use client'

import { signOut } from "next-auth/react"

import { useRouter } from "next/navigation"


export default function UserAccountnav () {

	return (
	<>
	<button onClick={() => {
		signOut({
			redirect: true,
			callbackUrl: `${window.location.origin}/`
	
		})
	}} variant="destructive">Sign Out</ button>
	
	</>
	)
}