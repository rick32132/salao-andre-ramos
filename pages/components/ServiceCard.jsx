import { Card, Col, Row } from 'react-bootstrap';
const ServiceCard = ({title, image}) => {

    return (
            <Col lg={4}>
                <Card className="bg-light">
                    <Card.Img style={{height: "280px"}} src={image} alt="Card image" />
                    <Card.ImgOverlay className="align-center" className="card">
                        <Card.Title className="text-center pt-5 mt-5" >
                            <h1>{title}</h1>
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Col>
    );
}

export default ServiceCard;