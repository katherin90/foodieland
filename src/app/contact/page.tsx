import React from 'react'
import SubscribeBanner from '@/components/sections/subscribe-banner/subscribe-banner';
import DeliciousRecipes from '@/components/sections/delicious-recipes/delicious-recipes';
import ContactUs from '@/components/sections/contact-us/contact-us';


export const metadata = {
  title: 'Foodieland - Contact',
};      


const Contact:React.FC = ()=>{
    return (
        <>
            <ContactUs/>
            <SubscribeBanner/>
            <DeliciousRecipes headline='Check out the delicious recipes'/>
        </> 
    )
}


export default Contact