// Images
import marvel from "../../public/images/marvel-homepage.png";
import vinted from "../../public/images/Vinted-frontend.png";
import deliveroo from "../../public/images/Deliveroo-frontend.png";
import tripadvisor from "../../public/images/tripadvisor-page.png";
import netflix from "../../public/images/netflix-maquette.png";

const Project = () => {
  return (
    <div className="project-container">
      <h1>PROJETS</h1>
      <div className="margin">
        <div className="image-container">
          <a href="https://marvel-lph-project.netlify.app/">
            <div className="images">
              <img src={marvel} alt="marvel homepage" />
            </div>
          </a>
          <div className="description">
            <h2>Marvel</h2>
            <p>Inscription / connexion </p>
            <p>Récupération de données </p>
            <p>Barre de recherche</p>
            <br></br>
            <p style={{ fontStyle: "italic" }}>
              Projet FullStack avec React, Express.js, Axios, Crypto.js, uid2
            </p>
          </div>
        </div>

        <div className="image-container">
          <div>
            <a href="https://vinted-lph-project.netlify.app/">
              <div className="images">
                <img src={vinted} alt="vinted homepage" />
              </div>
            </a>
          </div>
          <div className="description">
            <h2>Vinted</h2>
            <p>Inscription / connexion </p>
            <p>Récupération de données </p> <p>Publication d'annonces</p>{" "}
            <p>Barre de recherche</p> <p>Paiement</p> <p>Upload de photos</p>{" "}
            <br></br>
            <p style={{ fontStyle: "italic" }}>
              Projet FullStack avec React, React Router Dom, Axios, Crypto.js,
              uid2
            </p>
          </div>
        </div>

        <div className="image-container">
          <a href="https://deliveroo-lph.netlify.app/">
            <div className="images">
              <img src={deliveroo} alt="deliveroo homepage" />
            </div>
          </a>
          <div className="description">
            <h2>Deliveroo</h2>
            <p>Récupération de données </p>
            <p>Panier de commande</p>
            <br />
            <p style={{ fontStyle: "italic" }}>
              Projet Front-End avec React, Axios
            </p>
          </div>
        </div>

        <div className="image-container">
          <a href="https://tripadvisor-lph.netlify.app/">
            <div className="images">
              <img src={tripadvisor} alt="deliveroo homepage" />
            </div>
          </a>
          <div className="description">
            <h2>TripAdvisor</h2>
            <p>Réplique</p>
            <p>Récupération de données </p>
            <br />
            <p>Projet Front-End HTML/CSS</p>
          </div>
        </div>

        <div className="image-container">
          <a href="https://lauraphanhoang-react-comp.netlify.app/">
            <div className="images">
              <img src={netflix} alt="deliveroo homepage" />
            </div>
          </a>
          <div className="description">
            <h2>Netflix</h2>
            <p>Récupération de données </p>
            <p>Replique</p>
            <br />
            <p style={{ fontStyle: "italic" }}>Projet Front-End avec React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
