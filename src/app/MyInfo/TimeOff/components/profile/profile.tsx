'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useProfile } from "@/hooks/useProfile";


export default function Profile() {
    const { profile, loading, error } = useProfile()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(profile?.myProfile.avatar)

    return (
        <div>
            <h1>{profile?.myProfile.name}</h1>
            <Image
                src={`${profile?.myProfile.avatar}`} 
                width={0}
                height={0}
                alt="Avatar"
                sizes="100vh"
                priority
                className={cn('w-auto  rounded-t-lg', 'h-[130px]')}
            />
            <h1>{profile?.myProfile.id}</h1>
        </div>
    )
}