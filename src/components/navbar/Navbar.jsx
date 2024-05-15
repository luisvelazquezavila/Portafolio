import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavbarDrawer from "./NavbarDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navegador({ navLinks }) {

  const [open, setOpen] = useState(false);

  return(
    <>
      <AppBar position="fixed" sx={{height: "4rem"}}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }}}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large"/>
          </IconButton>

          <Typography 
            variant="h5" 
            sx={{ flexGrow: 1 }}>
              News
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }}}>         
            {
              navLinks.map((link, id) => (
                <Button 
                  key={id} 
                  color="inherit"
                  sx={{fontSize: "1rem"}}
                  component={NavLink}
                  to={link.path}
                >
                  {link.title}
                </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>


      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" }}}
        setOpen={setOpen}
      >
        <NavbarDrawer navLinks={navLinks} setOpen={setOpen}/>
      </Drawer>

    </>  
  )
}

Navegador.propTypes = {
  navLinks: PropTypes.array,
}