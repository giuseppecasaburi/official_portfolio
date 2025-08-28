const projects = [
        {
            name: "MoovieMood",
            logo: "./img/mooviemood/logo.png",
            link_demo: "https://mooviemood.netlify.app/",
            link_repo: "https://github.com/giuseppecasaburi/final_project_front_end",
            descrizione: "🎬 MoovieMood è una web app Full-Stack realizzata come progetto finale per il corso di    specializzazione Boolean. In questo post vi presento il lato utente dell’app, pensato per offrire un'esperienza di navigazione fluida, intuitiva e coinvolgente anche per utenti non autenticati. \n👉 L’interfaccia si articola in 7 pagine principali, progettate per guidare l’utente passo dopo passo nella scoperta di film in base al proprio mood.Ogni passaggio è accompagnato da animazioni leggere per rendere l’esperienza ancora più piacevole. \n\n🔧 Tecnologie utilizzate(Front - end):\n   - React.js e React Router v6 per l’architettura a componenti ed una gestione chiara e ordinata delle rotte;\n   - Framer Motion per transizioni animate fluide tra le pagine; \n   - Axios per la comunicazione con il backend, con gestione centralizzata degli errori; \n   - Select2 per una selezione avanzata nei filtri di ricerca; \n   - CSS3 e Bootstrap per uno stile pulito e responsive. \n\n🔍 Funzionalità principali lato utente: \n   - Ricerca avanzata di film e registi con aggiornamento in tempo reale; \n   - Filtri dinamici che modificano URL e parametri senza ricaricare la pagina; \n   - Chiamate API verso un backend in Laravel che restituisce risultati filtrati e coerenti. \n\n📌 Ogni componente è stato progettato per essere modulare e riutilizzabile, con attenzione alla user experience e alla responsività su tutti i dispositivi. \n\n🤝 Soft Skill sviluppate durante il progetto: \n   - Problem solving: affrontare bug, ottimizzare le chiamate API e migliorare le performance in autonomia; \n   - Gestione del tempo e delle priorità, organizzando lo sviluppo in fasi; \n   - Autonomia e spirito d’iniziativa, ricercando soluzioni e approfondendo tecnologie non affrontate a lezione; \n   - Curiosità e adattabilità, imparando ad usare nuove librerie come Framer Motion, implementando filtri dinamici e animazioni in modo coerente. \n\n💡 Il progetto soddisfa l’obiettivo di unire tecnologia e usabilità in un’unica esperienza fluida e piacevole per chi ama il cinema.",
            tecnologie: [
                "React",
                "PHP",
                "MySQL",
            ],
            img: [
                "./img/mooviemood/home.png",
                "./img/mooviemood/moovies.png",
                "./img/mooviemood/single.png",
                "./img/mooviemood/directors.png",
                "./img/mooviemood/singled.png",
                "./img/mooviemood/search.png",
            ],
        },
        {
            name: "BoolBnB",
            logo: "./img/boolbnb/logo.png",
            link_demo: "https://pb-bnb.netlify.app/",
            link_repo: "https://github.com/giuseppecasaburi/boolBnB_Front_Personale",
            descrizione: "Durante una simulazione di progetto aziendale, ho collaborato con un team allo sviluppo di una web application full-stack ispirata ai principali portali di affitti brevi. Il nostro obiettivo era realizzare un prodotto completo e professionale, curando ogni fase del ciclo di vita del software: dall’analisi e progettazione al rilascio della demo online. \nPrincipali componenti realizzate: \n   -Backend (Express.js e Node.js): ho contribuito allo sviluppo del sistema CRUD per la gestione di immobili; \n   -Frontend (React.js): responsabile della progettazione e implementazione della pagina di dettaglio immobile, nella quale ho integrato una mappa dinamica tramite Google Maps API per visualizzare la posizione esatta delle proprietà, un form per l’inserimento e la visualizzazione di recensioni, con validazione lato client ed un form per l’invio di email da parte degli utenti; \n   -Database (MySQL): ho partecipato alla definizione dello schema relazionale e all’ottimizzazione delle query per garantire prestazioni elevate in fase di ricerca e consultazione dei dati. \nFeature aggiuntive implementate: \n   -Ricerca avanzata attraverso filtri personalizzati come prezzo, disponibilità, numero di ospiti, servizi; \n   -Funzionalità “Like”: icona a forma di cuore per salvare gli immobili preferiti, con persistenza dei “mi piace” tramite Local Storage, garantendo un’esperienza utente personalizzata anche senza autenticazione. \nDeploy e demo live: Al termine del progetto, ho curato il rilascio della versione demo utilizzando Railway e Netlify, assicurandomi che fosse sempre accessibile e performante. \nQuesto progetto mi ha permesso di approfondire e consolidare competenze full-stack, lavorare in sinergia con il team e adottare best practice di sviluppo agile. Sono molto orgoglioso del risultato ottenuto e delle soluzioni tecniche implementate, che riflettono una reale esperienza di produzione.",
            tecnologie: [
                "React",
                "Express",
                "NodeJS",
                "MySQL",
            ],
            img: [
                "./img/boolbnb/home.jpeg",
                "./img/boolbnb/detail.jpeg",
                "./img/boolbnb/create.jpeg",
                "./img/boolbnb/search.jpeg",
                "./img/boolbnb/searchr.jpeg"
            ],
        }
    ]

export default projects;