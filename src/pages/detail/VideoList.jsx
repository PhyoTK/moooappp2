import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const videoUrl = "https://tkmovie.cf/1:/m_english/1917_2019/";

const VideoList = props => {

    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <video controls>
              <source src="rabbit320.mp4" type="video/mp4" />
              <source src="rabbit320.webm" type="video/webm" />
              <p>
                Your browser doesn't support HTML video. Here is a
                <a href="rabbit320.mp4">link to the video</a> instead.
              </p>
            </video>

        </div>
    )
}

export default VideoList;
