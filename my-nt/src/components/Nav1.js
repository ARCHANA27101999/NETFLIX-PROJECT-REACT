import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Nav1.css'
import {Link} from 'react-router-dom'

function Nav1() {
  return (
    <div >
      
      <Navbar className='navbar' bg="light" expand="lg">
      <Container>
      <img className="logo"  src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"></img>
        <Navbar.Brand  className="ab" href="#home">TV SHOWS</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='a' to="/old" >OLD MOVIES</Link>
          <Link className='a'to="/new" >NEW MOVIES</Link>
          <Link className='a' to="/trend" >TRENDING MOVIES</Link>
          
            
            
            
            <img className="avatar" src="https://tse4.mm.bing.net/th?id=OIP.sqlskxScyB9FnC1sLdD9IgHaFP&pid=Api&P=0"></img>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default Nav1