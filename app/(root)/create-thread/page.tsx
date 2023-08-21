
import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
async function Page() {
    const user = await currentUser();
    console.log(user)
    if(!user) return null 
    const userInfo =JSON.parse(JSON.stringify(await fetchUser(user?.id)) )
    console.log(userInfo,"userInfo")
    if(!userInfo?.onboarded) redirect("/onboarding")

    return <>
     <PostThread userId={userInfo?._id}/>
    <h1>create thread</h1>
    </>
    
}
export default Page;