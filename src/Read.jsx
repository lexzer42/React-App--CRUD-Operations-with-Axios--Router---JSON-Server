import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:3000/users/${id}`)
        .then(res => setData(res.data))
        .catch(err => {
          console.log(err);
          console.log(err.response);
          setData({}); // indicamos un objeto vacío en caso de que la llamada falle
        });
      }, 1000);
    }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detalles del usuario</h3>
        <div className="mb-2">
        <strong>Nombre: {data.name || "N/A"}</strong>
        </div>
        <div className="mb-2">
        <strong>Email: {data.email || "N/A"}</strong>
        </div>
        <div className="mb-2">
        <strong>Telefono: {data.phone || "N/A"}</strong>
        </div>
        <div className="mb-2">
        <strong>Usuario: {data.username || "N/A"}</strong>
        </div>
        <div className="mb-2">
        <strong>Website: {data.website || "N/A"}</strong>
        </div>
          <div className="mb-3">
          <strong>Direccion: {data.address?.street || "N/A"}</strong>
          </div>
          <div className="mb-2">
          <strong>Ciudad: {data.address?.city || "N/A"}</strong>
          </div>
          <div className="mb-2">
          <strong>Código postal: {data.address?.zipcode || "N/A"}</strong>
          </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Editar
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default Read;
