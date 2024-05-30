import { Box } from "@mui/material"
import { PropTypes } from "prop-types"
import "./section.css"

export default function Section({ id, children }) {
  return (
    <Box sx={{ padding: {xs: "2rem 0", sm: "1rem 3rem 10rem"} }} className="section" id={id}>
      {children}
    </Box>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.array
}