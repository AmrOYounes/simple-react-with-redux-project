import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById} from '../actions';
import { bindActionCreators } from 'redux';
 

class HeroList extends Component {
    render() {
        console.log('heroooolistBBBABY',this.props);
        
        return(
            <div>
                <h4>you learned</h4>

                <ul className="list-group">
                    {
                        this.props.heroes.map(heroe => {
                            return (
                                <li className="list-group-item" key={heroe.id}>
                                    <div className="list-item">{heroe.name}</div>
                                    <button onClick={() => this.props.removeCharacterById(heroe.id) } className="hero-buttons">-</button>
                                </li>
                            )
                        })
                    }
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCharacterById }, dispatch);

}


export default connect(mapStateToProps, mapDispatchToProps )(HeroList);