import React from 'react'
import VideoItem from './VideoItem'

const VideoList=({videos })=> {

    const renderList=videos.map(video =>{
        return <VideoItem/>
    })
  return (
    <div className='ui relaxed divided list'>
        {  renderList}
    </div>
  )
}

export default VideoList


//snpppet is detales of that vedeo in api
