
import React from 'react'
import { Button } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '50px 20px', // optional spacing
      }}
    >
      <h1>
        Hello, I'm <span style={{ color: '#0d6efd' }}>Kumar Gaurav Singh</span>
      </h1>
      <h4 className="text-muted mt-3">
        <Typewriter
          options={{
            strings: [
              'Senior Unity3D & XR Developer',
              'AR/VR / Simulations / Tools',
              'Full-stack & Mobile',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h4>
      <p className="mt-3">
        I build immersive AR/VR experiences, training simulations and interactive products for
        education and enterprise.
      </p>
      <div className="mt-3">
        <Button
          href="/Kumar_Gaurav_Singh_Resume.pdf"
          target="_blank"
          className="me-2 mb-2"
        >
          Download Resume
        </Button>
        <Button variant="outline-primary" href="#projects" className="mb-2">
          View Projects
        </Button>
      </div>
      <div className="mt-4">
        <img
          src="/placeholder.png"
          alt="hero"
          style={{
            maxWidth: '100%',
            borderRadius: 8,
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </section>
  )
}

