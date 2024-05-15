import { Box } from "@mui/material"
import SkillsData from "./SkillsData"
import SkillCard from "../skills/SkillCard"

export default function Skills() {

  return(
    <Box 
      sx={{
        marginTop: "4rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: {md: "3rem", sm: "1rem", xs: ".5rem"}, 
        minHeight: "calc(100vh - 4rem)",
        minWidth: "100vw",
        background: "#E5E8E8",
        padding: {md: "3rem", sm: "1rem", xs: ".5rem"}
      }}>
        <SkillCard 
          icon={SkillsData[0].icon} 
          title={SkillsData[0].title} 
          certificates={SkillsData[0].certificates} />

        <SkillCard 
          icon={SkillsData[1].icon} 
          title={SkillsData[1].title} 
          certificates={SkillsData[1].certificates} />

        <SkillCard 
          icon={SkillsData[2].icon} 
          title={SkillsData[2].title} 
          certificates={SkillsData[2].certificates} />

        <SkillCard 
          icon={SkillsData[3].icon} 
          title={SkillsData[3].title} 
          certificates={SkillsData[3].certificates} />

        <SkillCard 
          icon={SkillsData[4].icon} 
          title={SkillsData[4].title} 
          certificates={SkillsData[4].certificates} />
    </Box>
  )
}