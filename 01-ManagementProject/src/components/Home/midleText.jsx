import { useState, useEffect } from "react";

export default function MidleText() {
  const words = [
    "AI-Driven Insights",
    "Automation",
    "Smart Decisions",
    "Predictive Analytics",
    "Business Intelligence",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 150; // velocidade de digitação/apagamento
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!deleting) {
        // adiciona uma letra
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        // remove uma letra
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <section className="w-full bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Empower Your Business with{" "}
        <span className="text-blue-600 border-r-2 border-blue-600 animate-pulse">
          {text}
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover how Lumina's can transform your operations, enhance decision-making, and drive growth. 
        Join the revolution of intelligent business strategies today.
      </p>
    </section>
  );
}
