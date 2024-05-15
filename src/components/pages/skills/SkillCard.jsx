import { Button, Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { PropTypes } from "prop-types"

export default function SkillCard({icon, title, certificates}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Card 
      sx={{
        height: "330px",
        width: "230px",
        padding: ".8rem 0 0",
        backgroundColor: "#17202A",
        borderRadius: "15px",
        boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.5)"
      }}
    >
      <CardMedia 
        image={icon} 
        sx={{
          height: "180px", 
          width: "180px",
          margin: "0 auto",
        }}
      />
      <CardContent 
        sx={{
        display: "flex", 
        flexDirection: "column", 
        height: "125px",
        padding: 0
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            flexGrow: 1,
            overflowWrap: "break-word",
          }}
        >
          {title} 
        </Typography>
          <Button 
            sx={{ 
              width: "max-content", 
              margin: "0 auto",
              fontWeight: "bold",             
            }}
            variant="outlined" 
            onClick={handleClickOpen}
          >
            Ver Certificados
          </Button>
          <Dialog
            onClose={handleClose}
            open={open}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle sx={{ m: 0, p: 2, backgroundColor: "#404244", color: "white"}}>
              {title} 
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers sx={{padding: 1.5, backgroundColor: "#292929"}}>
              <List>
                {
                  certificates.map((certificate, id) => (
                    <div key={id}>
                      <ListItem   
                        sx={{
                          backgroundColor: "#404244",
                          color: "white",
                        }}
                      >
                        <ListItemButton
                          component={NavLink}
                          to={certificate.path}
                          target="_blank"
                          onClick={handleClose}
                          sx={{
                            padding: .7
                          }}
                        >
                          <ListItemText 
                            primary={certificate.title} 
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider />   
                  </div>
                  ))
                }
              </List>                             
            </DialogContent>
          </Dialog>
      </CardContent>
    </Card>
  )
}

SkillCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  certificates: PropTypes.array,
}