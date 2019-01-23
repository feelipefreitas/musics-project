import styled from 'styled-components';

export const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .80;
    overflow: hidden;
`;

export const Video = styled.video`
    height: 100vh;
    width: 100%;
    object-fit: cover;
`;