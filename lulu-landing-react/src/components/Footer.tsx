import { useState } from "react";
import { CopyIcon } from "./icons/StandardIcons";
import "./Footer.css";

const emailAddress = "destinyihejirika@gmail.com";
const githubUrl = "https://github.com/lexyd";
const linkedInUrl = "https://ca.linkedin.com/in/destinyihejirika";

const Footer = () => {
  const [copyLabel, setCopyLabel] = useState("Copy email");
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);

  const handleCopyEmail = async () => {
    setIsEmailRevealed(true);

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy email"), 1800);
    } catch {
      setCopyLabel(emailAddress);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Get in touch</h2>

        <div className="footer-content">
          <div className="social-icons">
            <a
              href={`mailto:${emailAddress}`}
              className="social-icon"
              aria-label="Send email"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29zM5.33 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.04H3.55V8.98h3.56v11.47z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-email">
          {isEmailRevealed ? (
            <>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              <button
                type="button"
                className="social-icon footer-copy-icon"
                aria-label={copyLabel}
                onClick={handleCopyEmail}
              >
                <CopyIcon />
                <span className="footer-copy-tooltip">{copyLabel}</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              className="footer-reveal-button"
              onClick={() => setIsEmailRevealed(true)}
            >
              <span className="cta-text">Reveal email</span>
            </button>
          )}
        </div>

        <div className="footer-description">
          <p>
            Always keen to chat to folks in the industry so feel free to say
            hello.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
