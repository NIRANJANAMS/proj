import React from 'react'
import Select from 'react-select'
import { useState } from 'react';
import './JobSearch.css'

export default function JobList() {
  const [sort, setSort] = useState("sort");

  const handleChange = (event) => {
    setSort(event.target.value)
  }
  return (
    <div className='App' style={{backgroundImage:'bg1.jpeg'}}>
      <h1>JOB SEEKER</h1>
      <table style={{float:'right'}}>
      <tr><td><button><img className='App-logo' src='icon.png'/></button></td></tr>
      <tr><td><label>My Profile</label></td></tr>
      </table>
    
    <div id='wrapper' className='container'>
<h2 className='listing'></h2>
      <table className='forma'>
        <tr>
          <th>Name</th>
          <th>Place</th>
          <th>Job Description</th>
          <th></th>
          <th><select value={sort} onChange={handleChange} className="buttons" style={{backgroundColor:'lightcyan'}}>
            <option>sort</option>
  <option>Distance</option>
  <option>Amount</option>
</select></th>
        </tr>
        <tr>
          <td>Joy</td>
          <td>Trivandrum</td>
          <td>Seting electrical equipment on home</td>
          <td><button className='buttons'>Apply</button></td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>Sreekaryam</td>
          <td>Repairing the electric plug and switches</td>
          <td><button className='buttons'>Apply</button></td>
        </tr>
        <tr>
          <td>Subash</td>
          <td>Kazhakootam</td>
          <td>Maintenance of electrical circuits</td>
          <td><button className='buttons'>Apply</button></td>
        </tr>
      </table>
      </div>
    </div>
  )
}
