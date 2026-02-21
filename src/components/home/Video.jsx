import React from 'react'


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video 
        className='h-full w-full object-cover' 
        autoPlay 
        loop 
        muted 
        playsInline
        src="/video.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
