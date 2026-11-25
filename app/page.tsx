import Constellation from "@/components/Constellation";
import Cursor from "@/components/Cursor";
import Icon from "@/components/Icon";
import Intro from "@/components/Intro";
import MotionLayer from "@/components/MotionLayer";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import SiteHeader from "@/components/SiteHeader";
import {
  about,
  affiliations,
  appointments,
  credentials,
  expertise,
  journey,
  person,
  stats,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Intro />
      <Cursor />
      <MotionLayer />
      <SiteHeader />
      <main id="top">
        {/* Hero */}
        <header className="hero">
          <div className="hero-aura" aria-hidden="true" />
          <div className="grid-lines" aria-hidden="true" />
          <Constellation />
          <div className="noise" aria-hidden="true" />

          <div className="wrap hero-in">
            <div className="hero-text">
              <p className="chip reveal">
                <Icon name="pin" size={15} /> {person.location}
              </p>
              <h1 className="serif" aria-label={person.name}>
                <span className="hero-first" aria-hidden="true">
                  {person.first.split("").map((letter, index) => (
                    <span className="char" key={index} style={{ animationDelay: `${0.12 + index * 0.045}s` }}>
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="hero-last" aria-hidden="true">{person.last}</span>
              </h1>
              <div className="roles reveal d2">
                <p className="role">{person.role}</p>
                <p className="role-sub">{person.secondRole}</p>
              </div>
              <p className="lede reveal d3">{person.headline}</p>
              <div className="actions reveal d4">
                <a className="btn gold" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <Icon name="arrow" size={16} />
                </a>
                <a className="btn ghost" href="#journey">Read the journey</a>
              </div>
            </div>

            <div className="portrait-col reveal d2">
              <div className="portrait-stage">
                <div className="portrait-orbit" aria-hidden="true" />
                <div className="portrait">
                  {person.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={person.photo}
                      srcSet={person.photoSrcSet}
                      sizes="(max-width: 640px) 256px, 322px"
                      alt={`Portrait of ${person.fullName}`}
                    />
                  ) : (
                    <span className="serif" aria-hidden="true">{person.initials}</span>
                  )}
                </div>
              </div>
              <div className="badge">
                <strong>Hon. General Secretary</strong>
                <span>YMBA</span>
                <em>Current appointment</em>
              </div>
            </div>
          </div>

          <div className="wrap hero-stats reveal d4">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong className="serif" data-count={stat.value}>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Affiliations */}
        <section className="marquee" aria-label="Affiliations">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                className="marquee-group"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {affiliations.map((item) => (
                  <span className="marquee-item" key={`${copy}-${item.name}`}>
                    {item.logo ? (
                      <span className="marquee-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.logo} alt="" width={30} height={30} loading="lazy" />
                      </span>
                    ) : null}
                    {item.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="wrap section about">
          <Reveal className="about-lead">
            <p className="eyebrow">About</p>
            <ScrollText className="serif" text={about.quote} />
          </Reveal>
          <Reveal className="about-body" delay={120}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <dl className="facts">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Focus */}
        <section id="focus" className="band">
          <div className="wrap section">
            <Reveal>
              <div className="section-head">
                <div>
                  <p className="eyebrow">What he does</p>
                  <h2 className="serif h2">A practice built on results.</h2>
                </div>
                <p className="section-lede">
                  Four areas where almost three decades of boardroom and consulting experience come together.
                </p>
              </div>
            </Reveal>
            <div className="focus-grid">
              {expertise.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} className="fill" variant="flip">
                  <article className="focus-card" data-tilt>
                    <span className="focus-num serif">{String(index + 1).padStart(2, "0")}</span>
                    <span className="focus-icon"><Icon name={item.icon} size={22} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Appointments */}
        <section id="appointments" className="appointments">
          <div className="wrap section">
            <Reveal>
              <div className="section-head on-dark">
                <div>
                  <p className="eyebrow">Current appointments</p>
                  <h2 className="serif h2">Where he serves today.</h2>
                </div>
                <p className="section-lede">
                  Leadership across consulting, community and the agri-export sector.
                </p>
              </div>
            </Reveal>
            <div className="appt-grid">
              {appointments.map((item, index) => (
                <Reveal key={item.role + item.org} delay={index * 110} className="fill" variant="zoom">
                  <article className="appt" data-tilt>
                    <div className="appt-top">
                      <span className="appt-logo-wrap">
                        <span className="appt-logo">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.logo} alt={item.logoAlt} width={56} height={56} loading="lazy" />
                        </span>
                        <span
                          className="appt-logo-badge"
                          style={{ transitionDelay: `${index * 110 + 340}ms` }}
                          aria-hidden="true"
                        >
                          <Icon name="check" size={11} />
                        </span>
                      </span>
                      <span className="appt-tag">
                        <i className="appt-dot" aria-hidden="true" />
                        {item.tag}
                      </span>
                    </div>
                    <div className="appt-body">
                      <span className="appt-index serif" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")} / {String(appointments.length).padStart(2, "0")}
                      </span>
                      <h3>{item.role}</h3>
                      <p className="appt-org">{item.org}</p>
                    </div>
                    <p className="appt-note">{item.note}</p>
                    <span className="appt-line" aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="wrap section">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">Journey</p>
                <h2 className="serif h2">Nearly three decades in the making.</h2>
              </div>
              <p className="section-lede">
                From a first role at Coopers &amp; Lybrand to chairmanship, international advisory work and an honorary office at the YMBA.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="timeline">
              <ol className="journey">
                {journey.map((item) => (
                  <li key={item.when}>
                    <span className="when serif">{item.when}</span>
                    <span className="node" aria-hidden="true" />
                    <div className="card">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        {/* Credentials */}
        <section id="credentials" className="band">
          <div className="wrap section">
            <Reveal>
              <div className="section-head">
                <div>
                  <p className="eyebrow">Credentials</p>
                  <h2 className="serif h2">Grounded in rigour.</h2>
                </div>
                <p className="section-lede">
                  Formal training in management and accountancy, tested across four decades of practice.
                </p>
              </div>
            </Reveal>
            <div className="cred-grid">
              {credentials.map((group, index) => (
                <Reveal key={group.title} delay={index * 100} className="fill" variant="flip">
                  <article className="cred">
                    <span className="cred-watermark" aria-hidden="true">
                      <Icon name={group.icon} size={132} />
                    </span>
                    <div className="cred-head">
                      <span className="cred-icon"><Icon name={group.icon} size={20} /></span>
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.name + item.detail} className={item.logo ? "has-logo" : undefined}>
                          {item.logo ? (
                            <span className="cred-logo">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.logo}
                                alt={item.logoAlt ?? ""}
                                width={70}
                                height={28}
                                loading="lazy"
                              />
                            </span>
                          ) : null}
                          <div className="cred-item">
                            <span>{item.name}</span>
                            <strong>{item.detail}</strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="wrap contact-in">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 className="serif contact-title">
                <span className="contact-glow" aria-hidden="true">Let&rsquo;s connect.</span>
                Let&rsquo;s connect.
              </h2>
              <p>The best way to reach Prasantha is through LinkedIn.</p>
              <div className="contact-actions">
                <a className="btn gold" href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  Open LinkedIn <Icon name="arrow" size={16} />
                </a>
              </div>
              <p className="contact-meta"><Icon name="pin" size={14} /> {person.location}</p>
            </Reveal>
          </div>
        </section>

        <footer className="foot">
          <div className="wrap foot-in">
            <p>© {new Date().getFullYear()} {person.fullName}</p>
            <div className="foot-links">
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
