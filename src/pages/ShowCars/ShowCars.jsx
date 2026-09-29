import { useEffect, useState } from "react";
import DashBoard from "../dashBoard/dasBoard"
import { getCars } from "../../data/staticData";
import CarCard from "../../component/dashBoardComponent/dashBoardCar/carCard/carCard";


const ShowCars = () => {
    const [cars, setCars] = useState(getCars);
    const [isDelete, setDelete] = useState(false);
    useEffect(() => setCars(getCars()), [isDelete]);
    // Backend version retained: axios.get(API.GET.ALLCARSWITHOUTPAGE).then(res => setCars(res.data.cars));
    const total = cars.length;
    return (
        <DashBoard>
            <h1 className="mb-5 underline">Cars</h1>
            <h2 className="mb-[10px]">Total: <span className="text-__brown font-extrabold">{total}</span></h2>
            <h2 className="mb-[10px]"> Convertible: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Convertible').length}</span></h2>
            <h2 className="mb-[10px]"> Economy: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Economy').length}</span></h2>
            <h2 className="mb-[10px]"> Family: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Family').length}</span></h2>
            <h2 className="mb-[10px]"> Luxury: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Luxury').length}</span></h2>
            <h2 className="mb-[50px]"> Sport: <span className="text-__brown font-extrabold">{cars && cars?.filter(e => e.category === 'Sport').length}</span></h2>
            {cars.length === 0 && <h2>No Cars Yet</h2>}
            <div className="grid grid-cols-2 min-[1200px]:grid-cols-3 gap-5 animate-fade">
                {cars.map((car) => <CarCard key={car._id} car={car} setDelete={setDelete}/>)}
            </div>
        </DashBoard>
    )
}

export default ShowCars
