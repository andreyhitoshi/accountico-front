import React from 'react'
import UIButton from 'components/UI/Button/Button';
import Button from 'react-bootstrap/Button';
import  './Home.css';




const Home = () => {
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Accountico</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#cadastro">Cadastro</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#financeiro">Financeiro</Nav.Link>
      <Nav.Link href="#orçamentos">Orçamentos</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Ordem de Serviços</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Serviços</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contas a Pagar e Receber</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Relatórios</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
  
