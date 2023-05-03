import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import ChefSection from './ChefSection/ChefSection';
import ExtraSection1 from './ExtraSection/ExtraSection1';
import ExtraSection2 from './ExtraSection/Extrasection2/ExtraSection2';

const MainPage = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <ChefSection></ChefSection>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default MainPage;