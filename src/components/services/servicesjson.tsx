import './services.css';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getFetchServices from '../../APIs/serviceAPI';
import { RootReducerType } from "../../redux/rootReducer";
import { servicesInterface } from "../../interfaces/interfaces";
import { useHistory } from 'react-router-dom';

function Services() {

  const services : servicesInterface[] = useSelector((state : RootReducerType )=>state.serviceReducer.services);
  const loading : boolean = useSelector((state : RootReducerType )=>state.serviceReducer.loading);
  const error : string = useSelector((state : RootReducerType )=>state.serviceReducer.error);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>dispatch<any>(getFetchServices(history)),[dispatch])
  



  return (
    <div id='Service'>
      <h2>Our Services</h2>
      <div className="services">
        {error ? <p>{error}</p> : null}
        {loading ? <p>Loading</p>:null}
        {services.map((detail) => <div key={detail.id} className="serv">
                                    <img className='service-img' src={`${process.env.REACT_APP_LOCALHOST_URLS}/${detail.image}`} alt="img1" />
                                    <h3>{detail.title}</h3>
                                    <p style={{padding:'10px'}}>{detail.long_desc}</p>
                                  </div>)}
      </div>
    </div>
  )
}

export default Services