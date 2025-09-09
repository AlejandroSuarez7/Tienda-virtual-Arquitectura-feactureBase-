import React, { useState, useEffect } from "react";
import "./stylesDash.css";

export function DashboardPage() {
  const images = [
    "https://i.pinimg.com/1200x/91/c0/dd/91c0dd0d0e07c1e8c4d600aa99d63a6c.jpg",
    "https://i.pinimg.com/1200x/f9/f9/fc/f9f9fcd7c36754b3ca1d885179152781.jpg",
    "https://i.pinimg.com/736x/c8/01/b9/c801b9fd420e9271c208a545a3f64eb1.jpg",
    "https://i.pinimg.com/1200x/d0/61/ff/d061ffa683c6886636c464d5abfc7992.jpg",
    "https://i.pinimg.com/736x/8d/d2/95/8dd295d423a3d23079c941f04bf439a3.jpg",
    "https://i.pinimg.com/1200x/5c/55/5f/5c555ff7c7897b93c0af10ee15707b32.jpg",
    "https://i.pinimg.com/1200x/25/0c/03/250c035580c61f6fdbf10da26c05c425.jpg",
    "https://i.pinimg.com/736x/28/6f/8f/286f8ff2887212afbd0fdd8419b34b64.jpg",
    "https://i.pinimg.com/1200x/bd/d1/c2/bdd1c27b6f4b61aa3047d2366ddc46c2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 👇 Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4000ms = 4 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  return (
    <div className="dashboard-container">
      <h1 className="titulo">Bienvenido a Rugby Base</h1>
      <p className="subtitulo">
        Bienvenido a la implementación de referencia de la Tienda Online de Rugby.
      </p>

      <div className="carousel-container">
        <button className="btn-prev" onClick={prevSlide}>
          ⬅
        </button>

        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Rugby ${currentIndex}`} />
        </div>

        <button className="btn-next" onClick={nextSlide}>
          ➡
        </button>
      </div>
    </div>
  );
}
