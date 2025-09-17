import React from "react";
import "./nosotros.css"; // estilos modernos para esta sección

function Nosotros() {
    return (
        <div className="nosotros-container">
        {/* Encabezado */}
        <section className="nosotros-header">
            <h1>🏉 Rugby Base</h1>
            <p>
            Pasión, disciplina y trabajo en equipo: en <strong>Rugby Base</strong> 
            creemos que el rugby es más que un deporte, es una forma de vida.
            </p>
        </section>

        {/* Misión y visión */}
        <section className="nosotros-mision-vision">
            <div className="card">
            <img src="https://i0.wp.com/www.laescueladeemprendedores.com/wp-content/uploads/2014/04/Misi%C3%B3n.png?fit=384%2C385&ssl=1" alt="Misión Rugby" />
            <h2>Nuestra Misión</h2>
            <p>
                Inspirar a las nuevas generaciones a practicar rugby, fomentando los valores de respeto, 
                compromiso y esfuerzo en cada entrenamiento y partido.
            </p>
            </div>
            <div className="card">
            <img src="https://cefolog.weebly.com/uploads/5/8/4/8/58488755/vision-pagina_orig.png" alt="Visión Rugby" />
            <h2>Nuestra Visión</h2>
            <p>
                Ser la comunidad de referencia para jugadores y aficionados de rugby en Latinoamérica, 
                llevando el deporte a cada rincón y formando campeones dentro y fuera de la cancha.
            </p>
            </div>
        </section>

        {/* Valores */}
        <section className="nosotros-valores">
            <h2>⚡ Nuestros Valores</h2>
            <div className="valores-grid">
            <div className="valor-card">💪 Disciplina</div>
            <div className="valor-card">🤝 Trabajo en equipo</div>
            <div className="valor-card">🔥 Pasión</div>
            <div className="valor-card">🏆 Superación</div>
            </div>
        </section>

        {/* Equipo */}
        <section className="nosotros-equipo">
            <h2>👥 Conoce al Equipo</h2>
            <div className="equipo-grid">
            <div className="equipo-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Entrenador" />
                <h3>Carlos Gómez</h3>
                <p>Entrenador Principal</p>
            </div>
            <div className="equipo-card">
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Capitana" />
                <h3>Laura Fernández</h3>
                <p>Capitana del Equipo</p>
            </div>
            <div className="equipo-card">
                <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Preparador físico" />
                <h3>Andrés Ramírez</h3>
                <p>Preparador Físico</p>
            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="nosotros-cta">
            <h2>¿Quieres unirte a Rugby Base?</h2>
            <p>Vive la experiencia del rugby en su máxima expresión. ¡Forma parte de nuestra familia!</p>
            <button className="btn-cta">Únete Ahora</button>
        </section>
        </div>
    );
    }

export default Nosotros;
