import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import '../App.css'

export default function StationDetails(props) {
  const { onClose, open, station } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className='dialog-title-container'>
        Station Details 
        <PedalBikeIcon className='bike-icon' color="success" fontSize='large'/>
      </DialogTitle>
      <Box className='dialog-details-container'>
        <Typography>
          <b>Name:</b> {station.name}
        </Typography>
        <br></br>
        <Typography>
          <b>Address:</b> {station.address}
        </Typography>
        <br></br>
        <Typography>
          <b>Capacity:</b> {station.capacity}
        </Typography>
        <br></br>
        <Typography>
          <b>Cross Street:</b> {station.cross_street}
        </Typography>
        <br></br>
        <Typography>
          <b>Virtual?:</b> {station.is_virtual_station?'true':'false'}
        </Typography>    
      </Box>
    </Dialog>
  );
}

StationDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  station:PropTypes.object.isRequired
};
