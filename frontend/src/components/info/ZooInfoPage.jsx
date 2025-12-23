import { CreditCard, MapPin, Phone, Mail, Globe, ShoppingBag, Battery, Utensils } from "lucide-react";
import Card from "../ui/Card";

export default function ZooInfoPage() {
  const InfoCard = ({ title, children }) => (
    <Card className="p-4 mb-4">
      <h2 className="text-xl font-semibold mb-3 text-green-400">{title}</h2>
      {children}
    </Card>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,30 C60,20 80,20 90,30 C100,40 100,60 90,70 C80,80 60,80 50,70 C40,60 40,40 50,30 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="flex justify-center mb-6 mt-4">
          <div className="text-3xl font-bold text-white">
            Zoo<span className="text-green-400">h!</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">Informationen</h1>

        <InfoCard title="Allgemeines">
          <p className="text-gray-300">
            Der Zooh! liegt im Herzen der Stadt und bietet auf über 35 Hektar
            Fläche ein einzigartiges Tiererlebnis. Mit mehr als 600 Tierarten
            aus allen Kontinenten, darunter seltene und bedrohte Spezies,
            ist unser Zoo ein Zentrum für Artenschutz und Bildung.
          </p>
        </InfoCard>

        <InfoCard title="Oeffnungszeiten">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Montag–Freitag:</span>
              <span className="text-green-400">09:00–18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Wochenende:</span>
              <span className="text-green-400">09:00–19:00</span>
            </div>
            <div className="flex justify-between">
              <span>Feiertage:</span>
              <span className="text-green-400">Spezielle Zeiten</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Self Check-in">
          <div className="flex items-center gap-3">
            <CreditCard className="text-green-400" size={24} />
            <p className="text-gray-300">
              Selbstständiger Eintritt für Besucher ab 18 Jahren
            </p>
          </div>
        </InfoCard>

        <InfoCard title="Regeln & Sicherheit">
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Tiere nicht füttern</li>
            <li>Nur auf markierten Wegen laufen</li>
            <li>Kinder unbedingt begleiten</li>
            <li>Keine Drohnen erlaubt</li>
            <li>Rauchen nur in gekennzeichneten Bereichen</li>
          </ul>
        </InfoCard>

        <InfoCard title="Barrierefreiheit">
          <p className="text-gray-300">
            Unser Zoo ist vollständig barrierefrei. Es gibt rollstuhlgerechte Wege,
            Rampen, Aufzüge und behindertengerechte Toiletten.
          </p>
        </InfoCard>

        <InfoCard title="Services im Zoo">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center bg-gray-700 rounded-lg p-3 gap-2">
              <Battery className="text-green-400" size={20} />
              <span className="text-sm">Powerbanks</span>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-3 gap-2">
              <Utensils className="text-green-400" size={20} />
              <span className="text-sm">Restaurants</span>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-3 gap-2">
              <CreditCard className="text-green-400" size={20} />
              <span className="text-sm">Erste Hilfe</span>
            </div>
            <div className="flex items-center bg-gray-700 rounded-lg p-3 gap-2">
              <ShoppingBag className="text-green-400" size={20} />
              <span className="text-sm">Souvenirshop</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Kontakt">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-400" size={20} />
              <span className="text-gray-300">Zoostrasse 1, 8000 Zürich</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-400" size={20} />
              <span className="text-gray-300">+41 79 000 00 00</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-400" size={20} />
              <span className="text-gray-300">info@zooh.ch</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-green-400" size={20} />
              <span className="text-gray-300">www.zooh.ch</span>
            </div>
          </div>
        </InfoCard>

        <div className="h-10"></div>
      </div>
    </div>
  );
}
