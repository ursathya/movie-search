 //import axios from "axios";
// import { useEffect, useState } from "react";

// function CheckApi(){
// const [moviesList,setmoviesList] =useState('');

// useEffect(
//     () => {
// const options = {
//   method: 'GET',
//   url: 'https://imdb8.p.rapidapi.com/auto-complete',
//   params: {q: 'Baahubali'},
//   headers: {
//     'X-RapidAPI-Key': '2496b506f7msh9e3cccb76bd2bc3p1d7e0cjsnbb1fee46eee4',
//     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'}
// }

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     if(response.data.d.length > 0){
//         setmoviesList(response.data.d);
//         if(moviesList.length > 1){
//             console.log('the seaarch API',moviesList)
//         }
//     }
// }).catch(function (error) {
// 	console.error(error);
// });
// })

// return (
//         <div>
//             <h3>api data</h3>
//             <h3>abcd</h3>
//         </div>
//     )
// }

// export default CheckApi

//const axios = require("axios");
import axios from "axios";
function searchMovies(){
const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/v2/find',
  params: {title: 'game of', limit: '20', sortArg: 'moviemeter,asc'},
  headers: {
    'X-RapidAPI-Key': '2496b506f7msh9e3cccb76bd2bc3p1d7e0cjsnbb1fee46eee4',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

return(
    <div>
        <h3>Movies by search</h3>
    </div>
)
}
export default searchMovies;