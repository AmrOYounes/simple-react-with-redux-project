import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {


    strength = () => {
        let strength = 0;
        // console.log('yamaaaaaaaaaa', this.props.heroes);
        this.props.heroes.forEach(hero => strength += hero.strength);
            return strength;
        
    }

    render() {
        console.log(this.strength());
        return (
            <div>
                <h4>Your experience</h4>
                <ul className="list-group">

                    <li className="list-group-item">
                        <b>Score: {this.strength()} </b>
                       
                    </li>
                </ul>
            </div>
        )

    }
}




function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }

}

export default connect(mapStateToProps, null)(SquadStats);

