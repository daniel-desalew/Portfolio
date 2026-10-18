import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project: p }) {
  return (
    <article className="card">
      {p.image ? (
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
      ) : (
        <div className="ph" aria-hidden="true" />
      )}
      <div className="card-body">
        <h3>
          <Link to={`/projects/${p._id}`}>{p.title}</Link>
        </h3>
        <p>{p.description}</p>
        <ul className="tags">
          {p.tech?.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="row">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer">
              <FiExternalLink /> Live demo
            </a>
          )}
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
