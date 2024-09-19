import HeaderContent from "./header-content";
import History from "./history";
import Off from "./off";
import Upcoming from "./upcoming";

export default function Content() {
    return (
        <section className="w-[80%] mt-28">
            <HeaderContent />
            <div className="bg-white rounded-2xl">
                <Off />
                <Upcoming />
                <History />
            </div>
        </section>
    )
}