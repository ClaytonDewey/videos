import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return (
    <div>
      <p>{videos.length}</p>
      <VideoItem />
    </div>
  );
};

export default VideoList;
