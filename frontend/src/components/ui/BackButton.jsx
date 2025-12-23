import { ChevronLeft } from "lucide-react";

export default function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-4 transition"
    >
      <ChevronLeft size={20} />
      <span>Zurück</span>
    </button>
  );
}
