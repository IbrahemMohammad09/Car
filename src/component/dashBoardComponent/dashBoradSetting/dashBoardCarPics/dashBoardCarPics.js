import './dashBoardCarPics.css'
import car from '../../../../images/Home/Ford Shelby GT350.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

function DashBoardCarPics ({
    setPictures,
    setPage
}){
    const [selectedImage, setSelectedImage] = useState([]);

    const imgRef = useRef(null);

    // const onDrop = useCallback((acceptedFiles) => {
    //     const file = acceptedFiles[0];
    //     setSelectedImage(prev => [...prev, URL.createObjectURL(file)]);
    //     console.log(selectedImage);
    // }, []);

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(prev => [...prev, imageUrl]);
        }
    };

    const removeImage = (e) => {
        setSelectedImage(selectedImage.filter(i => i !== e));
    };

    const handleAddPics = () => {
        console.log(selectedImage);
        setPictures(selectedImage);
        setPage('details')
    }

    const openFiles = () => {
        return imgRef.current.click();;
    }

    return(
        <Container className='dash-pic'>
            <h2>Details</h2>
            <p>Add the pictures here</p>
            <hr/>
            <Row>
                <img src={car} alt="car" />
            </Row>
            
            <Row className='drop-pic'>
                <Col md="3">
                    <Card>
                        <Card.Body>
                        <div
                            className="border border-primary rounded p-4 text-center flex justify-center items-center flex-col"
                            style={{ cursor: 'pointer' }}
                            onClick={openFiles}
                        >
                            {/* <input {...getInputProps()} /> */}
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
                        <div className='grid grid-cols-4 gap-3 w-screen mt-3'>
                        {selectedImage && (
                            selectedImage.map((e, i) => 
                            <div className="text-center w-fit" key={i}>
                                <Image src={e} thumbnail className='w-full h-full'/>
                                <Button variant="danger" className="mt-2" onClick={() => removeImage(e)}>Delete</Button>
                            </div>
                            )
                        )}
                        </div>
                </Col>
            </Row>
            <div className='pic-add'>
                <Button variant="primary" type="submit" onClick={handleAddPics}>
                    Add the Pictures
                </Button>
            </div>
            

        </Container>
    );
}

export default DashBoardCarPics;
