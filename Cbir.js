import {Container,Row,Col,Button,Card, CardGroup,CardColumns, ListGroupItem, ListGroup,Badge} from "react-bootstrap"
import axios from "axios";
import { useState } from "react";

function Cbir(){
    const [image,setImage]=useState(null);
    const [filenames,setFilenames]=useState([])
    // Send image to backend
    function selectedFileHandler(event) {
      //console.log(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files[0]["name"]);
      //var query=event.target.files[0]['name']
      var formData = new FormData();
      var imagefile = event.target.files[0];
      formData.append("image", imagefile);
      //var myParams = {
        //data: query,
      //};

      if (formData !== "") {
        console.log(formData);
        axios
          .post("http://127.0.0.1:5000/api/getdata", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            console.log(response.data);
            //Perform action based on response
            setFilenames(response.data["data"]);
          })
          .catch(function (error) {
            console.log(error+'hhhh');
            //Perform action based on error
          });
      } else {
        alert("The search query cannot be empty");
      }
    }

    return (
   
      <Container>
        <Row>
          <Col sm={4}>
            <input type="file" id="file" onChange={selectedFileHandler} />
          </Col>
          <Col sm={7}>
            <h3><Badge bg="warning">Matching images</Badge></h3>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <br />
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="selected-img"
                variant="top"
                src={image}
                
              />

              <Card.Body>
                <Button variant="warning" onClick={selectedFileHandler}>
                  Start Searching
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col  sm={8}>
          <div class="row row-cols-1  row-cols-md-3 ">

              {filenames.map((filename) => (
                <Card style={{ width: "208px" ,padding:"10px",margin:"5px"}}>
                <Card.Img  className="image-img"  src={filename} alt="results_img" position='top' />
                </Card>
                
                

              ))}
          </div>
          </Col>
        </Row>
      </Container>
    );
}
export default Cbir;