import React from 'react'
import './Videoitem.css'

 const VideoItem=({video})=> {
  return (
    <div className='video-item item'>
      <img className='ui image ' src={video.snippet.thumbnails.medium.url} />
        
        <div className='content'>
          <div className='header'>
          {video.snippet.title}
          </div>
        </div>
    </div>
  )
}

export default VideoItem
