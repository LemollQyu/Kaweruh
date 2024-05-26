import Auth from "@/lib/session"
import SignOut from "./signout"

export const Sign = async () => {

	const user = await Auth();
	
	return (
		<>
		{user.nama}
		
		{ user ?
			<SignOut /> 
		:
			<Link href="/signup" className="px-3 py-1 w-20  bg-transparent border  rounded-md transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100 font-Alliance text-center text-l md:text-lg focus:border-gray-300">Signup</Link>
		}
		</>
	)
}