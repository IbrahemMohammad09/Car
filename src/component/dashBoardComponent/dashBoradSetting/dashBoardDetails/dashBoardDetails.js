import './dashBoardDetails.css'
import { Container, Form, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function DashBoardDetails (){
    const [brand , setBrand] = useState("select a brand")
    const [category,setCategory] = useState("select a category")
    const [gear,setGear] = useState("select a gear")

    const gearSelect = (eventKey) => {
        setGear(eventKey);
      };

    const categorySelect = (eventKey) => {
        setCategory(eventKey);
      };

    const brandSelect = (eventKey) => {
        setBrand(eventKey);
      };


    return(
        <Container className='dash-details'>
            <h2>Details</h2>
            <p>Update the details here</p>
            <hr/>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Description Of Car in English</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>وصف السيارة باللغة العربية</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Brand</Form.Label>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={brand}
                            onSelect={brandSelect}
                            >
                            <Dropdown.Item eventKey="BMW">BMW</Dropdown.Item>
                            <Dropdown.Item eventKey="Mercedes-Benz">Mercedes-Benz</Dropdown.Item>
                            <Dropdown.Item eventKey="Audi">Audi</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" placeholder="Color" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Model" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Gear box</Form.Label>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={category}
                            onSelect={categorySelect}
                            >
                            <Dropdown.Item eventKey="Sport">Sport</Dropdown.Item>
                            <Dropdown.Item eventKey="Luxury">Luxury</Dropdown.Item>
                            <Dropdown.Item eventKey="Family">Family</Dropdown.Item>
                            <Dropdown.Item eventKey="Economy">Economy </Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Number of engine cylinders</Form.Label>
                        <Form.Control type="number" placeholder="cylinders" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Speed</Form.Label>
                        <Form.Control type="number" placeholder="Speed" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Seats</Form.Label>
                        <Form.Control type="number" placeholder="Seats" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Category</Form.Label>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={gear}
                            onSelect={gearSelect}
                            >
                            <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
                            <Dropdown.Item eventKey="Automatic">Automatic</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>    
                </Row>      
                <p>Update the details here</p>  
                <hr/>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Daily in $</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Weekly in $</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Monthly in $</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Add Car
                </Button>
            </Form>
        </Container>
    );
}



export default DashBoardDetails;