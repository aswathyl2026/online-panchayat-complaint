import apiService from "../api/apiService";

export const getUserAPI=async()=>{
    return await apiService('GET','/users',{})
}

export const registerUserAPI=async(registerData)=>{
    return await apiService('POST','/users',registerData)
}

export const getAllComplaintAPI=async()=>{
    return await apiService('GET','/complaints',{})
}

export const getComplaintAPI=async(id)=>{
    return await apiService('GET',`/complaints/${id}`,{})
}

export const updateComplaintAPI=async(id,updateData)=>{
    return await apiService('PUT',`/complaints/${id}`,updateData)
}

export const addComplaintAPI=async(complaintData)=>{
    return await apiService('POST','/complaints',complaintData)
}
export const deleteComplaintAPI=async(id)=>{
    return await apiService('DELETE',`/complaints/${id}`)
}
