import Image from 'next/image'
import {Container, Row, Col} from 'react-bootstrap';
const Hello = () => {
    return (
            <Container fluid className="adjust-height">
                <Image className="bgWrap"
                        src={"/salao2.png"} 
                        alt="salao balneario camboriu"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                />
                <Row className="justify-content-center h-100">
                    <Col lg={10} className="h-100">
                        
                        
                        <Row className="mt-2">
                            <Col lg={8}> <h1>Salão André Ramos</h1> </Col>

                            <Col lg={4}>
                                <Row as="ul" className="unstyle-list text-center">
                                    <Col as="li" lg={4}>Galeria</Col>
                                    <Col as="li" lg={4}>Serviços</Col>
                                    <Col as="li" lg={4}>Produtos</Col>
                                </Row>
                            </Col> 
                        </Row>

                        <Row className="align-items-center h-100">
                            <Col lg={5} className="mb-5">
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