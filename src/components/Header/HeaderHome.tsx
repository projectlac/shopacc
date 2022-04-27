import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import logo from 'src/assets/images/logo-nho-1.png';
import { NavLink } from 'react-router-dom';
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
                margin: ' 0 45px',
                textDecoration: 'none',
                paddingBottom: '6px',
                '&.active': {
                  borderBottom: '3px solid #48A6E2'
                },
                '&:hover': {
                  textShadow:
                    '0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff'
                }
              }
            }}
          >
            <Typography>
              <NavLink to="/" end>
                Trang Chủ
              </NavLink>
            </Typography>
            <Typography>
              <NavLink to="/tin-tuc">Tin Tức</NavLink>
            </Typography>
            <Typography>
              <NavLink to="/mua-tai-khoan">Mua tài khoản </NavLink>
            </Typography>

            <Typography>
              <NavLink to="/nap-tien">Nạp Tiền </NavLink>
            </Typography>
            <Typography>
              <NavLink to="/lien-he">Liên hệ</NavLink>
            </Typography>
          </Box>
        </Box>
      </HeaderWrapper>
    </div>
  );
}

export default HeaderHome;
