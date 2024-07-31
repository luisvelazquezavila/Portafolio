import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import './project-modal.css'

export default function ProjectModal({ project }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div 
        onClick={handleClickOpen}
        className="project-card"
      >
        <div className="project-card__img-container">
          <img className="project-card__img" src={project.img} alt={project.title} />
        </div>
        <p className="project-card__title">{project.title}</p>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className='dialog__title' id="alert-dialog-title">
          {project.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className='dialog__content'>
          <DialogContentText sx={{ color: "white" }} id="alert-dialog-description">
            {project.description}
          </DialogContentText>
          <DialogContentText 
            className='project-modal__tags'
            id="alert-dialog-description"
          >
            {
              project.tags.map((tag, index) => (
                <p className='project-modal__tag' key={index}>{tag}</p>
              ))
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog__actions'>
          <Button variant='outlined' onClick={handleClose}>
            <a href={project.repository} target='_blank' rel='noreferrer'>Reositorio</a>
          </Button>
          <Button variant='contained' onClick={handleClose}>
            <a href={project.link} target='_blank' rel='noreferrer'>Abrir</a>
          </Button>
        </DialogActions>
      </Dialog>
    </>

      
  );
}

ProjectModal.propTypes = {
  // open: PropTypes.bool,
  // setOpen: PropTypes.func,
  project: PropTypes.object,
  // openModal: PropTypes.bool
}