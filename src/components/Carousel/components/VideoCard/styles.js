import styled from 'styled-components';

const VideoCardContainer = styled.a`
  /* border: 2px solid; */
  border-radius: 10px;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 384px;
  width: 384px;
  height: 215px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0px;
  transition: .3s;
  margin: 32px 5px;

  &:hover,
  &:focus {
    transform: scale(1.3);
    box-shadow: 0 4px 16px var(--shadowColor);
    z-index: 5;
  }
  

  > span {
    visibility: hidden;
  }

  &:hover,
  &:focus {
    > span {
    visibility: visible;
    text-align: center;
    background-color: rgba(0,0,0, 0.7);
    font-size: 16px;
    color: white;
    width:100vh;
    padding: 15px;
    transition-delay: .2s;
  }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

`;

export default VideoCardContainer;
