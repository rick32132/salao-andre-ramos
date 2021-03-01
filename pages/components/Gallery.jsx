import Image from 'next/image';
import {Row, Col, Carousel } from 'react-bootstrap';
const Gallery = () => {
  
    return (
        <Row className="justify-content-center h-100" id="gallery">
            <Col lg={12} className="mt-5"></Col>
            <Col lg={10} className="h-75">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Carousel >
                            <Carousel.Item>
                                <Image className="d-block w-50"
                                    src={"/Carousel1.png"}
                                    alt="Unhas"
                                    width={1154}
                                    height={648}
                                    layout="responsive"
                                    style={{brightness: "30%"}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="d-block w-50"
                                    src={"/Carousel2.png"}
                                    alt="Unhas"
                                    width={1154}
                                    height={648}
                                    layout="responsive"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="d-block w-50"
                                    src={"/Carousel3.png"}
                                    alt="Unhas"
                                    width={1154}
                                    height={648}
                                    layout="responsive"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Gallery;