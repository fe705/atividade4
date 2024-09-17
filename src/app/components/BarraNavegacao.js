import { Container, Nav, Navbar, NavbarBrand, NavbarToggle, NavLink } from "react-bootstrap";

export default function BarraNavegacao() {
    return(
        <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="#home">HOME</NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="#home">Pagina1</NavLink>
            <NavLink href="#features">Pagina2</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}