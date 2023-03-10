import axios from "axios";
import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const GetdataAccounts=()=>{
  let id =useParams();
  let numberid= parseInt(id.id);
  console.log(numberid);
  let user;

const [user7, setUser7] = useState([])



  useEffect(() => {
    user = axios.get(`http://localhost:8080/accountant/getdata/${numberid}`).then((res)=>{
    console.log(res)
      setUser7(res.data)
      console.log(user7)
  })
  }, [])
    
  return(
<div>
  <table className="table">
  <tr>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile No.</th>
        <th scope="col">Role</th>
        <th scope="col">flat No</th>
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
      <td>{current.flatNo}</td>
      </tr> 
      </>
    )
  })
}
     
</table>
</div>


  )
}
export default GetdataAccounts;