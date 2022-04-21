import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import '../Realizedby.css'
function Realizedby(){
    return (
        <div className="realizedby">
            <h2 style={{padding:"30px" ,textDecorationLine: 'underline'}}>Realized BY</h2>
            <br/>
      <Container  >
          <br/>
        <Row>
          <Col md={4}>
            <Card style={{ width: "22rem",margin:"10px" }}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+'images/anasamayou.jpeg'}/>
              <Card.Body>
                <Card.Title>ANAS AMAYOU</Card.Title>
                <Card.Text>
                  MBD STUDENT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: "22rem" ,margin:"10px" }}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+'images/AB-600.jpg'}/>
              <Card.Body>
                <Card.Title>ACHRAF BATTIWA</Card.Title>
                <Card.Text>
                  MBD STUDENT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card style={{ width: "22rem",margin:"10px"  }}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL+'images/hamza.jpeg'}/>
              <Card.Body>
                <Card.Title>HAMZA AHARMOUCH</Card.Title>
                <Card.Text>
                  MBD STUDENT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
      </Container>
      </div>
    );
}
export default Realizedby;