import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const BoxItem = styled(Box)(
  ({ theme }) => `
  height: 450px;
  background-color: rgba(18,18,18,0.8);
  box-shadow: 0px 3px 7px 0px rgb(0 0 0 / 35%);
  border-radius: 4px;
  opacity: 0.9;
  position: relative;
        `
);

const BoxImage = styled(Box)(
  ({ theme }) => `
  margin: 20px auto;
  overflow: hidden;
  width: calc(100% - 40px);
`
);

const Title = styled(Typography)(
  ({ theme }) => `
  font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 34px;
    color: #fefefe;
    padding: 0 17px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    white-space: normal;
    max-height: 70px;
    margin: 10px 0;
`
);
const Description = styled(Typography)(
  ({ theme }) => `
  display: inline-block;
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  padding: 0 17px;
  max-height: 88px;
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
`
);
const Recomment = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`
);
function HotNews() {
  return (
    <Box
      height={700}
      sx={{
        background: `url(https://genshin.hoyoverse.com/_nuxt/img/29770c4.jpg)`
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '146px',
            width: '100%',
            height: '700px'
          }}
        >
          {[...Array(3)].map((e, i) => (
            <BoxItem
              width={'calc(100% / 3 - 15px)'}
              sx={{
                '&:hover img': {
                  opacity: '1',
                  transform: 'scale(1.2)'
                }
              }}
            >
              <Link to="/" style={{ textDecoration: ' none' }}>
                <BoxImage
                  sx={{
                    '& img': {
                      transition: 'all 0.5s 0s ease',
                      objectFit: 'cover'
                    }
                  }}
                >
                  <img
                    src="https://webstatic-sea.hoyoverse.com/upload/contentweb/2022/04/22/161389411487772eb2d8e453e3786e83_2274460365270802065.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </BoxImage>
                <Title variant="h3">
                  Web Event "Journey With a Gentle Breeze" Now Online: Take part
                  to obtain Primogems and accompany Klee on an adventure in
                  Inazuma!
                </Title>
                <Description>
                  The limited-time web event "Journey with a Gentle Breeze" is
                  now available.
                </Description>
              </Link>
              <Recomment>
                <span
                  style={{
                    display: 'inline-block',
                    color: '#808080'
                  }}
                >
                  Apr 22, 2022
                </span>
                <span style={{ color: '#9c3' }}>Events</span>
              </Recomment>
            </BoxItem>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HotNews;
