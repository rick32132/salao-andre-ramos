import { Container, Row, Col } from 'react-bootstrap';
const TopMenu = ({title}) => {

    return (
        <Col lg={12}>
            <Row className="justify-content-center align-items-center background">
                <Col lg={10}>
                    <Row className="justity-content-between text-center p-3">
                        <Col className="align-items-center">
                            <h1 className="mb-0">{title}</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
         </Col>
    )

}

export default TopMenu;