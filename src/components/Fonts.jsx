import React from 'react';
import './fonts.css';
import MyFonts from "./MyFonts";
import BuyFonts from "./BuyFonts";

const Fonts = ({currentTab}) => {
    if(currentTab?.content_endpoint === 'fonts_a') {
        return (
            <>
                <div className={'wrapper'}>
                    <MyFonts/>
                </div>
            </>
        );
    } else if(currentTab?.content_endpoint === 'fonts_b') {
        return (
            <>
                <div className={'wrapper buyFontsTab'}>
                    <BuyFonts/>
                </div>
            </>
        );
    }
};

export default Fonts;