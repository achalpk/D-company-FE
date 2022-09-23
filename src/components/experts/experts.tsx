import './experts.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { expertProps, teamsInterface } from '../../interfaces/interfaces'
import { RootReducerType } from '../../redux/rootReducer';
import getFetchTeams from '../../APIs/expertAPI';
import { connect } from 'react-redux';

class Experts extends Component<expertProps>{
    componentDidMount()
    {
        this.props.getFetchTeams?.();
    }
    render(){
        return(
            <div id='experts'>
                <Link to="/employees" className='moreTeams'>
                    <h3 >Meet Our Teams</h3>
                    {this.props.loading ? <p>Loading...</p>:null}
                    {this.props.error!==null ? <p>{this.props.error}</p> : null}
                    <div className='teams'>
                        {this.props.teams.slice(0,4).map((detail:teamsInterface)=><div key={detail.name} className="team">
                                                                            <img className='team-img' src={detail.image} alt="team4" />
                                                                            <h4>{detail.name}</h4>
                                                                            <p style={{fontSize:'12px'}}>{detail.position}</p>
                                                                        </div>)   
                        }
                    </div>
                    .....
                </Link>
            </div>
        )
    }
}

const mapStateToProps=(state : RootReducerType)=>{
    return{
        teams : state.aboutReducer.teams,
        loading : state.aboutReducer.loading,
        error : state.aboutReducer.error,
    }
}

const mapDispatchToProps=(dispatch : any)=>{
    return{
        getFetchTeams : ()=>dispatch(getFetchTeams())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Experts)
