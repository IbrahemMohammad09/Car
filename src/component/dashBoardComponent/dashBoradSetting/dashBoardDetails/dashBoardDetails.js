// import './dashBoardDetails.css'
// import { Container, Form, Row, Col, Button, Dropdown, DropdownButton,Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import API from '../../../../constant/api';


// function DashBoardDetails (
//     {
//         setBrand, brand,
//         setCategory, category,
//         setColor, color,
//         setDayly, dayly,
//         setDescAr, der,
//         setDescEn, den,
//         setGear, gear,
//         setHorse,horse,
//         setModel, model,
//         setMonthly, monthly,
//         setTopSpeed, speed,
//         setName, name,
//         setSeatNumber, seat,
//         setWeekly, weekly
//     }
// ){
//     const [brandd , setBrandd] = useState("select a brand")
//     const [categoryy,setCategoryy] = useState("select a category")
//     const [gearr,setGearr] = useState("select a gear")
//     const [Brands , setBrands] = useState([
//         { id: 1, name: 'BMW' },
//         { id: 2, name: 'Audi' },
        
//     ]);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleDelete = (id) => {
//         setBrands(Brands.filter(Brand => Brand.id !== id));
//     };

//     const gearSelect = (eventKey) => {
//         setGearr(eventKey);
//         setGear(eventKey);
//     };

//     const categorySelect = (eventKey) => {
//         setCategoryy(eventKey);
//         setCategory(eventKey);
//     };

//     const brandSelect = (eventKey) => {
//         setBrandd(eventKey);
//         setBrand(eventKey);
//     };
    
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSelectedFile(file);      
//         }
//     };

//     const [allBrands, setAllBrands] = useState([]);

//     useEffect(() => {
//         axios.get(API.GET.ALLBRANDS)
//             .then(res => {
//                 if(res?.data.state === 'success') {
//                     setAllBrands(res?.data?.brands);
//                 }
//             })
//             .catch(err => {
//                 // setAgain(!again)
//             })
//     }, []);
    
//     return(
//         <Container className='dash-details'>
//             <h2>Details</h2>
//             <p>Add the details here</p>
//             <hr/>
//             <Form>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} >
//                         <Form.Label>Name/الاسم</Form.Label>
//                         <Form.Control defaultValue={name} type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Description Of Car in English</Form.Label>
//                         <Form.Control as="textarea" defaultValue={den} rows={3} onChange={(e) => setDescEn(e.target.value)} required/>
//                     </Form.Group>
//                     <Form.Group as={Col} >
//                         <Form.Label>وصف السيارة باللغة العربية</Form.Label>
//                         <Form.Control as="textarea" defaultValue={der} rows={3} onChange={(e) => setDescAr(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Brand</Form.Label>
//                         <DropdownButton
//                             id="dropdown-basic-button"
//                             title={brandd}
//                             onSelect={brandSelect}
//                             defaultValue={brand}
//                             >
//                             {allBrands && allBrands.map((e, i) => <Dropdown.Item key={i} eventKey={e._id}>{e.name}</Dropdown.Item>)}
                            
//                             {/* <Dropdown.Item eventKey="Mercedes-Benz">Mercedes-Benz</Dropdown.Item> */}
//                             {/* <Dropdown.Item eventKey="Audi">Audi</Dropdown.Item> */}
//                         </DropdownButton>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} >
//                         <Form.Label>Color/اللون</Form.Label>
//                         <Form.Control defaultValue={color} type="text" placeholder="Color" onChange={(e) => setColor(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} controlId="formGridModel">
//                         <Form.Label>Model</Form.Label>
//                         <Form.Control defaultValue={model} type="text" placeholder="Model" onChange={(e) => setModel(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Category/فئة السيارة</Form.Label>
//                         <DropdownButton
//                             id="dropdown-basic-button"
//                             title={categoryy}
//                             onSelect={categorySelect}
//                             defaultValue={category}
//                             >
//                             <Dropdown.Item eventKey="Sport">Sport</Dropdown.Item>
//                             <Dropdown.Item eventKey="Luxury">Luxury</Dropdown.Item>
//                             <Dropdown.Item eventKey="Family">Family</Dropdown.Item>
//                             <Dropdown.Item eventKey="Economy">Economy </Dropdown.Item>
//                             <Dropdown.Item eventKey="Economy">Convertible </Dropdown.Item>
//                         </DropdownButton>
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} >
//                         <Form.Label>Cylinders Nummber/عدد اسطوانات المحرك</Form.Label>
//                         <Form.Control defaultValue={horse} type="number" placeholder="cylinders" onChange={(e) => setHorse(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Top Speed/السرعة القصوى</Form.Label>
//                         <Form.Control defaultValue={speed} type="number" placeholder="Speed" onChange={(e) => setTopSpeed(e.target.value)} required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Seats/عدد المقاعد</Form.Label>
//                         <Form.Control defaultValue={seat} type="number" placeholder="Seats" onChange={(e) => setSeatNumber(e.target.value)}  required/>
//                     </Form.Group>

//                     <Form.Group as={Col} >
//                         <Form.Label>Gear box/نوع علبة التروس</Form.Label>
//                         <DropdownButton
//                             id="dropdown-basic-button"
//                             title={gearr}
//                             onSelect={gearSelect}
//                             defaultValue={gear}
//                             >
//                             <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
//                             <Dropdown.Item eventKey="Automatic">Automatic</Dropdown.Item>
//                         </DropdownButton>
//                     </Form.Group>    
//                 </Row>      
//                 <p>Add the price here</p>  
//                 <hr/>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} >
//                         <Form.Label>Daily in $/الايجار اليومي</Form.Label>
//                         <Form.Control defaultValue={dayly} type="number" placeholder="$" onChange={(e) => setDayly(e.target.value)} required/>
//                     </Form.Group>
//                     <Form.Group as={Col} >
//                         <Form.Label>Weekly in $/الايجار الاسبوعي</Form.Label>
//                         <Form.Control defaultValue={weekly} type="number" placeholder="$" onChange={(e) => setWeekly(e.target.value)}  required/>
//                     </Form.Group>
//                     <Form.Group as={Col} >
//                         <Form.Label>Monthly in $/الايجار الشهري</Form.Label>
//                         <Form.Control defaultValue={monthly} type="number" onChange={(e) => setMonthly(e.target.value)} placeholder="$"  required/>
//                     </Form.Group>
//                 </Row>
//             </Form>
//             {/* <p>Add the brandd here</p>
//             <hr/>
//             <Row>
//                 {Brands.map(Brand => (
//                     <Card key={Brand.id} className="mb-3">
//                         <Card.Body>
//                             <Card.Title>{Brand.name}</Card.Title>
//                             <Button variant="danger" onClick={() => handleDelete(Brand.id)}>Delete</Button>
//                         </Card.Body>
//                         </Card>
//                     ))}
//             </Row>
//             <Form>                
//                 <Form.Group as={Col} >
//                     <Form.Label>Add Brand</Form.Label>
//                     <Form.Control type="text" placeholder="Add Brand" />
//                     <Form.Control type='file' accept="image/*" placeholder='add brand picture' onChange={handleFileChange} required/>
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Add Brand
//                 </Button>
//             </Form> */}
//         </Container>
//     );
// }



// export default DashBoardDetails;