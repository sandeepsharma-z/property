import Image from "next/image";
import styles from "./investment-footer.module.css";

function Icon({ name }: { name: "shield" | "pin" | "home" | "phone" | "mail" }) {
  const icons = {
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    pin: <><path d="M12 22s7-7 7-13A7 7 0 1 0 5 9c0 6 7 13 7 13Z" /><circle cx="12" cy="9" r="2" /></>,
    home: <><path d="m3 11 9-7 9 7v10H3ZM8 21v-7h8v7" /></>,
    phone: <path d="M7 3 4 5c0 8 7 15 15 15l2-3-5-3-2 2c-3-1-5-3-6-6l2-2Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

const assurances = [
  { icon: "shield" as const, title: "RERA Approved", text: "100% Compliant" },
  { icon: "pin" as const, title: "Prime Connectivity", text: "Excellent Location" },
  { icon: "home" as const, title: "Limited Inventory", text: "Hurry, Few Left" },
];

export function InvestmentFooter() {
  return <>
    <section className={styles.investSection} id="apply" aria-labelledby="invest-title">
      <div className={styles.investCard}>
        <Image src="/images/elevated-living-community.png" alt="Premium residential community" fill sizes="calc(100vw - 86px)" className={styles.investBackground} />
        <div className={styles.investOverlay} />
        <div className={styles.investContent}>
          <p className={styles.eyebrow}><span />SECURE YOUR FUTURE<i /></p>
          <h2 id="invest-title">Ready to Invest in<br /><em>Your Dream Plot?</em></h2>
          <b className={styles.titleLine} />
          <p className={styles.investCopy}>Premium plots in Jhajjar with unmatched value and growth potential.<br />Limited inventory – book today and secure your future.</p>
          <div className={styles.assurances}>{assurances.map((item) => <article key={item.title}><span><Icon name={item.icon} /></span><div><strong>{item.title}</strong><p>{item.text}</p></div></article>)}</div>
        </div>
        <div className={styles.applyArea}>
          <a href="tel:+917290081081" className={styles.applyButton}>Apply Now <span>→</span></a>
          <p><b>✓</b> Simple Process. Secure Investment.</p>
        </div>
      </div>
    </section>

    <footer className={styles.footer} id="contact">
      <div className={styles.footerGrid}>
        <section className={styles.brandColumn}>
          <h2>South City Greens</h2><h3>Residential Plots in Jhajjar</h3><i />
          <p>Welcome to South City Greens, a premium residential plotted township located in Sector 36 Jhajjar. Designed for modern living with excellent connectivity and world-class infrastructure.</p>
        </section>
        <section className={styles.contactColumn}>
          <h3>CONTACT US</h3><i />
          <a href="tel:+917290081081"><span><Icon name="phone" /></span><div><strong>+91 7290081081</strong><small>Call us for any queries</small></div></a>
          <a href="mailto:support@southcitygreensddjayplots.org"><span><Icon name="mail" /></span><div><strong>support@southcitygreensddjayplots.org</strong><small>We&apos;ll reply as soon as possible</small></div></a>
        </section>
        <section className={styles.linksColumn}><h3>QUICK LINKS</h3><i /><a href="#">› <span>Terms &amp; Conditions</span></a><a href="#">› <span>Privacy Policy</span></a><a href="#">› <span>Refund &amp; Cancellation</span></a><a href="#contact">› <span>Contact Us</span></a></section>
        <section className={styles.disclaimer}><h3>DISCLAIMER</h3><i /><p>All images, illustrations, renderings and artistic impressions used in this advertisement are indicative in nature and meant solely for illustrative and representational purposes. They do not constitute a legal offer or form part of any contractual commitment. Actual development, specifications, dimensions, amenities, landscaping, infrastructure, and final execution may vary based on site conditions, statutory approvals, and project requirements. Prospective applicants are advised to verify all details and refer to the official project documents before making any investment decision.</p></section>
      </div>
      <div className={styles.copyright}><span /><p>© 2026 South City Greens. All Rights Reserved.</p><span /></div>
    </footer>
    <a href="tel:+917290081081" className={styles.stickyCall} aria-label="Call South City Greens"><Icon name="phone" /></a>
  </>;
}
