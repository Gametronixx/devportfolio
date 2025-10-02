// import React from 'react'
// import { ProgressBar } from 'react-bootstrap'

// const skills = [
//   { name: "Unity3D", level: 95 },
//   { name: "React", level: 80 },
//   { name: "AR/VR", level: 90 },
//   { name: "C#", level: 85 }
// ]

// function Skills() {
//   return (
//     <div id="skills" className="my-5">
//       <h2>Skills</h2>
//       {skills.map((s, idx) => (
//         <div key={idx} className="mb-3">
//           <strong>{s.name}</strong>
//           <ProgressBar now={s.level} label={`${s.level}%`} animated />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Skills

// import React from 'react'
// import { ProgressBar } from "react-bootstrap";
// import { motion } from "framer-motion";

// const skills = {
//   "Game Engines": [
//     { name: "Unity3D", level: 95 },
//     { name: "Unreal (basic)", level: 40 },
//   ],
//   "AR/VR SDKs": [
//     { name: "ARKit / ARCore / Vuforia", level: 85 },
//     { name: "MRTK / OpenXR / Oculus", level: 80 },
//     { name: "HTC Vive / Hololens", level: 75 },
//   ],
//   "Programming": [
//     { name: "C#, .NET, LINQ", level: 90 },
//     { name: "SOLID / Design Patterns", level: 85 },
//     { name: "Async / Await", level: 80 },
//   ],
//   "Graphics/Tools": [
//     { name: "Shader Graph / URP / HDRP", level: 75 },
//     { name: "Blender / Adobe Suite", level: 70 },
//   ],
//   "Networking": [
//     { name: "Photon (PUN2)", level: 85 },
//     { name: "Mirror / Unity Netcode", level: 75 },
//     { name: "Agora SDK", level: 70 },
//   ],
//   "Other": [
//     { name: "WebGL builds", level: 85 },
//     { name: "Cloud APIs integration", level: 80 },
//     { name: "Agile / Scrum", level: 90 },
//   ]
// };

// export default function Skills() {
//   return (
//     <div className="my-5">
//       <h2 className="text-center mb-4">Core Skills</h2>
//       {Object.keys(skills).map((category, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: i * 0.2 }}
//         >
//           <h5 className="mt-3">{category}</h5>
//           {skills[category].map((skill, idx) => (
//             <div key={idx} className="mb-2">
//               <small>{skill.name}</small>
//               <ProgressBar now={skill.level} label={`${skill.level}%`} animated striped />
//             </div>
//           ))}
//         </motion.div>
//       ))}
//     </div>
//   );
// }


import React from 'react'

function CoreSkills() {
  const skills = {
    "Game Engines": "Unity3D (10+ yrs), Unreal (basic)",
    "AR/VR SDKs": "ARKit, ARCore, Vuforia, MRTK, OpenXR, Oculus, HTC Vive, Hololens",
    "Programming": "C#, .NET, LINQ, SOLID, Design Patterns, async/await",
    "Graphics/Tools": "Shader Graph, URP/HDRP, Blender, Adobe Suite",
    "Networking": "Photon (PUN2), Mirror, Agora SDK, Unity Netcode",
    "Other": "WebGL builds, Cloud APIs integration, Agile/Scrum"
  }

  return (
    <div id="core-skills" className="my-5">
      <h2>Core Skills</h2>
      <ul>
        {Object.entries(skills).map(([category, list], idx) => (
          <li key={idx}><strong>{category}:</strong> {list}</li>
        ))}
      </ul>
    </div>
  )
}

export default CoreSkills
