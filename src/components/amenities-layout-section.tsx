"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./amenities-layout-section.module.css";

type AmenityIcon = "gate" | "play" | "camera" | "shield" | "road" | "water" | "sewer" | "light" | "park" | "power";

function LineIcon({ name }: { name: AmenityIcon }) {
  const paths = {
    gate: <><path d="M3 20V7h4v13M17 20V7h4v13M7 10h10M7 14h10M7 18h10M9 10v10M12 10v10M15 10v10"/><path d="M2 20h20"/></>,
    play: <><path d="M5 21 8 4M19 21 16 4M7 7h10M10 13a2 2 0 1 0 4 0v-3h-4v3Z"/></>,
    camera: <><rect x="3" y="7" width="14" height="9" rx="2"/><circle cx="10" cy="11.5" r="2.5"/><path d="m17 10 4-2v7l-4-2M6 19h8"/></>,
    shield: <><path d="M12 2 20 5v6c0 5-3.3 8.6-8 11-4.7-2.4-8-6-8-11V5l8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    road: <><path d="M7 22 10 2h4l3 20M12 5v4M12 13v4M3 22h18"/></>,
    water: <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z"/>,
    sewer: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M3 12h18M12 3v18M6 6l12 12M18 6 6 18"/></>,
    light: <><path d="M8 22h8M12 22V8a5 5 0 0 1 5-5h3"/><path d="M17 3v5h4V3"/></>,
    park: <><path d="M12 21v-9M8 15c-4 0-5-3-3-6 2-4 7-6 7-6s5 2 7 6c2 3 1 6-3 6"/><path d="M6 21h12"/></>,
    power: <path d="m13 2-7 11h6l-1 9 7-12h-6l1-8Z"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const amenities = [
  ["Gated Community", "gate", "/images/south-city-hero-family.png"],
  ["Children Play Area", "play", "/images/amenity-play-area.webp"],
  ["CCTV Surveillance", "camera", "/images/amenity-sports-court.webp"],
  ["24x7 Security", "shield", "/images/south-city-hero-family.png"],
  ["Wide Roads", "road", "/images/south-city-hero-aerial.png"],
  ["Water Supply", "water", "/images/amenity-jogging-track.webp"],
  ["Sewerage System", "sewer", "/images/south-city-hero-aerial.png"],
  ["Street Lights", "light", "/images/amenity-jogging-track.webp"],
  ["Parks & Green Area", "park", "/images/amenity-play-area.webp"],
  ["Electricity", "power", "/images/south-city-hero-lifestyle.png"],
] as const;

const connectivity = [
  ["Met City", "17 km", "building"], ["AIIMS Jhajjar", "30 km", "hospital"], ["IGI Airport, Delhi", "49 km", "plane"],
  ["Bahadurgarh", "25 km", "building"], ["Rohtak", "27 km", "building"], ["Sonipat", "38 km", "building"],
  ["Delhi (Dwarka)", "45 km", "building"], ["Gurugram", "37 km", "building"], ["Jhajjar Railway Station", "2 km", "train"],
  ["Bus Stand, Jhajjar", "3 km", "bus"],
];

function ConnectivityIcon({ type }: { type: string }) {
  if (type === "plane") return <svg viewBox="0 0 24 24"><path d="m3 13 8-2 5-8 2 1-3 8 5 3-1 2-6-2-4 6-2-1 2-6-6-1Z"/></svg>;
  if (type === "train" || type === "bus") return <svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="16" rx="3"/><path d="M8 7h8M8 14h.1M16 14h.1M8 19l-2 3M16 19l2 3"/></svg>;
  if (type === "hospital") return <svg viewBox="0 0 24 24"><path d="M4 21V8h6v13M14 21V3h6v18M2 21h20"/><path d="M15 8h4M17 6v4M7 12h1M7 16h1"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M4 21V8h6v13M10 21V3h7v18M17 21V11h3v10M2 21h20"/><path d="M6 11h2M6 15h2M12 7h3M12 11h3M12 15h3"/></svg>;
}

export function AmenitiesLayoutSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 180) + 9;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    const atStart = track.scrollLeft <= 8;
    if (direction > 0 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction < 0 && atStart) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    else track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 3200);
    return () => window.clearInterval(timer);
  }, []);

  return <section className={styles.section} id="amenities">
    <div className={styles.container}>
      <header className={styles.sectionHeading}><span className={styles.leafMark}>⌁</span><h2>Project <em>Amenities</em></h2><div /></header>
      <div className={styles.sliderWrap}>
        <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => move(-1)} aria-label="Previous amenities">‹</button>
        <div className={styles.amenitiesTrack} ref={trackRef}>{amenities.map(([label, icon, image]) => <article className={styles.amenityCard} key={label}><span className={styles.amenityIcon}><LineIcon name={icon} /></span><strong>{label}</strong><div className={styles.cardVisual}><Image src={image} alt="" fill sizes="220px" /></div></article>)}</div>
        <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => move(1)} aria-label="Next amenities">›</button>
      </div>

      <div className={styles.lowerGrid}>
        <article className={styles.layoutPanel} id="project-layout">
          <div className={styles.subHeading}><h2>Project <em>Layout</em></h2><span /></div>
          <div className={styles.layoutImage}><Image src="/images/south-city-project-layout.png" alt="South City Greens project layout" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <a href="https://southcitygreensddjayplots.org/assets/docs/project-site-layout.pdf" target="_blank" rel="noreferrer" className={styles.layoutButton}>↗ <span>View Full Layout</span></a>
        </article>

        <article className={styles.connectivityPanel}>
          <div className={styles.subHeading}><h2>Key <em>Connectivity</em></h2><span /></div>
          <div className={styles.connectivityList}>{connectivity.map(([place, distance, type]) => <div className={styles.connectivityRow} key={place}><span className={styles.connectivityIcon}><ConnectivityIcon type={type} /></span><strong>{place}</strong><em>— {distance}</em></div>)}</div>
        </article>
      </div>
    </div>
  </section>;
}
