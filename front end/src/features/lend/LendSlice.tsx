import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createLend, deleteLend, fetchLends, updateLend } from '../../services/Lend1';
import { Lend } from '../../models/lend';

export const getLends = createAsyncThunk("", async () => {
  const { data } = await fetchLends();
  return data;
});

export const postLend = createAsyncThunk(
  "Lend/post",
  async (newLend: Lend) => {
    const { data } = await createLend(newLend);
    return data;
  }
);

export const deleteLendById = createAsyncThunk(
  "Lend/delete",
  async (id: number) => {
    await deleteLend(id);
    return id;
  }
);


export const putLend = createAsyncThunk(
  "Lend/update",
  async (lend:Lend) => {
    const { data } = await updateLend(lend);
    return data;
  }
);
export interface LendState {
  historyLends: Array<Lend>,
    status:boolean
}

const initialState:LendState = {
  historyLends:[],
    status:false
}

export const LendSlice = createSlice({
  name: 'Lend',
  initialState,
  reducers: {
    addLend: (state, action: PayloadAction<any>) => {
      state.historyLends.push(action.payload)
    },
  },

  extraReducers: (builder) => {

    builder.addCase(getLends.fulfilled,(state, action: PayloadAction<any>)=>{
      state.historyLends=action.payload;
      state.status=false;
    })

    builder.addCase(getLends.pending,(state)=>{
      state.status=true;
    })

    builder.addCase(getLends.rejected,(state, action: PayloadAction<any>)=>{
  
    })
    builder.addCase(postLend.fulfilled,(state, action: PayloadAction<any>)=>{
      state.historyLends.push(action.payload);
    })
    // builder.addCase(deleteLendById.fulfilled,(state, action: PayloadAction<any>)=>{
    //   let Lends=state.HistoryLends.filter(x=>x.id!==action.payload)
    //   state.HistoryLends=Lends;
    // })
},
});
export const { addLend } = LendSlice.actions

export default LendSlice.reducer
