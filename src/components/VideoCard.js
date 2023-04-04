import React from 'react';

const VideoCard = ({ ele }) => {

    if( ele === undefined ){
        return 
    }
    
    const { snippet , statistics } = ele;

    const{thumbnails , title , channelTitle } = snippet ;

    const{viewCount  } = statistics ;
    // , publishedAt 
    return (

        <div className=' m-4 w-64 rounded-xl  flex flex-col items-start  shadow-lg '>

            <img className='shadow-lg h-30 w-100% mx-auto text-2xl rounded' src={ thumbnails?.high?.url} alt="img" />

            <h2 style={{ padding: '4px', color: "black", backgroundColor: "white", borderRadius: 10, wordBreak: 'break-word', width: '250px', textAlign: 'start' , marginTop:'2px' }}>{title}</h2>
            <h3 >{channelTitle }</h3>
            <h5 >{viewCount } views </h5>
        
        </div>
    )
}

export default VideoCard
