import { useEffect, useState } from "react";
import DashBoard from "../dashBoard/dasBoard"
import API from "../../constant/api";
import Loading from "../../component/SharedComponents/Loading/Loading";
import axios from "axios";
import CarCard from "../../component/dashBoardComponent/dashBoardCar/carCard/carCard";


const ShowCars = () => {
    const [cars, setCars] = useState([]);
    const [isDelete, setDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        setLoading(true);
        axios.get(API.GET.ALLCARSWITHOUTPAGE, {
            'Contet-Type': 'application/json',
        })
            .then(res => {
                if(res?.data?.state === 'success') {
                    setLoading(false);
                    setCars(res?.data?.cars);
                    setTotal(res?.data?.count);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    }, [isDelete, page]);
    return (
        <DashBoard>
            <h1 className="mb-5 underline">Cars</h1>
            <h2 className="mb-[10px]">Total: <span className="text-__brown font-extrabold">{total}</span></h2>
            <h2 className="mb-[10px]"> Convertible: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Convertible').length}</span></h2>
            <h2 className="mb-[10px]"> Economy: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Economy').length}</span></h2>
            <h2 className="mb-[10px]"> Family: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Family').length}</span></h2>
            <h2 className="mb-[10px]"> Luxury: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Luxury').length}</span></h2>
            <h2 className="mb-[50px]"> Sport: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Sport').length}</span></h2>
            <Loading loading={loading} style={'absolute left-[50%] top-[50%] translate-x-[-50%]'}/>
            {!loading && cars && cars?.length==0 && <h2>No Cars Yet</h2>}
            <div className="grid grid-cols-2 min-[1200px]:grid-cols-3 gap-5 animate-fade">
                {!loading && cars && cars?.map((car, i) => <CarCard key={i} car={car} setDelete={setDelete}/>)}
            </div>
        </DashBoard>
    )
}

export default ShowCars