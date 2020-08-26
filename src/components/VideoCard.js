import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './VideoCard.css'

function VideoCard({image,title, channel,views, timestamp, channelImage, videoLink}) {
    return (
        <div className="videoCard">
            <a href={videoLink}>
                <img className="videoCard__thumbnail" src={image} alt="" />
            </a>
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <a href={videoLink}><h4>{title}</h4></a>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
