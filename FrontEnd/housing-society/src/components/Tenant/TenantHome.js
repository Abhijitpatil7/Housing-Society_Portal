import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apt from '../../images/apt.jpg'

const TenantHome=()=>{

    let id = useParams();
    let numberid = parseInt(id.id);
    console.log(numberid);
 
 
return (
    <>
    <div class="col-md-12 text-center display-2 bg-image" style={{backgroundImage: `url(${apt})`,height: "100%" ,backgroundPosition:"center" }}>
      <div>
        <Link to={`/addcomplainttenant/${numberid}`}>
          <button type="button" className="btn btn-primary btn-lg ">
          Add Complaint
          </button>
        </Link>
      </div>
      <div>
        <Link to={`/showcomplainttenant/${numberid}`}>
          <button type="button" className="btn btn-primary btn-lg ">
         Show  Complaint
          </button>
        </Link>
      </div>
      </div>
    
    </>
)

}
export default TenantHome;