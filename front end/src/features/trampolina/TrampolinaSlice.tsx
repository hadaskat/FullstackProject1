import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Trampolina } from '../../models/trampolina';
import { createTrampolina, deleteTrampolina, fetchTrampolinas, updateTrampolina } from '../../services/Trampolina1';

export const getTrampolinas = createAsyncThunk("", async () => {
  const { data } = await fetchTrampolinas();
  return data;
});

export const postTrampolina = createAsyncThunk(
  "trampolina/post",
  async (newTrampolina: Trampolina) => {
    const { data } = await createTrampolina(newTrampolina);
    return data;
  }
);

export const deleteTrampolinaById = createAsyncThunk(
  "trampolina/delete",
  async (id: number) => {
    await deleteTrampolina(id);
    return id;
  }
);


export const putTrampolina = createAsyncThunk(
  "Trampolina/update",
  async (trampolina:Trampolina) => {
    const { data } = await updateTrampolina(trampolina);
    return data;
  }
);
export interface TrampolinaState {
    Trampolinas: Array<Trampolina>,
    cart:Array<Trampolina>,
    status:boolean,
    newValue:number | Array<number> |any

}

const initialState:TrampolinaState = {
    Trampolinas:[],
    cart:[],
    status:false,
    newValue:[]
}

export const TrampolinaSlice = createSlice({
  name: 'Trampolina',
  initialState,
  reducers: {
    addTrampolina: (state, action: PayloadAction<any>) => {
      state.Trampolinas.push(action.payload)
    },
     saveTrampolina:(state,action: PayloadAction<Trampolina>)=>{
      console.log(action.payload)
      state.cart.push(action.payload)
    },
    removeCart: (state, action: PayloadAction<any>) => {
      state.cart=[]
    },
  },

  extraReducers: (builder) => {

    builder.addCase(getTrampolinas.fulfilled,(state, action: PayloadAction<any>)=>{
      state.Trampolinas=action.payload;
      state.status=false;
    })

    builder.addCase(getTrampolinas.pending,(state)=>{
      state.status=true;
    })

    builder.addCase(getTrampolinas.rejected,(state, action: PayloadAction<any>)=>{
  
    })
    builder.addCase(postTrampolina.rejected,(state, action: PayloadAction<any>)=>{
      state.Trampolinas=action.payload;
      state.status=false;
    })
    builder.addCase(deleteTrampolinaById.fulfilled,(state, action: PayloadAction<any>)=>{
      let Trampolinas=state.Trampolinas.filter(x=>x.id!==action.payload)
      state.Trampolinas=Trampolinas;
    })
},
});
export const { addTrampolina, saveTrampolina,removeCart } = TrampolinaSlice.actions

export default TrampolinaSlice.reducer