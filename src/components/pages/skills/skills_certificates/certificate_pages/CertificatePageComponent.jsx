import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

export default function CertificatePageComponent({ pdf }) { 
  return(
    <Box
      sx={{
        position: "relative",
        zIndex: 1100,
        margin: "auto",
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
        component="object"
        title='hola'
        data={pdf}
        type="application/pdf"
        width="800px"
        height="800px"
    />
  )
}
  
CertificatePageComponent.propTypes = {
  pdf: PropTypes.string
}