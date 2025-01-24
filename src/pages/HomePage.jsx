import { Link } from "react-router-dom";

function HomePage() {

    return (
        <>
            <section>
                <h1>Benvenuto in questa fanstistica Web App a tema film!</h1>
                <h3>Potrai lasciare recensioni oppure leggere quelle degli altri utenti</h3>
                <div>
                    <p>Vieni a vedere il nostro sito</p>
                    <Link to="/movies" className="btn">Entra!</Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;