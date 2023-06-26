import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create({ setData }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    website: "",
    address: "",
    street: "",
    city: "",
    zipcode: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setValues((values) => ({
        ...values,
        [parent]: { ...values[parent], [child]: value },
      }));
    } else {
      setValues((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res.data);
        setData((data) => [...data, res.data]); // <-- actualiza la lista de usuarios con la nueva respuesta
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Agregar a un Usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Ingrese su nombre"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Ingrese su email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Telefono:</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Ingrese su numero"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Ingrese su usuario"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              name="website"
              className="form-control"
              placeholder="Ingrezca su website"
              value={values.website}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address.street">Dirección:</label>
            <input
              type="text"
              name="address.street"
              className="form-control"
              placeholder="Ingrese su dirección"
              value={values.address.street}
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-2">
            <label htmlFor="address.city">Ciudad:</label>
            <input
              type="text"
              name="address.city"
              className="form-control"
              placeholder="Ingrese su ciudad"
              value={values.address.city}
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-2">
            <label htmlFor="address.zipcode">Zipcode:</label>
            <input
              type="number"
              name="address.zipcode"
              className="form-control"
              placeholder="9595"
              value={values.address.zipcode}
              onChange={handleChange}
            />
            
          </div>
          <button className="btn btn-success">Enviar</button>
          <Link to="/" className="btn btn-primary ms-3">
            Volver
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
