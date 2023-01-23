import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/YoutubeApi";
import  VideoList from "./VideoList"
import Videodetailes from "./Videodetailes";

class App extends React.Component {
        state={videos:[], selectedVideo:null}

  onTermSubmit =async term =>{
  const respone=await   youtube.get('/search',{         //to access youtubr api
         params: {
          q:term,
              
         }
         
    })
     this.setState({videos:respone.data.items})
    

  };

   onVideoSelect=video=>{
       this.setState({selectedVideo:video})
   }


 
  

  render() {
       return (
          <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            {/* video is selsected vedeo video */}
            <Videodetailes video={this.state.selectedVideo} />
            {/* videos collection of cideos */}
            <VideoList onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}/>  /
          </div>
       )
  }
}

export default App;

