import React, { useState } from "react";
import { ArrowLeft, Heart, Share2, MapPin, Search, SlidersHorizontal } from "lucide-react";

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  );
}

// Sample event data
const eventsData = [
  {
    id: 1,
    title: "Fütterung der Löwen",
    description: "Erleben Sie die majestätischen Löwen aus nächster Nähe",
    date: "21. Juni 2025",
    time: "14:00 - 15:00 Uhr",
    location: "Löwengehege",
    fullDescription:
      "Erleben Sie die majestätischen Löwen bei ihrer täglichen Fütterung. Unser erfahrener Tierpfleger wird Ihnen interessante Fakten über die Ernährung und das Verhalten dieser beeindruckenden Raubtiere erzählen.\n\nDie Fütterung bietet eine einzigartige Gelegenheit, die Löwen in Aktion zu sehen und mehr über ihre natürlichen Instinkte zu erfahren. Bitte seien Sie pünktlich, da die Veranstaltung genau nach Zeitplan beginnt.",
    imageUrl:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Pinguinparade",
    description: "Beobachten Sie die tägliche Pinguinparade im Eishaus",
    date: "22. Juni 2025",
    time: "11:00 - 11:30 Uhr",
    location: "Eishaus",
    fullDescription:
      "Die beliebte Pinguinparade ist ein Highlight für Besucher jeden Alters. Sehen Sie, wie unsere Pinguine ihren täglichen Spaziergang durch das Eishaus machen.\n\nUnser Zoopädagoge erzählt Ihnen währenddessen Wissenswertes über diese faszinierenden Vögel und ihren natürlichen Lebensraum. Die perfekte Gelegenheit für tolle Fotos!",
    imageUrl:
      "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Elefanten-Workshop",
    description: "Lernen Sie mehr über unsere grauen Riesen",
    date: "23. Juni 2025",
    time: "13:00 - 14:30 Uhr",
    location: "Elefantenhaus",
    fullDescription:
      "In diesem Workshop lernen Sie alles über die Pflege und den Schutz unserer Elefanten. Erfahren Sie, wie wir uns um das Wohlbefinden dieser intelligenten Tiere kümmern.\n\nDer Workshop beinhaltet eine Führung durch die normalerweise nicht zugänglichen Bereiche des Elefantenhauses und eine Demonstration der täglichen Trainingseinheiten. Geeignet für Erwachsene und Kinder ab 12 Jahren.",
    imageUrl:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Reptilien hautnah",
    description: "Faszinierende Einblicke in die Welt der Reptilien",
    date: "24. Juni 2025",
    time: "15:00 - 16:00 Uhr",
    location: "Reptilienhaus",
    fullDescription:
      "Überwinden Sie Ihre Angst vor Schlangen und anderen Reptilien in dieser informativen Veranstaltung. Unsere Experten zeigen Ihnen verschiedene Arten und erklären deren Bedeutung für das Ökosystem.\n\nSie haben die Möglichkeit, einige harmlose Arten unter Aufsicht zu berühren und mehr über ihre faszinierende Anatomie zu lernen. Ein unvergessliches Erlebnis für Groß und Klein!",
    imageUrl:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Giraffenfütterung",
    description: "Füttern Sie unsere Giraffen aus nächster Nähe",
    date: "25. Juni 2025",
    time: "10:00 - 11:00 Uhr",
    location: "Giraffenanlage",
    fullDescription:
      "Erleben Sie die sanften Riesen aus nächster Nähe und füttern Sie sie mit speziell vorbereitetem Futter. Eine einmalige Gelegenheit, diese majestätischen Tiere zu berühren und zu füttern.\n\nLernen Sie mehr über die verschiedenen Giraffenarten und die Herausforderungen, mit denen sie in freier Wildbahn konfrontiert sind. Ideal für Familien mit Kindern!",
    imageUrl:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Nachtsafari",
    description: "Entdecken Sie den Zoo bei Nacht",
    date: "26. Juni 2025",
    time: "21:00 - 23:00 Uhr",
    location: "Haupteingang",
    fullDescription:
      "Erleben Sie den Zoo in einer völlig anderen Atmosphäre - bei Nacht! Beobachten Sie nachtaktive Tiere in ihrem Element und erfahren Sie, wie sich der Zoo nach Einbruch der Dunkelheit verändert.\n\nDie Tour wird mit Taschenlampen durchgeführt und von erfahrenen Zooführern begleitet. Bitte bringen Sie festes Schuhwerk mit und kleiden Sie sich dem Wetter entsprechend. Nicht geeignet für Kinder unter 8 Jahren.",
    imageUrl:
      "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

// Hauptkomponente
export default function ZooEventsApp() {
  const [selectedView, setSelectedView] = useState("eventsList"); // "eventsList" or "eventDetail"
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showEventDetail = (event) => {
    setSelectedEvent(event);
    setSelectedView("eventDetail");
  };

  const backToEventsList = () => {
    setSelectedView("eventsList");
  };

  const filteredEvents = eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative flex flex-col w-full h-full bg-gray-900 text-white overflow-hidden">
      {/* Background animal silhouettes */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64">
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M80,50 C80,30 65,15 45,15 C25,15 10,30 10,50 C10,70 25,85 45,85 C65,85 80,70 80,50 Z M45,30 C50,30 55,35 55,40 C55,45 50,50 45,50 C40,50 35,45 35,40 C35,35 40,30 45,30 Z M20,40 C25,40 25,50 20,50 C15,50 15,40 20,40 Z M70,40 C75,40 75,50 70,50 C65,50 65,40 70,40 Z M45,60 C55,60 65,65 65,75 C55,85 35,85 25,75 C25,65 35,60 45,60 Z" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M10,30 C10,20 20,10 30,10 C40,10 50,20 50,30 C50,40 40,50 30,50 C20,50 10,40 10,30 Z M30,20 C35,20 35,25 30,25 C25,25 25,20 30,20 Z M70,30 C70,20 80,10 90,10 C100,10 110,20 110,30 C110,40 100,50 90,50 C80,50 70,40 70,30 Z M90,20 C95,20 95,25 90,25 C85,25 85,20 90,20 Z M30,60 C40,60 50,70 50,80 C50,90 40,100 30,100 C20,100 10,90 10,80 C10,70 20,60 30,60 Z M30,70 C35,70 35,75 30,75 C25,75 25,70 30,70 Z M90,60 C100,60 110,70 110,80 C110,90 100,100 90,100 C80,100 70,90 70,80 C70,70 80,60 90,60 Z M90,70 C95,70 95,75 90,75 C85,75 85,70 90,70 Z" />
          </svg>
        </div>
      </div>

      {selectedView === "eventsList" ? (
        <EventsListView
          events={filteredEvents}
          onEventClick={showEventDetail}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      ) : (
        <EventDetailView event={selectedEvent} onBackClick={backToEventsList} />
      )}
    </div>
  );
}

// Events List View Component
function EventsListView({ events, onEventClick, searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {/* Header with logo, title, and search */}
      <div className="flex flex-col px-6 pt-6 pb-4 sticky top-0 bg-gray-900 z-10">
        {/* Logo */}
        <div className="flex items-center mb-4">
          <div className="text-2xl font-bold text-green-500">
            Zooh!
            <span className="text-white">.</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">Events</h1>

        {/* Search and Filter */}
        <div className="flex space-x-2 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Attraktionen, Events suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
          </div>
          <button className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:bg-gray-700">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-2 gap-4 px-4 pb-20">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => onEventClick(event)} />
        ))}
      </div>
    </div>
  );
}

