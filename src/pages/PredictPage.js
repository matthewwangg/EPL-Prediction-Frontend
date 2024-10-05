import React, { useState } from 'react';
import axios from 'axios';
import PredictContainer from "../components/PredictContainer";
import PlayerCardContainer from '../components/PlayerCardContainer';
import FooterContainer from "../components/FooterContainer";
import Navbar from "../components/Navbar";

const PredictPage = () => {
    const [topPlayers, setTopPlayers] = useState([]);
    const [optimizedTeam, setOptimizedTeam] = useState([]);
    const [headerText1, setHeaderText1] = useState('Best Players per Position');
    const [headerText2, setHeaderText2] = useState('Best Team for Budget');

    const handlePredict = (fetchedData) => {
        setTopPlayers(fetchedData.topPlayers);
        setOptimizedTeam(fetchedData.optimizedTeam);
        setHeaderText1('Predicted Best Players per Position');
        setHeaderText2('Predicted Best Team for Budget');
    };

    return (
        <div>
            <Navbar />
            <PredictContainer onPredict={handlePredict} />
            <PlayerCardContainer
                players={topPlayers}
                headerText={headerText1}
            />
            <PlayerCardContainer
                players={optimizedTeam}
                headerText={headerText2}
            />
            <FooterContainer/>
        </div>
    );
};

export default PredictPage;
