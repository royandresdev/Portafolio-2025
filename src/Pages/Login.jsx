
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Aquí se integrará la lógica de Supabase
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-400">
      <form
        onSubmit={handleSubmit}
        className="bg-primary-600 p-8 rounded shadow-lg flex flex-col gap-6 min-w-[320px] w-full max-w-xs"
      >
        <h2 className="text-primary-100 text-2xl font-bold text-center mb-4">Iniciar sesión</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-primary-100 text-sm">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-primary-100 text-sm">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
            autoComplete="current-password"
          />
        </div>
        {error && (
          <div className="text-error text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="bg-secondary-base text-primary-400 font-semibold py-2 rounded hover:bg-secondary-200 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
export default Login
