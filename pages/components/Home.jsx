import {Row, Col } from 'react-bootstrap';
const Home = () => {
  
    const message = "Olá, gostaria de agendar um horário"

    return (
        <Row className="justify-content-center h-100">
            <Col lg={12} className="pt-3">
            </Col>
            <Col lg={10} className="h-80">
                <Row className="align-items-center">
                    <Col lg={5} className="mb-5 ">
                        <h2 className="mb-4">O melhor salão de beleza de balneário camboriú! Cortes, Mechas, Penteados, Manicure, Estética e muito mais </h2>
                        <a href={`https://wa.me/554796042413?text=${message}`} className="button shadow">Agendar</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Home;

