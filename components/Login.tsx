"use client"
import Link from "next/link";
import { useState } from "react";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Login con correo: ${email}, contraseña: ${password}`);
    // Add logic for user login
    // You might want to make an API call or handle login here
    onClose(); // Close the modal after login
  };

  return (
    <div>
      <div>
        <h2>Iniciar sesion</h2>
        <label htmlFor="email">Correo: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar Sesion</button>
        <p>
          No tienes cuenta?
          <Link href="./registro" passHref>
            Registrate
          </Link>
        </p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Login;