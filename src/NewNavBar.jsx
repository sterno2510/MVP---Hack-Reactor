import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const ProfilePicture = styled.img`
  margin: 5px;
  padding-right: 5px;
  border-radius: 50%;

`;

export default function ButtonAppBar({
  user,
  isAuthenticated,
  loginWithRedirect,
  logoutWithRedirect,
  logout,}
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:3000/update', { params: { email: user.email } })
        .then((data) => {
          const tempcount = data.data.visitCount;
          setCount(tempcount);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: '#636c80' }} position="static">
        <Toolbar>
          {isAuthenticated && (
            <>
              <ProfilePicture
                referrerPolicy="no-referrer"
                src={user.picture}
                alt="Profile"
                width="50"
              />
              <p>{user.name}</p>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {`Visits: ${count}`}
              </Typography>
            </>
          )}
          {/* {!isAuthenticated && (
          <Button
            style={{position:"absolute",
            left: "40%"}}
            id="qsLoginBtn"
            color="inherit"
            block
            onClick={() => loginWithRedirect({})}
          >
            Log in
          </Button>
          )} */}
          {isAuthenticated && (
          <Button
            onClick={() => logoutWithRedirect()}
            color="inherit"
          >
            Log Out
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
