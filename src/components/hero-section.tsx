"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./hero-section.module.css";

type IconName = "pin" | "shield" | "document" | "bank" | "download" | "map" | "home" | "road" | "people" | "tree";

function Icon({ name }: { name: IconName }) {
  const paths = {
    pin: <><path d="M12 21s7-6 7-12A7 7 0 1 0 5 9c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/></>,
    shield: <path d="M12 2 20 5v6c0 5-3.3 8.6-8 11-4.7-2.4-8-6-8-11V5l8-3Zm-3 9 2 2 4-4"/>,
    document: <><path d="M6 2h9l4 4v16H6V2Z"/><path d="M15 2v5h4M9 11h6M9 15h6M9 19h4"/></>,
    bank: <><path d="m3 9 9-6 9 6M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M3 21h18"/></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></>,
    map: <><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z"/><path d="M8 3v15M16 6v15"/></>,
    home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/></>,
    road: <><path d="M8 22 10 2h4l2 20M12 5v4M12 13v4M4 22h16"/></>,
    people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 21v-2c0-4 2.4-6 6-6s6 2 6 6v2M15 14c3.6 0 6 2 6 6v1"/></>,
    tree: <><circle cx="12" cy="8" r="5"/><circle cx="8" cy="11" r="4"/><circle cx="16" cy="11" r="4"/><path d="M12 12v10M7 22h10"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const slides = [
  {
    image: "/images/south-city-hero-family.png",
    alt: "South City Greens residential township entrance",
    badge: "BANG ON 75 METER RING ROAD",
    titleGold: "दीन दयाल जन आवास योजना",
    titleWhite: "के अंतर्गत आवासीय प्लॉट",
    description: "RERA No.: HRERA-PKL-JJR-949-2026  •  Residential Plots in Sector 36, Jhajjar",
    slogan: <>A Greener<br />Jhajjar<br />A Stronger You</>,
  },
  {
    image: "/images/south-city-hero-lifestyle.png",
    alt: "Landscaped jogging track at South City Greens",
    badge: "GREEN LIVING. BETTER EVERY DAY.",
    titleGold: "हरियाली से भरपूर जीवन",
    titleWhite: "सुविधाओं के साथ बेहतर कल",
    description: "Landscaped parks  •  Jogging tracks  •  Secure gated community  •  Sector 36, Jhajjar",
    slogan: <>Healthy Living<br />Happy Families</>,
  },
  {
    image: "/images/south-city-hero-aerial.png",
    alt: "Aerial view of premium plotted township",
    badge: "A CONNECTED ADDRESS FOR GROWTH",
    titleGold: "आज का सुरक्षित निवेश",
    titleWhite: "कल की मजबूत विरासत",
    description: "75 M ring-road connectivity  •  300+ residential plots  •  High-growth Jhajjar location",
    slogan: <>Smart Plots<br />Stronger Future</>,
  },
];

const stats = [
  { icon: "map" as const, value: "25+", line1: "Acres", line2: "Development" },
  { icon: "home" as const, value: "300+", line1: "Residential", line2: "Plots" },
  { icon: "road" as const, value: "75 M", line1: "Ring Road", line2: "Connectivity" },
  { icon: "pin" as const, value: "Sector 36", line1: "Jhajjar, Haryana", line2: "" },
  { icon: "people" as const, value: "1000+", line1: "Happy", line2: "Families" },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  const changeSlide = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return <section className={styles.hero} aria-roledescription="carousel" aria-label="South City Greens highlights">
    {slides.map((item, index) => <Image key={item.image} src={item.image} alt={item.alt} fill priority={index === 0} sizes="100vw" className={`${styles.background} ${index === active ? styles.backgroundActive : ""}`} />)}
    <div className={styles.overlay} />

    <div className={styles.copy} key={active}>
      <div className={styles.roadBadge}><Icon name="pin" /> <span>{slide.badge}</span></div>
      <h1><span>{slide.titleGold}</span><br />{slide.titleWhite}</h1>
      <p className={styles.rera}>{slide.description}</p>

      <div className={styles.trustRow}>
        <div><span><Icon name="shield" /></span><p>Secure<br />Investment</p></div>
        <div><span><Icon name="document" /></span><p>Transparent<br />Process</p></div>
        <div><span><Icon name="bank" /></span><p>Govt.<br />Approved</p></div>
      </div>

      <div className={styles.actions}>
        <a href="#apply" className={styles.primaryButton}>Apply Now <b>→</b></a>
        <a href="#brochure" className={styles.brochureButton}><Icon name="download" /> Download Brochure</a>
      </div>
    </div>

    <p className={styles.topSlogan} key={`slogan-${active}`}>{slide.slogan}</p>
    <p className={styles.bottomSlogan}>A Smart Plot<br />A Brighter Future</p>

    <button className={`${styles.sliderArrow} ${styles.sliderPrev}`} type="button" aria-label="Previous slide" onClick={() => changeSlide(-1)}>‹</button>
    <button className={`${styles.sliderArrow} ${styles.sliderNext}`} type="button" aria-label="Next slide" onClick={() => changeSlide(1)}>›</button>
    <div className={styles.sliderDots}>{slides.map((item, index) => <button key={item.image} type="button" className={index === active ? styles.dotActive : ""} aria-label={`Show slide ${index + 1}`} onClick={() => setActive(index)} />)}</div>

    <div className={styles.statsBar}>
      <div className={styles.statsGreen}>{stats.map((stat) => <div className={styles.stat} key={stat.value}><span className={styles.statIcon}><Icon name={stat.icon} /></span><div><strong>{stat.value}</strong><p>{stat.line1}<br />{stat.line2}</p></div></div>)}</div>
      <a href="#apply" className={styles.dreamCard}><Icon name="tree" /><strong>Build<br />Your Dream<br />Lifestyle</strong><span>→</span></a>
    </div>
  </section>;
}
