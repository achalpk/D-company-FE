import './welcome.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../redux/rootReducer';
import fetchWelcome from '../../APIs/welcomeAPI';
import { useHistory } from 'react-router-dom';

function Welcome() {
  const welcome : any = useSelector((state : RootReducerType )=>state.welcomeReducer.welcome);
  const loading : boolean = useSelector((state : RootReducerType )=>state.welcomeReducer.loading);
  const error : string = useSelector((state : RootReducerType )=>state.welcomeReducer.error);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>dispatch<any>(fetchWelcome(history)),[dispatch])

  // if(loading){
  //   <p>Loading...</p>
  // }
  return (
    <div className='welcometo'>
      {error ? <p>{error}</p> : null}
      {loading ? <p>Loading</p>:null}
      {welcome.map((detail:any) => <div key={detail.id}>
                                      <h2>{detail.title}</h2>
                                      <p>{detail.desc}</p>
                                    </div>)}
     </div>
  )
}

export default Welcome;