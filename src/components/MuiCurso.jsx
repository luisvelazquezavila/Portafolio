import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';

export default function MuiCurso() {

  return(
    <Container sx={{border: 5, margin: "auto", minWidth: "95vw"}}>
        <h1>App</h1>
        <Typography 
          variant='h1' 
          component="h2" 
          textAlign="center"
        >
          H1 con typography
        </Typography>
        <Button variant='outlined' startIcon={<ReplyIcon />} color="success">Regresar</Button>
        <Button variant='contained' endIcon={<SendIcon />}>Enviar</Button>
        <Box 
        sx={{ 
          border: ".5rem solid black",
          p: 5,
          backgroundColor: "steelblue",
          color: "white",
          fontSize: "2rem",
          m: "2rem 0",
          borderRadius: "8px", 
        }}>
          Box de MUI
        </Box>
        <Grid container spacing={5}>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
          <Grid item
             xs={12}
             sm={6}
             md={4}
          >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, modi. Eligendi explicabo, molestiae est facere nihil itaque, blanditiis soluta amet aliquid voluptate, repellat enim tempora nisi quaerat consectetur similique excepturi?</p>
          </Grid>
        </Grid>
    </Container>
  )
}