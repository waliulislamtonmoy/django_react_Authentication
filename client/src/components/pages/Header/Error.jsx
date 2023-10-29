import React from 'react'

const Error = () => {
    return (
        <div>

            <section class="block">
                <div class="px-5 md:px-10">
                    <div class="mx-auto w-full max-w-7xl">
                        <div class="py-16 md:py-24 lg:py-32">
                            <div class="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                                <div class="max-[991px]:max-w-[720px]">
                                    <h1 class="font-bold mb-4 text-4xl md:text-6xl">404 Error</h1>
                                    <div class="max-w-[528px] mb-6 md:mb-10 lg:mb-12">
                                        <p class="text-[#636262] text-sm sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
                                    </div>
                                    <a href="/" class="inline-block cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white">Back Home</a>
                                </div>
                                <div class="">

                                    <img src="https://cdn.svgator.com/images/2022/01/cat.png" alt="" class="mx-auto inline-block h-full w-full max-w-[640px] object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Error
