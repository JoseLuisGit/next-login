import React from "react";

const Login = () => (
  <form>
    <div className="container">
      <h2>Login</h2>
      <label>
        <b>Correo Electronico</b>
      </label>
      <input type="email" placeholder="Correo Electronico" required />
      <label>
        <b>Contraseña</b>
      </label>
      <input type="password" placeholder="Enter Contraseña" required />
      <button type="submit">Iniciar Sesion</button>
    </div>

    <style jsx>
      {`
        form {
          border: 8px solid #f1f1f1;
          width: 500px;
          height: 300px;
        }

        h2 {
          text-align: center;
        }

        input {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          opacity: 0.8;
        }

        .container {
          padding: 16px;
        }
      `}
    </style>
  </form>
);
export default Login;
