import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import poster from 'src/assets/videos/play.png';
import play from 'src/assets/videos/playbutton.png';
import close from 'src/assets/images/close.png';

import video from 'src/assets/videos/3e78e80.mp4';

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
    background: #fcf9fe;
    overflow:hidden;
  `
);

const PostBox = styled(Box)(
  ({ theme }) => `
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100vh;
    left: 50%;
    width: 100%;
    min-height: 280px;
    transform: translate(-50%, -340px);
    `
);

const BoxEntry = styled(Box)(
  ({ theme }) => `
    width: 356px;
    height: 76px;
    background: url(${poster})
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
    font-size: 30px;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 10px rgb(114 71 21 / 68%), 0 0 10px rgb(114 71 21 / 68%);
    margin: 32px auto 27px;
      `
);
const ButtonRedirect = styled(Button)(
  ({ theme }) => `
        width:186px;
        height:62px;
        background-color: rgba(17,17,17,0.75);
        margin: 0 15px;
        border: 1px solid #ffffff9c;
        color: #fff;
        font-size: 20px;
        display: flex;
        font-weight:600;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        `
);

function ModuleVideo() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <BgWrap>
      <video autoPlay src={video} muted style={{ width: '100vw ' }} />
      <PostBox>
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
            onClick={() => {
              setShow(true);
            }}
          >
            play
          </PlayButton>
        </BoxEntry>
        <Title>
          Tempest Genshin nơi cung cấp tài khoản, nạp game an toàn tại Việt Nam
        </Title>
        <Box sx={{ display: 'flex' }}>
          <ButtonRedirect>Page</ButtonRedirect>
          <ButtonRedirect>Facebook</ButtonRedirect>
          <ButtonRedirect>Group</ButtonRedirect>
        </Box>
      </PostBox>
      <Box
        sx={{
          display: `${show ? 'block' : 'none'}`,
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 10000
        }}
        onClick={() => {
          setShow(false);
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '475px',
            textAlign: 'center'
          }}
        >
          <iframe
            src={
              show
                ? 'https://drive.google.com/file/d/1gKNQZKReMVcUeh5udxumDgF12q9qxJAo/preview'
                : ''
            }
            width="840"
            height="480"
            allow="autoplay"
            title="video"
            style={{ zIndex: 10001 }}
          ></iframe>
          <img
            src={close}
            alt=""
            style={{
              position: 'absolute',
              marginLeft: ' 25px',
              marginTop: '10px',
              cursor: 'pointer'
            }}
            onClick={() => {
              setShow(false);
            }}
          />
        </Box>
      </Box>
    </BgWrap>
  );
}

export default ModuleVideo;
