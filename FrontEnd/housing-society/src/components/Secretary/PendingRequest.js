import axios from "axios";
import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const PendingRequest=()=>{
  let id =useParams();
  let numberid= parseInt(id.id);
  console.log(numberid);
  let user;

const [user7, setUser7] = useState([])


  useEffect(() => {
    user = axios.get(`http://localhost:8080/secretary/pendingrequest/${numberid}`).then((res)=>{
    console.log(res)
      setUser7(res.data)
      console.log(user7)
  })
  }, [])

  

    function remove(data){
      console.log("in remove");
      console.log(data);
      axios.post('http://localhost:8080/secretary/secretary/deleterequest',data).then((res)=>console.log("succes")).catch(()=>console.log("error"))
      window.location.reload(false);
    }
    
    
    function Save(data){
      console.log("in save");
      axios.post(`http://localhost:8080/secretary/secretary/addrequest/${numberid}`,data).then((res)=>console.log("succes")).catch(()=>console.log("error"))
    // window.location.reload(false);
    }
    
  
  return(
<div>
  <table className="table">
  <tr>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile No.</th>
        <th scope="col">Role</th>
        <th scope="col">Society Name</th>
    </tr>
{
  user7.map((current)=>{
    return(
      <>
      <tr>
      <td> {current.firstName}</td>
      <td> {current.lastName}</td>
      <td> {current.email}</td>
      <td> {current.mobileNumber}</td>
      <td> {current.role}</td>
      <td> {current.societyName}</td>
      <td><button type="button" className="btn btn-secondary btn-sm" onClick={()=>Save(current)}>Save</button></td>
      <td><button  type="button" clasName="btn btn-secondary btn-sm" onClick={()=>remove(current)} >Delete</button></td>
      
      </tr> 
      </>
    )
  })
}
     
</table>
</div>


  )
}
export default PendingRequest;