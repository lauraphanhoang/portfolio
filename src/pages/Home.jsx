import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import js from "../assets/javascript.png";
import css from "../assets/css.png";
import node from "../assets/Nodejs.png";
import react from "../assets/react.png";
import html from "../assets/HTML5.png";
import reactnative from "../assets/react-native.png";
import mongoDB from "../assets/mongoDB.webp";
import vsc from "../assets/VSC.png";

const Home = () => {
  return (
    <div className="container">
      <h2>DEVELOPPEUR FULLSTACK</h2>

      <div className="presentation">
        <p>
          Je m'appelle Laura PHAN-HOANG. Après plusieurs années en communication
          digitale, j’ai décidé de me reconvertir dans le développement web, un
          domaine qui me permet de conjuguer créativité et logique.
        </p>
        <br />
        <p>
          Actuellement en formation de développement FullStack Web & Mobile, au
          sein de l'organisme{" "}
          <a href="https://www.lereacteur.io/" target="_blank">
            <u>Le Reacteur</u>
          </a>
          , j'explore les technologie web telles que HTML, CSS, JavaScript,
          Node.js, React et React Native. Cette expérience a renforcé mon
          intérêt pour le développement front-end, en particulier les aspects
          UX/UI, l’identité visuelle et le storytelling digital. Mon parcours en
          communication me permet d’apporter une approche sensible et orientée
          produit au développement, avec une attention particulière portée à
          l’expérience utilisateur. Ce changement de voie s’est imposé
          naturellement, notamment à travers mes collaborations passées avec des
          équipes techniques sur des projets de refonte web. Je me forme
          aujourd’hui sur des outils comme Next.js, TypeScript, MongoDB, Redux.
        </p>
        <br />
        <div className="logo">
          <img src={html} alt="logo html" />
          <img src={js} alt="logo javascript" />
          <img src={css} alt="logo css" />
          <img src={node} alt="logo node.js" />
          <img src={mongoDB} alt="mongoDB" />
          <img src={react} alt="logo react" />
          <img src={reactnative} alt="logo react native" />
          <img src={vsc} alt="logo vsc" />
        </div>
        <p>
          J'aimerais approfondir mes connaissances et continuer à développer mes
          compétences dans ce domaine. Je suis donc à la recherche d’une{" "}
          <span className="alternance">
            alternance de 15-19 mois, au rythme de 3 semaines en entreprise et 1
            semaine en école.{" "}
          </span>{" "}
        </p>
      </div>

      <h2>CONTACT</h2>
      <p>
        <IoIosMail />{" "}
        <a href="mailto:" target="_blank">
          lauraph1997@yahoo.fr
        </a>
      </p>
      <p>
        <FaGithub />{" "}
        <a href="https://github.com/lauraphanhoang" target="_blank">
          <u>https://github.com/lauraphanhoang</u>
        </a>
      </p>
    </div>
  );
};

export default Home;
