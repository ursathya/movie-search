import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
function Account(props){
    const user = useSelector( state =>state.Movies.profile.userName);
    const userEmail =  useSelector( state =>state.Movies.profile.userEmail);
    const nav = useNavigate();

    const userLogout=()=>{
        // props.updateinfo(false);
        nav('/');
        window.location.reload () 
    }

    return(
        <div className="userAccount">
            <h3 style={{color:'green'}}>Accound Details</h3>
            Name : {user} <br></br><br></br>
            Email : {userEmail}<br></br><br></br>
            <button className='logoutbtn' onClick={ userLogout }>LogOut</button><br></br>
         </div>
    )
}
export default Account;