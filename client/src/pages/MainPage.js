import React from 'react'
import Navigation from "../components/common/navigation";
import States from '../components/pagination/states'
import Footer from '../components/common/footer'
import FooterPage from "../components/common/footerBootstrap";



export const MainPage = () => {

    return (
        <div>
            <Navigation/>

    <States/>


        <FooterPage/>
        </div>
    )
}
