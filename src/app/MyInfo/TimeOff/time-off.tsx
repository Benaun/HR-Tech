'use client'

import { Button } from "@/ui/button"
import { useLoginStore } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Profile from "./components/profile/profile"

export default function TimeOff() {
    const router = useRouter()
    const { accessToken, clearTokens } = useLoginStore.getState();
    const [isAuth, setIsAuth] = useState(false);
    

    useEffect(() => {
        if (!accessToken) {
            router.push('/login')
        } else {
            setIsAuth(true)
        }
    }, [router, accessToken])

    if (!isAuth) {
        return null
    }

    const handleClick = () => {
        clearTokens()
        router.push('/login')
    }

    return (
        <div className="flex gap-5">
            <Profile />
            <Button onClick={handleClick}>Close</Button>
        </div>
    )
}