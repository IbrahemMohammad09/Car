import './dashBoardDetails.css'
import { Container, Form, Row, Col, Button, Dropdown, DropdownButton,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function DashBoardDetails (){
    const [brand , setBrand] = useState("select a brand")
    const [category,setCategory] = useState("select a category")
    const [gear,setGear] = useState("select a gear")
    const [Brands , setBrands] = useState([
        { id: 1, name: 'BMW' },
        { id: 2, name: 'Audi' },
        
    ]);

    const handleDelete = (id) => {
        setBrands(Brands.filter(Brand => Brand.id !== id));
      };

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
                        <Form.Label>Name/الاسم</Form.Label>
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
                        <Form.Label>Color/اللون</Form.Label>
                        <Form.Control type="text" placeholder="Color" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridModel">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Model" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Category/فئة السيارة</Form.Label>
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
                        <Form.Label>Number of engine cylinders/عدد اسطوانات المحرك</Form.Label>
                        <Form.Control type="number" placeholder="cylinders" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Top Speed/السرعة القصوى</Form.Label>
                        <Form.Control type="number" placeholder="Speed" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Seats/عدد المقاعد</Form.Label>
                        <Form.Control type="number" placeholder="Seats" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Gear box/نوع علبة التروس</Form.Label>
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
                <p>Update the price here</p>  
                
                <hr/>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Daily in $/الايجار اليومي</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Weekly in $/الايجار الاسبوعي</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Monthly in $/الايجار الشهري</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Add Car
                </Button>
            </Form>
            <p>Update the brand here</p>
            <hr/>
            <Row>
                {Brands.map(Brand => (
                            <Card key={Brand.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{Brand.name}</Card.Title>
                                <Button variant="danger" onClick={() => handleDelete(Brand.id)}>Delete</Button>
                            </Card.Body>
                            </Card>
                        ))}
            </Row>
            <Form>                
                <Form.Group as={Col} controlId="formGridModel">
                    <Form.Label>Add Brand</Form.Label>
                    <Form.Control type="text" placeholder="Add Brand" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Brand
                </Button>
            </Form>
        </Container>
    );
}



export default DashBoardDetails;