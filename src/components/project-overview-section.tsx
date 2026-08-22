import Image from "next/image";
import styles from "./project-overview-section.module.css";

type IconName = "megaphone" | "calendar" | "gavel" | "shield" | "park" | "road" | "shop" | "folder" | "pdf" | "file" | "map" | "eye";

function OverviewIcon({ name }: { name: IconName }) {
  const paths = {
    megaphone: <><path d="m3 11 13-6v14L3 13v-2Z"/><path d="M7 14v5h4l-1-4M19 8v8"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h1M12 14h1M16 14h1M8 18h1M12 18h1"/></>,
    gavel: <><path d="m14 5 5 5M12 7l5 5M4 20l9-9M3 21h9"/><path d="m13 3 8 8-3 3-8-8 3-3Z"/></>,
    shield: <><path d="M12 2 20 5v6c0 5-3.3 8.6-8 11-4.7-2.4-8-6-8-11V5l8-3Z"/><path d="M9 12h6v5H9zM10 12V9a2 2 0 0 1 4 0v3"/></>,
    park: <><path d="M8 17V8M5 11c0-4 3-7 3-7s3 3 3 7a3 3 0 0 1-6 0ZM15 19v-5M12 16c0-3 3-5 3-5s3 2 3 5a3 3 0 0 1-6 0Z"/><path d="M3 21h18M18 18h3M20 15v6"/></>,
    road: <><path d="M7 22 10 2h4l3 20M12 5v4M12 13v4M3 22h18"/></>,
    shop: <><path d="M4 10v11h16V10M3 10l2-6h14l2 6"/><path d="M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2M9 21v-6h6v6"/></>,
    folder: <path d="M3 6h7l2 2h9v11H3V6Z"/>,
    pdf: <><path d="M6 2h9l4 4v16H6V2Z"/><path d="M15 2v5h4M8 17h2a2 2 0 0 0 0-4H8v6M13 19v-6h2a2 2 0 0 1 0 4h-2M18 13v6"/></>,
    file: <><path d="M6 2h9l4 4v16H6V2Z"/><path d="M15 2v5h4M9 12h6M9 16h6"/></>,
    map: <><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z"/><path d="M8 3v15M16 6v15"/></>,
    eye: <><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const documents = [
  { name: "Project RERA", icon: "pdf" as const },
  { name: "Project License", icon: "file" as const },
  { name: "Project Brochure", icon: "file" as const },
  { name: "Payment Plan", icon: "file" as const },
  { name: "Site Layout Plan", icon: "map" as const },
];

const features = [
  { icon: "shield" as const, line1: "Gated Community", line2: "with 24x7 Security" },
  { icon: "park" as const, line1: "Landscaped Parks &", line2: "Jogging Tracks" },
  { icon: "road" as const, line1: "Wide Internal Roads &", line2: "Infrastructure" },
  { icon: "shop" as const, line1: "Commercial", line2: "Conveniences" },
];

export function ProjectOverviewSection() {
  return <section className={styles.section} id="about">
    <div className={styles.ambient} />
    <div className={styles.container}>
      <div className={styles.announcement}>
        <div className={styles.announcementLabel}><OverviewIcon name="megaphone" /><strong>Important Announcements</strong></div>
        <span className={styles.announcementDivider} />
        <div className={styles.marqueeViewport}>
          <div className={styles.marqueeTrack}>
            <span>33% plots are reserved for government employees and women applicants</span>
            <span aria-hidden="true">33% plots are reserved for government employees and women applicants</span>
          </div>
        </div>
      </div>

      <div className={styles.dateGrid}>
        <article className={styles.dateCard}><span className={styles.dateIcon}><OverviewIcon name="calendar" /></span><div><p>PROJECT START DATE</p><strong>21 July 2026</strong><i /></div></article>
        <article className={styles.dateCard}><span className={styles.dateIcon}><OverviewIcon name="calendar" /></span><div><p>LAST DATE OF APPLICATION</p><strong>23rd August 2026</strong><i /></div></article>
        <article className={styles.dateCard}><span className={styles.dateIcon}><OverviewIcon name="gavel" /></span><div><p>ALLOTMENT DATE</p><strong>25th August 2026</strong><i /></div></article>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}><Image src="/images/south-city-hero-family.png" alt="South City Greens entrance gate" fill sizes="(max-width: 900px) 100vw, 32vw" /></div>
          <div className={styles.thumbnails}>
            <div><Image src="/images/south-city-hero-lifestyle.png" alt="Landscaped roads" fill sizes="12vw" /></div>
            <div><Image src="/images/south-city-hero-family.png" alt="Green park" fill sizes="12vw" /></div>
            <div><Image src="/images/south-city-hero-aerial.png" alt="Township roads" fill sizes="12vw" /></div>
          </div>
        </div>

        <article className={styles.about}>
          <h2>About Project</h2><div className={styles.titleRule}><span>◇</span></div>
          <h3>RERA No. - HRERA-PKL-JJR-949-2026</h3>
          <p><strong>South City Greens</strong> is a premium residential plotted township developed by <strong>Cellular Realty</strong> under the Deen Dayal Jan Awas Yojana (DDJAY), Affordable Plotted Housing Policy–2016, Government of Haryana. Strategically located in Sector 36, Jhajjar, the project offers thoughtfully planned residential plots within a secure gated community featuring landscaped green parks, dedicated jogging tracks, wide internal roads, and commercial conveniences.</p>
          <p>With excellent connectivity to the 75 Meter Jhajjar Ring Road and essential urban infrastructure, South City Greens provides an ideal opportunity for families seeking a well-connected, modern, and sustainable lifestyle in one of Haryana&apos;s emerging residential destinations.</p>
          <div className={styles.features}>{features.map((feature) => <div key={feature.line1}><OverviewIcon name={feature.icon} /><strong>{feature.line1}<br />{feature.line2}</strong></div>)}</div>
        </article>

        <aside className={styles.documents} id="download-documents">
          <div className={styles.documentsHeader}><OverviewIcon name="folder" /><h2>Project Documents</h2></div>
          <div className={styles.documentList}>{documents.map((document) => <a href="#" key={document.name}><span className={styles.fileIcon}><OverviewIcon name={document.icon} /></span><strong>{document.name}</strong><span className={styles.eyeIcon}><OverviewIcon name="eye" /></span></a>)}</div>
        </aside>
      </div>
    </div>
  </section>;
}
