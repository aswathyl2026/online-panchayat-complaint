import axios from 'axios'
const axiosInstance= axios.create({
    baseURL:"https://panchayath-backend.onrender.com",
    timeout:5000
})

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("respone recieved")
        return response},
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("unauthorized access.. redirect to login,...");  
            }
             else if(status==404){
                console.log("API not found");  
            }
             else if(status==500){
                console.log("server error");  
            }
             else if(error.request){
                console.log("no response from server");  
            }
            else{
                console.log("error :"+error.message);
                
            }
            return Promise.reject(error)
        }
    }

)

export default axiosInstance