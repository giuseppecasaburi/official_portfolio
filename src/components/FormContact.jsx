import { useState } from "react";

function FormContact() {
    const initialEmailData = {
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        message: "",
        policy: true,
    }

    const [emailData, setEmailData] = useState(initialEmailData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Funzione per aggiornare lo stato dei campi
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEmailData({ ...emailData, [name]: type === "checkbox" ? checked : value });
    };


    // Funzione per inviare la mail
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("Invio in corso...");

        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message);
                setErrors({});
                setEmailData(initialEmailData);

                setTimeout(() => {
                    setMessage("");
                }, 5000);
            } else {
                setMessage("");
                setErrors({
                    ...errors,
                    type: data.type,
                    message: data.message,
                });
                console.log(errors);
            }
        } catch (error) {
            console.error("Errore:", error);
            setMessage("Errore nell'invio dell'email.");
        }

        setLoading(false);
    };


    return (
        <>
            <form onSubmit={sendEmail} className="">
                <div className="user-data">
                    <div className="primi">
                        <label htmlFor="name" className="">
                            Nome*
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={emailData.name}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo nome"
                            required
                        />
                        {errors.type == "name" ? <p className="error">{errors.message}</p> : null}
                    </div>
                    <div className="primi">
                        <label htmlFor="surname" className="">
                            Cognome
                        </label>
                        <input
                            type="text"
                            name="surname"
                            value={emailData.surname}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo cognome"
                        />
                        {errors.type == "surname" ? <p className="error">{errors.message}</p> : null}
                    </div>
                    <div className="primi">
                        <label htmlFor="email" className="">
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={emailData.email}
                            onChange={handleChange}
                            placeholder="Scrivi la tua email"
                            required
                        />
                        {errors.type == "email" ? <p className="error">{errors.message}</p> : null}
                    </div>
                    <div className="primi">
                        <label htmlFor="phoneNumber" className="">
                            Telefono
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={emailData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo numero di telefono"
                        />
                        {errors.type == "phoneNumber" ? <p className="error">{errors.message}</p> : null}
                    </div>
                </div>

                <div className="mess-area">
                    <label htmlFor="message" className="">
                        Messaggio*
                    </label>
                    <textarea
                        name="message"
                        value={emailData.message}
                        onChange={handleChange}
                        placeholder="Scrivi il tuo messaggio"
                        required
                    ></textarea>
                    {errors.type == "message" ? <p className="error">{errors.message}</p> : null}
                </div>

                <div className="policy-area">
                    <input
                        type="checkbox"
                        name="policy"
                        id="policy"
                        checked={emailData.policy}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="policy"> Acconsento al trattamento dei miei dati personali ai sensi della <a href="./privacy_policy__form_di_contatto.pdf" target="_blank"
                        rel="noopener noreferrer">Privacy Policy</a>.</label>
                </div>

                <p className="notify">I campi contrassengati dal simbolo * sono obbligatori</p>
                <button type="submit" disabled={loading} className="card-button form-button">
                    {loading ? "..." : "Invia Email"}
                </button>
                {message && <p className="success">{message}</p>}
                {errors.type == "generic" ? <p className="error">{errors.message}</p> : null}
            </form>
        </>
    )
}

export default FormContact;