// Images
import marvel from "../../public/images/marvel-homepage.png";
import vinted from "../../public/images/Vinted-frontend.png";
import deliveroo from "../../public/images/Deliveroo-frontend.png";
import tripadvisor from "../../public/images/tripadvisor-page.png";
import netflix from "../../public/images/netflix-maquette.png";
import backoffice from "../assets/Backoffice.gif";
import user from "../assets/User.gif";

const Project = () => {
  return (
    <div className="project-container">
      <h1>PROJETS</h1>
      <div className="margin">
        <div className="image-container">
          <a href="https://quizzmeup.netlify.app/">
            <div className="images">
              <img src={backoffice} alt="backoffice gif" />
            </div>
            <div className="images">
              <img src={user} alt="user gif" />
            </div>
          </a>
          <div className="description">
            <h2>Quizz Me Up</h2>
            <p style={{ textDecoration: "underline" }}>
              MVP/prototype pour une startup
            </p>
            <p>
              Projet de deux semaines en groupe : création d'un site Web pour
              gérer des quizz pour un organisme de formation.{" "}
            </p>
            <p></p>

            <br></br>
            <p style={{ fontStyle: "italic" }}>
              Projet FullStack avec React, Node.js, Express.js, Axios, MongoDB,
              Netlify, Northflank
            </p>
          </div>
        </div>
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
            <p>Responsive</p>
            <p>Récupération de données </p>
            <br />
            <p style={{ fontStyle: "italic" }}>Projet Front-End HTML/CSS</p>
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
            <p>Réplique</p>
            <p>Récupération de données </p>
            <br />
            <p style={{ fontStyle: "italic" }}>Projet Front-End avec React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
