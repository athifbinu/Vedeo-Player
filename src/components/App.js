import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/YoutubeApi";
import  VideoList from "./VideoList"

class App extends React.Component {
        state={videos:[]}

  onTermSubmit =async term =>{
  const respone=await   youtube.get('/search',{         //to access youtubr api
         params: {
          q:term,
              
         }
         
    })
     this.setState({videos:respone.data.items})
    

  };


 
  

  render() {
       return (
          <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
          </div>
       )
  }
}

export default App;

