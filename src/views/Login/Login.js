import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Usuario:
          <input type="text" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;