const projects = [
        {
            name: "MoovieMood",
            logo: "./img/mooviemood/logo.png",
            link_demo: "https://mooviemood.netlify.app/",
            link_repo: "https://github.com/giuseppecasaburi/final_project_front_end",
            descrizione: "MoovieMood è una web app sviluppata in completa autonomia come progetto finale del corso di specializzazione Boolean. \nPensata per gli amanti del cinema, funge da blog dove vengono pubblicati i film visti con recensione e voto, collegando ad ogni titolo il relativo regista. Tutte le informazioni provengono dal backend sviluppato in Laravel (PHP) e dal database scritto in MySQL. \n\nL’interfaccia si compone di 7 pagine principali, progettate per accompagnare l’utente nella scoperta dei film. La navigazione è fluida e intuitiva grazie ad animazioni leggere. La homepage accoglie con una Hero section che invita a consultare la lista dei film o dei registi, seguita da:\n   - Una search bar;\n   - Una sezione dedicata ai 3 ultimi film caricati;\n   - Una sezione dedicata ai registi, con tre nomi casuali ad ogni caricamento.\n\nTra le funzionalità principali:\n   - 🔍 Ricerca avanzata di film e registi con aggiornamento in tempo reale;\n   - 🧩 Filtri dinamici che modificano URL e parametri senza ricaricare la pagina;\n   - 🔗 Chiamate API verso un backend in Laravel che restituisce risultati filtrati e coerenti.\n\nLe tecnologie utilizzate per sviluppare tutta la parte front-end della web app sono:\n   - React.js e React Router v6 per l’architettura a componenti ed una gestione chiara e ordinata delle rotte;\n   - Framer Motion per transizioni animate fluide tra le pagine;\n   - Axios per la comunicazione con il backend, con gestione centralizzata degli errori;\n   - Select2 per una selezione avanzata nei filtri di ricerca;\n   - CSS3 e Bootstrap per uno stile pulito e responsive;\n   - Il deploy della demo è avvenuto su netlify.\n\nLa realizzazione dell'intero progetto mi ha consentito di:\n   - 🛠️ Rafforzare la mia capacità di problem solving, affrontando bug, ottimizzando le chiamate API e migliorando le performance in autonomia;\n   - ⏳ Sviluppare una buona gestione del tempo e delle priorità, organizzando lo sviluppo in fasi;\n   - 🚀 Dimostrare proattività e autonomia, ricercando soluzioni e approfondendo tecnologie non affrontate durante il corso o comunque mai utilizzate prima;\n   - 🔍 Migliorare adattabilità e curiosità, imparando ad usare nuove librerie come Framer Motion, implementando filtri dinamici e animazioni in modo coerente. ",
            tecnologie: [
                "React",
                "PHP",
                "MySQL",
            ],
            img: [
                "./img/mooviemood/home.png",
                "./img/mooviemood/movies.png",
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
            descrizione: `BoolB&B è una web app sviluppata in team (5 persone) durante la simulazione di un progetto aziendale all'interno del corso di Boolean. Con la supervisione di una figura che ricopriva il ruolo di project manager, il nostro obiettivo era realizzare una piattaforma full stack ispirata ai principali portali di affitto a breve termine, seguendo tutte le fasi del ciclo di vita del software: analisi, progettazione e rilascio della demo online. \n\nTecnologie utilizzate:\n   - 🖥️ Backend: Node.js, Express.js;\n   - 🎨 Frontend: React.js, Google Maps API, CSS3;\n   - 🗄️ Database: MySQL;\n   - 🚀 Deploy: Railway, Netlify;\n\nIl mio contributo principale:\n   - 🖥️ Backend (Express.js con Node.js): sviluppo, in coppia con un altro collega, del sistema CRUD per la gestione di immobili; \n   - 🎨 Frontend (React.js): progettazione e implementazione, in autonomia, della pagina di dettaglio immobile, con: integrazione di una mappa dinamica tramite Google Maps API, form per l’inserimento e la visualizzazione di recensioni, con validazione lato client, form per l’invio di email da parte degli utenti;\n   - 🚀 Deploy e demo live: Al termine del progetto, ho curato il rilascio della versione demo utilizzando Railway e Netlify, assicurandomi che fosse sempre accessibile e performante. \n\nInoltre, il team ha sviluppato e integrato le seguenti feature:\n   - 🔍 Ricerca avanzata attraverso filtri personalizzati (prezzo, disponibilità, numero di ospiti, servizi);\n   - ❤️ Funzionalità “Like”: icona a forma di cuore per salvare gli immobili preferiti, con persistenza dei “mi piace” tramite Local Storage, garantendo un’esperienza utente personalizzata anche senza autenticazione. \n\nLo sviluppo di questo progetto mi ha permesso di:\n   - Approfondire e consolidare per la prima volta competenze full-stack;\n   - Lavorare in sinergia con il team e adottare best practice di sviluppo agile;\n  - Sperimentare lo sviluppo in team, adottando pratiche agili e gestendo briefing regolari per la divisione dei compiti;\n   - Migliorare la capacità di collaborazione, sfruttando i punti di forza di ciascun membro per una migliore organizzazione.\n\nQuesto progetto ha rappresentato una simulazione realistica di un ambiente produttivo, permettendomi di crescere sia dal punto di vista tecnico che collaborativo.`,
            tecnologie: [
                "React",
                "Express",
                "NodeJS",
                "MySQL",
            ],
            img: [
                "./img/boolbnb/home.png",
                "./img/boolbnb/detail.png",
                "./img/boolbnb/create.png",
                "./img/boolbnb/search.png",
                "./img/boolbnb/searchr.png"
            ],
        },
        {
            name: "Vica Arredo Bagno",
            logo: "./img/w_i_p.png",
            link_demo: "",
            link_repo: "",
            descrizione: `WORK IN PROGRESS, SEE YOU SOON! `,
            tecnologie: [
                "JavaScript",
                "React",
                "PHP",
                "MySQL",
                "Figma",
            ],
            img: [
                "./img/w_i_p.png",
                
            ],
        }
    ]

export default projects;