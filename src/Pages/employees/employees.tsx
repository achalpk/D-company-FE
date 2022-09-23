import './employees.css';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getFetchTeams from '../../APIs/expertAPI';
import { RootReducerType } from '../../redux/rootReducer';
import Employee from '../../components/employee/employee';
import { teamsInterface } from '../../interfaces/interfaces';

function Employees() {
  const [flag, setFlag] = useState(false);
  const [employee, setEmployee] = useState<teamsInterface>({id : '', image : '', name : '', position : '', team: '', location: ''});
  const teams : any = useSelector((state : RootReducerType )=>state.aboutReducer.teams);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch<any>(getFetchTeams())
    window.scrollTo({top: 0, behavior: 'smooth'});
  },[])


  return (
    <div >
      <div className='employees'>
        <h1 style={{margin:'50px'}}>Our Employees</h1>
        <div className='employeesList'>
          {teams.map((detail:teamsInterface)=><div key={detail.name} className="employeeCard" onClick={()=>{setFlag(true);setEmployee(detail)}}>
                                      <img className='employee-img' src={detail.image} alt="team4" />
                                      <h3>{detail.name}</h3>
                                      <p style={{fontSize:'12px'}}>{detail.position}</p>
                                    </div>)   
          }
        </div>
        {flag?<Employee employee={employee} setFlag={setFlag} />:null}
      </div>
    </div>
  )
}

export default Employees