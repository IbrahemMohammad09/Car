import './dashBoardCar.css' 


function DashBoardCar (){
    
    
    return(
        <div>
            <div className='car-header'>
                <h1>DashBoard</h1>
                <div className="search-container">
                    <button className="search-button" >
                    🔍
                    </button>
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search fo a type..."
                        
                    />
                </div>
                
            </div>
        </div>
    );
}


export default DashBoardCar