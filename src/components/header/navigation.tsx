import { navList } from "@/assets/nav-list";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger
} from "@radix-ui/react-navigation-menu";
import { useState } from "react";

export default function Navigation() {
    const [isActive, setIsActive] = useState<number>(1)

    const handleClick = (id: number) => {
        setIsActive(id)
    }
    return (
        <nav className="flex w-[523px]">
            <NavigationMenu>
                <NavigationMenuList className="flex text-lg">
                    {navList.map((item) => {
                        return (
                            <NavigationMenuItem
                                key={item.id}
                                className="flex"
                            >
                                <NavigationMenuTrigger
                                    onClick={() => handleClick(item.id)}
                                    className={cn('p-4', item.id === isActive ? 'bg-[#F0F3F8] rounded-t-[8px]' : 'bg-transparent')}
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}