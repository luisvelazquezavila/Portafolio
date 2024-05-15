import { Route, Routes } from "react-router-dom";
import SkillsData from './components/pages/Skills/SkillsData'

const certificates = SkillsData.reduce((allCertificates, skill) => [...allCertificates, ...skill.certificates], []);

export default function CertificateRoutes() {
  return(
      <Routes>
        {
          certificates.map((certificate, id) => (
            <Route key={id} exact path={certificate.path} element={certificate.element} />
          ))
        }

      </Routes>  
  )
}