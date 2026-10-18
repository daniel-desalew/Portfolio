// client/src/components/GithubStats.jsx
import { useState, useEffect } from "react";
import { FiGithub, FiStar, FiUsers, FiFolder } from "react-icons/fi";
import "./GithubStats.css";

const GITHUB_USERNAME = "daniel"; // 👈 CHANGE THIS TO YOUR GITHUB USERNAME

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch Profile
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));

    // Fetch Top 3 Repos
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`,
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  if (!profile) return null;

  return (
    <div className="github-section">
      <div className="github-stats">
        <div className="gh-stat-card">
          <FiFolder className="gh-icon" />
          <h3>{profile.public_repos}</h3>
          <p>Public Repos</p>
        </div>
        <div className="gh-stat-card">
          <FiUsers className="gh-icon" />
          <h3>{profile.followers}</h3>
          <p>Followers</p>
        </div>
      </div>

      <div className="github-repos">
        <h3 className="gh-repos-title">
          <FiGithub /> Recently Updated Projects
        </h3>
        <div className="gh-repo-grid">
          {repos.map((repo) => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key={repo.id}
              className="gh-repo-card"
            >
              <h4>{repo.name}</h4>
              <p>{repo.description || "No description provided."}</p>
              <div className="gh-repo-meta">
                <span>{repo.language || "Code"}</span>
                <span>
                  <FiStar /> {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
