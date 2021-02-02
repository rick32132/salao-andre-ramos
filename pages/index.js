import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap';
const Hello = () => {
    return (
            <Container fluid>
                <Image className="bgWrap"
                        src={"/salao2.png"} 
                        alt="salao balneario camboriu"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                />
                <Row className="justify-content-center">
                    <Col lg={10}>
                        
                        
                        <Row>
                            <Col lg={8}> <h1>Salão André Ramos</h1> </Col>

                            <Col lg={4}>
                                <Row as="ul" className="unstyle-list text-center">
                                    <Col as="li" lg={4}>Galeria</Col>
                                    <Col as="li" lg={4}>Serviços</Col>
                                    <Col as="li" lg={4}>Produtos</Col>
                                </Row>
                            </Col> 
                        </Row>

                        <Row className="align-items-center h-75 d-inline-block">
                            <Col lg={6}>
                                        <h2>O melhor salão de beleza de balneário camboriú! Cortes, Penteados, Manicure e muito mais </h2>
                                        <a href="something" className="button">Agendar</a>
                            </Col>
                        </Row>



                    </Col>
                </Row>
                    
            </Container>
    )
}

export default Hello;