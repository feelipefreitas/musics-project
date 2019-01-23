import React from 'react';

import { VideoContainer, Video } from '../../styles/components/backgroundVideo';
import { loginVideoPath } from './../../constants/paths';

export default () => (
    <VideoContainer>
        <Video autoPlay muted loop>
            <source src={loginVideoPath} type="video/mp4" />
            Your browser is not supported!
        </Video>
    </VideoContainer>
);
 
