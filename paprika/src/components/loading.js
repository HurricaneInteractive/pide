import React from 'react'
// import Lottie from 'react-lottie'
import ReactBodymovin from 'react-bodymovin'
import animation from '../content/loading.json'
// import * as animationData from '../content/loading-zoosta.json'

const Loading = () => {
    const bodymovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: animation
    }
    return (
        <div className="loading_animation">
            <ReactBodymovin options={bodymovinOptions}/>
        </div>
    )
}

export default Loading