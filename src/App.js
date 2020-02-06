import React from 'react';
import axios from 'axios';



class App extends React.Component{
  //class react component dont have return (cause it isn't function)
  //"render" have.
  state = {
   isLoading: true,
   movies:[]
  };
  getMovies= async () =>{
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }
  componentDidMount(){
   this.getMovies();
  }
  render(){
    const{isLoading} =this.state;
    return <div>{isLoading ? "Loading..":"We are ready"}</div>;
  }
  
}
export default App;
 