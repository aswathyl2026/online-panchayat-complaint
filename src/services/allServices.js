import apiService from "../api/apiService";

export const getUserAPI=async()=>{
    return await apiService('GET','/users',{})
}

export const registerUserAPI=async(registerData)=>{
    return await apiService('POST','/users',registerData)
}