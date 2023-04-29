import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createUser, deleteUser, fetchUsers, updateUser } from '../../services/User1';
import { User } from '../../models/user';

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const { data } = await fetchUsers();
  return data;
});

// export const loginUser = createAsyncThunk(
//   "user/post",
//   async (newUser: User) => {
//     const { data } = await login(newUser);
//     return data;
//   }
// );

export const postUser = createAsyncThunk(
  "user/post",
  async (newUser: User) => {
    const { data } = await createUser(newUser);
    return data;
  }
);

export const deleteUserById = createAsyncThunk(
  "user/delete",
  async (id: number) => {
    await deleteUser(id);
    return id;
  }
);


export const putUser = createAsyncThunk(
  "User/update",
  async (user:User) => {
    const { data } = await updateUser(user);
    return data;
  }
);
export interface UserState {
  Users: Array<User>,
    status:boolean
    currentUser:User
    loginUser:any
}

const initialState:UserState = {
  Users:[],
    status:false,
    currentUser:{id:0, firstName:"", lastName:"",mail:"", password:"", phoneNumber:"",status:0, tz:""},
    loginUser:{}
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    upDateCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload
      state.Users.push(action.payload)
    },
    saveUser:(state,action: PayloadAction<any>)=>{state.currentUser=action.payload}
  },


  extraReducers: (builder) => {

    builder.addCase(getUsers.fulfilled,(state, action: PayloadAction<Array<any>>)=>{
      console.log(typeof action.payload[0])
      state.Users=action.payload;
      state.status=false;
    });
    builder.addCase(postUser.fulfilled,(state, action: PayloadAction<User>)=>{
      state.Users.push(action.payload)
      state.currentUser = action.payload
      state.status=false;
    });
    // builder.addCase(deleteUserById.fulfilled,(state, action: PayloadAction<any>)=>{
    //   let Users=state.Users.filter(x=>x.id!==action.payload)
    //   state.Users=Users;
    // });
    // builder.addCase(loginUser.fulfilled,(state, action: PayloadAction<any>)=>{
    //   state.currentUser=action.payload;
    // })
},
});
export const { upDateCurrentUser,saveUser } = UserSlice.actions

export default UserSlice.reducer
