import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div className="home-page">
            <section className="container">
                <div className="titles">
                    <h1>Benvenuto in questa fanstistica Web App a tema film!</h1>
                    <h3>Potrai lasciare recensioni oppure leggere quelle degli altri utenti</h3>
                    <div className="enter">
                        <p>Vieni a vedere il nostro sito</p>
                        <div>
                            <Link to="/movies" className="btn btn-home">Entra!</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;