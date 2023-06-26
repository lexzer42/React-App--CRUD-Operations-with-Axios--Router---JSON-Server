import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/users")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, 1000);
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("¿Quieres borrar estos datos?");
    if (confirm) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          setReload(true);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (reload) window.location.reload();
  }, [reload]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1 className="mb-4 text-3xl font-extrabold text-emerald-500 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-gray-900 dark:text-gray-700">Lista de</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-blue-400">
          Usuarios
        </span>
      </h1>
      <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
        Hecho por Oscar Rojas
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="d-flex flex-column justify-content-between align-items-end mb-3">
          <Link
            to="/create"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 rounded inline-block">
            Agregar usuario
          </Link>
        </div>

        <table className="table-auto w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Numero
              </th>
              <th scope="col" className="px-6 py-3">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Direccion
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              const {
                id,
                name,
                email,
                phone,
                username,
                website,
                address: { street, suite, city, zipcode },
              } = d;

              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={i}>
                  <td className="px-6 py-4">{id}</td>
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{email}</td>
                  <td className="px-6 py-4">{phone}</td>
                  <td className="px-6 py-4">{username}</td>
                  <td className="px-6 py-4">{website}</td>
                  <td className="px-6 py-4">
                    {street}, {suite}, {city}, {zipcode}
                  </td>
                  <td>
                    <Link
                      to={`/read/${d.id}`}
                      className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Información
                    </Link>
                    <Link
                      to={`/update/${d.id}`}
                      className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Editar
                    </Link>
                    <button
                      onClick={(e) => handleDelete(d.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Borrar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
