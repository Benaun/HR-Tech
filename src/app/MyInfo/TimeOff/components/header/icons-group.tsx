import Image from "next/image";
import { useLoginStore } from "@/store/store"
import { useRouter } from "next/navigation"
import { iconsList } from "@/assets/icons-list";

export default function IconsGroup() {
    const router = useRouter()
    const { clearTokens } = useLoginStore.getState();

    const handleClick = () => {
        clearTokens()
        router.push('/login')
    }

    return (
        <div className="flex w-[1/8] justify-between gap-6">
            {iconsList.map((icon) =>
                <button
                    className="w-6 h-6"
                    key={icon.id}
                >
                    <Image
                        src={icon.src}
                        width={0}
                        height={0}
                        alt={icon.alt}
                        className="w-full h-full"
                    />
                </button>
            )}
            <button
                className="w-6 h-6"
                onClick={handleClick}
            >
                <Image
                    src={'/icons/logout.svg'}
                    width={0}
                    height={0}
                    alt='logout'
                    className="w-full h-full"
                />
            </button>
        </div>
    )
}