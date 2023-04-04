import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [video, setVideo] = useState([]);

  useEffect(() => {

    const getIt = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideo(json.items);
      // console.log(json.items);
    }

    getIt();

  }, []);
 

  if( video.length === 0 ){
    return 
  } 

  return (
    <div className='flex flex-wrap'>

      {
        video.map((info) => {
          return <Link  to={"/watch?v="+info.id} ><VideoCard ele={info} key={info.id} /></Link>
        })
      }
      <VideoCard info={video}/>
    </div>
  )
}

export default VideoContainer;
