'use client'

import { useProfile } from "@/hooks/useProfile";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import Image from "next/image";


export default function Profile() {
    const { profile, loading, error } = useProfile()

    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className="flex w-full bg-[#DAE6F2] pt-[50px] pr-[72px] z-0">
            <div className="pl-[109px]  w-[60%] flex  items-center gap-16">
                <Avatar className="w-[150px] h-[150px]">
                    <AvatarImage
                        src={loading ? '/default.svg' : profile?.myProfile.avatar }
                        alt="Avtar"
                        className="w-full h-full rounded-full"
                    />
                </Avatar>
                <h1 className="text-3xl">{profile?.myProfile.name}</h1>
            </div>
            <div className="flex gap-4 w-[40%] justify-end items-center">
                <Select>
                    <SelectTrigger className="flex items-center justify-center w-40 h-8 gap-2 border-2 border-[#7C96B1] rounded-[8px]">
                        <SelectValue placeholder="Request a Change" />
                        <button
                            className="w-4 h-4"
                        >
                            <Image
                                src={'/icons/arrow.svg'}
                                width={0}
                                height={0}
                                alt='Arrow'
                                className="w-full h-full"
                            />
                        </button>
                    </SelectTrigger>
                </Select>

                <Select>
                    <SelectTrigger className=" flex items-center justify-center gap-2 w-14 h-8 border-2 border-[#7C96B1] rounded-[8px]">
                        <button
                            className="w-4 h-4"
                        >
                            <Image
                                src={'/icons/settings.svg'}
                                width={0}
                                height={0}
                                alt='Arrow'
                                className="w-full h-full"
                            />
                        </button>
                        <button
                            className="w-4 h-4"
                        >
                            <Image
                                src={'/icons/arrow.svg'}
                                width={0}
                                height={0}
                                alt='Arrow'
                                className="w-full h-full"
                            />
                        </button>
                    </SelectTrigger>
                </Select>
            </div>
        </section>
    )
}