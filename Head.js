import { Col, Container, Row ,ProgressBar} from 'react-bootstrap';
import imgsearch from '../img_search.png';
import '../Head.css'
function Head(){
    return (
      
        <Container fluid>
          <Row>
            <Col sm={6}>
              <img className="head-img" src={imgsearch} alt="imagesearch"></img>
            </Col>
            <Col>
              <h3 className="head-title">Content Based image Retrieval using Texture (Wavelets)</h3>
            </Col>
          </Row>
          <div>
  
</div>

        </Container>
      
    );
}
export default Head;