import './dashBoardCarPics.css'
import car from '../../../../images/Home/Ford Shelby GT350.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

function DashBoardCarPics (){
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false
    });

    const removeImage = () => {
        setSelectedImage(null);
    };

    return(
        <Container className='dash-pic'>
            <h2>Details</h2>
            <p>Update the details here</p>
            <hr/>
            <Row>
                <img src={car} alt="car" />
            </Row>
            
            <Row className='drop-pic'>
                <Col md="3">
                    <Card>
                        <Card.Body>
                        <div
                            {...getRootProps()}
                            className="border border-primary rounded p-3 text-center"
                            style={{ cursor: 'pointer' }}
                        >
                            <input {...getInputProps()} />
                            <p>drop the picture here </p>
                            <p> or click here</p>
                        </div>
                        {selectedImage && (
                            <div className="mt-3 text-center">
                                <Image src={selectedImage} thumbnail />
                                <Button variant="danger" className="mt-2" onClick={removeImage}>Delete </Button>
                            </div>
                        )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}

export default DashBoardCarPics;
