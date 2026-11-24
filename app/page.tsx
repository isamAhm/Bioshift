
import type { ReactNode } from "react";
import content from "./content.json";

const CONTACT_EMAIL = "isam.ahmedh8@gmail.com";
const CONTACT_EMAIL_TWO = "henok3095@gmail.com";

const DEMO_SUBJECT = "BioShift – Request for a Product Demo";

const DEMO_BODY = `Hello BioShift Team,

I'm interested in learning more about BioShift and would like to schedule a product demonstration.

I would appreciate the opportunity to see how BioShift can help us manage employee attendance, monitor shifts, and streamline our workforce management processes.

Please let me know your availability and any additional information you may need from us.

Thank you, and I look forward to hearing from you.

Best regards,
[Your Name]
[Company / Organization]
[Phone Number]`;

const DEMO_EMAIL = `mailto:${CONTACT_EMAIL},${CONTACT_EMAIL_TWO}?subject=${encodeURIComponent(
  DEMO_SUBJECT
)}&body=${encodeURIComponent(DEMO_BODY)}`;

const ICONS: Record<string, ReactNode> = {
  fingerprint: (
    <>
      <path d="M5 11a7 7 0 0 1 14 0" />
      <path d="M8.5 13.5a3.5 3.5 0 0 1 7 0V17" />
      <path d="M12 11v8" />
    </>
  ),

  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),

  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
    </>
  ),

  bars: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,

  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),

  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),

  check: <path d="M5 12l5 5 9-10" />,
};

function Icon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  return (
    <svg
      className="ico"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function Brand() {
  return (
    <a href="#top" className="brand">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="7" fill="#0B2239" />
        <path
          d="M8 17a7 7 0 0 1 14 0"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="15" cy="19" r="2.2" fill="#F5B301" />
      </svg>
      BioShift
    </a>
  );
}

export default function Home() {
  const { dash } = content;

  return (
    <>
      <div className="wrap" id="top">
        <header className="nav">
          <Brand />

          <nav className="links" aria-label="Main">
            <a href="#features">Features</a>
            <a href="#reliability">Reliability</a>
            <a href="#rollout">Rollout</a>

            <a href={DEMO_EMAIL} className="btn btn-navy">
              Request a demo
            </a>
          </nav>
        </header>

        <section className="hero hero-centered">
          <div className="hero-content">
            <h1>Attendance you can verify, from the door to payroll.</h1>

            <p className="lead">
              BioShift connects ZKTeco fingerprint, face and card terminals
              to a real-time dashboard, so attendance, shifts and leave stay
              accurate and auditable at every site.
            </p>

            <div className="row">
              <a href={DEMO_EMAIL} className="btn btn-navy">
                Request a demo
              </a>

              <a href="#rollout" className="btn btn-line">
                See the rollout
              </a>
            </div>

            <p className="note">
              Works with ZKTeco XFace Pro and U270 terminals.
            </p>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="win">
            <div className="wbar">
              <i />
              <i />
              <i />
              <span>BioShift dashboard, sample data</span>
              <b className="live">Live</b>
            </div>

            <div className="wbody">
              <div className="side">
                {dash.side.map((s, i) => (
                  <b key={s} className={i === 0 ? "on" : undefined}>
                    {s}
                  </b>
                ))}
              </div>

              <div className="main">
                <div className="kpis">
                  {dash.kpis.map((k) => (
                    <div
                      className={`kpi k-${k.tone}`}
                      key={k.label}
                    >
                      <small>{k.label}</small>
                      <strong>{k.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="chart">
                  <p className="mt">Check-ins this week</p>

                  <div className="bars">
                    {dash.bars.map((h, i) => (
                      <i
                        key={i}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mt">Latest check-ins</p>

                  {content.events.map((e) => (
                    <div className="ev" key={e.time}>
                      <span className="t">{e.time}</span>

                      <div>
                        {e.place}
                        <small>{e.method}</small>
                      </div>

                      {e.status === "Late" ? (
                        <span className="st st-late">Late</span>
                      ) : (
                        <span className="st">
                          <Icon name="check" size={16} />
                          {e.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="sec">
        <div className="wrap">
          <h2>Manual attendance costs more than it looks</h2>

          <p className="sub">
            Paper and spreadsheets leave gaps in accuracy, visibility and
            compliance. BioShift closes them.
          </p>

          <div className="cols">
            <span>Manual and paper-based</span>
            <span>With BioShift</span>
          </div>

          {content.compare.map((c) => (
            <div className="pair" key={c.before}>
              <p>{c.before}</p>
              <p className="after">{c.after}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="features">
        <div className="wrap">
          <h2>Everything attendance needs, in one place</h2>

          <p className="sub">
            From the terminal at the door to the report on payroll's desk.
          </p>

          {content.features.map((f) => (
            <div className="feat" key={f.title}>
              <h3>
                <Icon name={f.icon} />
                {f.title}
              </h3>

              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec dark" id="reliability">
        <div className="wrap two">
          <div>
            <h2>Built to keep working</h2>

            <p className="sub">
              Attendance events are not lost to a network drop, and every
              action leaves a record.
            </p>

            <p>
              Supported terminals: ZKTeco XFace Pro for facial recognition,
              and ZKTeco U270 for fingerprint and card.
            </p>
          </div>

          <div>
            {content.reliability.map((r) => (
              <div className="chk" key={r.title}>
                <Icon name="check" />

                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="rollout">
        <div className="wrap">
          <h2>A rollout in three phases</h2>

          <p className="sub">
            Run alongside your current process first, then switch over once
            the numbers match.
          </p>

          <div className="tl">
            {content.phases.map((p) => (
              <div className="ph" key={p.title}>
                <small>{p.weeks}</small>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec cta" id="contact">
        <div className="wrap box">
          <div>
            <h2>See BioShift on your site</h2>

            <p>
              Tell us about your workforce and locations, and we will walk
              you through a live demo.
            </p>
          </div>

          <a href={DEMO_EMAIL} className="btn btn-navy">
            Request a demo
          </a>
        </div>
      </section>

      <footer className="wrap foot">
        <span>© 2026 BioShift. All rights reserved.</span>

        <div className="foot-emails">
          <a href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>

          <a href={`mailto:${CONTACT_EMAIL_TWO}`}>
            {CONTACT_EMAIL_TWO}
          </a>
        </div>
      </footer>
    </>
  );
}
