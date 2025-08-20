import { useState } from "react";

function FormContact() {
    const initialEmailData = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        text: "",
    }

    const [emailData, setEmailData] = useState(initialEmailData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Funzione per aggiornare lo stato dei campi
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
        console.log(emailData);

    };


    // Funzione per inviare la mail
    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("Invio in corso...");

        try {
            const response = await fetch(`${apiUrl}/send-email`, {
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
                }, 3000);
            } else {
                setMessage("");
                setErrors({
                    ...errors,
                    form: data.message,
                });
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
                        <label className="">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={emailData.name}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo nome"
                            required
                        />
                        {errors.name && <span className="">{errors.name}</span>}
                    </div>
                    <div className="primi">
                        <label className="">
                            Cognome
                        </label>
                        <input
                            type="text"
                            name="surname"
                            value={emailData.surname}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo cognome"
                            required
                        />
                        {errors.surname && <span className="error">{errors.surname}</span>}
                    </div>
                    <div className="primi">
                        <label className="">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={emailData.email}
                            onChange={handleChange}
                            placeholder="Scrivi la tua email"
                            required
                        />
                        {errors.email && <span className="">{errors.email}</span>}
                    </div>
                    <div className="primi">
                        <label className="">
                            Telefono
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={emailData.phone}
                            onChange={handleChange}
                            placeholder="Scrivi il tuo numero di telefono"
                            required
                        />
                        {errors.phone && <span className="">{errors.phone}</span>}
                    </div>
                </div>

                <div className="mess-area">
                    <label className="">
                        Messaggio
                    </label>
                    <textarea
                        name="text"
                        value={emailData.text}
                        onChange={handleChange}
                        placeholder="Scrivi il tuo messaggio"
                        required
                    ></textarea>
                    {errors.text && <span className="">{errors.text}</span>}
                </div>

                <button type="submit" disabled={loading} className="card-button form-button">
                    {loading ? "..." : "Invia Email"}
                </button>
            </form>
            {message && <p>{message}</p>}
            {errors.form && <div className="">{errors.form}</div>}
        </>
    )
}

export default FormContact;