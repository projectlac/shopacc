import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Box, Button, Hidden, Popover, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import jwt_decode from 'jwt-decode';
import { useContext, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from 'src/App';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: normal;
        font-size:16px;
        color: ${theme.palette.primary.main};
        display: block;
`
);

function HeaderUserbox() {
  const { handleLoginOut } = useContext(AuthContext);

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const nav = useNavigate();
  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSignOut = () => {
    console.log('bye');
  };
  const token = localStorage.getItem('access_token');
  const getUserNameFromToken = useMemo(() => {
    var decoded = jwt_decode(token) as any;

    if (decoded) return decoded.email;
  }, [token]);

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body2">
              Hello, {getUserNameFromToken}
            </UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ArrowDropDownIcon sx={{ ml: 1 }} color="primary" />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <UserBoxText>
            <UserBoxLabel variant="body2">
              <span
                style={{
                  color: 'rgb(182, 186, 207)',
                  fontWeight: 500,
                  fontSize: '12px'
                }}
              >
                User:{' '}
              </span>
              {getUserNameFromToken}
            </UserBoxLabel>
          </UserBoxText>
        </MenuUserBox>

        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={handleSignOut}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
