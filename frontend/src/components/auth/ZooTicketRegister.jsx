import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff } from "lucide-react";
import { SPRING } from "../../lib/anim";
import Card from "../ui/Card";
import PageHeader from "../ui/PageHeader";

const FormField = ({ label, id, type = "text", value, onChange, hint, error }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
      placeholder={hint}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const FormMotion = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ...SPRING, delay }}
  >
    {children}
  </motion.div>
);

export default function ZooTicketRegister({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Benutzername und Passwort erforderlich");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const success = onLogin(username, password);
      setLoading(false);

      if (!success) {
        setError("Benutzername oder Passwort ist falsch.");
        setPassword("");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 flex flex-col">
      <PageHeader title="Zooh! App" />

      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Anmelden</h2>
            <p className="text-gray-400">Willkommen zurück!</p>
          </div>

          {error && (
            <motion.div
              className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormMotion delay={0}>
              <FormField
                label="Benutzername"
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                hint="admin"
              />
            </FormMotion>

            <FormMotion delay={0.1}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Passwort
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </FormMotion>

            <FormMotion delay={0.2}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                {loading ? "Wird angemeldet..." : "Anmelden"}
              </button>
            </FormMotion>
          </form>

          <FormMotion delay={0.3}>
            <p className="text-center text-xs text-gray-400">
              Login Daten: admin / 1234
            </p>
          </FormMotion>
        </Card>
      </motion.div>
    </div>
  );
}
