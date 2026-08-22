import Image from "next/image";
import styles from "./master-plan-section.module.css";

const reasons = [
  ["Located on 75 Meter Wide Road", "road"],
  ["Sector 36 Next to NH-352 & KMP Expressway", "highway"],
  ["Surrounded by Residential Hubs & Infrastructure", "city"],
  ["Secure Gated Community with Modern Planning", "shield"],
  ["High Appreciation & Excellent Rental Potential", "chart"],
  ["Well Connected to Key City Routes", "pin"],
];

function ReasonIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    road: <><path d="M8 21 11 3M16 21 13 3M12 6v3M12 13v3" /></>,
    highway: <><path d="M3 20 9 4M21 20 15 4M6 12h12M8 7h8M2 20h20" /></>,
    city: <><path d="M3 21V9h6v12M9 21V4h7v17M16 21v-9h5v9M1 21h22" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="M9 12l2 2 4-5" /></>,
    chart: <><path d="M3 21h18M5 18v-4h4v4M11 18v-7h4v7M17 18V6h4v12M5 9l5-4 4 2 7-5" /></>,
    pin: <><path d="M12 22s7-7 7-13A7 7 0 1 0 5 9c0 6 7 13 7 13Z" /><circle cx="12" cy="9" r="2" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

export function MasterPlanSection() {
  return <section className={styles.section} aria-labelledby="master-plan-title">
    <div className={styles.container}>
      <div className={styles.heading}><h2 id="master-plan-title">JHAJJAR MASTER PLAN 2031</h2><span /></div>

      <div className={styles.planCard}>
        <Image src="/images/master-plan-jhajjar.webp" alt="Jhajjar Master Plan 2031" fill sizes="calc(100vw - 86px)" className={styles.mapImage} />
      </div>

      <div className={styles.reasonsHeading}><h2>Why South City Green?</h2><span /></div>
      <div className={styles.reasons}>{reasons.map(([text,icon]) => <article key={text}><b>✓</b><strong>{text}</strong><span><ReasonIcon name={icon} /></span></article>)}</div>
    </div>
  </section>;
}
