// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext, useState } from "react";
import "./Items.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { itemService } from "../services/Auth_services";
import Search from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

const Items = () => {
  // eslint-disable-next-line no-unused-vars
  const [filteredObjects, setFilteredObjects] = useState([]);
  const [objetos, setObjetos] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let arrayObject = [];

    itemService()
      .then((result) => {
        setObjetos(result);
        setFilteredObjects(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectorHandler = (event) => {
    console.log("Selector Value", event.target.value);
    setCategory(event.target.value);
    console.log("category", category);
  };

  useEffect(() => {
    console.log("UseEffect category", category);
    const copyArray = [...objetos];
    const resultCategory = copyArray.filter(
      (element) => element.category === category
    );
    console.log("category", category);
    console.log("result", resultCategory);
    setFilteredObjects(resultCategory);
  }, [category]);

  const ariaLabel = { "aria-label": "description" };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={category}
            onChange={(e) => selectorHandler(e)}
          >
            <MenuItem value="Kids">Kids</MenuItem>
            <MenuItem value="Shoes">Shoes</MenuItem>
            <MenuItem value="Computers">Computers</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          style={{ marginTop: 75 }}
        >
          <Input placeholder="Buscar Precio " inputProps={ariaLabel}></Input>
          <Search>
            <SearchIcon />
          </Search>
        </Box>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {filteredObjects?.length > 0 ? (
              filteredObjects.map((objeto, index) => (
                <tr key={index}>
                  <td>{objeto.product_name}</td>
                  <td>{objeto.price}</td>
                  <td>{objeto.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No hay películas en la Cartelera</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;
