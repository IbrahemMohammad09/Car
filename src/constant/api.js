const url = 'https://cars-carage.onrender.com/api';

const API = {
    GET: {
        ALLBOOKINGS: url+'/bookings/page/',
        ONEBOOKING: url+'/bookings/',
        ALLCARS: url+'/cars/page/',
        ONECAR: url+'/cars/',
        ALLBRANDS: url+'/brands',
        ONEBRAND: url+'/brands/',
    },
    POST: {
        LOGIN: url+'/users/login',
        LOGOUT: url+'/users/logout',
        BOOKING: url+'/bookings/create/',
        BRAND: url+'/brands/create/',
        CAR: url+'/cars/create/',        
    },
    PUT: {
        ACCEPTBOOKING: url+'/bookings/accept/',
        REGECTBOOKING: url+'/bookings/reject/',
        BOOKING: url+'/bookings/update/',
        BRAND: url+'/brands/update/',
        CAR: url+'/cars/update/', 
    }, 
    DELETE: {
        BOOKING: url+'/bookings/delete/',
        BRAND: url+'/brands/delete/',
        CAR: url+'/cars/delete/',
    }
}

export default API