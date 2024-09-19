import Image from "next/image";

export default function Off() {
    return (
        <section className="p-6 rounded w-full mb-6">
            <div className="flex justify-between">
                <div className="flex items-center gap-1  text-[#204973]">
                    <div className="h-4 w-4">
                        <Image
                            width={0}
                            height={0}
                            src={'/main/1.svg'}
                            alt="Time"
                            className="w-full h-full"
                        />
                    </div>
                    <h2 className="text-xl font-medium">Time Off</h2>
                </div>
                <div className="flex items-center gap-8">
                    <p>Accrual Level Start Date
                        <span className="text-[#204973]">03/09-2020</span>
                    </p>
                    <button className="p-2 border-solid border-2 rounded-[8px] border-black">
                        Add Time Off Policy
                    </button>
                </div>
            </div>

            <div className="border-[1px] border-[#7C96B1] mt-3 mb-6"></div>

            <div className="flex justify-center items-center gap-12 mt-6">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#F0F3F8] rounded-xl w-[264px] flex flex-col gap-1 items-center justify-center py-4">
                        <p className="font-semibold text-xl">Sick</p>
                        <div className="flex gap-1 items-center">
                            <div className="w-8 h-8">
                                <Image
                                    width={0}
                                    height={0}
                                    src={'/main/2.svg'}
                                    alt="Time"
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="font-semibold text-3xl">3</p>
                        </div>
                        <p className="font-semibold">Days Available</p>
                        <p className="font-semibold text-[#7C96B1]">1 dey scheduled</p>
                    </div>
                    <p className="font-semibold text-[#7C96B1]">Sick Full-Time</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#F0F3F8] rounded-xl w-[264px] flex flex-col gap-1 items-center justify-center py-4">
                        <p className="font-semibold text-xl">Annual Leave</p>
                        <div className="flex gap-1 items-center">
                            <div className="w-8 h-8">
                                <Image
                                    width={0}
                                    height={0}
                                    src={'/main/3.svg'}
                                    alt="Time"
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="font-semibold text-3xl">10.3</p>
                        </div>
                        <p className="font-semibold">Days Available</p>
                        <p className="font-semibold text-[#7C96B1]">1 dey scheduled</p>
                    </div>
                    <p className="font-semibold text-[#7C96B1]">Holiday Full-Time</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#F0F3F8] rounded-xl w-[264px] flex flex-col gap-1 items-center justify-center py-4">
                        <p className="font-semibold text-xl">Comp/in Lieu Time</p>
                        <div className="flex gap-1 items-center">
                            <div className="w-8 h-8">
                                <Image
                                    width={0}
                                    height={0}
                                    src={'/main/4.svg'}
                                    alt="Time"
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="font-semibold text-3xl">10.3</p>
                        </div>
                        <p className="font-semibold">Human Used(YTD)</p>
                        <p className="font-semibold text-[#7C96B1]">1 dey scheduled</p>
                    </div>
                    <p className="font-semibold text-[#7C96B1]">Comp/in Lieu Time Flexible Policy</p>
                </div>
            </div>
        </section>
    )
}