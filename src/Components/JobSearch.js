import React from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import './JobSearch.css'
//import JobList from './JobList';
//import { BrowserRouter } from 'react-router-dom';


export default function JobSearch() {

  const navigate=useNavigate();
    const optionList = [
        { value: "Electritian", label: "Electritian", href:'/ele'},
        { value: "Plumber", label: "Plumber" },
        { value: "Carpender", label: "Carpender" },
        { value: "Cocunut climber", label: "Cocunut climber" },
        { value: "Grass cutter", label: "Grass cutter" },
        { value: "Others", label: "Others" }
    ];
  return (
    <div className='App' style={{backgroundImage:'bg1.jpeg'}}>
      <h1>JOB SEEKER</h1>
      <table style={{float:'right'}}>
      <tr><td><button><img className='App-logo' src='icon.png'/></button></td></tr>
      <tr><td><label>My Profile</label></td></tr>
      </table>
      <div id="wrapper" className="container">
        <form style={{width:'600px'}} className='forma'>
        <table >
          <tr>
            <td>
        <label className='labeljob'>Search available jobs :</label></td>
        <td><Select options={optionList} onChange={opt => console.log(opt.label, opt.value)} className="form-control" id="input-field" 
        placeholder="Search job"/></td>
  <td><button onClick={()=>navigate('/joblist')} className="buttons">search</button></td>
  </tr>
  </table>
</form>
</div>
    </div>
  )
}