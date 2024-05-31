import { Divider, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { PropTypes } from "prop-types"
import { Link } from "react-scroll";

export default function NavBarDrawer({ navLinks, setOpen }) {
  return (
    <div className="navbar-drawer">
      <List>
        {
          navLinks.map((link, id) => (
            <div key={id}>
              <ListItem onClick={() => setOpen(false)}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={300}
                offset={-64}
                onClick={() => setOpen(false)}
                className="navbar-drawer__link"
              >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <Typography>{link.title}</Typography>
              </Link>
            </ListItem>
            <Divider  />
          </div>
          ))
        }
      </List>
    </div>
  )
}

NavBarDrawer.propTypes = {
  navLinks: PropTypes.array,
  setOpen: PropTypes.func
}