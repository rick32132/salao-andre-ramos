import { Col, Nav, Navbar } from 'react-bootstrap';
import { Link, animateScroll } from "react-scroll";

const TopMenu = () => {
    
    const scrollTop = () => {
        animateScroll.scrollToTop();
    }


    return (
        <Navbar fixed="top" expand="lg" className="justify-content-center background pb-1">
            <Col lg={6}>
                <h1 onClick={scrollTop} className="link" >Salão André Ramos</h1>
            </Col>
            
            <Col lg={4} className="ml-4">
                <Nav>
                    <Link to="services" smooth={true} duration={300} className="mr-5 link"><h2>Serviços</h2></Link>
                    <Link to="gallery" smooth={true} duration={300} className="mr-5 link"><h2>Galeria</h2></Link>
                </Nav>
            </Col>
            
        </Navbar>
    )

}

export default TopMenu;