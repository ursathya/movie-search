import axios from "axios";


//Login Action

export const userAction =( userdetails ) => (dispatch) =>{

  dispatch(
    {
      type :'USER_LOGIN',
      profile:{
        userEmail : userdetails,
        userName : 'Satheesh kumar Reddy'
      }
      }
  )
}


export const homeMovies= (movietitle,pagenumber) => (dispatch) => {  
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/find',
    params: {title: movietitle, limit: '10', sortArg: 'moviemeter,asc' ,paginationKey:pagenumber},
    headers: {
      'X-RapidAPI-Key': '06ad5e9d59msh5c89f24ff9db8b1p153e38jsn586b3144c076',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
    axios.request(options).then(function (response) {

      console.log(response.data.results,'search api response');
      if(response.data.result !==''){
      dispatch(
        {
          type:'SEARCHED_MOVIE',
          movieList:response.data.results
        }

      )}else{
          dispatch({
            type:'NO_Result',
            message:'Content not Fount'
      })
      }
    }).catch(
      function (error){
        console.log(error);
      }
    )
}

export const emptysearch = () => (dispatch) =>{
  dispatch(
    {
      type:'EMPTY_SEARCH',
      movieList:[]
    })
} 

 export const getMovieSynopses =(data,posterurl,title) => (dispatch) => {
  dispatch(
    {
      type:'GET_SYNOPSES',
      about : {story:data,
                poster:posterurl,
                title :title
      } 
    }
  )
 }