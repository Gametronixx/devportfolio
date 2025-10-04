import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const projects = [
  {
    title: "Edverse",
    organization: "Ediiie",
    desc: "Edverse is an educational metaverse enabling seamless collaboration between teachers, students, and promoters to host interactive online classrooms and manage learning content.",
    skills: "Unity3D, Fusion Multiplayer Networking, Agora",
    url: "https://edverse.com"
  },
  {
    title: "Kid Learn",
    organization: "Gametronixx Studio",
    desc: "Kid Learn is an educational, teacher-approved game that helps children learn shapes, alphabets, and numbers through interactive play.",
    skills: "Unity2d, Education, Game",
    url: "https://play.google.com/store/apps/details?id=com.gametronixx.kidlearn"
  },
  // {
    //   title: "Cognihab",
    //   organization: "Ediiie",
    //   desc: "Medical rehabilitation VR application.",
    //   skills: "Unity3D, OpenXR, HTC Vive",
    //   url: "#"
    // },
    {
      title: "LeadAR",
      organization: "Ediiie",
      desc: "LeadAR is an AR-based educational app that helps students and teachers explore and understand Mathematics and Science concepts from classes 1 to 12 through immersive 3D learning experiences.",
      skills: "Unity3D, AR Foundation, Vuforia",
      url: "#"
    },
    {
      title: "Monster Pop",
      organization: "Gametronixx Studio",
      desc: "Monster Pop is an engaging Android game where players tap to eliminate groups of two or more monsters, earning higher scores for bigger combos. Perfect for festive-season fun and addictive monster-popping action.",
      skills: "Unity2d, Puzzle, Game",
      url: "https://play.google.com/store/apps/details?id=com.gametronixx.monsterpop"
    },
    {
      title: "Cosmocorp - Under development",
      organization: "Ediiie",
      desc: "Developed a fictional space game in Meta Horizon.",
      skills: "Meta Horizon SDK, Type script",
      url: "#"
    },
    {
    title: "GenFace",
    organization: "Gametronixx Studio",
    desc: "GenFace is an AI-powered merge puzzle game where players transform and evolve faces, turning simple features into stunning portraits through strategic merging.",
    skills: "Unity2d, Puzzle, Game, 3-Matching",
    url: "https://play.google.com/store/apps/details?id=com.Gametronixx.Genface"
    },
    {
    title: "Microsoft Dynamic Assist",
    organization: "Ericsson",
    desc: "Microsoft Dynamic Assist is a hands-free AR solution for Ericsson network engineers, enhancing productivity through real-time guidance, collaboration, and remote assistance directly from the field.",
    skills: "MS Dynamics 365 Services, Teams chat integration, Annotations",
    url: "https://www.youtube.com/watch?v=d3YT8j0yYl0"
  },
  {
    title: "Microsoft Dynamic 365 Guide",
    organization: "Ericsson",
    desc: "Microsoft Dynamics 365 Guide solution was implemented for Ericsson to improve quality inspection of hardware devices like radio transmitters, reducing human error and enhancing accuracy. The system was successfully deployed at Ericsson Pune.",
    skills: "MS Dynamics 365 guides, Power BI, Blender, Annotations, Augmented",
    url: "https://www.youtube.com/watch?v=2h86OJT9OPo"
  },
  {
    title: "Mozilla Hubs VR",
    organization: "Ericsson",
    desc: "A web-based VR metaverse platform enabling immersive and collaborative team sessions. Developed for Ericsson to enhance professional meetings, onboarding experiences, and 3D workspace illustrations within a shared virtual environment.",
    skills: "Unity3d , Spoke Editor, Blender VR, WebVR, AWS cloud Hosting",
    url: "https://virtualhub.ericsson.net/"
  },
  {
    title: "Spatial Metaverse",
    organization: "Ericsson",
    desc: "Spatial Metaverse similarly provides immersive virtual environments for collaborative meetings, team interactions, and 3D content visualization.",
    skills: "Unity3d, Spatial.io, Blender",
    url: "https://www.spatial.io/"
  },
  {
    title: "Flood VR Simulation",
    organization: "Hexaware",
    desc: "Flood VR Simulation is a VR training solution that teaches users how to respond, rescue, and take safety precautions in flood-affected areas.",
    skills: "Unity3d, VR, Simulation, Text to speech, Text recognition",
    url: "https://youtu.be/VTbHBt4U1Qs"
  },
  {
    title: "Oil Rig Refinery VR simulation",
    organization: "Hexaware",
    desc: "Oil Rig Refinery VR Simulation is a VR training solution that enables users to safely navigate, operate, and perform emergency procedures in an oil rig refinery environment.",
    skills: "Unity3d, VR, Simulation",
    url: "https://youtu.be/oTbLuog4T50"
  },
  {
    title: "ArtVan AR Furniture",
    organization: "Hexaware",
    desc: "rtVan AR Furniture is an AR application that lets users visualize and interact with furniture in real-world spaces before purchase, enhancing decision-making and engagement.",
    skills: "Unity3d AR/VR, Simulation",
    url: "https://youtu.be/4iZbZLODp0o"
  },
  {
    title: "Tulane AR Brochure",
    organization: "Hexaware",
    desc: "Tulane AR Brochure is an AR-based interactive brochure that showcases Tulane University’s campus, culture, and programs, providing an engaging and immersive experience for users.",
    skills: "Unity3d, AR, AR Foundation, Vuforia",
    url: "https://youtu.be/qNuRhFweqUI"
  },
  {
    title: "Ricoh VR Simulation",
    organization: "Hexaware",
    desc: "Ricoh VR Simulation is a VR training solution for Ricoh’s modular printers, enabling users to practice assembly, operation, and maintenance in a safe, immersive virtual environment.",
    skills: "Unity3d, Photon Multiplayer networking",
    url: "https://youtu.be/o-UPWzzIpPg"
  },
  {
    title: "Delta Airline VR/AR Simulation",
    organization: "Hexaware",
    desc: "Delta Airline VR/AR Simulation is an immersive training solution for airline crew, covering cabin operations, door procedures, and safety protocols using VR and AR technologies.",
    skills: "Unity3d AR/VR, Simulation",
    url: "https://youtu.be/bQCv2qi_4IA"
  },
  {
    title: "Auto machinery VR Simulation",
    organization: "Hexaware",
    desc: "Auto Machinery VR Simulation is a VR training application that allows users to learn operation, assembly, and maintenance of automotive machinery in a safe, virtual environment.",
    skills: "Unity3d AR/VR, Simulation",
    url: "https://youtu.be/WcyGE9x6KFo"
  }
  // {
  // title: "Super Hero",
  // organization: "Gametronixx Studio",
  // desc: "Developed a fictional space game in Meta Horizon.",
  // skills: "MS Dynamics",
  // url: "#"
  // },

]

function Projects() {
  return (
    <div id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projects.map((p, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Subtitle>{p.organization}</Card.Subtitle>
                <Card.Text>{p.desc}</Card.Text>
                <p><strong>Skills:</strong> {p.skills}</p>
                <Button variant="primary" href={p.url} target="_blank">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Projects