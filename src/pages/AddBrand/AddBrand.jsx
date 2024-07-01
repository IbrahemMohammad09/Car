import { Col, Row, ToastContainer, Form, Card, Image, Button } from "react-bootstrap"
import DashBoard from "../dashBoard/dasBoard"
import { useEffect, useRef, useState } from "react"
import MainButton from "../../component/SharedComponents/MainButton/MainButton";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import API from "../../constant/api";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const AddBrand = () => {
    const [name, setName] = useState();
    const [picture, setPicture] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [img, setImg] = useState();

    const imgRef = useRef();
    
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const openFiles = () => {
        return imgRef.current.click();;
    }

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setImg(file)
        }
    };

    const removeImage = (e) => {
        setSelectedImage('');
        setImg('')
        setPicture("")
        setSuccess("")
        setError("")
    };

    const [section, setSection] = useState('Add');

    const [brands, setBrands] = useState([]);

    const [isDelete, setDelete] = useState(false);

    useEffect(() => {
        axios.get(API.GET.ALLBRANDS, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data.state === 'success') {
                    setBrands(res?.data?.brands);
                }
            })
            .catch(err => {
                // setAgain(!again)
            })
    }, [isDelete, section]);

    const [showAlert, setShowAlert] = useState(false);

    const token = localStorage.getItem('token')


    const handleAddPics = () => {
        const form = new FormData();

        form.append('pictures', img);

        axios.post(API.POST.UPLOAD, form, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    setSuccess(res.data.message)
                    setError("")
                    setPicture(res.data.paths);
                    return toast.success('upload images successfully');
                }
            })
            .catch(err => {
                setSuccess("")
                setError("")
                if(err?.response?.data?.message) {
                    setError(err?.response?.data?.message)
                    return toast.error(err?.response?.data?.message);
                } else {
                    return toast.error(err.message);
                }
            })
    }

    const deleteItem = async (id) => {
        axios.delete(API.DELETE.BRAND+id, {
            headers: {
                Authorization: 'Bearer '+ token
            }
        })
            .then(res => {
                toast.success(res?.data?.message);
                setDelete(id);
                setPicture("");
                setShowAlert(false)
            })
            .catch(err => {
                toast.error(err?.response?.data?.message);
                setShowAlert(false)
            })
    }

    const createBrand = async (id) => {
        const data = {
            name, 
            picture: picture[0]
        }

            axios.post(API.POST.BRAND, data,{
                headers: {
                    Authorization: 'Bearer '+ token
                }
            })
                .then(res => {
                    if(res.data.state === 'success') {
                        toast.success(res?.data?.message);
                        setError("")
                        setName("")
                        setPicture("")
                        setSuccess(res?.data?.message)
                        setSection('See')
                    }
                })
                .catch(err => {
                    setError("")
                    setSuccess("")
                    if(err.response.data.state === 'failed') {
                        console.log(1);
                        setError(err?.response?.data?.message);
                        toast.error(err?.response?.data?.message);
                    }
                })
        // } else {
        //     axios.put(API.PUT.BRAND+id, data,{
        //         headers: {
        //             Authorization: 'Bearer '+ token
        //         }
        //     })
        //         .then(res => {
        //             if(res.data.state === 'success') {
        //                 toast.success(res?.data?.message);
        //                 setSection('See')
        //             }
        //         })
        //         .catch(err => {
        //             if(err.response.data.state === 'failed') {
        //                 toast.error(err?.responser?.data?.message);
        //             }
        //         })
        // }
    }

    return (
        <DashBoard>
            <h1 className="mb-5 underline">Brands</h1>
            <div className="mb-5">
                <div className="flex items-center gap-3">
                    <div className={`p-2 px-3 border-[1px] ${section !== 'See'?'border-__brown': 'border-none'} rounded-md cursor-pointer border-solid font-bold`} onClick={() => setSection('Add')}>{'Add'}</div>
                    <div className={`p-2 px-3 border-[1px] ${section === 'See'?'border-__brown': 'border-none'} rounded-md cursor-pointer border-solid font-bold`} onClick={() => setSection('See')}>See</div>
                </div>
            </div>
            <div className={section === 'See'? 'hidden':'block'}>
                <h2>Details</h2>
                <p>Add the brand here</p>
                <hr/>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Name/الاسم</Form.Label>
                                <Form.Control defaultValue={name} type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required/>
                            </Form.Group>
                        </Row>
                        <h2>Picture</h2>
                        <p>Add the picture here</p>
                        <hr/>
                        <div className="flex gap-2">
                        <div className="p-2 w-[300px] h-[200px] overflow-hidden">
                                <div
                                    className="border border-primary rounded p-4 text-center flex justify-center items-center flex-col w-full h-full"
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
                            </div>
                                {selectedImage && (
                                    <div className="text-center mt-3 flex justify-center items-center flex-col">
                                        <div className="w-[120px] h-[120px] overflow-hidden">
                                            <img src={selectedImage} className='w-full h-full object-cover'/>
                                        </div>
                                        <Button variant="danger" className="mt-2" onClick={() => removeImage(selectedImage)}>Delete</Button>
                                    </div>
                                )}
                            </div>
                            <div className="mt-4" onClick={handleAddPics}>
                                <MainButton name={('Add') +' picture'}/>
                            </div>
                    </Form>
                    <div className="mt-4" onClick={createBrand}>
                        <MainButton name={('Add') +' brand'}/>
                    </div>
                    {error && <div className="p-2 px-3 mt-3 rounded-md bg-red-300 text-red-900">{error}</div>}
                    {success && <div className="p-2 px-3 mt-3 rounded-md bg-green-300 text-green-900">{success}</div>}
            </div>
            <div className={section !== 'See'? 'hidden':'block'}>
                <h2>All brands</h2>
                <div className="mt-4 flex gap-5">
                {brands && brands?.map((e, i) => <div key={i} className={`border-[1px] border-__brown border-solid rounded-[16px] flex justify-center items-center flex-col w-[209px] h-[180px] duration-300 md:hover:scale-95 cursor-pointer relative`}>
                    <FaTrash className="text-white w-[30px] h-[30px] rounded-md absolute right-[-10px] top-[-10px] z-50 bg-red-600 text-[1rem] p-2" onClick={() => setShowAlert(e)}/>
                    <div className="w-[100px] h-[100px]">
                        <img src={e.picture} alt={e.name+' brand'} className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-[18px] font-normal leading-[20px]">{e.name}</h1>
                </div>)}
                </div>
            </div>
            {showAlert && <div className='w-[400px] bg-white rounded-md absolute left-[50%] top-[20%] translate-x-[-50%] translate-y-[-50%] text-center px-3 py-5 z-50 border-[1px] border-__brown border-solid shadow-md shadow-[#ccc]'>
                <p>Are you sure you want delete this brand:</p>
                <p className='mt-[-10px] font-bold'>{showAlert.name}</p>
                <div className='flex justify-center items-center gap-3'>
                    <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => deleteItem(showAlert._id)}>Yes</div>
                    <div className='cursor-pointer duration-300 hover:scale-95 rounded-sm p-2 px-4 border-[1px] border-solid border-__brown' onClick={() => setShowAlert(false)}>No</div>
                </div>
            </div>}
        <ToastContainer />
        </DashBoard>
    )
}

export default AddBrand