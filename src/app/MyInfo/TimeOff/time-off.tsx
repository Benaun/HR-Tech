'use client'

import { useLoginStore } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "../../../components/header/header"
import Aside from "@/components/aside/aside"
import Content from "../../../components/content/content"

export default function TimeOff() {
    const router = useRouter()
    const { accessToken } = useLoginStore.getState();
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

    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex w-full justify-center bg-[#F0F3F8]">
                <div className="flex w-full px-[72px] justify-between">
                    <Aside />
                    <Content />
                </div>
            </main>
        </div>
    )
}