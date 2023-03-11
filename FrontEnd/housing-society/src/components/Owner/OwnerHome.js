import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OwnerHome=()=>{
    let id = useParams();
    let numberid = parseInt(id.id);
    console.log(numberid);
    let user, users;
  
   return (
   <>

<div class="col-md-12 text-center display-2">
      <div>
        <Link to={`/pendingrequestowner/${numberid}`}>
          <button type="button" className="btn btn-primary btn-lg ">
            Pending Request
          </button>
        </Link>
      </div>
      <div>
        <Link to={`/addcomplaintowner/${numberid}`}>
          <button type="button" className="btn btn-secondary btn-lg ">
            Add Complaint
          </button>
        </Link>
      </div>
      <div>
        <Link to={`/showcomplaintowner/${numberid}`}>
          <button type="button" className="btn btn-secondary btn-lg ">
          Show Complaint
          </button>
        </Link>
      </div>
      <div>
        <Link to={`/paymaintainanceowner/${numberid}`}>
          <button type="button" className="btn btn-secondary btn-lg ">
         Pay Maintainance
          </button>
        </Link>
      </div>

    </div>
    </>
   )
}
export default OwnerHome;