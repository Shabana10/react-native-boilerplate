import axios from "axios";

export const getData = () => {
    return async (dispatch) => {
        const res = await axios.get(`http://10.0.2.2:8000/users`)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: "axios_data",
                    axiosData: res.data
                })
            })
    }
}
// post data //
export const postData = (obj) => {
    // console.log(obj);
    return async (dispatch) => {
       const res = await axios.post('http://10.0.2.2:8000/users', obj)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: 'post_data',
                    postData: res.data
                })
            }).catch((err) => {
                console.log('post error', err);
            })
        // axios({
        //     method: 'post',
        //     url: 'https://bookinghotelapi.herokuapp.com/users',
        //     data: obj,
        //     Accept: 'application/json',
        //     'Content-Type': 'multipart/form-data'
        //   })
        //   .then((res)=>{
        //       console.log(res.data);
        //   }).catch((err)=>{
        //       console.log(err);
        //   })
    }

}
//--- delete data ---- //
// export const deleteData = (id) => {
//     return async (dispatch) => {
//         await axios.delete(`https://bookinghotelapi.herokuapp.com/rooms/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch({
//                     type: 'delete_data',
//                     deletedata: res.data
//                 })
//             })
//     }
// }
//--------- update ------------//

// export const updateData = (obj) =>{
//     const {_id} = obj
//     return async (dispatch) =>{
//         await axios.put(`https://bookinghotelapi.herokuapp.com/rooms/${_id}`, obj)
//         .then((res)=>{
//             dispatch({
//                 type: 'update_data',
//                 updatedata:  res.data
//             })
//         })
//     }
// }
