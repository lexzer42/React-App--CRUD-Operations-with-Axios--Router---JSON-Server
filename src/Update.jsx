import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Update( {setData} ) {
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setValues(res.data))
      .catch((error) => console.error(error));
    }
  }, [id]);

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

const handleUpdate = (event) => {
  event.preventDefault();
      axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then((res) => {
        console.log(res.data);
        navigate('/')
      })
      .catch((error) => console.error(error));
    
    };
    
  return (
  
  <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>{id ? "Editar un Usuario" : "Crear un Usuario"}</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Introduzca un nombre"
              value={values.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Introduzca su correo electronico"
              value={values.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Telefono:</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Introduzca su numero"
              value={values.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Introduzca su usuario"
              value={values.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              name="Website"
              className="form-control"
              placeholder="Introduzca su website"
              value={values.website || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address.street">Dirección:</label>
            <input
              type="text"
              name="address.street"
              className="form-control"
              placeholder="Introduzca su calle"
              value={values.address?.street || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address.city">Ciudad:</label>
            <input
              type="text"
              name="address.city"
              className="form-control"
              placeholder="Introduzca una ciudad"
              value={values.address?.city || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address.zipcode">Zipcode:</label>
            <input
              type="text"
              name="address.zipcode"
              className="form-control"
              placeholder="Introduzca un código postal"
              value={values.address?.zipcode || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
          {id ? "Actualizar" : "Crear"} </button>
          <Link to="/" className="btn btn-primary ms-3">
            Volver
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
