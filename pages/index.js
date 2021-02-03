import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap';
const Hello = () => {
    return (
            <Container fluid className="adjust-height">
                <Image className="bgWrap"
                        src={"/salao1.jpg"} 
                        alt="salao balneario camboriu"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                /> 
                
                <Row className="justify-content-center h-100">
                    
                    <Col lg={12}>
                        <Row className="justify-content-center align-items-center background">
                            <Col lg={10}>
                                <Row className="justity-content-between pt-3 ">
                                    <Col> <h1 className="mb-0">Salão André Ramos</h1> </Col>

                                    <Col>
                                        <Row as="ul" className="unstyle-list text-center">
                                            <Col as="li" lg={4}>Galeria</Col>
                                            <Col as="li" lg={4}>Serviços</Col>
                                            <Col as="li" lg={4}>Produtos</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row> 
                    </Col>

                    
                    <Col lg={10} className="h-80">
                        <Row className="align-items-center">
                            <Col lg={5} className="mb-5 pb-4 pt-3 rounded background">
                                        <h2 className="mb-4">O melhor salão de beleza de balneário camboriú! Cortes, Penteados, Manicure e muito mais </h2>
                                        <a href="something" className="button">Agendar</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                    
            </Container>
    )
}

export default Hello;