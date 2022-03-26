// const INITIAL_STATE = {
//     users: [
//         {
//             user_name: 'Anum',
//             password: '12345678'
//         }
//     ]
// }

// export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'axios_data':
//             state.axios_data = action.axiosData
//             return { ...state,
//             users: [...state.users, state.axios_data]
//             }
//         case 'post_data':
//             state.post_data = action.postData
//             return { ...state }
//         case 'delete_data':
//             state.delete_data = action.deletedata
//             return { ...state }
//         case 'update_data':
//             state.update_data = action.updatedata
//             return { ...state }

//         default:
//             return {
//                 state
//             }

//     }
// }

let initialState = {
    users: []
}

function userreducer(state = initialState , action) {
    switch (action.type) {
        case "axios_data":
            // state.axios_data = action.axiosData;
            console.log(action.payload);
      return {
          ...state,
          users: [...state.users, ...action.payload]
      }
    //   case 'axios_data':
//             state.axios_data = action.axiosData
//             return { ...state,
//             users: [...state.users, state.axios_data]
//             }
        default:
            return state
    }
}

export default userreducer