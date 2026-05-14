import React, { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch your public repositories (or a specific set)
  useEffect(() => {
    fetch('https://api.github.com/users/Alexzo-11/repos?sort=updated')
      .then(res => res.json())
      .then(data => {
        setRepos(data.slice(0, 6)); // show only latest 6
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="github-projects">
      <div className="container">
        <h2 className="section-title">My GitHub Projects</h2>
        <p className="section-subtitle">Websites & tools I've built</p>
        {loading ? (
          <div className="loader" />
        ) : (
          <div className="projects-grid">
            {repos.map(repo => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                className="project-card"
              >
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description'}</p>
                <div className="project-stats">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .github-projects {
          padding: 5rem 0;
          background: var(--gray-light);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--white);
          border-radius: 15px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          border: 1px solid #eee;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-red);
        }
        .project-card h3 {
          margin-bottom: 0.5rem;
          color: var(--black);
        }
        .project-card p {
          color: var(--gray-dark);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .project-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--primary-red);
        }
      `}</style>
    </section>
  );
};

export default GitHubProjects;