import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

export default function ListDrawer({ navLinks, setOpen }) {
  return(
    <Box sx={{ width: 250}}>
      <nav>
        <List>
          {
            navLinks.map((link, id) => (
              <ListItem key={id} disablePadding>             
                <ListItemButton
                  component={NavLink}
                  to={link.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText 
                    primary={link.title}
                  />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  )
}

ListDrawer.propTypes = {
  navLinks: PropTypes.array,
  setOpen: PropTypes.func
}