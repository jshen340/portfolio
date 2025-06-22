import { ReactNode } from "react";
import "../assets/css/Project.css";
import Header from "./Header";
import BackButton from "../assets/back-button.png";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  image: string;
  description: ReactNode;
}

const Project = ({ title, image, description }: Props) => {
  return (
    <div className="projects-container">
      <Header />
      <div className="button-title">
        <Link to="/">
          <img src={BackButton} className="back-button" />
        </Link>
        <h2 className="project-title">{title}</h2>
      </div>
      <div className="image-page">
        <img src={image} alt={image} className="image-on-page" />
      </div>
      <div className="project-desc">{description}</div>
    </div>
  );
};

export default Project;
