import './login.css'
import { Provider } from "react-redux";
import store from "./store";
//import NavBar from "./NavBar";
import {BrowserRouter} from 'react-router-dom';
import Login from './login'
import { useState } from 'react';
import NavBar from './NavBar';
function App(props) {
 const [userStatus,setUserStatus] = useState(false);

  const getdata =(checkUser)=>{

    console.log('data from child ',checkUser);
    setUserStatus(checkUser)
  }
  return (
    <Provider store={store}>
        <div>
            <BrowserRouter>
           {  userStatus ===false ? <Login updateinfo={getdata}/> : <NavBar />}
            </BrowserRouter>
        </div>
     </Provider>
  );
}

export default App;
