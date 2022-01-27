import React from 'react';
import DatePicker from 'react-datepicker2';
import Bottle from '../../img/Bottle.png';
import Burger from '../../img/Burger.png';
import Plate from '../../img/food-plate.png';

const Reservation = () => {
    return (
        <section className="flex my-12 relative">

            <div className="grid grid-cols-2 sm:hidden">
                <img src={Burger} className="w-40 absolute -top-10 -left-10 md:-left-16" alt='burger' />
                <img src={Bottle} className="w-12 absolute top-32 left-32 md:hidden" alt='burger' />
            </div>

            <div className="grid justify-items-center w-full text-brown text-center">
                <div>
                    <h2 className="font-semibold text-2xl sm:text-lg">فرم رزرو</h2><br />
                    <h1 className="font-black text-6xl sm:text-2xl">میز خود را رزرو کنید</h1>
                </div>
                <form className="my-5 sm:grid grid-cols-1 w-full">
                    <input type="text" placeholder="نام رزرو کننده" name="name" className="input-style w-1/3 py-2 px-3 my-4 mx-2 sm:w-11/12" />
                    <input type="email" placeholder="ایمیل" name="email" className="input-style w-1/3 py-2 px-3 mx-2 my-4 sm:w-11/12" />
                    <br />
                    <input placeholder="تاریخ " className="input-style w-1/3 py-2 px-3 mx-2 my-4 sm:w-11/12">
                        <DatePicker />
                    </input>
                    <input type="time" placeholder="ساعت " className="input-style w-1/3 py-2 px-3 mx-2 my-4 sm:w-11/12" />
                    <br />
                    <input type="number" placeholder="تعداد " className="input-style w-1/3 py-2 px-3 mx-2 my-4 sm:w-11/12" />
                    <input type="submit" value="جست و جوی میز" className="rounded-md w-1/3 py-2 px-3 mx-2 my-4 bg-red text-white font-bold hover:bg-red-dark sm:w-11/12" />
                </form>
            </div>

            <div className="overflow-x-hidden sm:hidden">
                <img src={Plate} className="w-80 absolute -right-40 md:-right-44" alt='burger' />
            </div>
        </section>
    );
}
export default Reservation;