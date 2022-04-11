import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBarComponent () {
    return(
        <div>
        <Navbar className="navbar" bg='light'>
        <Container>
            <Navbar.Brand href="#home"><img className="logo" src={require('../../img/logo.png')}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Empresa</Nav.Link>
                <Nav.Link href="#link">Servicios</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default NavBarComponent;