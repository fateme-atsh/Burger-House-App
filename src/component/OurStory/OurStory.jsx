import React from 'react';
import FoodImg from '../../img/Food-Image.png'

const Ourstory =() =>{
    return(
        <section className="p-10 m-12 sm:p-0 sm:m-0">
            <div className="grid grid-cols-2 p-3 shadow-md sm:grid-cols-1">
                <div>
                    <div class="py-4 px-2 text-brown">
                        <div class="m-2">
                            <h3 className="font-semibold text-2xl">DISCOVER</h3><br/>
                            <h2 class="font-black text-5xl sm:text-3xl md:text-4xl">UPCOMING EVENTS</h2>
                        </div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, repudiandae? Adipisci, mollitia, impedit eaque numquam suscipit voluptas beatae culpa commodi necessitatibus delectus aliquam. Accusamus eos consequatur reprehenderit
                            dolorum eaque assumenda ad incidunt provident cum hic quis eligendi, maiores ea debitis.</p>
                    </div>
                    <div className="inline-block">
                        <a href="#first-event"><span className="bg-yellow w-1/2 h-1/2 rounded-full"></span></a>
                        <a href="#"><span className="bg-shadow w-2 h-2 rounded-full"></span></a>
                        <a href="#"><span className="bg-shadow w-2 h-2 rounded-full"></span></a>
                    </div>
                </div>
                <figure className='md:py-24'>
                    <img src={FoodImg} className="w-full md:h-full" alt=''/>
                </figure>
            </div>
        </section>
    );
}
export default Ourstory;