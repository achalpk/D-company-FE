import React from 'react';
import { teamsInterface } from '../../interfaces/interfaces';
import './employee.css';

function Employee(props:{employee:teamsInterface,setFlag:(arg: boolean)=>void}){

    return (
        <div className='employee'>
            <button style={{float:'right'}} onClick={()=>props.setFlag(false)}>___</button><br/><br/><br/><br/>
            <div className='empDetail'>
                <img style={{width:'250px',height:'300px'}} src={props.employee.image} alt="team4" />
                <div>
                    <table style={{textAlign:'left'}}>
                        <tr><td>EMP ID </td><td>:   <b>{props.employee.id}</b></td></tr>
                        <tr><td>EMP Name </td><td>:   <b>{props.employee.name}</b></td></tr>
                        <tr><td>EMP Position </td><td>:   <b>{props.employee.position}</b></td></tr>
                        <tr><td>EMP Section </td><td>:   <b>{props.employee.team}</b></td></tr>
                        <tr><td>EMP Location </td><td>:   <b>{props.employee.location}</b></td></tr>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Employee