import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { PropTypes } from "prop-types"
import { Link } from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu'
import "./navBar.css"

export default function NavBar({ navLinks, setOpen }) {

  return (
    <AppBar color="primary" className="navBar">
      <Toolbar
        sx={{
          justifyContent: { xs: "left", sm: "right" },
        }}
      >
        <MenuIcon 
          onClick={() => setOpen(true)}
          fontSize="large"
          sx={{ 
            display: { xs: "block", sm: "none" }
           }} 
        />
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: ".5rem" }}>
          {
            navLinks.map((link, id) => (
              <Button key={id}>
                <Link 
                  to={link.to} 
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-48}
                  activeClass="active"
                >             
                  <p className="navBar__link">{link.title}</p>
                </Link>
              </Button>
            ))
          }
        </Box>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
  setOpen: PropTypes.func
}