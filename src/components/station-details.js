import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
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
      <div className='dialog-details-container'>
        <div>
          <b>Name:</b> {station.name}
        </div>
        <br></br>
        <div>
          <b>Address:</b> {station.address}
        </div>
        <br></br>
        <div>
          <b>Capacity:</b> {station.capacity}
        </div>
        <br></br>
        <div>
          <b>Cross Street:</b> {station.cross_street}
        </div>
        <br></br>
        <div>
          <b>Virtual?:</b> {station.is_virtual_station?'true':'false'}
        </div>    
      </div>
    </Dialog>
  );
}

StationDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  station:PropTypes.object.isRequired
};
