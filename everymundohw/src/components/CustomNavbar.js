import React from 'react'
//import {Navbar, Button, Alignment} from '@blueprintjs/core'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
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