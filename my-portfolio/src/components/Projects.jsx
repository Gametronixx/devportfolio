import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const projects = [
  {
    title: "Edverse",
    organization: "Ediiie",
    desc: "Metaverse educational app with multiplayer classrooms.",
    skills: "Unity3D, PUN2, Agora",
    url: "https://edverse.com"
  },
  {
    title: "Cognihab",
    organization: "Ediiie",
    desc: "Medical rehabilitation VR application.",
    skills: "Unity3D, OpenXR, HTC Vive",
    url: "#"
  },
  {
    title: "LeadAR",
    organization: "Ediiie",
    desc: "Transforming textbooks into interactive AR experiences for K-12 learners",
    skills: "Unity3D, AR Foundation",
    url: "#"
  },
  {
    title: "Cosmocorp",
    organization: "Ediiie",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "Unity3D, AR Foundation",
    url: "#"
  },
  {
    title: "Microsoft Dynamic Assist",
    organization: "Ericsson",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Microsoft Dynamic Guide",
    organization: "Ericsson",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Mozilla Hubs VR",
    organization: "Ericsson",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Spatial Metaverse",
    organization: "Ericsson",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Flood VR Simulation",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Oil Rig Refinery VR simulation",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "ArtVan AR Furniture",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Tulane AR Brochure",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Ricoh VR Simulation",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Delta Airline VR/AR Simulation",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
    title: "Auto machinery VR Simulation",
    organization: "Hexaware",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
   {
    title: "Kid Learn",
    organization: "Gametronixx Studio",
    desc: "Developed a fictional space game in Meta Horizon.",
    skills: "MS Dynamics",
    url: "#"
  },
  {
  title: "Monster Pop",
  organization: "Gametronixx Studio",
  desc: "Developed a fictional space game in Meta Horizon.",
  skills: "MS Dynamics",
  url: "#"
  },
  {
  title: "Super Hero",
  organization: "Gametronixx Studio",
  desc: "Developed a fictional space game in Meta Horizon.",
  skills: "MS Dynamics",
  url: "#"
  },
  {
  title: "GenFace",
  organization: "Gametronixx Studio",
  desc: "Developed a fictional space game in Meta Horizon.",
  skills: "MS Dynamics",
  url: "#"
  }

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