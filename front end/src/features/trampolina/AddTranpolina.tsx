import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDispatch, RootState } from "../../app/store";
import { Trampolina } from "../../models/trampolina";
import { User }  from "../../models/user";
import { addTrampolina, postTrampolina } from "./TrampolinaSlice";

const AddTrampolina = () => {
  const dispatch:AddDispatch=useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newTrampolina:Trampolina={
    id: (data.get('id'))?.toString(),
    name: (data.get('name'))?.toString(), 
    description: (data.get('description'))?.toString(),
      price: (data.get('price'))?.toString(),
      categoryId: (data.get('categoryId'))?.toString(),
      image: (data.get('image'))?.toString(),
  }
dispatch(postTrampolina(newTrampolina))
alert("הטרמפולינה נוספה בהצלחה")
  };

  return (
    <div className="size">
       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="id"
                  required
                  fullWidth
                  id="id"
                  label="id"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="description"
                  name="description"
                  required
                  fullWidth
                  id="description"
                  label="description"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="price"
                  name="price"
                  required
                  fullWidth
                  id="price"
                  label="price"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="categoryId"
                  label="categoryId"
                  name="categoryId"
                  autoComplete="categoryId"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                  label="image"
                  id="image"
                  autoComplete="image"
                />
              </Grid>
              <Grid item xs={3}>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הוסף טרמפולינה
            </Button>
              </Grid>
            </Grid>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
      </div>
  );
};
export default AddTrampolina;