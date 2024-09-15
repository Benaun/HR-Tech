'use client'

import { Button } from "@/components/ui/button"
import { useLoginStore } from "@/store/loginStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function TimeOff() {
    const router = useRouter()
    const { accessToken, clearTokens } = useLoginStore.getState();
    const [isAuth, setIsAuth] = useState(false)

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
            <h1>Main</h1>
            <Button onClick={handleClick}>Close</Button>
        </div>
    )
}