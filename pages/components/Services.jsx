import {Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard'
const Services = () => {

    return (
        <Row id="services" className="justify-content-center h-100">
            <Col lg={12} className="mt-5"></Col>
            <Col lg={10} className="text-center"><h3>Beleza - Qualidade - Excelência </h3></Col>
            <Col lg={10} className="h-50">    
                <Row>
                    <ServiceCard image="/hair1.jpg" title="Cabelo"/>
                    <ServiceCard image="/nails1.png" title="Unhas"/>
                    <ServiceCard image="/estetica1.jpg" title="Estética" />
                    
                </Row>
            </Col>
        </Row>
    );
}

export default Services;