import { useEffect, useRef, useState } from "react"
import DashBoard from "../dashBoard/dasBoard"
import API from "../../constant/api";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from "axios";
import MainButton from "../../component/SharedComponents/MainButton/MainButton";

const AddCar = () => {
    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [pictures, setPictures] = useState([]);
    const [dayly, setDayly] = useState();
    const [monthly, setMonthly] = useState();
    const [weekly, setWeekly] = useState();
    const [descAr, setDescAr] = useState();
    const [descEn, setDescEn] = useState();
    const [horse, setHorse] = useState();
    const [model, setModel] = useState();
    const [seatNumber, setSeatNumber] = useState();
    const [topSpeed, setTopSpeed] = useState();
    const [gear, setGear] = useState();
    const [color, setColor] = useState();

    const [updateImgs, setUpdateImgs] = useState([]);

    const [selectedImage, setSelectedImage] = useState([]);

    const imgRef = useRef(null);

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(prev => [...prev, {file, imageUrl}]);
        }
    };

    const removeImage = (e) => {
        setSelectedImage(selectedImage.filter(i => i.imageUrl !== e));
        setUpdateImgs(updateImgs.filter(i => i !== e))
        setPictures(pictures.filter(i => i !== e))
    };

    const handleAddPics = () => {
        const form = new FormData();

        selectedImage.forEach(({file}) => {
            form.append('pictures', file);
        });

        axios.post(API.POST.UPLOAD, form, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    if(id) {
                        setUpdateImgs(prev => [...prev, ...res.data.paths]);
                    } else {
                        setPictures(res.data.paths);
                    }
                    toast.success('upload images successfully');
                }
            })
            .catch(err => {
                if(err?.response?.data?.message) {
                    toast.error(err?.response?.data?.message);
                } else {
                    toast.error(err.message);
                }
            })
    }

    const openFiles = () => {
        return imgRef.current.click();;
    }

    const { id } = useParams();

    const to = useNavigate();

    useEffect(() => {
        if(id) {
            axios.get(API.GET.ONECAR+id)
                .then(res => {
                    setBrand(res?.data?.car.brand);
                    setCategory(res?.data?.car.category);
                    setColor(res?.data?.car.color);
                    setDayly(res?.data?.car.price.dayly);
                    setDescAr(res?.data?.car.description.AR);
                    setDescEn(res?.data?.car.description.EN);
                    setGear(res?.data?.car.gear);
                    setHorse(res?.data?.car.horse);
                    setModel(res?.data?.car.model);
                    setMonthly(res?.data?.car.price.monthly);
                    setTopSpeed(+res?.data?.car.topSpeed);
                    setName(res?.data?.car.name);
                    setSeatNumber(+res?.data?.car.seatNumber);
                    setWeekly(res?.data?.car.price.weekly);
                    setUpdateImgs(res?.data?.car.pictures);
                })
                .catch(err => {
                    if(err?.response?.state === 'failed') {
                        to('/error');
                    }
                })
        }
    }, [id])

    const token = localStorage.getItem('token');
    
    const handleCreate = async () => {
        const data = {
            name, 
            brand, 
            category,
            pictures: id? updateImgs: pictures,
            price_monthly: monthly, 
            price_dayly: dayly,
            price_weekly: weekly, 
            description_AR: descAr, 
            description_EN: descEn,
            horse,
            model,
            seat_number: `${seatNumber}`,
            top_speed: `${topSpeed}`,
            gear,
            color
        }

        if(!id) {
            if(pictures.length == 0) {
                return toast.error("You must insert one picture at least");
            }

            axios.post(API.POST.CAR, data,  {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(res => {
                    if(res?.data?.state === 'success') {
                        toast.success(res.data.message);
                        setBrand("");
                        setCategory("");
                        setColor("");
                        setDayly("");
                        setDescAr("");
                        setDescEn("");
                        setGear("");
                        setHorse("");
                        setModel("");
                        setMonthly("");
                        setTopSpeed("");
                        setName("");
                        setSeatNumber("");
                        setWeekly("");
                        setPictures([]);
                        to('/dashboard/show')
                    }
                })
                .catch(err => {
                    if(err?.response?.data?.state === 'failed') {
                        toast.error(err?.response?.data?.message);
                    }
                })
        } else {
            axios.put(API.PUT.CAR+id, data,  {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(res => {
                    if(res?.data?.state === 'success') {
                        toast.success(res.data.message);
                        to('/dashboard/show');
                    }
                })
                .catch(err => {
                    if(err?.response?.data?.state === 'failed') {
                        toast.error(err?.response?.data?.message);
                    }
                })

        }
    }

    const [section, setSection] = useState('details');

    const [brandd , setBrandd] = useState("select a brand")
    const [categoryy,setCategoryy] = useState("select a category")
    const [gearr,setGearr] = useState("select a gear")

    const gearSelect = (eventKey) => {
        setGearr(eventKey);
        setGear(eventKey);
    };

    const categorySelect = (eventKey) => {
        setCategoryy(eventKey);
        setCategory(eventKey);
    };

    const brandSelect = (eventKey) => {
        setBrandd(eventKey);
        setBrand(eventKey);
    };

    const [allBrands, setAllBrands] = useState([]);

    useEffect(() => {
        axios.get(API.GET.ALLBRANDS)
            .then(res => {
                if(res?.data.state === 'success') {
                    setAllBrands(res?.data?.brands);
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, []);

    return (
        <DashBoard>
            <ToastContainer/>
            <h1 className="mb-5 underline">Settings</h1>
            <div>
                <div className="flex items-center gap-3">
                    <div className={`p-2 px-3 border-[1px] ${section === 'details'?'border-__brown': 'border-none'} rounded-md cursor-pointer border-solid font-bold`} onClick={() => setSection('details')}>Details</div>
                    <div className={`p-2 px-3 border-[1px] ${section !== 'details'?'border-__brown': 'border-none'} rounded-md cursor-pointer border-solid font-bold`} onClick={() => setSection('pics')}>Pictures</div>
                    <div onClick={handleCreate}>
                        <MainButton name={(id? 'Update': 'Add') + ' car'}/>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className={`${section === 'details'? 'block':'hidden'}`}>
                    <h2>Details</h2>
                    <p>Add the details here</p>
                    <hr/>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Name/الاسم</Form.Label>
                                <Form.Control defaultValue={name} type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Description Of Car in English</Form.Label>
                                <Form.Control as="textarea" defaultValue={descEn} rows={3} onChange={(e) => setDescEn(e.target.value)} required/>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>وصف السيارة باللغة العربية</Form.Label>
                                <Form.Control as="textarea" defaultValue={descAr} rows={3} onChange={(e) => setDescAr(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Brand</Form.Label>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={brandd}
                                    onSelect={brandSelect}
                                    defaultValue={brand}
                                    >
                                    {allBrands && allBrands.map((e, i) => <Dropdown.Item key={i} eventKey={e.name}>{e.name}</Dropdown.Item>)}
                                    
                                    {/* <Dropdown.Item eventKey="Mercedes-Benz">Mercedes-Benz</Dropdown.Item> */}
                                    {/* <Dropdown.Item eventKey="Audi">Audi</Dropdown.Item> */}
                                </DropdownButton>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Color/اللون</Form.Label>
                                <Form.Control defaultValue={color} type="text" placeholder="Color" onChange={(e) => setColor(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridModel">
                                <Form.Label>Model</Form.Label>
                                <Form.Control defaultValue={model} type="text" placeholder="Model" onChange={(e) => setModel(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Category/فئة السيارة</Form.Label>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={categoryy}
                                    onSelect={categorySelect}
                                    defaultValue={category}
                                    >
                                    <Dropdown.Item eventKey="Sport">Sport</Dropdown.Item>
                                    <Dropdown.Item eventKey="Luxury">Luxury</Dropdown.Item>
                                    <Dropdown.Item eventKey="Family">Family</Dropdown.Item>
                                    <Dropdown.Item eventKey="Economy">Economy </Dropdown.Item>
                                    <Dropdown.Item eventKey="Convertible">Convertible </Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Cylinders Nummber/عدد اسطوانات المحرك</Form.Label>
                                <Form.Control defaultValue={horse} type="number" placeholder="cylinders" onChange={(e) => setHorse(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Top Speed/السرعة القصوى</Form.Label>
                                <Form.Control defaultValue={topSpeed} type="number" placeholder="Speed" onChange={(e) => setTopSpeed(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Seats/عدد المقاعد</Form.Label>
                                <Form.Control defaultValue={seatNumber} type="number" placeholder="Seats" onChange={(e) => setSeatNumber(e.target.value)}  required/>
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Gear box/نوع علبة التروس</Form.Label>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={gearr}
                                    onSelect={gearSelect}
                                    >
                                    <Dropdown.Item eventKey="Manual" selected={gear === 'Manual'}>Manual</Dropdown.Item>
                                    <Dropdown.Item eventKey="Automatic" selected={gear === 'Automatic'}>Automatic</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>    
                        </Row>      
                        <p>Add the price here</p>  
                        <hr/>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Daily in AUD/الايجار اليومي</Form.Label>
                                <Form.Control defaultValue={dayly} type="number" placeholder="AUD" onChange={(e) => setDayly(e.target.value)} required/>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Weekly in AUD/الايجار الاسبوعي</Form.Label>
                                <Form.Control defaultValue={weekly} type="number" placeholder="AUD" onChange={(e) => setWeekly(e.target.value)}  required/>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Monthly in AUD/الايجار الشهري</Form.Label>
                                <Form.Control defaultValue={monthly} type="number" onChange={(e) => setMonthly(e.target.value)} placeholder="AUD"  required/>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
                <div className={`${section === 'details'? 'hidden':'block'}`}>
                    <h2>Pictures</h2>
                    <p>Add the pictures here</p>
                    <hr/>       
                        <Row className='drop-pic'>
                            <Col md="3">
                            <div className='flex gap-3 w-screen mb-3'>
                                    {updateImgs && (
                                        updateImgs.map((e, i) => 
                                        <div className="text-center" key={i}>
                                            <div className="w-[170px] h-[170px] overflow-hidden">
                                                <img src={e} thumbnail className='w-full h-full object-cover'/>
                                            </div>
                                            <Button variant="danger" className="mt-2" onClick={() => removeImage(e)}>Delete</Button>
                                        </div>
                                        )
                                    )}
                                    </div>
                                <Card>
                                    <Card.Body>
                                    <div
                                        className="border border-primary rounded p-4 text-center flex justify-center items-center flex-col"
                                        style={{ cursor: 'pointer' }}
                                        onClick={openFiles}
                                    >
                                        <input
                                            ref={imgRef}
                                            type="file"
                                            name="img"
                                            id="inputImg"
                                            onChange={handleImgChange}
                                            style={{ display: "none" }}
                                        />
                                        <p>drop the picture here </p>
                                        <p>click here to add picture</p>
                                    </div>
                                    </Card.Body>
                                </Card>
                                    <div className='flex gap-3 w-screen mt-3'>
                                    {selectedImage && (
                                        selectedImage.map((e, i) => 
                                        <div className="text-center" key={i}>
                                            <div className="w-[170px] h-[170px] overflow-hidden">
                                                <img src={e.imageUrl} thumbnail className='w-full h-full object-cover'/>
                                            </div>
                                            <Button variant="danger" className="mt-2" onClick={() => removeImage(e.imageUrl)}>Delete</Button>
                                        </div>
                                        )
                                    )}
                                    </div>
                            </Col>
                        </Row>
                        <div className='mt-4' onClick={handleAddPics}>
                            <MainButton name={(id? 'Update': 'Add') + ' the Pictures'}/>
                        </div>
                    </div>
            </div>
        </DashBoard>
    )
}

export default AddCar