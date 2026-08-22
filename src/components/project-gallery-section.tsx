"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./project-gallery-section.module.css";

const gallery = [
  { image: "/images/south-city-hero-aerial.png", title: "Grand Entrance", text: "Welcoming you home every single day.", icon: "gate" },
  { image: "/images/amenity-jogging-track.webp", title: "Scenic Walkways", text: "Walk, jog and unwind in the lap of nature.", icon: "walk" },
  { image: "/images/amenity-play-area.webp", title: "Kids Play Area", text: "A safe and joyful space for little adventures.", icon: "play" },
  { image: "/images/amenity-sports-court.webp", title: "Sports Facilities", text: "Stay active, stay healthy, stay inspired.", icon: "sport" },
  { image: "/images/elevated-living-community.png", title: "Elevated Living", text: "A refined address shaped around modern life.", icon: "home" },
  { image: "/images/south-city-hero-lifestyle.png", title: "Green Community", text: "Beautiful open spaces for happier moments.", icon: "tree" },
];

function GalleryIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    gate: <><path d="M4 20V7l4-3 4 3 4-3 4 3v13M2 20h20M8 20V10h8v10M12 10v10" /></>,
    walk: <><circle cx="15" cy="4" r="2" /><path d="m13 7-3 5 4 2 2 6M13 8l4 4 3-1M10 12l-4 7M4 21h15" /></>,
    play: <><path d="M5 20 10 5h5l4 15M8 14h9M12 8v12M4 20h16" /><circle cx="12" cy="4" r="1" /></>,
    sport: <><ellipse cx="12" cy="11" rx="7" ry="9" transform="rotate(35 12 11)" /><path d="m17 17 4 4M8 6l8 10M6 10l8 8M10 4l8 8" /></>,
    home: <><path d="m3 11 9-7 9 7v10H3ZM8 21v-7h8v7" /></>,
    tree: <><path d="M12 21v-7M12 15c-5 0-7-3-6-6 1-4 4-6 6-6 3 0 6 3 6 7 0 3-2 5-6 5ZM8 21h8" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export function ProjectGallerySection() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % gallery.length), 4200); return () => window.clearInterval(timer); }, []);
  const visible = useMemo(() => Array.from({ length: 4 }, (_, index) => gallery[(active + index) % gallery.length]), [active]);
  const move = (direction: number) => setActive((active + direction + gallery.length) % gallery.length);

  return <section className={styles.section} id="gallery" aria-labelledby="project-gallery-title">
    <div className={styles.heading}>
      <p>LIVE THE EXPERIENCE</p>
      <span aria-hidden="true" />
      <h2 id="project-gallery-title">Project <em>Gallery</em></h2>
      <div>A glimpse of the lifestyle, amenities and vibrant community<br />we are creating for you.</div>
    </div>

    <div className={styles.viewport} aria-live="polite">
      <button className={`${styles.sideArrow} ${styles.previous}`} onClick={() => move(-1)} aria-label="Previous gallery slide">‹</button>
      <div className={styles.cards} key={active}>{visible.map((item) => <article className={styles.card} key={`${item.title}-${active}`}>
        <div className={styles.imageWrap}><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 86vw, (max-width: 1050px) 46vw, 24vw" className={styles.image} /></div>
        <span className={styles.icon}><GalleryIcon name={item.icon} /></span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>)}</div>
      <button className={`${styles.sideArrow} ${styles.next}`} onClick={() => move(1)} aria-label="Next gallery slide">›</button>
    </div>

    <div className={styles.controls}>
      <button className={styles.roundArrow} onClick={() => move(-1)} aria-label="Previous slide">‹</button>
      <div className={styles.dots}>{gallery.map((item, index) => <button key={item.title} className={index === active ? styles.activeDot : ""} onClick={() => setActive(index)} aria-label={`Show ${item.title}`} />)}</div>
      <button className={styles.roundArrow} onClick={() => move(1)} aria-label="Next slide">›</button>
    </div>
  </section>;
}
