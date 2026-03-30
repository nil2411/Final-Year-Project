import { useEffect, useRef, useState } from "react";
import newsData from "../data/news.json";

export default function NewsTicker() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Duplicate items so the scroll loops seamlessly
  const items = [...newsData, ...newsData];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame;
    let pos = 0;
    const speed = 0.6; // px per frame

    const tick = () => {
      if (!paused) {
        pos -= speed;
        // When we've scrolled halfway (one full copy), reset to start
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(pos) >= halfWidth) {
          pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [paused]);

  return (
    <div
      className="news-ticker-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="news-ticker-label">
        <span className="news-ticker-dot" />
        LIVE
      </div>
      <div className="news-ticker-viewport">
        <div className="news-ticker-track" ref={trackRef}>
          {items.map((item, i) => (
            <span key={i} className="news-ticker-item">
              <span className="news-ticker-bullet">⚡</span>
              {item}
            </span>
          ))}
        </div>
      </div>
      <a
        href="https://pmkisan.gov.in/"
        target="_blank"
        rel="noreferrer"
        className="news-ticker-source"
      >
        PM-KISAN ↗
      </a>
    </div>
  );
}
