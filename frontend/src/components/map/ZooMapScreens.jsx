import { useState } from "react";
import { ArrowLeft, Search, Plus, Minus, MapPin } from "lucide-react";
import Card from "../ui/Card";

export default function ZooMapScreens({ zooName = "Zoo Zuerich" }) {
  const [currentScreen, setCurrentScreen] = useState("preview");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const Icons = {
    location: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4C21.5 4 13 12.5 13 23C13 30.2 18.1 39.3 28.3 50.4C29.9 52.1 31.5 53.8 33 55.5C33.3 55.8 33.7 56 34 56C34.3 56 34.7 55.8 35 55.5C36.5 53.8 38.1 52.1 39.7 50.4C49.9 39.3 55 30.2 55 23C55 12.5 46.5 4 36 4H32Z" stroke="white" strokeWidth="2" />
        <circle cx="32" cy="23" r="8" stroke="white" strokeWidth="2" fill="none" />
        <path d="M32 15C27.6 15 24 18.6 24 23C24 27.4 27.6 31 32 31C36.4 31 40 27.4 40 23C40 18.6 36.4 15 32 15Z" fill="#4ade80" />
      </svg>
    ),
    zoo: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="48" height="40" rx="4" stroke="white" strokeWidth="2" />
        <line x1="8" y1="28" x2="56" y2="28" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M38 24C38 24 42 20 46 24C50 28 46 36 46 36H38V32C38 32 34 34 30 32C26 30 26 24 30 22C34 20 38 24 38 24Z" fill="#4ade80" />
      </svg>
    ),
    powerbank: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="12" width="32" height="40" rx="4" stroke="white" strokeWidth="2" />
        <rect x="22" y="18" width="20" height="8" rx="2" stroke="white" strokeWidth="2" />
        <rect x="24" y="44" width="16" height="4" rx="1" stroke="white" strokeWidth="2" />
        <path d="M32 26L26 36H32L30 44L38 32H32L34 26H32Z" fill="#4ade80" />
      </svg>
    ),
  };

  if (currentScreen === "preview") {
    return (
      <div className="w-full max-w-md p-4 mx-auto">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Zoo Icons</h2>
          <div className="flex justify-between items-center mb-6 gap-4">
            {["location", "zoo", "powerbank"].map((icon) => (
              <div
                key={icon}
                onClick={() => setSelectedIcon(selectedIcon === icon ? null : icon)}
                className={`flex flex-col items-center cursor-pointer p-2 rounded-lg ${
                  selectedIcon === icon ? "bg-gray-700" : ""
                }`}
              >
                <div className="mb-2">{Icons[icon]}</div>
                <span className="text-xs text-center">
                  {icon === "location" && "Standort"}
                  {icon === "zoo" && "Zoo"}
                  {icon === "powerbank" && "Powerbank"}
                </span>
              </div>
            ))}
          </div>

          {selectedIcon && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-2">
                {selectedIcon === "location" && "Standort des Zoos"}
                {selectedIcon === "zoo" && "Zoo & Allgemeines"}
                {selectedIcon === "powerbank" && "Powerbank Verleih"}
              </h3>
              <p className="text-sm text-gray-300">
                {selectedIcon === "location" && "Zeigt den Standort des Zoos auf der Karte an."}
                {selectedIcon === "zoo" && "Allgemeine Informationen und Uebersicht des Zoos."}
                {selectedIcon === "powerbank" && "Hier koennen Sie eine Powerbank ausleihen."}
              </p>
            </div>
          )}
        </Card>

        <div className="flex gap-3">
          <button
            onClick={() => setCurrentScreen("fullMap")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
          >
            Zoo Karte öffnen
          </button>
          <button
            onClick={() => setCurrentScreen("location")}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition"
          >
            Standort
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "fullMap") {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="bg-gray-800 p-4 flex items-center gap-4">
          <button
            onClick={() => setCurrentScreen("preview")}
            className="hover:bg-gray-700 p-2 rounded-full"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">{zooName} Karte</h1>
          <div className="ml-auto relative hidden md:block">
            <input
              type="text"
              placeholder="Ort im Zoo suchen..."
              className="bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="bg-gray-800 w-16 flex flex-col items-center py-4 space-y-4">
            {[
              { emoji: "🌊", label: "Aquarium" },
              { emoji: "🦁", label: "Loewen" },
              { emoji: "🐘", label: "Elefanten" },
              { emoji: "🐒", label: "Affen" },
              { emoji: "🦎", label: "Reptilien" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mb-1">
                  <span className="text-xs">{item.emoji}</span>
                </div>
                <span className="text-xs text-center">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex-1 relative bg-gray-700 overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="800" height="600" fill="#2d3748" />
              <path d="M100,100 C150,150 200,120 250,150 C300,180 350,150 400,200 C450,250 500,200 550,250 C600,300 650,250 700,300" stroke="#4ade80" strokeWidth="8" fill="none" />
              <circle cx="150" cy="150" r="40" fill="#3182ce" opacity="0.7" />
              <text x="150" y="155" textAnchor="middle" fill="white" fontWeight="bold">Aquarium</text>
              <circle cx="300" cy="200" r="45" fill="#d97706" opacity="0.7" />
              <text x="300" y="205" textAnchor="middle" fill="white" fontWeight="bold">Loewen</text>
              <circle cx="500" cy="150" r="50" fill="#6b7280" opacity="0.7" />
              <text x="500" y="155" textAnchor="middle" fill="white" fontWeight="bold">Elefanten</text>
              <circle cx="650" cy="250" r="45" fill="#047857" opacity="0.7" />
              <text x="650" y="255" textAnchor="middle" fill="white" fontWeight="bold">Affen</text>
              <circle cx="200" cy="350" r="40" fill="#10b981" opacity="0.7" />
              <text x="200" y="355" textAnchor="middle" fill="white" fontWeight="bold">Reptilien</text>
              <circle cx="100" cy="500" r="30" fill="#4ade80" opacity="0.7" />
              <text x="100" y="505" textAnchor="middle" fill="white" fontWeight="bold">Eingang</text>
            </svg>

            <div className="absolute bottom-4 right-4 flex flex-col bg-gray-800 rounded-lg shadow-lg">
              <button className="p-2 hover:bg-gray-700">
                <Plus size={20} />
              </button>
              <div className="w-full h-px bg-gray-600"></div>
              <button className="p-2 hover:bg-gray-700">
                <Minus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Location screen
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-gray-800 p-4 flex items-center gap-4">
        <button
          onClick={() => setCurrentScreen("preview")}
          className="hover:bg-gray-700 p-2 rounded-full"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">{zooName} Standort</h1>
      </div>

      <div className="flex-1 relative bg-gray-700 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="800" height="600" fill="#1f2937" />
          <g stroke="#374151" strokeWidth="1">
            {[100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map((y, i) => (
              <line key={`h-${i}`} x1="50" y1={y} x2="750" y2={y} />
            ))}
            {[100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700].map((x, i) => (
              <line key={`v-${i}`} x1={x} y1="50" x2={x} y2="550" />
            ))}
          </g>
          <path d="M50,300 L750,300" stroke="#4b5563" strokeWidth="6" />
          <path d="M400,50 L400,550" stroke="#4b5563" strokeWidth="6" />
          <circle cx="400" cy="200" r="40" fill="#4ade80" opacity="0.8" stroke="white" strokeWidth="3" />
          <text x="400" y="205" textAnchor="middle" fill="white" fontWeight="bold">{zooName}</text>
        </svg>

        <div className="absolute bottom-4 left-4 bg-gray-800 p-3 rounded-lg shadow-lg max-w-xs">
          <div className="flex items-center mb-2">
            <MapPin className="text-green-500 mr-2" size={20} />
            <span className="font-medium">{zooName}</span>
          </div>
          <p className="text-sm text-gray-300">Hier befindet sich dein Zoo</p>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col bg-gray-800 rounded-lg shadow-lg">
          <button className="p-2 hover:bg-gray-700">
            <Plus size={20} />
          </button>
          <div className="w-full h-px bg-gray-600"></div>
          <button className="p-2 hover:bg-gray-700">
            <Minus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
