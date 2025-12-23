import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Lock } from "lucide-react";
import Card from "../ui/Card";
import BackButton from "../ui/BackButton";
import PageHeader from "../ui/PageHeader";
import ImageWithFallback from "../ui/ImageWithFallback";
import { offers, previousOrders } from "../../data/tickets";

const price = (v) => `${v.toFixed(2).replace(".", ",")} CHF`;

const UI = {
  btnPrimary:
    "w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2",
  btnSecondary:
    "w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium transition",
  panel: "bg-gray-800 rounded-xl p-6",
  input:
    "w-full bg-gray-700 rounded-lg p-3 text-white border border-gray-600 focus:border-green-400 focus:outline-none",
};

export default function ZooTicketPurchaseFlow() {
  const [screen, setScreen] = useState("overview");
  const [cart, setCart] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const total = cart.reduce((s, i) => s + i.price, 0);

  /* ---------------- OVERVIEW ---------------- */
  if (screen === "overview")
    return (
      <div className="w-full max-w-2xl mx-auto">
        <PageHeader title="Ticket-Shop" />

        <Card className="p-6 mb-6">
          <h2 className="font-bold text-lg mb-3">Verfügbare Tickets</h2>
          <p className="text-gray-300 mb-4">
            Wähle aus einer Vielzahl von Ticket-Optionen
          </p>
          <button onClick={() => setScreen("offers")} className={UI.btnPrimary}>
            Tickets ansehen
          </button>
        </Card>

        <Card className="p-6">
          <h2 className="font-bold text-lg mb-3">Frühere Bestellungen</h2>
          {previousOrders.length === 0 ? (
            <p className="text-gray-400">Noch keine Bestellungen</p>
          ) : (
            <div className="space-y-2">
              {previousOrders.map((o) => (
                <div key={o.id} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span>{o.id}</span>
                    <span className="text-green-400">{price(o.total)}</span>
                  </div>
                  <p className="text-sm text-gray-400">{o.date}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    );

  /* ---------------- OFFERS ---------------- */
  if (screen === "offers")
    return (
      <div className="w-full max-w-2xl mx-auto">
        <BackButton onClick={() => setScreen("overview")} />
        <PageHeader title="Verfügbare Tickets" />

        <div className="space-y-4">
          {offers.map((o) => (
            <Card
              key={o.id}
              className="p-4 cursor-pointer"
              onClick={() => {
                setSelectedOffer(o);
                setScreen("details");
              }}
            >
              <div className="flex gap-4">
                <ImageWithFallback
                  src={o.image}
                  alt={o.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{o.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{o.description}</p>
                  <p className="text-green-400 font-bold text-lg">{price(o.price)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );

  /* ---------------- DETAILS ---------------- */
  if (screen === "details")
    return (
      <div className="w-full max-w-2xl mx-auto">
        <BackButton onClick={() => setScreen("offers")} />
        <PageHeader title={selectedOffer.title} />

        <ImageWithFallback
          src={selectedOffer.image}
          alt={selectedOffer.title}
          className="w-full h-48 rounded-xl object-cover mb-6"
        />

        <Card className="p-6 mb-6">
          <h2 className="font-bold text-lg mb-3">Beschreibung</h2>
          <p className="text-gray-300 mb-4">{selectedOffer.description}</p>

          <h3 className="font-bold mb-2">Leistungen</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {selectedOffer.includes.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </Card>

        <div className={`${UI.panel} mb-6`}>
          <p className="text-gray-400 mb-2">Preis</p>
          <p className="text-3xl font-bold text-green-400">
            {price(selectedOffer.price)}
          </p>
        </div>

        <button
          onClick={() => {
            setCart([...cart, selectedOffer]);
            setScreen("cart");
          }}
          className={UI.btnPrimary}
        >
          <Plus size={20} />
          In Warenkorb
        </button>
      </div>
    );

  /* ---------------- CART ---------------- */
  if (screen === "cart")
    return (
      <div className="w-full max-w-2xl mx-auto">
        <BackButton onClick={() => setScreen("offers")} />
        <PageHeader title="Warenkorb" />

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Ihr Warenkorb ist leer</p>
            <button onClick={() => setScreen("offers")} className={UI.btnPrimary}>
              Tickets ansehen
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {cart.map((i, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-4 flex justify-between">
                  <div>
                    <p>{i.title}</p>
                    <p className="text-green-400">{price(i.price)}</p>
                  </div>
                  <button
                    onClick={() => setCart(cart.filter((_, x) => x !== idx))}
                    className="text-red-400"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className={`${UI.panel} mb-6`}>
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Summe</span>
                <span className="text-2xl font-bold text-green-400">
                  {price(total)}
                </span>
              </div>
              <button onClick={() => setScreen("checkout")} className={UI.btnPrimary}>
                Zur Kasse
              </button>
            </div>

            <button onClick={() => setScreen("offers")} className={UI.btnSecondary}>
              Weitere Tickets hinzufügen
            </button>
          </>
        )}
      </div>
    );

  /* ---------------- CHECKOUT ---------------- */
  if (screen === "checkout")
    return (
      <div className="w-full max-w-2xl mx-auto">
        <BackButton onClick={() => setScreen("cart")} />
        <PageHeader title="Zahlung" />

        <Card className="p-6 mb-6">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Lock size={20} className="text-green-400" />
            Sichere Zahlung
          </h2>

          <div className="space-y-4 mb-6">
            <input placeholder="Kartennummer" className={UI.input} />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className={UI.input} />
              <input placeholder="CVV" className={UI.input} />
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 flex justify-between">
            <span className="text-gray-400">Summe</span>
            <span className="text-green-400 font-bold">{price(total)}</span>
          </div>

          <button onClick={() => setScreen("confirmation")} className={UI.btnPrimary}>
            Jetzt bezahlen
          </button>
        </Card>
      </div>
    );

  /* ---------------- CONFIRMATION ---------------- */
  return (
    <div className="w-full max-w-2xl mx-auto text-center py-12">
      <PageHeader title="Bestätigung" />
      <h2 className="text-2xl font-bold mb-2">Zahlung erfolgreich!</h2>
      <p className="text-gray-400 mb-6">Vielen Dank für deinen Kauf</p>

      <Card className="p-6 mb-6">
        {cart.map((i, k) => (
          <div key={k} className="flex justify-between mb-2">
            <span>{i.title}</span>
            <span>{price(i.price)}</span>
          </div>
        ))}
        <div className="border-t border-gray-700 pt-4 flex justify-between font-bold">
          <span>Gesamtbetrag</span>
          <span className="text-green-400">{price(total)}</span>
        </div>
      </Card>

      <button
        onClick={() => {
          setCart([]);
          setScreen("overview");
        }}
        className={UI.btnPrimary}
      >
        Zur Übersicht
      </button>
    </div>
  );
}