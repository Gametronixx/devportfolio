
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const experienceData = [
  { company: "Ediiie Pvt Ltd", role: "Unity3D Technical Lead", years: "2024 - Current" },
  { company: "Ericsson Global India Ltd", role: "Senior Software Engineer (Unity3D VR Engineer)", years: "2020 - 2024" },
  { company: "Hexaware Technologies", role: "Senior Software Engineer (R&D Innovation Lab)", years: "2018 - 2020" },
  { company: "Dotsquares India Pvt", role: "Senior Unity3D Developer", years: "2014 - 2018" },
  { company: "Previous Exp", role: "Application & Game Developer", years: "2012 - 2014" },
];

export default function Experience() {
  return (
    <div className="my-5">
      <h2 className="text-center mb-4">Experience</h2>
      {experienceData.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <Card className="mb-3 shadow-sm p-3">
            <h5>{exp.company}</h5>
            <p className="mb-1"><strong>{exp.role}</strong></p>
            <small>{exp.years}</small>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
