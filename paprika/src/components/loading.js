import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../content/loading.json'

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    return (
        <div classname="loading_component">
            <Lottie
                options={defaultOptions}
            />
        </div>
    )
}

export default Loading