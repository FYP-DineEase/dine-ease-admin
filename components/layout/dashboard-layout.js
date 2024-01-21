import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState, userActions } from '@/store/user/userSlice';

// Components
import withAuth from '../auth/with-auth';

//Styles
import { Avatar, Box, List, ListItem, ListItemIcon } from '@mui/material';
import {
  DrawerIcon,
  CustomDrawer,
  DrawerListText,
  DrawerListButton,
  DrawerListItem,
  Text,
  FlexContainer,
} from '../UI';

// Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LogoutIcon from '@mui/icons-material/Logout';

// Utils
import { dashboardLinks } from '@/utils/constants';

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(selectUserState);

  const value = router.asPath.split('/');
  const [selectedPage, setSelectedPage] = useState(value[value.length - 1]);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(userActions.logout());
    localStorage.clear();
  };

  const handleNavDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <CustomDrawer variant="permanent" open={open} onClose={handleNavDrawer}>
        <DrawerIcon onClick={handleNavDrawer} open={open}>
          {open ? (
            <KeyboardArrowLeftIcon color="primary" fontSize="large" />
          ) : (
            <KeyboardArrowRightIcon color="primary" fontSize="large" />
          )}
        </DrawerIcon>
        <FlexContainer
          sx={{
            gap: 2,
            flexDirection: 'column',
            mt: 3,
            display: { xs: open ? 'flex' : 'none', md: 'flex' },
          }}
        >
          <Avatar
            alt="admin-avatar"
            src={
              user.avatar &&
              getFileUrl(
                process.env.NEXT_PUBLIC_RESTAURANT_BUCKET,
                `${user.id}/avatar/${user.avatar}`
              )
            }
            sx={{ height: 120, width: 120 }}
          />
          <Text variant="subHeader" fontWeight={500}>
            {user.name}
          </Text>
        </FlexContainer>
        <List sx={{ margin: 'auto 0' }}>
          {dashboardLinks.map((item) => (
            <Link href={`/dashboard/${item.id}`} key={item.id}>
              <DrawerListItem>
                <DrawerListButton
                  selected={selectedPage.includes(item.id)}
                  onClick={() => setSelectedPage(item.id)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <DrawerListText primary={item.text} open={open} />
                </DrawerListButton>
              </DrawerListItem>
            </Link>
          ))}
        </List>
        <List sx={{ mt: 'auto', mb: 3 }}>
          <ListItem>
            <DrawerListButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <DrawerListText primary="Logout" open={open} />
            </DrawerListButton>
          </ListItem>
        </List>
      </CustomDrawer>
      {children}
    </React.Fragment>
  );
};

export default withAuth(DashboardLayout);
