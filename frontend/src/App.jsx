import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";
import ZooTicketRegister from "./components/auth/ZooTicketRegister.jsx";
import ZooTicketPurchaseFlow from "./components/tickets/ZooTicketPurchaseFlow.jsx";
import ZooEventsApp from "./components/events/ZooEventsApp.jsx";
import ZooMapScreens from "./components/map/ZooMapScreens.jsx";
import ZooInfoPage from "./components/info/ZooInfoPage.jsx";
import ProfileApp from "./components/profile/ProfileApp.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("purchase");

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("zooAppAuth");
    const savedUser = localStorage.getItem("zooAppUser");
    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      const userData = { username: "admin", role: "ADMIN" };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem("zooAppAuth", "true");
      localStorage.setItem("zooAppUser", JSON.stringify(userData));
      setScreen("purchase");
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("zooAppAuth");
    localStorage.removeItem("zooAppUser");
  };

  // If not authenticated, show only login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <ZooTicketRegister onLogin={handleLogin} />
      </div>
    );
  }

  const SCREENS = {
    profile: ProfileApp,
    purchase: ZooTicketPurchaseFlow,
    events: ZooEventsApp,
    map: ZooMapScreens,
    info: ZooInfoPage,
  };

  const NAV_BUTTONS = [
    { key: "profile", label: "Profil" },
    { key: "purchase", label: "Ticket-Flow" },
    { key: "events", label: "Events" },
    { key: "map", label: "Karte" },
    { key: "info", label: "Infos" },
  ];

  const Component = SCREENS[screen];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 border-b border-gray-800 text-sm">
        <div className="flex flex-wrap gap-2">
          {NAV_BUTTONS.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setScreen(btn.key)}
              className={`px-2 py-1 rounded transition ${
                screen === btn.key ? "bg-green-500 text-white" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs">Hallo, {user?.username}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition text-sm"
          >
            <LogOut size={16} />
            Abmelden
          </button>
        </div>
      </div>

      <div className="p-4">
        <Component />
      </div>
    </div>
  );
}

export default App;
