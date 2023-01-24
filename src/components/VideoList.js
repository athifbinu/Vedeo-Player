import React from 'react'
import VideoItem from './VideoItem'

const VideoList=({videos, onVideoSelect})=> {

    const renderList=videos.map(video =>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
  return (
    <div className='ui relaxed divided list'>
        {  renderList}
    </div>
  )
}

export default VideoList


//snpppet is detales of that vedeo in api

//vedeo map bundle colection passing vedeo item
