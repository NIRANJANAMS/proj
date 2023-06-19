
import Select from 'react-select'
import './JobSearch.css'
function Employer() {
    const optionList = [
        { value: "Electrician", label: "Electrician" },
        { value: "Plumber", label: "Plumber" },
        { value: "Carpender", label: "Carpender" },
        { value: "Cocunut climber", label: "Cocunut climber" },
        { value: "Grass cutter", label: "Grass cutter" },
        { value: "Others", label: "Others" }
      ];
  return(
    <div className='App'>
    <h1 className='container'>EMPLOYER</h1>
    <table style={{float:'right'}}>
      <tr><button><img className='App-logo' src='icon.png'/></button></tr>
      <tr><label>My Profile</label></tr>
      </table>
    <div id="wrapper" className="container">
        <form action="/jobpost" style={{backgroundColor:'lightgray'}} className='forma'>
            <h2>JOB POSTING</h2>
            <br/>
            <table>
                <tr>
            <td><label>Job Name : </label></td>
            <td><Select options={optionList} id="input-field" 
        placeholder="Select job"/></td></tr>
        <br/>
            <tr><td><label>Description :  </label></td>
            <td><textarea></textarea></td></tr> <br/>
            <tr><td><label>Address : </label></td>
            <td><textarea></textarea></td></tr> <br/>
            <tr><td></td><td><button type="submit" className='buttons'>post</button></td></tr>
            </table>
        </form>
    </div>
    </div>
  )    
}
export default Employer;