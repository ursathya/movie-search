import axios from "axios";
//import { useEffect } from "react";

import './login.css';
import { homeMovies ,emptysearch ,getMovieSynopses} from "./Actions/homelistAction";
import { useDispatch ,useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {}
function HomePage(){
     var nav=useNavigate();
    const SearchResult = useSelector(state => state.Movies.data) 

    useEffect(
     () => {console.log(SearchResult,'map items');}
    )

    const dispatch =useDispatch();
    const [searchTitle,setsearchTitle] = useState('');
   // const [ emptysearch,setemptysearch ] =useState('')
    const [pagenumb,setpagenumb] =useState(1);

    const searchByTitle =()=>{

        if(searchTitle!==''){
          dispatch(emptysearch());
          setpagenumb(1);
        dispatch(homeMovies(searchTitle,1));
        }
    }

    const nextPage =()=>{

      if(searchTitle!==''){

        dispatch(homeMovies(searchTitle,pagenumb+1));
        setpagenumb(pagenumb + 1);
        
      }
  }

      const getsynopses=(titleId,posterId,movititle)=>{
        
        console.log(titleId.slice(7,16),'sliced','title');
        console.log(posterId);

        // tt6468680
        //tt0944947 -d
        const options = {
          method: 'GET',
          url: 'https://imdb8.p.rapidapi.com/title/get-synopses',
          params: {tconst: 'tt0944947' },
          // titleId.slice(8,16)
          headers: {
            'X-RapidAPI-Key': '06ad5e9d59msh5c89f24ff9db8b1p153e38jsn586b3144c076',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
         // console.log(response.data[0].text,'synapsis id');

         // console.log(response.data.text,'hsjfsdfd');

            if(response){
              console.log(response,'synapsis conteent');
                dispatch(getMovieSynopses(response.data[0].text,posterId,movititle));
                 nav('/plot')
            }
            else{
              console.log('synopses not available');
            }
        }).catch(function (error) {
          console.error(error);
        });
      }
      
    return(

    <div className="SearchBar">
      <h3>Watch your Favourite Movies </h3>
      <br></br><br></br>
        <input type='text' value={searchTitle} placeholder='Search....' onChange={(event) => setsearchTitle(event.target.value)} className="inputSearch"></input>
        {'\u00a0\u00a0'}<button onClick={searchByTitle} className='searchBtn'>Search</button><br></br>
          <ul>
    {   SearchResult.length > 0? SearchResult.map((films,i) =>  films.image ?<li key={i}> <br></br>
        {<img src ={films.image.url} alt={'poster'}  className='images' />} <br></br>{films.title.slice(0,20)} <br></br>
       <button onClick={() => getsynopses (films.id,films.image.url,films.title)} className='knowbtn'>play now</button></li> :<></>)  : <></>}
       </ul>
       {/* ()=>{nav('/plot')} */}
      {SearchResult.length > 0 ? <button onClick={nextPage } className='nextButton'>See more </button> :<></> }
      </div>
             
    )
}
export default HomePage;

// https://www.imdb.com/video/vi3217212697/?listId=ls053181649?ref_=ext_shr_lnk