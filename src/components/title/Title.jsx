import { Typography } from "@mui/material"
import { PropTypes } from "prop-types"
import "./title.css"

export default function Title({ title }) {
  return (
    <Typography
        className="title"
        component="h2"
        sx={{
          marginBottom: { xs: "3rem", sm: "5rem", md: "8rem" },
          fontSize: "clamp(2rem, 3vw, 4rem)",
          fontFamily: "Poetsen One",
        }}
      >
        {title}
    </Typography>
  )
}

Title.propTypes = {
  title: PropTypes.string
}