// Event Card Component
function EventCard({ event, onClick }) {
  return (
    <div
      className="flex flex-col rounded-2xl bg-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full"
      onClick={onClick}
    >
      {/* Event Image */}
      <div className="h-32 relative">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-sm leading-tight mb-1">{event.title}</h3>
        <p className="text-xs text-gray-300 mb-2 flex-1">{event.description}</p>
        <div className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full inline-block self-start">
          {event.date}
        </div>
      </div>
    </div>
  );
}

// Event Detail View Component
function EventDetailView({ event, onBackClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const shareEvent = () => {
    alert("Event teilen Funktion würde hier geöffnet werden");
  };

  if (!event) return null;

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {/* Header Image */}
      <div className="relative w-full h-64">
        <ImageWithFallback
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90"></div>
        <button
          className="absolute top-4 left-4 p-2 rounded-full bg-black bg-opacity-50 text-white"
          onClick={onBackClick}
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Event Information */}
      <div className="flex flex-col p-6 -mt-10 relative z-10">
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>

        <div className="flex flex-col space-y-2 mb-6">
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span>{event.date}</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span>{event.time}</span>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <MapPin size={20} color="#10B981" />
            </div>
            <span>{event.location}</span>
          </div>
        </div>

        <div className="mb-6">
          {event.fullDescription.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-8">
          <button
            onClick={toggleFavorite}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center ${
              isFavorite ? "bg-green-600" : "bg-green-500"
            } hover:bg-green-600 transition-colors`}
          >
            <Heart size={20} className={`mr-2 ${isFavorite ? "fill-white" : ""}`} />
            <span>{isFavorite ? "Als Favorit gespeichert" : "Als Favorit speichern"}</span>
          </button>

          <button
            onClick={shareEvent}
            className="py-3 px-4 rounded-lg flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <Share2 size={20} />
          </button>
        </div>

        {/* Mini Map */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Standort</h3>
          <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Zoo Map"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <MapPin size={16} color="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 px-3">
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
