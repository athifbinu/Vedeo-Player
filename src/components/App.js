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
     this.setState({
      videos:respone.data.items,
      selectedVideo:respone.data.items[0]   // to remove currently playing vedeo at that search tyme 
    
    })
    

  };

   onVideoSelect=video=>{
       this.setState({selectedVideo:video})
   }


 
  

  render() {
       return (
          <div className="ui container">
  
            <SearchBar onFormSubmit={this.onTermSubmit}/>   
            <div className="ui grid">
             <div className="ui row">

              <div className="eleven wide column">
                  {/* video is selsected vedeo video */}
                 <Videodetailes video={this.state.selectedVideo} />
              </div>

              <div className="five wide column">
                 {/* videos collection of cideos */}
                <VideoList onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}/>  
              </div>

               </div>  
            </div>  
          </div>
       )
  }
}

export default App;

