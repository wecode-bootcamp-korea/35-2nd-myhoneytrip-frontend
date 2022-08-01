import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';

import './Destination.css';

export default function Destination(props) {
  const { PLACES, onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      BackdropProps={{ invisible: true }}
    >
      <List sx={{ pt: 0 }}>
        {PLACES.map(place => (
          <ListItem
            className="ListItem"
            button
            onClick={() => handleListItemClick(place)}
            key={place}
          >
            <ListItemText primary={place} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

Destination.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
