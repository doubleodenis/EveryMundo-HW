import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
const CustomNavbar = () =>
{
    return (
      <AppBar position="static" color='default'>
        <Toolbar variant="dense">
          
          <Typography variant="h3" color="inherit">
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default CustomNavbar;