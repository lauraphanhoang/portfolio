import image from "../../public/images/pp.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="introduction">
          <img className="photo" src={image} alt="photo de profil" />
          <div className="navigation">
            <h1>LAURA PHAN-HOANG</h1>
            <nav>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 30,
                  justifyContent: "center",
                  marginBottom: 30,
                  flexWrap: "wrap",
                  fontWeight: 500,
                }}
              >
                <li>
                  <Link to="/">À propos</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/projets">Développement Web</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/communication-digitale">
                    Communication Digitale
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
