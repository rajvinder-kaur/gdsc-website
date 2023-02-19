import {createSlice} from "@reduxjs/toolkit";

const initialState =  ["https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png"];


const postSlice = createSlice({
    name:'images',
    initialState,
    reducers:{}
})

export const selectALL  = (state)=> state.images


export default postSlice.reducer