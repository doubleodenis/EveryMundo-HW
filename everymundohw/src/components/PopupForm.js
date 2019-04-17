import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button} from '@material-ui/core/';
import '../styling/PopupForm.css'

const PopupForm = (props) =>
{

    return (
        <Dialog
        aria-labelledby="flight-form"
        aria-describedby="show-flight-route-info"
        open={props.open}
        onClose={props.close}
        align="center"
        className="centered"
        >
          <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
            Modal title
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Typography>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>

    )
}

export default PopupForm;