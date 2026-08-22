"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Home", href: "#" }, { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" }, { label: "Download Documents", href: "#download-documents" },
  { label: "Project Layout", href: "#project-layout" }, { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const taglines = [
  "Your Land. A Better Tomorrow.",
  "A Smart Plot. A Brighter Future.",
  "Green Living. Stronger Communities.",
];

function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.8 5.3h16.4c.8 0 1.5.7 1.5 1.5v10.4c0 .8-.7 1.5-1.5 1.5H3.8c-.8 0-1.5-.7-1.5-1.5V6.8c0-.8.7-1.5 1.5-1.5Z" /><path d="m3.2 6.4 8.8 6.4 8.8-6.4" /></svg>; }
function PhoneIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.3 2.8 10 8.1 7.9 10a15.2 15.2 0 0 0 6.1 6.1l1.9-2.1 5.3 2.7-.8 3.5c-.2.8-.9 1.4-1.8 1.4C9.7 21.6 2.4 14.3 2.4 5.4c0-.9.6-1.6 1.4-1.8l3.5-.8Z" /></svg>; }
function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  useEffect(() => {
    const timer = window.setInterval(() => setTaglineIndex((index) => (index + 1) % taglines.length), 3800);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <header className={styles.header}>
      <div className={styles.topBar}><div className={styles.topBarInner}>
        <div className={styles.contactLinks}>
          <a href="mailto:support@southcitygreensddjayplots.org"><span className={styles.contactIcon}><MailIcon /></span>support@southcitygreensddjayplots.org</a>
          <a href="tel:+917290081081"><span className={styles.contactIcon}><PhoneIcon /></span>+91 7290081081</a>
        </div>
        <p className={styles.tagline} aria-live="polite"><span className={styles.taglineText} key={taglineIndex}>{taglines[taglineIndex]}</span><span className={styles.taglineMark}>⌁</span></p>
      </div></div>
      <div className={styles.navBar}><div className={styles.navInner}>
        <a className={styles.logos} href="#" aria-label="South City Greens home">
          <Image src="https://southcitygreensddjayplots.org/assets/images/cellular-logo-Black.png" alt="Cellular Realty" width={164} height={50} priority unoptimized />
          <Image src="https://southcitygreensddjayplots.org/assets/images/vedmaan-log-black.png" alt="Vedmaan Developers" width={82} height={68} priority unoptimized />
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item, index) => item.label === "Amenities" ? <div className={styles.navItem} key={item.label}>
            <a href={item.href}>Amenities <span className={styles.chevron}>⌄</span></a>
            <div className={styles.megaMenu}>
              <div className={styles.megaIntro}><span>DISCOVER THE PROJECT</span><strong>Everything for a better lifestyle</strong><p>Thoughtfully planned spaces, modern infrastructure and a secure green community.</p><a href="#amenities">Explore all amenities →</a></div>
              <div className={styles.megaColumn}><strong>Community</strong><a href="#amenities">Gated Community</a><a href="#amenities">24×7 Security</a><a href="#amenities">CCTV Surveillance</a></div>
              <div className={styles.megaColumn}><strong>Lifestyle</strong><a href="#amenities">Green Parks</a><a href="#amenities">Jogging Track</a><a href="#amenities">Children Play Area</a></div>
              <div className={styles.megaColumn}><strong>Infrastructure</strong><a href="#amenities">Wide Internal Roads</a><a href="#amenities">Water & Sewerage</a><a href="#amenities">Street Lighting</a></div>
            </div>
          </div> : <a key={item.label} href={item.href} className={index === 0 ? styles.active : undefined}>{item.label}</a>)}
        </nav>
        <a href="#apply" className={styles.applyButton}>Apply Now <ArrowIcon /></a>
        <button className={styles.menuButton} type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><span /><span /><span /></button>
      </div></div>
    </header>
    <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
    <aside className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`} aria-hidden={!menuOpen}>
      <div className={styles.mobileNavHeader}><span>South City Greens</span><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">×</button></div>
      <nav aria-label="Mobile navigation">{navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
      <a href="#apply" className={styles.mobileApply} onClick={() => setMenuOpen(false)}>Apply Now <ArrowIcon /></a>
    </aside>
  </>;
}
