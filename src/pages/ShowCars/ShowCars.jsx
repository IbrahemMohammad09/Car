import { useEffect, useState } from "react";
import DashBoard from "../dashBoard/dasBoard"
import API from "../../constant/api";
import Loading from "../../component/SharedComponents/Loading/Loading";
import axios from "axios";
import CarCard from "../../component/dashBoardComponent/dashBoardCar/carCard/carCard";
import MainButton from "../../component/SharedComponents/MainButton/MainButton";

const ShowCars = () => {
    const [cars, setCars] = useState([]);
    const [isDelete, setDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLCARS+page, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    console.log(res.data.cars);
                    setLoading(false);
                    setCars(res?.data?.cars);
                    setTotal(res?.data?.total);
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, [isDelete, page]);
    return (
        <DashBoard>
            <h1 className="mb-5 underline">Cars</h1>
            <Loading loading={loading} style={'absolute left-[50%] top-[50%] translate-x-[-50%]'}/>
            <div className="grid grid-cols-2 min-[1200px]:grid-cols-3 gap-5">
                {!loading && cars && cars?.map((car, i) => <CarCard key={i} car={car} setDelete={setDelete}/>)}
            </div>
            {!loading && total > 0 && <div className="mx-auto mt-5 w-fit flex gap-2">
                {
                    page != 1 &&
                    <div onClick={() => setPage(page!=1?page-=1: 1)}>
                        <MainButton name={'Prev '+ (page-1)}/>
                    </div>
                }
                {
                    page != Math.ceil(total / 50) &&
                <div onClick={() => setPage(page != Math.ceil(total / 50)?page+=1: page)}>
                    <MainButton name={'Next '+ (page+1)}/>
                </div>
                }
            </div>
            }
        </DashBoard>
    )
}

export default ShowCars