// import './dashBoardCarPics.css'
// import car from '../../../../images/Home/Ford Shelby GT350.jpeg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useCallback, useRef, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Container, Row, Col, Card, Image, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import API from '../../../../constant/api';
// import { ToastContainer, toast } from 'react-toastify';

// function DashBoardCarPics ({
//     setPictures,
//     setPage,
//     id,
//     pics
// }){
//     // const [selectedImage, setSelectedImage] = useState([]);
//     // const [imgs, setImgs] = useState([]);

//     // const imgRef = useRef(null);

//     // // const onDrop = useCallback((acceptedFiles) => {
//     // //     const file = acceptedFiles[0];
//     // //     setSelectedImage(prev => [...prev, URL.createObjectURL(file)]);
//     // //     console.log(selectedImage);
//     // // }, []);

//     // const handleImgChange = (e) => {
//     //     if (e.target.files && e.target.files[0]) {
//     //         const file = e.target.files[0];
//     //         const imageUrl = URL.createObjectURL(file);
//     //         setSelectedImage(prev => [...prev, imageUrl]);
//     //         setImgs(prev => [...prev, file])
//     //     }
//     // };

//     // const removeImage = (e) => {
//     //     setSelectedImage(selectedImage.filter(i => i !== e));
//     //     setImgs(imgs.filter(i => i !== e))
//     //     setPictures(pics.filter(i => i !== e))
//     // };

//     // const handleAddPics = () => {
//     //     const form = new FormData();

//     //     imgs.forEach((file) => {
//     //         form.append('pictures', file);
//     //     });

//     //     axios.post(API.POST.UPLOAD, form, {
//     //         headers: {
//     //             "Content-Type": 'multipart/form-data'
//     //         }
//     //     })
//     //         .then(res => {
//     //             console.log(1, res);
//     //             if(res?.data?.state === 'success') {
//     //                 if(id) {
//     //                     setPictures(prev => [...prev, ...res.data.files]);
//     //                 } else {
//     //                     setPictures(res.data.files);
//     //                 }
//     //                 toast.success('upload images successfully');
//     //                 setPage('details')
//     //             }
//     //         })
//     //         .catch(err => {
//     //             console.log(2, err);
//     //             if(err?.response?.data?.message) {
//     //                 toast.error(err?.response?.data?.message);
//     //             } else {
//     //                 toast.error(err.message);
//     //             }
//     //         })
//     // }

//     // const openFiles = () => {
//     //     return imgRef.current.click();;
//     // }

//     return(
//         <Container className='dash-pic'>
//             <h2>Details</h2>
//             <p>Add the pictures here</p>
//             <hr/>
//             <div className='flex flex-row gap-3'>
//                 {pics.length === 0 
//                     ? <img src={car} alt="car" />
//                     : pics.map((e, i) => <div className='flex justify-center items-center flex-col'>
//                         <img key={i} src={'http://localhost:3000/'+e}/>
//                         <Button variant="danger" className="mt-2" onClick={() => removeImage(e)}>Delete</Button>
//                     </div>) 
//                 }
//             </div>
            
//             <Row className='drop-pic'>
//                 <Col md="3">
//                     <Card>
//                         <Card.Body>
//                         <div
//                             className="border border-primary rounded p-4 text-center flex justify-center items-center flex-col"
//                             style={{ cursor: 'pointer' }}
//                             onClick={openFiles}
//                         >
//                             {/* <input {...getInputProps()} /> */}
//                             <input
//                                 ref={imgRef}
//                                 type="file"
//                                 name="img"
//                                 id="inputImg"
//                                 onChange={handleImgChange}
//                                 style={{ display: "none" }}
//                             />
//                             <p>drop the picture here </p>
//                             <p>click here to add picture</p>
//                         </div>
//                         </Card.Body>
//                     </Card>
//                         <div className='grid grid-cols-4 gap-3 w-screen mt-3'>
//                         {selectedImage && (
//                             selectedImage.map((e, i) => 
//                             <div className="text-center w-fit" key={i}>
//                                 <Image src={e} thumbnail className='w-full h-full'/>
//                                 <Button variant="danger" className="mt-2" onClick={() => removeImage(e)}>Delete</Button>
//                             </div>
//                             )
//                         )}
//                         </div>
//                 </Col>
//             </Row>
//             <div className='pic-add'>
//                 <Button variant="primary" type="submit" onClick={handleAddPics}>
//                     {id? 'Update': 'Add'} the Pictures
//                 </Button>
//             </div>
            

//         </Container>
//     );
// }

// export default DashBoardCarPics;
