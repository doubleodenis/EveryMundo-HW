import React from 'react'
import {AppBar, Toolbar, Typography, Link} from '@material-ui/core'
const CustomNavbar = () =>
{
    return (
      <AppBar position="static" color='default'>
        <Toolbar variant="dense">
          
          <Typography 
          variant="title" 
          color="primary" 
          style={{fontFamily: "segoe ui,serif,helvetica", padding:"10px 20px"}}>
            EveryMundo
          </Typography>

          <Typography 
          variant="subtitle1" 
          color="primary" 
          style={{fontFamily: "segoe ui,serif,helvetica", padding:"10px 20px"}}>
            <Link href="/">
              Flights
            </Link>
          </Typography>

          <Typography 
          variant="subtitle1" 
          color="primary" 
          style={{fontFamily: "segoe ui,serif,helvetica", padding:"10px 20px"}}>
            <Link href="/">
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default CustomNavbar;