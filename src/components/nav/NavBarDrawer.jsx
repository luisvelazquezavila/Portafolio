import { Box, Divider, List, ListItem, ListItemIcon } from "@mui/material";
import { PropTypes } from "prop-types"
import { Link } from "react-scroll";

export default function NavBarDrawer({ navLinks, setOpen }) {
  return (
    <Box sx={{ width: "200px" }}>
      <List>
        {
          navLinks.map((link, id) => (
            <div key={id}>
              <ListItem 
                onClick={() => setOpen(false)} 
              >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={300}
                offset={-64}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                { link.title }
              </Link>
            </ListItem>
            <Divider  />
            </div>
          ))
        }
      </List>
    </Box>
  )
}

NavBarDrawer.propTypes = {
  navLinks: PropTypes.array,
  setOpen: PropTypes.func
}