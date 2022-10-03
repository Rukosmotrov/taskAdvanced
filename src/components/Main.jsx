import React, {useEffect, useState} from 'react';
import './main.css';
import Fonts from "./Fonts";

const Main = ({tabsData}) => {
    const [currentTab, setCurrentTab] = useState();

    return (
        <>
            <div className={'header'}>
                <span>Please select one font</span>
                <div className={'links'}>
                    {
                        tabsData?.map(tab =>
                            <span
                                className={currentTab?.content_endpoint === tab.content_endpoint ? 'activeTab' : 'inactiveTab'}
                                onClick={() => setCurrentTab(tab)}
                                onKeyDown={(e) => e.key === 'Enter' && setCurrentTab(tab)}
                                tabIndex={'0'}
                            >{tab.label.toUpperCase()}</span>
                        )
                    }
                </div>
            </div>
            <Fonts currentTab={currentTab}/>
        </>
    );
};

export default Main;