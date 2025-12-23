import { useMemo, useState } from "react";
import Card from "../ui/Card.jsx";
import BackButton from "../ui/BackButton.jsx";
import PageHeader from "../ui/PageHeader.jsx";
import ImageWithFallback from "../ui/ImageWithFallback.jsx";
import { previousOrders } from "../../data/tickets";
import {
  Bell,
  Calendar,
  Check,
  CreditCard,
  Download,
  Edit2,
  FileQuestion,
  Globe,
  Heart,
  HelpCircle,
  Key,
  LogOut,
  Mail,
  Phone,
  QrCode,
  Save,
  Send,
  Settings,
  Shield,
  Ticket,
  Upload,
  User,
} from "lucide-react";


export default function ProfileApp({
  userName = "Eldi Cian Emin",
  userEmail = "eldi.cian.emin@beispiel.com",
  selfCheckInEnabled = true,
}) {
  const [page, setPage] = useState("profile");
  const [history, setHistory] = useState([]);
  const [detail, setDetail] = useState(null);

  const navigateTo = (next, item) => {
    setHistory((h) => [...h, page]);
    setPage(next);
    setDetail(item ?? null);
  };

  const goBack = () =>
    setHistory((h) => {
      if (!h.length) return h;
      const prev = h[h.length - 1];
      setPage(prev);
      setDetail(null);
      return h.slice(0, -1);
    });

  const mockTickets = useMemo(
    () => [
      { id: 1, name: "Tagesticket Erwachsene", date: "15.06.2026", price: "19,90 CHF", qrCode: "T1234567" },
      { id: 2, name: "Tagesticket Kind", date: "15.06.2026", price: "9,90 CHF", qrCode: "T7654321" },
      { id: 3, name: "Abendticket Zoo-Nacht", date: "20.05.2026", price: "24,90 CHF", qrCode: "T8765432" },
      { id: 4, name: "Jahreskarte Premium", date: "01.01.2026", price: "89,90 CHF", qrCode: "T9876543" },
    ],
    []
  );

  const mockEvents = useMemo(
    () => [
      {
        id: 1,
        name: "Pinguinfuetterung",
        date: "20.06.2026",
        time: "14:00",
        image:
          "https://images.unsplash.com/photo-1598439210625-358bf20590ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Erleben Sie die tägliche Fütterung unserer Pinguinkolonie",
      },
      {
        id: 2,
        name: "Nachtsafari",
        date: "25.06.2026",
        time: "21:00",
        image:
          "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Entdecken Sie den Zoo bei Nacht",
      },
    ],
    []
  );

  const ProfilePage = () => {
    const menu = [
      { key: "tickets", title: "Meine Tickets", Icon: Ticket, action: () => navigateTo("tickets") },
      { key: "events", title: "Meine Events", Icon: Calendar, action: () => navigateTo("events") },
      { key: "favorites", title: "Favoriten", Icon: Heart, action: () => navigateTo("favorites") },
      { key: "settings", title: "Einstellungen", Icon: Settings, action: () => navigateTo("settings") },
      { key: "support", title: "Hilfe & Support", Icon: HelpCircle, action: () => navigateTo("support") },
    ];

    return (
      <>
        <PageHeader title="Mein Profil" />

        <div className="bg-gray-800 rounded-xl p-6 mb-8 flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center border-2 border-green-400">
            <User size={48} className="text-gray-400" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">{userName}</h2>
            <p className="text-gray-400">{userEmail}</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {menu.map((m) => (
            <Card key={m.key} onClick={m.action} className="p-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <m.Icon className="text-green-400" size={24} />
                </div>
                <h3 className="font-bold">{m.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        <button className="w-full bg-red-600/20 hover:bg-red-600/30 text-red-400 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition">
          <LogOut size={20} />
          <span>Abmelden</span>
        </button>
      </>
    );
  };

  const TicketsPage = () => (
    <>
      <BackButton onClick={goBack} />
      <PageHeader title="Meine Tickets" />

      <div className="space-y-4">
        {mockTickets.map((t) => (
          <Card key={t.id} onClick={() => navigateTo("ticketDetail", t)} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-400">Gekauft am {t.date}</p>
                <p className="text-green-400 font-medium">{t.price}</p>
              </div>
              <QrCode size={24} className="text-green-400" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  const TicketDetailPage = ({ ticket }) => (
    <>
      <BackButton onClick={goBack} />
      <PageHeader title="Ticket Details" />

      <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg mb-6">
          <QrCode size={180} className="text-gray-900" />
        </div>

        <h2 className="text-xl font-bold mb-1">{ticket?.name}</h2>
        <p className="text-gray-400 mb-4">Gekauft am {ticket?.date}</p>
        <p className="text-green-400 font-medium mb-6">{ticket?.price}</p>

        <div className="bg-gray-700 rounded-lg p-4 w-full mb-6">
          <p className="text-sm text-gray-300">Besucher</p>
          <p className="font-medium">{userName}</p>
        </div>

        <div className="flex gap-4 w-full">
          <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition">
            <Save size={18} />
            <span>In Kalender speichern</span>
          </button>
          <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition">
            <Download size={18} />
            <span>Als PDF herunterladen</span>
          </button>
        </div>
      </div>
    </>
  );

  const EventsPage = () => (
    <>
      <BackButton onClick={goBack} />
      <PageHeader title="Meine Events" />

      <div className="space-y-4">
        {mockEvents.map((e) => (
          <Card
            key={e.id}
            onClick={() => navigateTo("eventDetail", e)}
            className="overflow-hidden p-0"
          >
            <div className="h-36 overflow-hidden">
              <ImageWithFallback src={e.image} alt={e.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{e.name}</h3>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <Calendar size={14} className="mr-1" />
                <span>{e.date}, {e.time} Uhr</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  const EventDetailPage = ({ event }) => {
    const [fav, setFav] = useState(true);

    return (
      <>
        <BackButton onClick={goBack} />

        <div className="rounded-xl overflow-hidden mb-4">
          <div className="h-48 overflow-hidden">
            <ImageWithFallback src={event?.image} alt={event?.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">{event?.name}</h1>

        <div className="flex items-center text-gray-300 mb-6">
          <Calendar size={16} className="mr-2" />
          <span>{event?.date}, {event?.time} Uhr</span>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 mb-6">
          <p className="text-gray-300">{event?.description}</p>
        </div>

        <button
          className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition ${
            fav ? "bg-red-500/20 hover:bg-red-500/30 text-red-400" : "bg-gray-700 hover:bg-gray-600 text-white"
          }`}
          onClick={() => setFav((v) => !v)}
        >
          <Heart size={18} fill={fav ? "currentColor" : "none"} />
          <span>{fav ? "Favorit entfernen" : "Favorit speichern"}</span>
        </button>
      </>
    );
  };

  const FavoritesPage = () => (
    <>
      <BackButton onClick={goBack} />
      <PageHeader title="Favoriten" />

      <h2 className="font-bold text-xl mb-4">Gespeicherte Orte</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Aquarium", icon: "🐠" },
          { name: "Affenhaus", icon: "🐒" },
          { name: "Elefantengehege", icon: "🐘" },
          { name: "Terrarium", icon: "🦎" },
        ].map((l, i) => (
          <Card key={i} className="p-4 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">{l.icon}</div>
            <h3 className="font-bold">{l.name}</h3>
          </Card>
        ))}
      </div>
    </>
  );

  const SettingsPage = () => {
    const items = [
      { id: "profile", name: "Profil bearbeiten", icon: User },
      { id: "password", name: "Passwort aendern", icon: Key },
      { id: "language", name: "Sprache", icon: Globe },
      { id: "notifications", name: "Benachrichtigungen", icon: Bell },
    ];

    return (
      <>
        <BackButton onClick={goBack} />
        <PageHeader title="Einstellungen" />

        <div className="space-y-4">
          {items.map(({ id, name, icon: Icon }) => (
            <Card key={id} className="p-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold">{name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </>
    );
  };

  const SupportPage = () => {
    const [message, setMessage] = useState("");

    return (
      <>
        <BackButton onClick={goBack} />
        <PageHeader title="Hilfe & Support" />

        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">Kontaktformular</h3>

          <div className="space-y-4 mb-6">
            <input
              type="text"
              value={userName}
              disabled
              className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600"
            />
            <input
              type="email"
              value={userEmail}
              disabled
              className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition">
            <Send size={18} />
            <span>Nachricht senden</span>
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">Kontakt</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-green-400" />
              <div>
                <h4 className="font-medium">Telefon</h4>
                <p className="text-gray-300">+41 79 000 00 00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-green-400" />
              <div>
                <h4 className="font-medium">E-Mail</h4>
                <p className="text-gray-300">support@zooh.ch</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const pages = {
    profile: <ProfilePage />,
    tickets: <TicketsPage />,
    ticketDetail: <TicketDetailPage ticket={detail} />,
    events: <EventsPage />,
    eventDetail: <EventDetailPage event={detail} />,
    favorites: <FavoritesPage />,
    settings: <SettingsPage />,
    support: <SupportPage />,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,30 C60,20 80,20 90,30 C100,40 100,60 90,70 C80,80 60,80 50,70 C40,60 40,40 50,30 Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-3xl relative z-10">
        {pages[page] ?? pages.profile}
      </div>
    </div>
  );
}
