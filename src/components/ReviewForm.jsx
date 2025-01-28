const initialValues = {
    username: "",
    text: "",
    vote: 0
}

function ReviewForm() {

    // funzione per creare array per i voti
    const votes = Array.from(Array(6).keys());

    // stato per gestire il form iniziale 
    const [formData, setFormData] = useState(initialValues)

    const setFormValues = () => {
        
    }

    return (
        <form>
            <div>
                <label htmlFor="username">Nome utente</label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Nome di chi sta scrivendo la recensione"
                />
            </div>
            <div>
                <label htmlFor="vote">Voto</label>
                <select name="" id="username">
                    {votes.map((curVote) => (
                        <option key={curVote} value={curVote}>{curVote}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="text">Scrivi qui la tua recensione</label>
                <textarea name="" id="text"></textarea>
            </div>
            <div>
                <button type="submit" className="btn btn-review">Invia</button>
            </div>
        </form>
    );
};

export default ReviewForm;