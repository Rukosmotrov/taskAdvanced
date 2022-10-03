import React, {useEffect, useState} from 'react';
import './fonts.css';

const BuyFonts = () => {
    const [fonts, setFonts] = useState();

    const getFonts = () => {
        fetch('http://json.ffwagency.md/fonts_b ')
            .then(response => response.json())
            .then(json => setFonts(json.content))
    }

    useEffect(() => {
        getFonts()
    }, []);
    return (
        <div className={'buyFontsTab'}>
            {fonts}
        </div>
    );
};

export default BuyFonts;