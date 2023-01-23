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
     console.log(respone.data)

  }


 
  

  render() {
    return (
      <div className="ui container">
        <SearchBar  onFormSubmit ={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>    
        <div className="ui grid">  
          <div className="ui row">
            {/* <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div> */}
            <div className="five wide column">
              {/* <VideoList
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


//api key AIzaSyCiUI8RH4_j4aW7QAaevqh3BchjjsUVmtg

// AIzaSyBJMuMyz2xsl8Nx7wmz0NKOMCtrhkhNIRc api