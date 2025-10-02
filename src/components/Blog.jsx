
import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const posts = [
  {title:'Generative AI experiments', excerpt:'Exploring image and texture generation workflows for procedural assets.'},
  {title:'Flutter mini-app', excerpt:'Cross-platform companion app prototype for AR demos.'}
]

export default function Blog(){
  return (
    <section id="blog" className="my-5">
      <h2>Learning & Updates</h2>
      <Row className="g-4 mt-2">
        {posts.map((p,i)=>(
          <Col md={6} key={i}>
            <Card className="h-100 shadow-sm p-3">
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.excerpt}</Card.Text>
                <a href="#" className="stretched-link">Read more</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
