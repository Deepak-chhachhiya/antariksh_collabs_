import * as api from "../API/index";


export const uploadImages=(images)=>async(dispatch)=>{
    try {
        dispatch({type:"UPLOADING_IMAGES"});
        const {data}=await api.uploadImages(images);
        dispatch({type:"UPLOADING_IMAGES_FINISHED"});
        console.log({data});
    } catch (error) {
        console.log({error});        
    }
}

export const fetchGallery=(d)=>async(dispatch)=>{
    try {
        dispatch({type:"FETCHING_IMAGES"});
        const {data}=await api.fetchGallery(d);
        dispatch({type:"FETCH_IMAGES",payload:data.images});
        console.log({data});
        dispatch({type:"FETCHING_IMAGES_FINISHED"});
    } catch (error) {
        console.log({error});
    }
}

export const fetchTotalPageCount=()=>async(dispatch)=>{
    try {
        // dispatch({type:"FETCHING_IMAGES"});
        const {data:{pageCount}}=await api.fetchTotalPageCount();
        console.log({pageCount});
        dispatch({type:"FETCH_TOTAL_PAGE_COUNT",payload:pageCount});
        // dispatch({type:"FETCHING_IMAGES_FINISHED"});
    } catch (error) {
        console.log({error});
    }
}