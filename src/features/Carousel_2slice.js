import { createSlice } from "@reduxjs/toolkit";

const initialState = [`Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.` , `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`, `Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
Excepturi nam cupiditate culpa doloremque deleniti repellat.`]

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers:{}
})

export default reviewSlice.reducer