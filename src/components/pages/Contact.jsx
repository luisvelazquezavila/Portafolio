import { Box, Button, Paper, Radio, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Contact() {

  const handleChange = e => setValue(e.target.value);

  const [value, setValue] = useState("Say Hi")

  return(
    <Box>
      <Paper>
      <div>
        <Typography variant="h5">CONTACT ME</Typography>
        <div>
            
            <div>
                <span>Say hello</span>
                <Radio 
                value="Say Hi"
                checked={value === "Say Hi"}
                color="primary"
                onChange={handleChange} />
            </div>
            <div>
                <span>Get a Quote</span>
                <Radio 
                    value="Get a Quote"
                    checked={value === "Get a Quote"}
                    color="primary"
                    onChange={handleChange} />
            </div>                 
        </div>
    </div>
    <form noValidate autoComplete="off">
        <TextField label="Nombre" />
        <TextField label="Correo electrónico" />
        <TextField label="Escribir mensaje" />
    </form>
    <Button variant="contained">Submit</Button>
      </Paper>
    </Box>
  )
}