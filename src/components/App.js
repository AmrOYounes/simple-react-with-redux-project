import React, { Component } from 'react';
import CharacterList from './characterList';
import HeroList from  './HeroList';
import '../styles/index.css';
import SquadStats from '../components/SquadStats';


class App extends Component {
    render() {
        return (
            <div className="App  ">
                <h2>Front end training Plan</h2>
                <div className="col-md-5 characters"><CharacterList /></div>
                <div className="col-md-4 heros"> <HeroList /></div>
                <div className="col-md-3 stats"><SquadStats/></div>
                
               
            </div>
        )
    }
}

export default App;
