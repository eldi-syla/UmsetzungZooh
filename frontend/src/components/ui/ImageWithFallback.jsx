import { useState } from "react";

export default function ImageWithFallback({ src, alt, className = "" }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#4b5563" />
        <circle cx="200" cy="130" r="40" fill="#6b7280" />
        <path d="M80 300 Q200 200 320 300" fill="#6b7280" />
      </svg>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}
