import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contacto = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const newErrors = {};
        const formData = new FormData(form.current);

        if (!formData.get("user_name").trim()) {
        newErrors.user_name = "Por favor ingresa tu nombre.";
        }

        const email = formData.get("user_email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
        newErrors.user_email = "El email es obligatorio.";
        } else if (!emailRegex.test(email)) {
        newErrors.user_email = "El email no es válido.";
        }

        if (!formData.get("message").trim()) {
        newErrors.message = "Escribe un mensaje antes de enviar.";
        }

        return newErrors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
        }

        emailjs
        .sendForm("service_xhj6hbi", "template_1uhxkwc", form.current, {
            publicKey: "8VxeEfM1LOhWv4dfu",
        })
        .then(
            () => {
            setSuccessMessage("✅ ¡Mensaje enviado con éxito!");
            setErrors({});
            form.current.reset();
            },
            (error) => {
            setSuccessMessage("❌ Error al enviar el mensaje.");
            console.error("FAILED...", error.text);
            }
        );
    };

    return (
        <div className="contact-container">
        <h2 className="contact-title">Contáctanos</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Nombre</label>
            <input type="text" name="user_name" />
            {errors.user_name && <span className="error">{errors.user_name}</span>}

            <label>Email</label>
            <input type="email" name="user_email" />
            {errors.user_email && <span className="error">{errors.user_email}</span>}

            <label>Mensaje</label>
            <textarea name="message" rows="5" />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="btn-submit">Enviar</button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default Contacto;
