import { LocationMarkerIcon, MailIcon } from '@heroicons/react/outline';
import React from 'react';
import FooterLogo from '../../img/footer-logo.png';
import WhatsApp from '../../icons/WhatsApp';
import Twitter from '../../icons/Twitter';
import Facebook from '../../icons/Facebook';
import Instagram from '../../icons/Telegram';
import CopyRight from '../../icons/Copyright';


const Footer =() =>{
    return(
<footer className="bg-footer-poster bg-no-repeat bg-cover text-white m-12 p-10 sm:p-5 sm:m-4">
        <div><img src={FooterLogo} alt="logo" className="w-1/2 sm:w-full" /></div>
        <div className="grid grid-cols-2 sm:grid-cols-1 relative">
                <div className="text-xs text-justify mt-14 mb-28 sm:my-10">
                    <p className="pr-44 leading-5 sm:pr-0 md:pr-20"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate est, reprehenderit velit sint reiciendis odio harum quibusdam, autem similique quasi corrupti, provident delectus commodi? Dolorum ad error, ex vitae labore ab,
                        impedit incidunt doloremque sunt earum fugiat animi magni.</p>
                </div>
                <address className="absolute top-10 right-20 md:top-12 md:right-16 sm:static text-xs">
                    <div className="location flex my-2">
                        <LocationMarkerIcon className="h-7 w-7 mr-2 flex items-center"/>
                        <span className="flex items-center">MAIN ROAD, BUILDING NAME, COUNTRY</span>
                    </div>
                    <div className="mail flex">
                        <MailIcon className="h-7 w-7 mr-2 flex items-center"/>
                        <span className="flex items-center">INFO@COMPANYNAME.COM</span>
                    </div> 
                </address>
        </div>

        <div className="flex sm:mt-14 sm:flex-col-reverse">
            <div className="copyright flex items-center -mr-80 sm:mt-10">
                <CopyRight/>
                <span className="text-xs px-3">COMPANY NAME 2020. ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex justify-end sm:justify-between w-full">
                <a href="#" target="-blank" className="icons-style pt-0.5 px-2"><WhatsApp/></a>
                <a href="#" target="-blank" className="icons-style pt-1 px-2.5"><Facebook/></a>
                <a href="#" target="-blank" className="icons-style py-1 px-2"><Twitter/></a>
                <a href="#" target="-blank" className="icons-style py-1 px-2"><Instagram/></a>
            </div>
        </div>


    </footer>

    )
}
 export default Footer;