import Image from "next/image";
import styles from "./elevated-living-section.module.css";

type FeatureIcon = "leaf" | "gate" | "pin" | "city";

function FeatureIcon({ name }: { name: FeatureIcon }) {
  const icons = {
    leaf: <><path d="M20 4C11 4 5 9 5 16c6 1 12-3 15-12Z"/><path d="M4 21c3-6 7-9 13-13"/></>,
    gate: <><path d="M3 20V8l5-4 4 4 4-4 5 4v12M3 20h18M7 20v-8h10v8M12 12v8"/></>,
    pin: <><path d="M12 22s8-7 8-13A8 8 0 1 0 4 9c0 6 8 13 8 13Z"/><circle cx="12" cy="9" r="2.5"/></>,
    city: <><path d="M3 21V9h6v12M9 21V4h7v17M16 21v-9h5v9M1 21h22"/><path d="M5 12h2M5 16h2M11 8h3M11 12h3M11 16h3M18 15h1M18 18h1"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

const features = [
  { icon: "leaf" as const, title: <>Landscaped<br />Green Spaces</>, text: <>Lush lawns, gardens<br />&amp; open spaces</> },
  { icon: "gate" as const, title: <>Premium<br />Gated Entry</>, text: <>24x7 security for<br />complete peace<br />of mind</> },
  { icon: "pin" as const, title: <>Prime<br />Connectivity</>, text: <>Seamless access to<br />key destinations<br />&amp; highways</> },
  { icon: "city" as const, title: <>Modern Lifestyle<br />Infrastructure</>, text: <>Clubhouse, sports,<br />shopping &amp; everyday<br />conveniences</> },
];

export function ElevatedLivingSection() {
  return <section className={styles.section} aria-labelledby="elevated-living-title">
    <Image src="/images/elevated-living-community.png" alt="Premium landscaped residential community at sunset" fill sizes="100vw" className={styles.background} />

    <svg className={styles.curvedPanel} viewBox="0 0 900 940" preserveAspectRatio="none" aria-hidden="true">
      <path className={styles.panelFill} d="M0 0H620C688 8 724 72 724 174C724 216 722 250 716 286C675 432 630 550 675 684C714 800 789 890 842 940H0Z" />
      <path className={styles.curveLine} d="M620 1C688 8 724 72 724 174C724 216 722 250 716 286C675 432 630 550 675 684C714 800 789 890 842 939" />
    </svg>

    <div className={styles.content}>
      <p className={styles.eyebrow}><span><FeatureIcon name="leaf" /></span>A LIFE. ELEVATED.</p>
      <h2 id="elevated-living-title">Experience<br /><em>Elevated Living</em></h2>
      <span className={styles.titleLine} />
      <p className={styles.description}>Where modern families thrive, investments grow,<br />and nature inspires every moment.<br />A thoughtfully planned community crafted for<br />today, designed for generations.</p>

      <div className={styles.features}>{features.map((feature) => <article key={feature.icon}><span className={styles.icon}><FeatureIcon name={feature.icon} /></span><h3>{feature.title}</h3><i /><p>{feature.text}</p></article>)}</div>
      <a href="#about" className={styles.cta}>EXPLORE MORE <span>→</span></a>
    </div>
  </section>;
}
