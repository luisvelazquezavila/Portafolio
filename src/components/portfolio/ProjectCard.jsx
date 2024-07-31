// import { Box, Button, IconButton, Typography } from "@mui/material"
import { PropTypes } from "prop-types"
import "./projectCard.css"

// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CloseIcon from '@mui/icons-material/Close';
import ProjectModal from "./ProjectModal";
// import { useState } from "react";
// import ProjectModal from "./ProjectModal";

export default function ProjectCard({ projects }) {

  return (
    <>
      {
        projects.map((project, index) => (
          <ProjectModal key={index} project={project} />
        ))
      }
      
    </>
  )
}

ProjectCard.propTypes = {
  projects: PropTypes.array
}