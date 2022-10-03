import React, {useContext, useEffect, useState} from 'react';
import './fonts.css';
import {FontContext} from "../App";

const MyFonts = () => {
    const [mainFont, setMainFont] = useState();
    const [fonts, setFonts] = useState();
    const {selectedFont, setSelectedFont} = useContext(FontContext);

    const getFonts = () => {
        fetch('http://json.ffwagency.md/fonts_a ')
            .then(response => response.json())
            .then(json => {
                setMainFont(json.content[0]);
                setFonts(json.content.filter(item => item.id !== json.content[0].id));
            })
    }

    useEffect(() => {
        getFonts();
    }, []);

    const selectFont = (font) => {
        if (selectedFont?.id === font?.id) {
            setSelectedFont(null);
        } else {
            setSelectedFont(font);
        }
    }

    return (
        <div className={'myFontsWrapper'}>
            <div className={'block'}>
                <div
                    className={selectedFont?.id === mainFont?.id ? 'fontWrapper mainFont selectedFont' : 'fontWrapper mainFont'}
                    onClick={() => selectFont(mainFont)}
                    onKeyDown={(e) => e.key === 'Enter' && selectFont(mainFont)}
                    tabIndex={'0'}
                >
                    <div style={{backgroundColor: `${mainFont?.color}`}}>
                        <span className={'fontAbbr'}>{mainFont?.abbr}</span>
                    </div>
                </div>
                <div className={'fontDescription'}>
                    <div className={'dot'}></div>
                    <span>{mainFont?.label}</span>
                </div>
            </div>
            <div className={'block'}>
                {fonts?.map(item =>
                    <div className={'secondaryBlock'} key={item.id}>
                        <div
                            className={selectedFont?.id === item.id ? 'fontWrapper selectedFont' : 'fontWrapper'}
                            onClick={() => selectFont(item)}
                            onKeyDown={(e) => e.key === 'Enter' && selectFont(item)}
                            tabIndex={'0'}
                        >
                            <div style={{backgroundColor: `${item.color}`}}>
                                <span className={'fontAbbr'}>{item.abbr}</span>
                            </div>
                        </div>
                        <div className={'fontDescription'}>
                            <div className={'dot'}></div>
                            <span>{item.label}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyFonts;