import { useState } from "react";

// a questa funzione passo come oggetto una funzione che si collega a quella definita nel genitore
function ReviewForm({onSubmitFunction, formData, setFormData}) {

    // funzione per creare array per i voti
    const votes = Array.from(Array(6).keys());

    // funzione per gestire i dati che vengono inseriti nel form
    const setFormValues = (event) => {

        // destrutturazione per selezionare il contenuto del campo ed il campo da cambiare
        const {value, name} = event.target;

        // creazio di un oggetto con la copia dello stato del form
        const newData = {...formData};

        // aggiungo a questo oggetto una chiave dinamica a cui associo il valore corrispondente
        // name = "username" e value = "Mimmo" allora username = "Mimmo"
        newData[name] = value;

        // infine aggiorno lo stato con il nuovo oggeto creato
        setFormData(newData);
    };

    return (
        // collego la funzione e aggiunto event.preventDefault
        <form className="review-form" onSubmit={(event) => {
                console.log(event);
                
                event.preventDefault(); 
                onSubmitFunction(formData);
            }}
        >
            <div className="row-form">
                <div className="username">
                    <label htmlFor="name">Nome utente</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                        placeholder="Nome utente"
                        onChange={setFormValues}
                    />
                </div>
                <div className="vote">
                    <label htmlFor="vote">Voto</label>
                    <select name="vote" value={formData.vote} id="username" onChange={setFormValues}>
                        {votes.map((curVote) => (
                            <option key={curVote} value={curVote}>{curVote}</option>
                        ))}
                    </select>
                </div>
                <div className="text-review">            
                    <label htmlFor="text">Scrivi qui la tua recensione</label>
                    <textarea name="text" value={formData.text} id="text" onChange={setFormValues}></textarea>                
                </div>
            </div>
            <div className="row-button">
                <button type="submit" className="btn btn-review">Invia</button>
            </div>
        </form>
    );
};

export default ReviewForm;