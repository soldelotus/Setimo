import React from 'react';
import './App.css';
import videosData from './Video';
 
const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
      ))}
    </div>
  );
};
 
function VideosPage() {
  return (
    <div className='container-videos'>
      <h1>Vídeos do YouTube</h1>
      <VideoList videos={videosData} />
    </div>
  );
}
 
export default VideosPage;
 