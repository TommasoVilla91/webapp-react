import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstarct: "",
    image: null
};

function CreateMoviePage() {

    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // gestione dinamica degli inserimenti dell'utente nei campi del form
    const handleInputChange = (event) => {

        // estraggo il tipo di input grazie al name=""
        const inputName = event.target.name;
        
        // se name="image"
        if (inputName === "image") {

            // estraggo file che viene caricato dall'utente
            const imageFile = event.target.files[0];
            
            // creo oggetto con i dati del form + la key image col nuovo valore
            const newData = {
                ...formData,
                image: imageFile
            };
            // imposto i nuovi dati
            setFormData(newData);            
        } else {
            // al contrario, quindi se name!=="image"
            // utilizzo al posto di name il value (value="")
            const value = event.target.value;

            // creo un oggetto come prima ed utilizzo il inputName come chiave per aggiornare il valore corretto
            const newData = {
                ...formData,
                [inputName]: value
            };
            // imposto i nuovi dati
            setFormData(newData);
        };
    };

    // al pulsante invio i dati e stampo in pagina
    const handleSubmit = (event) => {
        event.preventDefault();

        // oggetto JS che simula l'invio del form, non potendo mandare il file tramite JSON
        const dataToSend = new FormData();

        // ciclo per selezionare tutte le key in formData
        for (let key in formData) {

            // aggiungo tutte le key ed i loro valori a dataToSend
            dataToSend.append(key, formData[key]);
        };

        // chiamata axios al server dandogli i dati raccolti
        axios.post(`${backendUrl}/movies`, dataToSend, {
            // aggingo queste opzioni che servono a dire al server che dataToSend contiene anche i file
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((resp) => {
            console.log(resp);
            
            // quando arriva il messaggio di conferma, rimanda automaticamente alla pagina dei libri
            navigate("/movies");
        });
    };

    return (
        <div className="container">
            <div className="row-form">
                <form className="create" onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor="title">Titolo</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} />
                    </div>
                    <div className="director">
                        <label htmlFor="director">Regia</label>
                        <input type="text" name="director" id="director" value={formData.director} onChange={handleInputChange} />
                    </div>
                    <div className="genre">
                        <label htmlFor="genre">Genere</label>
                        <input type="text" name="genre" id="genre" value={formData.genre} onChange={handleInputChange} />
                    </div>
                    <div className="realise_year">
                        <label htmlFor="realise_year">Anno di uscita</label>
                        <input type="text" name="realise_year" id="realise_year" value={formData.realise_year} onChange={handleInputChange} />
                    </div>
                    <div className="abstract">
                        <label htmlFor="abstract">Descrizione</label>
                        <textarea type="text" name="abstract" id="abstract" value={formData.abstract} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="file">
                        <label htmlFor="file">Immagine poster</label>
                        <input type="file" name="image" id="file" onChange={handleInputChange} />
                    </div>
                    <div className="btn add-btn">
                        <button>Aggiungi</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateMoviePage;