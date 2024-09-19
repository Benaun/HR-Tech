import { mainList } from "@/assets/main-list"
import { useProfile } from "@/hooks/useProfile"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger
} from "@radix-ui/react-navigation-menu"
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import Image from "next/image"
import { useState } from "react"

export default function HeaderContent() {
    const [isActive, setIsActive] = useState<number>(2)
    const { profile, error } = useProfile()
    console.log(profile)

    if (error) return <p>Error: {error.message}</p>;

    const handleClick = (id: number) => {
        setIsActive(id)
    }
    return (
        <div className="flex flex-col">
            <div className="flex justify-between mb-9">
                <h1 className="text-3xl font-semibold">{profile?.myProfile.name}</h1>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="flex items-center justify-center w-40 h-8 gap-2 border-2 border-[#7C96B1] rounded-[8px]">
                            <SelectValue placeholder="Request a Change" />
                            <div
                                className="w-4 h-4"
                            >
                                <Image
                                    src={'/icons/arrow.svg'}
                                    width={0}
                                    height={0}
                                    alt='Arrow'
                                    className="w-full h-full"
                                />
                            </div>
                        </SelectTrigger>
                    </Select>

                    <Select>
                        <SelectTrigger className=" flex items-center justify-center gap-2 w-14 h-8 border-2 border-[#7C96B1] rounded-[8px]">
                            <div
                                className="w-4 h-4"
                            >
                                <Image
                                    src={'/icons/settings.svg'}
                                    width={0}
                                    height={0}
                                    alt='Arrow'
                                    className="w-full h-full"
                                />
                            </div>
                            <div
                                className="w-4 h-4"
                            >
                                <Image
                                    src={'/icons/arrow.svg'}
                                    width={0}
                                    height={0}
                                    alt='Arrow'
                                    className="w-full h-full"
                                />
                            </div>
                        </SelectTrigger>
                    </Select>
                </div>
            </div>
            <NavigationMenu className="w-full">
                <NavigationMenuList className="flex gap-2 font-medium justify-between">
                    {mainList.map((item) => {
                        return (
                            <NavigationMenuItem
                                key={item.id}
                                className="flex w-[90px] justify-center"
                            >
                                <NavigationMenuTrigger
                                    onClick={() => handleClick(item.id)}
                                    className={cn('p-4', item.id === isActive ? 'bg-white rounded-t-[8px]' : 'bg-transparent')}
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>
                        )
                    })}
                    <NavigationMenuItem className="flex w-[90px] justify-center">
                        <NavigationMenuTrigger
                            className={'bg-transparent p-4'}
                        >
                            More   <span>&#9660;</span>
                        </NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}