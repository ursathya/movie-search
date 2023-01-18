 import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//import { getMovieSynopses } from "./Actions/homelistAction";

function MoviePlot(){

    const story = useSelector(state => state.Movies.about.story);
    const movieImg = useSelector(state => state.Movies.about.poster);
    const movieName = useSelector(state => state.Movies.about.title);
    const SearchResult = useSelector(state => state.Movies.data.slice(0,4)) 

         const [content,setcontent] = useState('');


    useEffect(
        () =>{
            // console.log(story);
            console.log(movieImg,'poster url')
            setcontent(story)
        },[]
    )
    
    return(
        <div className="moviePlot">

            <h2 style={{textAlign:'center'}}>More about Movie</h2>
            {content !==''?  <div ><img src={movieImg} alt='poster' className='images' /> <br></br>
            <h3>{movieName}</h3>
            <button className="nowBtn">Watch now</button>{'\u00a0\u00a0'}  <button className="laterBtn">Watch Later</button> <br></br><br></br> { content.slice(0,2000)} 
            <br></br></div>: <h3>Not selcted any movie to view Movie Plot </h3> }
        <>
        <div className='suggested'>
            <h3 style={{textAlign:'left'}}>similar movies</h3>
            <ul>
            {   SearchResult.length > 0? SearchResult.map((films,i) =>  films.image ?<li key={i} className='suggestlist'> <br></br>
        {<img src ={films.image.url} alt={'poster'}  className='suggestedimages' />} <br></br>{films.title.slice(0,20)} <br></br>
       <button
        // onClick={() => getsynopses (films.id,films.image.url,films.title)} className='knowbtn'
       >play now</button></li> :<></>)  : <></>}
       </ul>
        </div>
        </>
        </div>


            

        
            
      
    )
}
export default MoviePlot;