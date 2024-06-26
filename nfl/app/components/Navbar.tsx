'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React from 'react'

function Mynavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
                <Nav.Link href="/quiz">Quiz</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Mynavbar
