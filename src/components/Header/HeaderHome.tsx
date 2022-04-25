import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import logo from 'src/assets/images/logo-nho-1.png';
import { Link } from 'react-router-dom';
const HeaderWrapper = styled(Box)(
  ({ theme }) => `
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display:flex;
  width: 100%;
  min-width: 1280px;
  height: 66px;
  background-color: rgba(17,17,17,0.75);
  box-shadow: 0 3px 7px 0 rgb(0 0 0 / 35%);
  align-items:center;
  font-size: 14px;
  `
);

function HeaderHome() {
  return (
    <div>
      <HeaderWrapper>
        <Box
          width={315}
          sx={{ '& img': { marginLeft: '22px', objectFit: 'contain' } }}
        >
          <img src={logo} alt="" width="100%" height="60" />
        </Box>
        <Box width="calc(100% - 315px)">
          <Box
            sx={{
              display: 'flex',
              '& a': {
                color: '#fff',
                margin: ' 0 15px',
                textDecoration: 'none',
                '&:hover': {
                  textShadow:
                    '0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff'
                }
              }
            }}
          >
            <Typography>
              <Link to="/">Trang Chủ</Link>
            </Typography>
            <Typography>
              <Link to="/tin-tuc">Tin Tức</Link>
            </Typography>
            <Typography>
              <Link to="/danh-sach-tai-khoan">Danh sách tài khoản </Link>
            </Typography>
            <Typography>
              <Link to="/su-kien">Sự Kiện</Link>
            </Typography>
            <Typography>
              <Link to="/goods-anime">Goods Anime</Link>
            </Typography>
            <Typography>
              <Link to="/nap-vi">Nạp Ví </Link>
            </Typography>
            <Typography>
              <Link to="/nap-nguyen-thach">Nạp Nguyên Thạch</Link>
            </Typography>
          </Box>
        </Box>
      </HeaderWrapper>
    </div>
  );
}

export default HeaderHome;
