
import { useState } from "react";
import { supabase } from "../shared/lib/supabase";
import useApplication from "../hooks/useApplication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useApplication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else if (data && data.user) {
      setError("");
      handleLogin(data.user);
      // Aquí puedes redirigir o mostrar mensaje de éxito
    }
    setLoading(false);
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
          className="bg-secondary-base text-primary-400 font-semibold py-2 rounded hover:bg-secondary-200 transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
export default Login
