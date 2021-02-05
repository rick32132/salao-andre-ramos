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
                                            <Col as="li" lg={4}>Serviços</Col>
                                            <Col as="li" lg={4}>Produtos</Col>
                                            <Col as="li" lg={4}>Galeria</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row> 
                    </Col>

                    
                    <Col lg={10} className="h-80">
                        <Row className="align-items-center">
                            <Col lg={5} className="mb-5  ">
                                        <h2 className="mb-4 p-1 rounded">O melhor salão de beleza de balneário camboriú! Cortes, Penteados, Manicure e muito mais </h2>
                                        <a href="something" className="button shadow">Agendar</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="adjust-height justify-content-center content-background">    
                    <Col lg={10} className="adjust-height text-align-center">
                            <h1 className="background w-1">Serviços</h1>
                        
                    </Col>
                </Row>
                    
            </Container>
    )
}

export default Hello;