'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import './Navbar.css'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React from 'react'

function Mynavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3 navbar-color">
        <Container fluid>
          <Image
            src="/images/NFL_logo.png"
            alt="nfl logo"
            width={35}
            height={48}
            className="navbar-logo"
          />
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand className="brand-links">NFL Guide</Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="navbar-toggle"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className="offcanvas-style"
          >
            <Offcanvas.Header closeButton className="offcanvas-closebutton">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                NFL Guide
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" className="navbar-links">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="navbar-links">
                  About
                </Nav.Link>
                <Nav.Link href="/teams" className="navbar-links">
                  Teams
                </Nav.Link>
                <Nav.Link href="/quiz" className="navbar-links">
                  Quiz
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Mynavbar
