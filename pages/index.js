import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import TopMenu from './components/TopMenu';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
const Hello = () => {
    return (
        <>
            
            
            <Container fluid className="adjust-height">
                <TopMenu/>
                <Image className="bgWrap"
                    src={"/salao4.jpg"}
                    alt="salao balneario camboriu"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                <Home id="home" />
                <Services id="services"/>
                <Gallery id="gallery" />
 
            </Container>
        </>
    )
}

export default Hello;