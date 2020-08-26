import React from 'react'
import './RecommendedVideo.css'
import VideoCard from "./VideoCard"

function RecommendedVideo() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideo__videos">
                <VideoCard 
                    image="https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB6yE1WpYFAzqxZsOQ_iOCgftVphA"
                    title="React JS Crash Course"
                    channel="Traversy Media"
                    views="1.2M views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s48-c-k-c0xffffffff-no-rj-mo"
                    videoLink="https://www.youtube.com/watch?v=sBws8MSXN7A"
                    channelLink="https://www.youtube.com/user/TechGuyWeb"/>
                <VideoCard 
                    image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUo6f6PMFUNrF7BX5BOCiSyqVMcg"
                    title="React Tutorial for Beginners [React js]"
                    channel="Programming with Mosh"
                    views="2.4M views"
                    timestamp="2 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s48-c-k-c0xffffffff-no-rj-mo"
                    videoLink="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                    channelLink="https://www.youtube.com/user/programmingwithmosh"/>
                <VideoCard 
                    image="https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDFnnAACOWUzXxtN7MGhP1HNfySEw"
                    title="Learn React JS - Full Course for Beginners - Tutorial 2019"
                    channel="freeCideCano,org"
                    views="1.8M views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s48-c-k-c0xffffffff-no-rj-mo"
                    videoLink="https://www.youtube.com/watch?v=DLX62G4lc44"/>
                <VideoCard 
                    image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
                    title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                    channel="Clever Programmer"
                    views="77,687 views"
                    timestamp="2 weeks ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
                    videoLink="https://www.youtube.com/watch?v=NT299zIk2JY"/>
                <VideoCard 
                    image="https://i.ytimg.com/vi/hQAHSlTtcmY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7dW8xqZ0t2_CCgD753MspdIkujA"
                    title="Learn React In 30 Minutes"
                    channel="Web Dev Simplified"
                    views="156K views"
                    timestamp="10 months ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzlhhukYsdgVeuIspbug5SNo_254oqP9ZyrY2E0=s48-c-k-c0xffffffff-no-rj-mo"
                    videoLink="https://www.youtube.com/watch?v=hQAHSlTtcmY"/>

            </div>
        </div>
    )
}

export default RecommendedVideo
