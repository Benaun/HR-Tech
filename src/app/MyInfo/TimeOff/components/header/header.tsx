import Image from "next/image";
import Navigation from "./navigation";
import SearchInput from "./search-input";
import Link from "next/link";
import IconsGroup from "./icons-group";

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between px-6 pt-4">
            <div className="w-28 h-6 pb-[30px]">
                <Link href={'/'}>
                    <Image
                        src={'/logo.png'}
                        width={0}
                        height={0}
                        alt="Logo"
                        sizes="100vh"
                        priority
                        className='h-auto w-full'
                    />
                </Link>
            </div>
            <Navigation />
            <SearchInput />
            <IconsGroup />
        </header>
    )
}