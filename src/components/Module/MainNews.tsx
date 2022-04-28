import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from 'src/assets/images/newsDes/LeftArrow.png';
import RightArrow from 'src/assets/images/newsDes/RightArrow.png';
import BGNews from 'src/assets/images/newsDes/BGNews.png';
import BGNewsTop from 'src/assets/images/newsDes/BGNewsTop.png';
import BGNewsBottom from 'src/assets/images/newsDes/BGNewsBottom.png';
import Paimon from 'src/assets/images/newsDes/Paimon.png';
import HotNews from 'src/assets/images/newsDes/HotNews.jpg';
import Clip from 'src/assets/images/newsDes/Clip.png';

const TitleHighlight = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '50px',
  textAlign: 'center',
  color: ' #fff',
  fontSize: '30px',
  '&:before': {
    position: 'absolute',
    content: '""',
    background: `url(${LeftArrow})`,
    backgroundSize: 'contain',
    height: '35px',
    width: '450px',
    top: 0,
    left: 0,
    backgroundRepeat: 'no-repeat'
  },
  '&:after': {
    position: 'absolute',
    content: '""',
    background: `url(${RightArrow})`,
    backgroundSize: 'contain',
    height: '35px',
    width: '450px',
    top: 0,
    right: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
  }
});

const NewBox = styled(Box)({
  position: 'relative',
  background: `url(${BGNews})`,
  minHeight: '750px',
  backgroundSize: '100%',
  padding: '0 50px',
  '&:before': {
    position: 'absolute',
    content: '""',
    background: `url(${BGNewsTop})`,
    height: '55px',
    width: '100%',
    top: '-55px',
    left: 0,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  },
  '&:after': {
    position: 'absolute',
    content: '""',
    background: `url(${BGNewsBottom})`,
    backgroundSize: '100%',
    height: '35px',
    width: '100%',
    bottom: '-35px',
    right: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
  }
});
const PaimonImage = styled(Box)(
  ({ theme }) => `
    width: 541px;
    height: 723px;
    background: url(${Paimon});
    position: absolute;
    top: -150px;
    z-index: 9;
    right: -66px;
    background-size: 100%;
    background-repeat: no-repeat;
      `
);
const HottestNews = styled(Box)(
  ({ theme }) => `
  width: 75%;
  height: auto;
      `
);
function MainNews() {
  return (
    <Box pb={5}>
      <Box pt={5} pb={2}>
        <TitleHighlight mb={10}>Tin chính</TitleHighlight>
        <NewBox>
          <PaimonImage />
          <HottestNews>
            <img
              src={HotNews}
              alt=""
              width={'100%'}
              style={{
                border: '2px solid #b68967',
                borderRadius: '32px',
                padding: '5px'
              }}
            />
            <Typography sx={{ fontSize: '27px', mt: 2 }}>
              <Link to="/" style={{ color: '#B68967', textDecoration: 'none' }}>
                [28.04.2022] Lịch livestream phiên bản 2.7
              </Link>
            </Typography>
          </HottestNews>

          <Grid container md={12} mt={8}>
            {[...Array(3)].map((d, i) => (
              <Box sx={{ display: 'flex' }} mb={2} key={i}>
                <Grid item md={4}>
                  <Box>
                    <img
                      src={Clip}
                      alt=""
                      width={'100%'}
                      style={{
                        border: '2px solid #C9AD97',

                        padding: '5px'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Box px={3}>
                    <Typography sx={{ fontSize: '20px', mt: 2 }}>
                      <Link
                        to="/"
                        style={{ color: '#B68967', textDecoration: 'none' }}
                      >
                        [28.04.2022] Lịch livestream phiên bản 2.7
                      </Link>
                    </Typography>

                    <p>
                      <Link
                        to="/"
                        style={{ color: '#000', textDecoration: 'none' }}
                      >
                        {`Xem thêm>>`}
                      </Link>
                    </p>
                  </Box>
                </Grid>
              </Box>
            ))}
          </Grid>
        </NewBox>
      </Box>
    </Box>
  );
}

export default MainNews;
