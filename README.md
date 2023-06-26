# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Como iniciar el programa
Lo mas importante es instalar node_modules usamos el siguiente comando: npm install

1- usar el siguiente comando para activar JSON SERVER :  json-server --watch db.json  
// --port #### puedes elegir un port o ir por el predeterminado

2- usar el siguiente comando para activar la app:  npm start   
obs: si no te deja ejecutar puede ser que el json server haya agarrado el port:3000 si es asi puedes escribir Y para que cambie el puerto de la aplicacion de desarrollo a 3001
esto "Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para verlo. La página se recargará automáticamente cuando hagas cambios en el código.\
También puedes ver los errores de lint (si existen) en la consola del navegador."

## Resumen de los pasos que seguí  para crear el CRUD con una explicación breve de cada uno: 

1.	Creamos una API REST en JSON Server: JSON Server es una herramienta que nos permite simular una API REST a partir de un archivo JSON. Creamos un archivo db.json con algunos datos y ejecutamos JSON Server con el comando json-server --watch db.json --port 3000.
2.	Configurar React Router: React Router es una biblioteca que nos permite manejar el enrutamiento en aplicaciones de React. Configuramos nuestro enrutador en el archivo App.js, estableciendo las rutas para las distintas páginas.
3.	Crear la página de inicio (Home): Creamos un componente Home que muestra una lista de usuarios obtenida de la API. Para esto, utilizamos axios para hacer la solicitud GET a la URI http://localhost:3000/users.
4.	Crear la página de creación (Create): Creamos un componente Create que muestra un formulario para crear un nuevo usuario. Utilizamos axios para hacer la solicitud POST a la API.
5.	Crear la página de leer (Read): Página que muestra los detalles de un usuario específico obtenidos de la API.
6.	Update: Página de actualización que muestra un formulario prefilled para editar los datos de un usuario existente.
7.	Delete: Funcionalidad para eliminar un usuario específico utilizando una solicitud DELETE a la API.


## Un resumen actualizado con las librerías y herramientas que utilizamos en el proyecto: 

•	React: Biblioteca de JavaScript que nos permite construir interfaces de usuario reactivas y escalables.
•	React Router: Biblioteca de enrutamiento para React que nos permite manejar la navegación entre distintas páginas en una aplicación de una sola página (SPA).
•	Axios: Biblioteca de JavaScript que nos permite hacer solicitudes HTTP desde el cliente a la API.
•	JSON Server: Herramienta que nos permite simular una API REST a partir de un archivo JSON. Lo utilizamos para la creación de nuestra API sin necesidad de un servidor.
•	Tailwind CSS: Framework de CSS que nos permite diseñar y personalizar interfaces de usuario de manera rápida y sencilla, gracias a sus clases predefinidas.
Además, en cuanto al uso de navigate y Link, estas son herramientas que utilizamos para manejar la navegación entre distintas páginas en React Router. Link se utiliza para crear vínculos a otras páginas en la aplicación y navigate para redirigir a otra ruta.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


