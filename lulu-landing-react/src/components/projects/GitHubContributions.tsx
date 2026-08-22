const GITHUB_USERNAME = "lexyd";
const GITHUB_GREEN = "2ea043";

const GitHubContributions = () => {
  const contributionChartUrl = `https://ghchart.rshah.org/${GITHUB_GREEN}/${GITHUB_USERNAME}?v=${new Date()
    .toISOString()
    .slice(0, 10)}`;

  return (
    <section
      className="github-contributions"
      aria-labelledby="github-contributions-title"
    >
      <div className="github-contributions-header">
        <div>
          <p className="projects-eyebrow" id="github-contributions-title">
            GitHub Activity
          </p>
          <p className="github-contributions-copy">
            Design should exist beyond the Canvas.
          </p>
        </div>
        <p className="github-contributions-stat">
          545 contributions in the last year
        </p>
      </div>
      <div className="github-chart-frame">
        <img
          src={contributionChartUrl}
          alt={`GitHub contribution graph for ${GITHUB_USERNAME}`}
          loading="lazy"
        />
      </div>
      <div className="github-contributions-footer">
        <a
          className="github-profile-link"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="cta-text">View on GitHub</span>
        </a>
        <div className="github-legend" aria-label="Contribution intensity">
          <span>Less</span>
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
