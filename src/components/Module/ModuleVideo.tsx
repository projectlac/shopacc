import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import poster from 'src/assets/videos/play.png';
import play from 'src/assets/videos/playbutton.png';
import close from 'src/assets/images/close.png';
import background from 'src/assets/images/Background.png';
import Frame from 'src/assets/images/Frame.png';
import Frame2 from 'src/assets/images/Frame2.png';
import Frame3 from 'src/assets/images/Layer16.png';
import Even from 'src/assets/images/Layer17.png';
import Icon from 'src/assets/images/Layer19.png';

const BgWrap = styled(Box)(
  ({ theme }) => `
    height: 100vh;
    width: 100vw;
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    justify-content: center;
    align-items: center;
    background: url(${background});
    overflow:hidden;
    background-size: cover;

  `
);
const FrameTop = styled(Box)({
  height: 'calc(100vh - 66px)',
  marginTop: '66px',
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'self-end',
  '&::before': {
    background: `url(${Frame})`,
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '150px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    filter: 'drop-shadow(0 0 47px #69e0ff)'
  },
  '&::after': {
    background: `url(${Frame2})`,
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '150px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    filter: ' drop-shadow(0 0 47px #69e0ff)'
  }
});

const PostBox = styled(Box)(
  ({ theme }) => `
  width:875px;
  height:516px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-55%);
  background:url(${Frame3});
  background-repeat: no-repeat;
  background-size: cover;
    `
);

const VideoBox = styled(Box)(
  ({ theme }) => `
  width: 825px;
  height: 465px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
      `
);
const PlayButton = styled(Box)(
  ({ theme }) => `
    position: relative;
    display: block;
    margin: 14px auto 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #fff;
    font-size: 0;
    cursor: pointer;
    outline: none;
    transition: background 0.2s linear;
    
    `
);
const Title = styled(Typography)(
  ({ theme }) => `
  width: 100%;
  text-align: center;
  padding-top: 40px;
  font-size: 25px;
  color: #fff;
  text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      `
);
const ButtonEven = styled(Button)(
  ({ theme }) => `
      
    background: url(${Even});
    color: #fff;
    font-size: 20px;
    display: flex;
    font-weight:600;
    align-items: center;
    justify-content: center;
    background-position: bottom right;
    height: 77px;
    width: 200px;
    background-size: cover;
    padding-top: 15px;
    justify-content: flex-start;
        `
);
const BoxEntry = styled(Box)(
  ({ theme }) => `
    width: 356px;
    height: 76px;
    background: url(${poster});
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    
      `
);
function ModuleVideo() {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const playVideo = () => {
    setIsPlay(true);
    const myVideo = document.getElementById('video') as HTMLVideoElement | null;
    myVideo.play();
    console.log('play');
  };
  const pauseVideo = () => {
    setIsPlay(false);
    const myVideo = document.getElementById('video') as HTMLVideoElement | null;
    myVideo.pause();
    console.log('paus');
  };
  return (
    <BgWrap>
      <FrameTop>
        <PostBox>
          <VideoBox>
            <video id="video" width="825" height="465" onClick={pauseVideo}>
              <source
                src="https://drive.google.com/uc?export=download&id=1gKNQZKReMVcUeh5udxumDgF12q9qxJAo"
                type="video/mp4"
              />
            </video>

            {!isPlay && (
              <BoxEntry>
                <PlayButton
                  sx={{
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      zIndex: '1',
                      width: '28px',
                      height: '28px',
                      transform: 'translate(-50%, -50%)',
                      background: `url(${play})`,
                      backgroundPosition: 'center top'
                    },
                    '&:hover': {
                      background: 'transparent',
                      '&:before': {
                        backgroundPosition: 'center bottom'
                      }
                    }
                  }}
                  onClick={playVideo}
                >
                  play
                </PlayButton>
              </BoxEntry>
            )}

            <Box
              sx={{
                position: 'absolute',
                right: '-211.5px',
                top: '10%'
              }}
            >
              <ButtonEven>
                <img src={Icon} alt="" width={38} /> Zalo
              </ButtonEven>
              <ButtonEven>
                <img src={Icon} alt="" width={38} /> Facebook
              </ButtonEven>
              <ButtonEven>
                <img src={Icon} alt="" width={38} /> Group
              </ButtonEven>
            </Box>
            <Title>
              Tempest Genshin nơi cung cấp tài khoản, <br /> Nạp game an toàn
              nhất Việt Nam
            </Title>
          </VideoBox>
        </PostBox>
      </FrameTop>
    </BgWrap>
  );
}

export default ModuleVideo;
