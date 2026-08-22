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

function EyebrowIcon() {
  return <svg viewBox="0 0 28 28" aria-hidden="true">
    <path d="M6 24C9 18 12 12 18 5" />
    <path d="M13 12C9 12 7 10 7 7c4-.3 7 1.3 6 5ZM17 7c0-4 2-6 6-6 .3 4-1.5 7-6 6ZM10 17c-4 .4-6 2.5-6 6 4 .2 7-1.8 6-6Z" />
  </svg>;
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
      <path className={styles.panelFill} d="M0 0H455C610 10 700 145 650 300C600 455 560 550 610 685C660 820 810 910 900 940H0Z" />
      <path className={styles.curveLine} d="M455 1C610 10 700 145 650 300C600 455 560 550 610 685C660 820 810 910 899 939" />
    </svg>

    <div className={styles.content}>
      <p className={styles.eyebrow}><span><EyebrowIcon /></span>A LIFE. ELEVATED.</p>
      <h2 id="elevated-living-title">Experience<br /><em>Elevated Living</em></h2>
      <span className={styles.titleLine} />
      <p className={styles.description}>Where modern families thrive, investments grow,<br />and nature inspires every moment.<br />A thoughtfully planned community crafted for<br />today, designed for generations.</p>

      <div className={styles.features}>{features.map((feature) => <article key={feature.icon}><span className={styles.icon}><FeatureIcon name={feature.icon} /></span><h3>{feature.title}</h3><i /><p>{feature.text}</p></article>)}</div>
      <a href="#about" className={styles.cta}>EXPLORE MORE <span>→</span></a>
    </div>
  </section>;
}
