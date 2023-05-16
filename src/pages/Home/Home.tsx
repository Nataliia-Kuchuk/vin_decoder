import React from 'react';
import Header from '../../components/Header/Header';
import VinInput from '../../components/VinInput/VinInput';
import ListDecoder from '../../components/ListDecoder/ListDecoder';
import LastVins from '../../components/LastVins/LastVins';

const Home = () => {
    return (
        <div>
         
            <VinInput />
            <LastVins/>
            <ListDecoder/>
        </div>
    );
};

export default Home;