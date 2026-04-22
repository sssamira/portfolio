import { useEffect, useState } from "react";
import { footerLinks } from "../data/portfolioData.js";

export default function Footer() {
  const [pageInfo, setPageInfo] = useState({ url: "", lastModified: "" });

  useEffect(() => {
    setPageInfo({
      url: window.location.href,
      lastModified: document.lastModified
    });
  }, []);

  return (
    <footer className="footer">
      <div>
        <h3>Contact Information</h3>
        <p className="muted">
          Let's build something delightful together. Feel free to reach out!
        </p>
      </div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer-meta">
        <p>
          Page URL:{" "}
          <a href={pageInfo.url} target="_blank" rel="noreferrer">
            {pageInfo.url || "Loading..."}
          </a>
        </p>
        <p>Last Modified: {pageInfo.lastModified || "Loading..."}</p>
      </div>
    </footer>
  );
}
