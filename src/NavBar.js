import HomePage from './home';
import {Link, Route,Routes} from 'react-router-dom';

import './login.css'
import MoviePlot from './moviePlot';
import Account from './account';
function NavBar(){
    return (
        <div>
            <ul className='navList'>
                <li className='navOptions'> 
                <Link to ='/home' state={{textdecoration:'none'}}>
                     Home </Link> 
                </li>
                <li className='navOptions'>
                {/* <Link to='/plot'> */}
                    Language
                   {/* </Link> */}
                </li>
                <li className='navOptions'>
                <Link to='/genere'>
                    Genere </Link>
                </li>
                <li className='navOptions'>
                <Link to='/account' >
                    Account</Link> 
                </li>
            </ul>

            <Routes>
                    <Route path='/home' element={ <HomePage />}></Route>
                    <Route path='/plot' element={ <MoviePlot />}></Route>
                    <Route path='/genere' element={<></>}></Route>
                    <Route path='/account' element={ <Account />}></Route>
            </Routes>

            <br></br>

        </div>
    )
}
export default NavBar;