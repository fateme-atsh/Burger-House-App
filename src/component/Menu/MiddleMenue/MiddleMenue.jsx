import React from 'react';

const MiddleMenue = () => {
    return(
        <section className="py-16 middle-banners p-5 text-white grid grid-cols-2 gap-x-4 sm:grid-cols-1">

                <div className="left-post bg-middle-post-one bg-no-repeat bg-cover rounded-md h-96 sm:mb-8 sm:h-44">
                    <a href="# " target="-blank">
                        <div className="labels pl-16 pt-5 tracking-tighter">
                            <span className="font-semibold text-lg">TRY IT TODAY</span><br/>
                            <span className="font-bold text-2xl">MOST POPULAR BURGER</span>
                        </div>
                    </a>
                </div>

                <div className="right-posts">
                    <div className="top-image bg-middle-post-two bg-no-repeat bg-cover rounded-md h-44 mb-8">
                        <a href="# " target="-blank">
                            <div className="labels pl-16 pt-5 tracking-tighter">
                                <span className="font-semibold text-lg">TRY IT TODAY</span><br/>
                                <span className="font-bold text-2xl">MORE FUN</span><br/>
                                <span className="font-bold text-2xl">MORE TASTE</span>
                            </div>
                        </a>
                    </div>

                    <div className="bottom-image bg-middle-post-three bg-no-repeat bg-cover rounded-md h-44">
                        <a href="# " target="-blank">
                            <div className="labels pl-16 pt-5 tracking-tighter">
                                <span className="font-semibold text-lg">TRY IT TODAY</span><br/>
                                <span className="font-bold text-2xl">FRESH & CHILI</span>
                            </div>
                        </a>
                    </div>
                </div>

        </section>
    );
}
export default MiddleMenue;