import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import styles from './Destination.module.css';

export default function Destination({ PLACES, onClose, selectedValue, open }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      className={styles.container}
      onClose={handleClose}
      open={open}
      BackdropProps={{ invisible: true }}
    >
      <List sx={{ pt: 0 }} className={styles.lists}>
        {PLACES.map(place => (
          <ListItem
            className={styles.listing}
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
