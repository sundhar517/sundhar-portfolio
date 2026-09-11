import { useState } from 'react'
import './App.css'


function ExperienceHighlights({ id, highlights }) {
  const [expandedExperience, setExpandedExperience] = useState(null)
  const isExpanded = expandedExperience === id
  const previewCount = 4
  const visibleHighlights = isExpanded
    ? highlights
    : highlights.slice(0, previewCount)

  return (
    <div className="experience-details">

      <ul className="experience-list">

        {visibleHighlights.map((highlight, index) => (
          <li key={`${id}-${index}`}>
            {highlight}
          </li>
        ))}

      </ul>

      {highlights.length > previewCount && (
        <button
          type="button"
          onClick={() =>
            setExpandedExperience(isExpanded ? null : id)
          }
          style={{
            marginTop: '1rem',
            padding: '0.65rem 0',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            font: 'inherit',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            opacity: 0.8,
          }}
        >
          {isExpanded ? 'Show less ↑' : 'Show more ↓'}
        </button>
      )}

    </div>
  )
}

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="site">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="navbar">

        <div className="nav-brand">
          <div className="personal-brand">
            <span className="brand-name">
              SUNDHAR MOHAN
            </span>

            <span className="brand-role">
              CNC &amp; AUTOMATION SERVICE LEADER
            </span>
          </div>
        </div>

        <nav className="nav-links">

          <button
            className="nav-link active"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('expertise')}
          >
            Expertise
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('achievements')}
          >
            Achievements
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('knowledge')}
          >
            Knowledge
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>

        </nav>

      </header>


      {/* =====================================================
          MAIN
          ===================================================== */}

      <main>


        {/* ===================================================
            HOME
            =================================================== */}

        <section
          className="hero"
          id="home"
          style={{
            backgroundImage: "url('/cnc-machines-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="hero-text">

              <div className="eyebrow">
                WELCOME TO MY PROFESSIONAL PORTFOLIO
              </div>

              <h1>
                SUNDHAR <span>MOHAN</span>
              </h1>

              <h2>
                CNC &amp; AUTOMATION SERVICE LEADER
              </h2>

              <div className="hero-line"></div>

              <p className="hero-description">
                16+ years of experience in CNC service,
                installation &amp; commissioning, machine building,
                industrial automation, maintenance and technical
                operations.
              </p>

              <div className="hero-specialties">

                <span>FANUC CNC</span>
                <span>PMC / LADDER LOGIC</span>
                <span>SIEMENS CNC</span>
                <span>5-AXIS CNC</span>
                <span>MACHINE BUILDING</span>
                <span>AUTOMATION</span>

              </div>


              <div className="hero-stats">

                <div className="stat">
                  <strong>16+</strong>
                  <span>
                    YEARS
                    <br />
                    EXPERIENCE
                  </span>
                </div>

                <div className="stat">
                  <strong>200+</strong>
                  <span>
                    CNC
                    <br />
                    MACHINES
                  </span>
                </div>

                <div className="stat">
                  <strong>30+</strong>
                  <span>
                    5-AXIS
                    <br />
                    CNC MACHINES
                  </span>
                </div>

                <div className="stat">
                  <strong>50+</strong>
                  <span>
                    INSTALLATION &amp;
                    <br />
                    COMMISSIONING
                  </span>
                </div>

              </div>


              <div className="hero-actions">

                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore My Work
                  <span>→</span>
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Let's Connect
                </button>

              </div>

            </div>


            <div className="hero-photo-wrapper">

              <div
                className="photo-frame"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  aspectRatio: "1 / 1",
                }}
              >

                <img
                  src="/sundhar-mohan.jpg"
                  alt="Sundhar Mohan"
                  className="hero-photo"
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

              </div>

              <div className="photo-caption">

                <span>PRECISION</span>
                <span>RELIABILITY</span>
                <span>CONTINUOUS IMPROVEMENT</span>

              </div>

            </div>

          </div>


          <button
            className="scroll-indicator"
            onClick={() => scrollToSection('about')}
          >

            <span className="scroll-mouse"></span>

            <span>
              SCROLL DOWN
            </span>

          </button>

        </section>



        {/* ===================================================
            CAPABILITY STRIP
            =================================================== */}

        <section className="capability-strip">

          <div className="capability">
            <div className="capability-icon">⚙</div>

            <div>
              <strong>FANUC &amp; PMC</strong>
              <span>CONTROL SYSTEMS</span>
            </div>
          </div>

          <div className="capability">
            <div className="capability-icon">◇</div>

            <div>
              <strong>CNC &amp; MACHINE TOOLS</strong>
              <span>INSTALLATION &amp; SERVICE</span>
            </div>
          </div>

          <div className="capability">
            <div className="capability-icon">⌁</div>

            <div>
              <strong>AUTOMATION &amp; PLC</strong>
              <span>INTEGRATION</span>
            </div>
          </div>

          <div className="capability">
            <div className="capability-icon">⚒</div>

            <div>
              <strong>MAINTENANCE &amp; RELIABILITY</strong>
              <span>IMPROVEMENT</span>
            </div>
          </div>

          <div className="capability">
            <div className="capability-icon">◎</div>

            <div>
              <strong>TEAM LEADERSHIP</strong>
              <span>TRAINING &amp; SUPPORT</span>
            </div>
          </div>

        </section>



        {/* ===================================================
            ABOUT
            =================================================== */}

        <section className="about-section" id="about">

          <div className="about-container">

            <div className="about-header">

              <div className="section-label">
                01 / ABOUT
              </div>

              <div className="about-title">

                <h2>
                  Engineering with a
                  <br />
                  <span>practical mindset.</span>
                </h2>

                <div className="about-title-line"></div>

              </div>

            </div>


            <div className="about-grid">

              <div className="about-main">

                <div className="about-kicker">
                  CAREER SUMMARY
                </div>

                <p className="about-lead">
                  CNC &amp; Automation Service Leader with 16+
                  years of experience across CNC service,
                  installation &amp; commissioning, machine
                  building, industrial automation, maintenance,
                  reliability and technical operations.
                </p>

                <p>
                  My career has progressed from hands-on CNC
                  and industrial maintenance to international
                  field service and Service Management,
                  combining engineering expertise with
                  leadership of people, processes and service
                  operations.
                </p>

                <p>
                  My work focuses on machine uptime,
                  reliability, structured troubleshooting,
                  technical problem solving, continuous
                  improvement and development of technical
                  teams.
                </p>

              </div>


              <div className="about-panel">

                <div className="about-panel-item">
                  <span className="about-number">16+</span>

                  <div>
                    <strong>YEARS</strong>
                    <small>ENGINEERING EXPERIENCE</small>
                  </div>
                </div>

                <div className="about-panel-item">
                  <span className="about-number">200+</span>

                  <div>
                    <strong>CNC</strong>
                    <small>MACHINES EXPERIENCE</small>
                  </div>
                </div>

                <div className="about-panel-item">
                  <span className="about-number">30+</span>

                  <div>
                    <strong>5-AXIS</strong>
                    <small>CNC MACHINES</small>
                  </div>
                </div>

                <div className="about-panel-item">
                  <span className="about-number">100+</span>

                  <div>
                    <strong>PEOPLE</strong>
                    <small>ENGINEERS &amp; TECHNICIANS TRAINED</small>
                  </div>
                </div>

              </div>

            </div>


            <div className="about-philosophy">

              <div className="philosophy-label">
                ENGINEERING PHILOSOPHY
              </div>

              <div className="philosophy-content">
                <span>PRECISION</span>
                <span>RELIABILITY</span>
                <span>CONTINUOUS IMPROVEMENT</span>
              </div>

            </div>

          </div>

        </section>



        {/* ===================================================
            EXPERIENCE
            =================================================== */}

        <section
          className="experience-section"
          id="experience"
        >

          <div className="experience-container">

            <div className="section-topline">

              <div className="section-label dark-label">
                02 / EXPERIENCE
              </div>

              <span className="section-side-note">
                CAREER TIMELINE
              </span>

            </div>


            <div className="experience-heading">

              <h2>
                16+ years of
                <br />
                <span>engineering experience.</span>
              </h2>

              <p>
                From hands-on CNC and industrial maintenance
                to international field service and Service
                Management, with a focus on reliability,
                troubleshooting and technical leadership.
              </p>

            </div>


            <div className="timeline">

              {/* =================================================
                  ETHEREAL MACHINES — DEPUTY MANAGER
                  ================================================= */}

              <article className="timeline-item current">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  APR 2026
                  <br />
                  PRESENT
                </div>

                <div className="timeline-card featured">

                  <div className="experience-company-head">

                    <div>

                      <span className="experience-status">
                        CURRENT POSITION
                      </span>

                      <h3>
                        Deputy Manager – Service
                      </h3>

                      <h4>
                        Ethereal Machines
                      </h4>

                      <span className="experience-location">
                        Bengaluru, India
                      </span>

                    </div>

                    <img
                      src="/ethereal-machines-logo.jpg"
                      alt="Ethereal Machines"
                      className="experience-company-logo"
                    />

                  </div>


                  <p className="experience-summary">
                    Leading Service, Maintenance and MTB –
                    Electrical Assembly operations while
                    supporting CNC machine building,
                    electrical integration, commissioning,
                    technical service and team development.
                  </p>


                  <div className="experience-highlights">

                    <div>
                      <strong>10</strong>
                      <span>ENGINEERS &amp;<br />TECHNICIANS</span>
                    </div>

                    <div>
                      <strong>75</strong>
                      <span>CNC MACHINES<br />OVERSEEN</span>
                    </div>

                    <div>
                      <strong>44</strong>
                      <span>5-AXIS CNC<br />MACHINES</span>
                    </div>

                    <div>
                      <strong>70+</strong>
                      <span>MACHINES BUILT /<br />INTEGRATED</span>
                    </div>

                  </div>


                  <ExperienceHighlights
                    id="ethereal-deputy"
                    highlights={[
                      "Lead Service, Maintenance and MTB–Electrical Assembly operations, managing 10 engineers/technicians and overseeing 75 CNC machines, including 44 5-axis CNC machines, plus 10+ other manufacturing equipment.",
                      "Manage manpower planning, task allocation, service scheduling, resource utilization, training, KPI monitoring and operational priorities.",
                      "Provide technical leadership in FANUC CNC, PMC/Ladder Logic, PLCs, servo systems, electrical controls, diagnostics and troubleshooting.",
                      "Lead CNC machine building and electrical integration across 70+ machines, coordinating CNC/PLC/servo/sensor integration, testing and commissioning readiness.",
                      "Coordinate with Design, Engineering, Production and Quality teams on machine development, service feedback, engineering improvements and prototype testing.",
                      "Drive reliability through RCA, PM/PdM, breakdown analysis, SOPs, spare-parts optimization and engineering improvements, contributing to 20% lower MTTR and 30% fewer repeat breakdowns.",
                      "Designed and established an end-to-end maintenance process from BD Slip to KPI reporting, covering MTTR, MTBF and Machine Efficiency.",
                      "Established Excel-based breakdown, MTTR/MTBF and machine-efficiency dashboards, PM tracking and spare-parts management.",
                      "Supported AS 9100D audit activities using the maintenance process developed for Maintenance operations.",
                      "Lead installation, commissioning and on-site technical support, including service planning, technical reporting and performance reviews.",
                      "Support Application Engineering through machining trials, CNC parameter optimization, 5-axis kinematic verification and application troubleshooting.",
                      "Implemented a semi-automatic CNC offset adjustment workflow and custom CNC Tool Life Monitoring Screen, reducing operator effort and fatigue.",
                      "Define CMMS workflow requirements and provide functional inputs for digital maintenance records.",
                      "Trained and mentored 100+ engineers and technicians at Ethereal Machines."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  ETHEREAL MACHINES — ASSISTANT MANAGER
                  ================================================= */}

              <article className="timeline-item">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  OCT 2022
                  <br />
                  APR 2026
                </div>

                <div className="timeline-card">

                  <div className="experience-company-head">

                    <div>

                      <span className="experience-status">
                        SERVICE MANAGEMENT
                      </span>

                      <h3>
                        Assistant Manager – Service
                      </h3>

                      <h4>
                        Ethereal Machines
                      </h4>

                      <span className="experience-location">
                        Karnataka, India
                      </span>

                    </div>

                    <img
                      src="/ethereal-machines-logo.jpg"
                      alt="Ethereal Machines"
                      className="experience-company-logo"
                    />

                  </div>


                  <p className="experience-summary">
                    Managed Service, Maintenance, Installation
                    &amp; Commissioning, Machine Building,
                    Application Engineering and Automation
                    activities while developing structured
                    maintenance systems and technical teams.
                  </p>


                  <ExperienceHighlights
                    id="ethereal-assistant"
                    highlights={[
                      "Managed a team of 6+ engineers/technicians, supporting Service, Maintenance, Installation & Commissioning, Machine Building, Application Engineering and Automation activities.",
                      "Managed service and maintenance activities for 30+ CNC machines, including troubleshooting, preventive maintenance, breakdown response and technical support.",
                      "Coordinated CNC machine installation, commissioning, machine building and electrical integration, ensuring machines were manufactured, tested and delivered as per plan.",
                      "Provided technical support across FANUC CNC, PLCs, servo systems, electrical controls, CNC diagnostics and automation.",
                      "Developed and implemented a structured maintenance management process, covering breakdown reporting, analysis, corrective actions, preventive maintenance and KPI monitoring.",
                      "Established Excel-based maintenance dashboards and tracking systems for MTTR, MTBF, machine efficiency, breakdown analysis, PM and spare-parts management.",
                      "Drove maintenance performance through RCA, breakdown analysis, PM improvements, standardized troubleshooting and technical team development.",
                      "Achieved defined maintenance and service KPIs while supporting planned machine manufacturing and delivery targets.",
                      "Supported the organization in achieving AS 9100D certification through implementation and documentation of the maintenance processes developed for Service and Maintenance operations.",
                      "Led and supported CNC machine improvement activities, application trials, troubleshooting and technical problem-solving in coordination with Engineering, Production and Quality teams.",
                      "Trained and mentored engineers and technicians to improve technical competency in CNC service, maintenance and troubleshooting.",
                      "Managed customer-site service activities independently, including technical reporting, spare-parts requirements and corrective maintenance.",
                      "Focused on achieving faster service TAT through systematic fault diagnosis and effective corrective actions.",
                      "Supported successful installation and commissioning of CNC equipment while maintaining service quality and customer satisfaction."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  FELDER
                  ================================================= */}

              <article className="timeline-item">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  NOV 2020
                  <br />
                  OCT 2022
                </div>

                <div className="timeline-card">

                  <div className="experience-company-head">

                    <div>

                      <span className="experience-status">
                        INTERNATIONAL FIELD SERVICE
                      </span>

                      <h3>
                        International Service Engineer
                      </h3>

                      <h4>
                        Felder Group India
                      </h4>

                      <span className="experience-location">
                        Bengaluru, India
                      </span>

                    </div>

                    <img
                      src="/felder-group-logo.jpg"
                      alt="Felder Group"
                      className="experience-company-logo"
                    />

                  </div>


                  <p className="experience-summary">
                    Installation, commissioning, service and
                    technical support for CNC woodworking and
                    standard CNC machines across India and
                    international customer locations.
                  </p>


                  <div className="country-tags">

                    <span>AUSTRIA</span>
                    <span>LATVIA</span>
                    <span>ALGERIA</span>
                    <span>INDIA</span>

                  </div>


                  <ExperienceHighlights
                    id="felder"
                    highlights={[
                      "Installed and commissioned CNC woodworking and standard CNC machines at customer facilities across India and international locations.",
                      "Executed machine installation, commissioning, troubleshooting, and service activities at customer sites, ensuring machines met required performance standards.",
                      "Supported new machine projects and machine modifications, including interfacing with external actuators and peripheral equipment.",
                      "Provided on-site field service and technical support for electrical, mechanical, CNC, and automation-related issues.",
                      "Provided remote technical support through hotline assistance, diagnosing customer issues over the phone and guiding technicians and operators through effective troubleshooting.",
                      "Conducted preventive maintenance, breakdown diagnostics, service calls, and machine health checks to improve reliability and minimize downtime.",
                      "Generated detailed problem and resolution reports, documenting technical issues, root causes, corrective actions, and recommendations.",
                      "Communicated with customers, engineers, technicians, and internal teams to ensure effective service delivery and timely resolution of technical issues.",
                      "Conducted customer demonstrations and operator training, ensuring safe and effective operation and maintenance of CNC equipment.",
                      "Provided technical support during machine installation, commissioning, production trials, and customer acceptance.",
                      "Supported service contract renewals and continued after-sales technical support.",
                      "Maintained technical knowledge through industry research, technical workshops, product training, and hands-on learning.",
                      "Executed international field-service assignments across Austria, Latvia, Algeria, covering machine installation, commissioning, troubleshooting, preventive maintenance, customer training, and technical support."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  NEPROPLAST
                  ================================================= */}

              <article className="timeline-item">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  JUL 2019
                  <br />
                  JUL 2020
                </div>

                <div className="timeline-card">

                  <span className="experience-status">
                    SAUDI ARABIA
                  </span>

                  <h3>
                    Electro Mechanical Technician
                  </h3>

                  <h4>
                    neproplast_SA
                  </h4>

                  <span className="experience-location">
                    Saudi Arabia
                  </span>


                  <p className="experience-summary">
                    Electro-mechanical maintenance and
                    troubleshooting across injection molding,
                    extrusion, CNC and industrial manufacturing
                    equipment.
                  </p>


                  <ExperienceHighlights
                    id="neproplast"
                    highlights={[
                      "Performed electro-mechanical maintenance and troubleshooting for injection molding, extrusion, CNC and other industrial manufacturing equipment.",
                      "Handled preventive and breakdown maintenance covering electrical systems, PLCs, hydraulic and pneumatic systems, motors, drives and machine controls.",
                      "Diagnosed complex electrical and mechanical faults to restore equipment operation and improve machine availability.",
                      "Reduced machine downtime through systematic troubleshooting and timely corrective maintenance.",
                      "Completed major machine repairs and restored equipment to operational condition.",
                      "Improved Preventive Maintenance (PM) practices to support equipment reliability and reduce unplanned downtime.",
                      "Maintained maintenance records and documented breakdowns, corrective actions and maintenance activities.",
                      "Worked independently on technical issues, with a strong focus on electrical and electro-mechanical troubleshooting."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  STITCH
                  ================================================= */}

              <article className="timeline-item">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  NOV 2017
                  <br />
                  FEB 2019
                </div>

                <div className="timeline-card">

                  <span className="experience-status">
                    CNC SERVICE
                  </span>

                  <h3>
                    Senior Services Engineer
                  </h3>

                  <h4>
                    STITCH OVERSEAS PRIVATE LIMITED
                  </h4>

                  <span className="experience-location">
                    Chennai, India
                  </span>


                  <p className="experience-summary">
                    CNC machine installation, commissioning,
                    service and maintenance with strong
                    exposure to Siemens CNC controls,
                    PLCs and servo systems.
                  </p>


                  <ExperienceHighlights
                    id="stitch"
                    highlights={[
                      "Independently handled CNC machine installation, commissioning, service and maintenance at customer sites.",
                      "Supported VMCs, machining centres, 3-axis and 5-axis CNC machines, along with PLC-controlled industrial equipment.",
                      "Diagnosed and resolved CNC, electrical, PLC, servo, hydraulic and pneumatic system issues to restore machine operation.",
                      "Provided complete customer technical support, including breakdown troubleshooting, preventive maintenance, machine diagnostics and service coordination.",
                      "Worked extensively with Siemens CNC controls, PLC systems, servo drives and electrical control systems.",
                      "Conducted machine installation and commissioning activities, ensuring equipment readiness and successful customer handover.",
                      "Provided customer training on machine operation, service and troubleshooting."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  PENNAR
                  ================================================= */}

              <article className="timeline-item compact">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  AUG 2017
                  <br />
                  OCT 2017
                </div>

                <div className="timeline-card">

                  <span className="experience-status">
                    INDUSTRIAL ELECTRICAL
                  </span>

                  <h3>
                    Electrical Engineer
                  </h3>

                  <h4>
                    Pennar Industries Limited
                  </h4>

                  <span className="experience-location">
                    Chennai, India
                  </span>


                  <p className="experience-summary">
                    Electrical maintenance and production
                    support covering industrial machinery,
                    CNC equipment and hydraulic systems.
                  </p>


                  <ExperienceHighlights
                    id="pennar"
                    highlights={[
                      "Supported electrical maintenance and production operations for industrial machinery and CNC equipment.",
                      "Performed electrical troubleshooting covering control panels, PLC systems, motors and drives.",
                      "Executed preventive and breakdown maintenance to maintain equipment reliability and production continuity.",
                      "Worked closely with production and maintenance teams to identify and resolve machine-related electrical issues.",
                      "Improved machine availability and troubleshooting response, contributing to reduced equipment downtime."
                    ]}
                  />

                </div>

              </article>


              {/* =================================================
                  BRAKES INDIA
                  ================================================= */}

              <article className="timeline-item">

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  SEP 2010
                  <br />
                  JUL 2017
                </div>

                <div className="timeline-card">

                  <span className="experience-status">
                    BRAKES INDIA
                  </span>

                  <h3>
                    Maintenance Engineer
                  </h3>

                  <h4>
                    Brakes India
                  </h4>

                  <span className="experience-location">
                    Chennai, India
                  </span>


                  <p className="experience-summary">
                    Progressive industrial maintenance
                    experience across CNC machines,
                    VMCs, CNC turning machines, automated
                    production lines and PLC-controlled
                    equipment.
                  </p>


                  <div className="role-progression">

                    <div>
                      <strong>SEP 2014 – JUL 2017</strong>
                      <span>Maintenance Engineer</span>
                    </div>

                    <div>
                      <strong>SEP 2011 – SEP 2014</strong>
                      <span>Junior Engineer</span>
                    </div>

                    <div>
                      <strong>SEP 2010 – SEP 2011</strong>
                      <span>Junior Engineer Trainee</span>
                    </div>

                  </div>


                  <ExperienceHighlights
                    id="brakes"
                    highlights={[
                      "Managed day-to-day maintenance activities supporting CNC machines, VMCs, CNC turning machines, automated production lines and PLC-controlled manufacturing equipment.",
                      "Planned and executed preventive, predictive and breakdown maintenance to improve machine availability and production reliability.",
                      "Led troubleshooting of electrical, PLC, CNC, servo/drive, hydraulic and pneumatic systems, applying systematic diagnostics and root cause analysis.",
                      "Guided technicians and coordinated maintenance activities to ensure timely breakdown response and production support.",
                      "Implemented machine modifications, automation improvements and maintenance improvements to reduce downtime and improve equipment performance.",
                      "Contributed to reducing machine downtime and repeat breakdowns, while improving machine availability and maintenance effectiveness.",
                      "Trained 10+ engineers and technicians in electrical troubleshooting, CNC, pneumatics, maintenance practices and machine diagnostics.",
                      "Successfully converted a conventional BFW milling machine into a semi-automatic machine, improving the machine's operating capability through automation.",
                      "Developed broad technical expertise across Electrical, PLC, CNC, Hydraulic, Pneumatic and Servo/Drive systems.",
                      "Performed preventive, predictive and breakdown maintenance for CNC machines, VMCs, CNC turning machines, automated production lines and PLC-controlled equipment.",
                      "Troubleshot electrical, PLC, CNC, servo/drive, hydraulic and pneumatic systems to restore machines and support production continuity.",
                      "Conducted machine diagnostics and root cause analysis to identify recurring equipment problems and improve reliability.",
                      "Supported maintenance improvements, machine modifications and automation-related activities to improve equipment performance.",
                      "Coordinated maintenance activities with production teams and guided technicians during troubleshooting and corrective maintenance.",
                      "Contributed to reduced downtime, improved machine availability and reduced repeat breakdowns through systematic maintenance practices.",
                      "Developed strong hands-on expertise across Electrical, PLC, CNC, Hydraulic, Pneumatic and Servo/Drive systems.",
                      "Supported training and knowledge sharing for engineers and technicians in electrical troubleshooting, CNC, pneumatics, maintenance and machine diagnostics.",
                      "Started professional career in industrial maintenance and production support, gaining hands-on experience with CNC machines, VMCs, CNC turning machines, automated production lines and PLC-controlled equipment.",
                      "Supported preventive and breakdown maintenance of electrical, hydraulic and pneumatic systems.",
                      "Assisted in electrical troubleshooting, machine diagnostics and restoration of production equipment.",
                      "Developed practical knowledge of CNC machines, PLCs, servo/drives, hydraulics, pneumatics and electrical control systems.",
                      "Worked closely with production and maintenance teams to support machine availability and minimize downtime."
                    ]}
                  />

                </div>

              </article>


            </div>

          </div>

        </section>



        {/* ===================================================
            EXPERTISE
            =================================================== */}

        <section
          className="expertise-section"
          id="expertise"
        >

          <div className="expertise-container">

            <div className="section-topline">

              <div className="section-label">
                03 / EXPERTISE
              </div>

              <span className="section-side-note">
                TECHNICAL CAPABILITY
              </span>

            </div>


            <div className="expertise-heading">

              <h2>
                Technical
                <br />
                <span>expertise.</span>
              </h2>

              <p>
                A hands-on engineering foundation across CNC,
                controls, automation, maintenance and technical
                service leadership — built through field
                experience, machine building and technical
                problem solving.
              </p>

            </div>


            <div className="expertise-grid">


              <article className="expertise-card">
                <span className="expertise-number">01</span>
                <div className="expertise-icon">⚙</div>

                <h3>
                  CNC &amp; MACHINE TOOLS
                </h3>

                <div className="expertise-focus">
                  MACHINE BUILDING • COMMISSIONING • DIAGNOSTICS
                </div>

                <p>
                  3-axis and 5-axis CNC systems,
                  installation, commissioning, machine
                  diagnostics, application support and
                  performance optimization.
                </p>

                <div className="skill-tags">
                  <span>3-AXIS</span>
                  <span>5-AXIS</span>
                  <span>COMMISSIONING</span>
                  <span>DIAGNOSTICS</span>
                </div>
              </article>


              <article className="expertise-card">
                <span className="expertise-number">02</span>
                <div className="expertise-icon">⌁</div>

                <h3>
                  FANUC &amp; PMC
                </h3>

                <div className="expertise-focus">
                  CNC CONTROL • PMC • LADDER LOGIC
                </div>

                <p>
                  FANUC CNC controls, PMC/Ladder Logic,
                  machine functions, diagnostics and
                  control-system troubleshooting.
                </p>

                <div className="skill-tags">
                  <span>FANUC CNC</span>
                  <span>PMC</span>
                  <span>LADDER LOGIC</span>
                  <span>M-CODES</span>
                </div>
              </article>


              <article className="expertise-card">
                <span className="expertise-number">03</span>
                <div className="expertise-icon">◇</div>

                <h3>
                  PLC &amp; AUTOMATION
                </h3>

                <div className="expertise-focus">
                  CONTROL SYSTEMS • INTEGRATION • TROUBLESHOOTING
                </div>

                <p>
                  PLC diagnostics, control circuits,
                  machine automation, sensors, actuators
                  and CNC/PLC integration.
                </p>

                <div className="skill-tags">
                  <span>PLC</span>
                  <span>CONTROL CIRCUITS</span>
                  <span>SENSORS</span>
                  <span>AUTOMATION</span>
                </div>
              </article>


              <article className="expertise-card">
                <span className="expertise-number">04</span>
                <div className="expertise-icon">↗</div>

                <h3>
                  DRIVES &amp; MOTION
                </h3>

                <div className="expertise-focus">
                  SERVO • DRIVE • MOTION SYSTEMS
                </div>

                <p>
                  Servo drives, motors, motion systems,
                  electrical controls and machine-level
                  troubleshooting.
                </p>

                <div className="skill-tags">
                  <span>SERVO</span>
                  <span>DRIVES</span>
                  <span>MOTORS</span>
                  <span>MOTION CONTROL</span>
                </div>
              </article>


              <article className="expertise-card">
                <span className="expertise-number">05</span>
                <div className="expertise-icon">◉</div>

                <h3>
                  MAINTENANCE &amp; RELIABILITY
                </h3>

                <div className="expertise-focus">
                  RCA • MTTR • MTBF • CONTINUOUS IMPROVEMENT
                </div>

                <p>
                  Preventive, predictive and corrective
                  maintenance, RCA, CAPA, MTTR, MTBF,
                  machine availability and KPI management.
                </p>

                <div className="skill-tags">
                  <span>MTTR</span>
                  <span>MTBF</span>
                  <span>RCA</span>
                  <span>PM / PdM</span>
                </div>
              </article>


              <article className="expertise-card">
                <span className="expertise-number">06</span>
                <div className="expertise-icon">⚡</div>

                <h3>
                  ELECTRO-MECHANICAL SYSTEMS
                </h3>

                <div className="expertise-focus">
                  ELECTRICAL • HYDRAULICS • PNEUMATICS
                </div>

                <p>
                  Electrical systems, hydraulics,
                  pneumatics, motors, machine controls and
                  systematic fault diagnosis.
                </p>

                <div className="skill-tags">
                  <span>ELECTRICAL</span>
                  <span>HYDRAULICS</span>
                  <span>PNEUMATICS</span>
                  <span>MECHANICAL</span>
                </div>
              </article>


              <article className="expertise-card wide">
                <span className="expertise-number">07</span>
                <div className="expertise-icon">◎</div>

                <h3>
                  SERVICE &amp; TECHNICAL LEADERSHIP
                </h3>

                <div className="expertise-focus">
                  PEOPLE • SERVICE OPERATIONS • CUSTOMER SUPPORT
                </div>

                <p>
                  Service planning, manpower allocation,
                  customer escalation handling, technical
                  mentoring, training, resource planning,
                  documentation and cross-functional
                  coordination.
                </p>

                <div className="skill-tags">
                  <span>TEAM LEADERSHIP</span>
                  <span>TRAINING</span>
                  <span>CUSTOMER SUPPORT</span>
                  <span>KPI</span>
                  <span>RESOURCE PLANNING</span>
                </div>
              </article>


            </div>

          </div>

        </section>



        {/* ===================================================
            PROJECTS
            =================================================== */}

        <section
          className="projects-section"
          id="projects"
        >

          <div className="projects-container">

            <div className="section-topline">

              <div className="section-label">
                04 / PROJECTS
              </div>

              <span className="section-side-note">
                SELECTED ENGINEERING WORK
              </span>

            </div>


            <div className="projects-heading">

              <h2>
                Selected
                <br />
                <span>engineering projects.</span>
              </h2>

              <p>
                Practical engineering work covering CNC
                machine building, automation, maintenance
                systems and CNC improvements.
              </p>

            </div>


            <div className="projects-grid">


              <article className="project-card featured-project">

                <div className="project-top">

                  <span className="project-number">
                    01
                  </span>

                  <span className="project-type">
                    MACHINE BUILDING
                  </span>

                </div>

                <h3>
                  CNC Machine Building &amp;
                  <br />
                  Electrical Integration
                </h3>

                <div className="project-focus">
                  BUILD • INTEGRATION • COMMISSIONING READINESS
                </div>

                <p>
                  CNC machine building and electrical
                  integration involving CNC controls, PLCs,
                  servo systems, sensors, safety circuits,
                  control-panel wiring, testing and
                  commissioning readiness.
                </p>

                <div className="project-tags">
                  <span>CNC</span>
                  <span>PLC</span>
                  <span>SERVO</span>
                  <span>ELECTRICAL</span>
                </div>

                <div className="project-bottom">
                  <strong>70+</strong>
                  <span>MACHINES BUILT / INTEGRATED</span>
                </div>

              </article>


              <article className="project-card">

                <div className="project-top">
                  <span className="project-number">02</span>
                  <span className="project-type">
                    FIELD SERVICE
                  </span>
                </div>

                <h3>
                  CNC Machine Installation
                  <br />
                  &amp; Commissioning
                </h3>

                <div className="project-focus">
                  INSTALLATION • START-UP • CUSTOMER ACCEPTANCE
                </div>

                <p>
                  Installation, commissioning,
                  troubleshooting, production trials,
                  customer acceptance and technical
                  support for CNC machines.
                </p>

                <div className="project-tags">
                  <span>INSTALLATION</span>
                  <span>COMMISSIONING</span>
                  <span>FIELD SERVICE</span>
                </div>

                <div className="project-bottom">
                  <strong>50+</strong>
                  <span>INSTALLATION &amp; COMMISSIONING</span>
                </div>

              </article>


              <article className="project-card">

                <div className="project-top">
                  <span className="project-number">03</span>
                  <span className="project-type">
                    CNC CONTROLS
                  </span>
                </div>

                <h3>
                  FANUC PMC / CNC
                  <br />
                  Engineering
                </h3>

                <div className="project-focus">
                  CONTROL LOGIC • MACHINE FUNCTIONS • DIAGNOSTICS
                </div>

                <p>
                  FANUC CNC controls, PMC/Ladder Logic,
                  machine functions, M-code implementation,
                  diagnostics and machine-level control
                  troubleshooting.
                </p>

                <div className="project-tags">
                  <span>FANUC</span>
                  <span>PMC</span>
                  <span>LADDER</span>
                  <span>M-CODE</span>
                </div>

              </article>


              <article className="project-card">

                <div className="project-top">
                  <span className="project-number">04</span>
                  <span className="project-type">
                    RELIABILITY
                  </span>
                </div>

                <h3>
                  Maintenance Management
                  <br />
                  System
                </h3>

                <div className="project-focus">
                  BREAKDOWN • RCA • KPI • RELIABILITY
                </div>

                <p>
                  Designed and established an end-to-end
                  maintenance process from Breakdown Slip
                  through analysis, corrective action and
                  KPI reporting.
                </p>

                <div className="project-tags">
                  <span>MTTR</span>
                  <span>MTBF</span>
                  <span>RCA</span>
                  <span>PM</span>
                  <span>SPARES</span>
                </div>

                <div className="project-bottom">
                  <strong>20%</strong>
                  <span>LOWER MTTR</span>
                </div>

              </article>


              <article className="project-card">

                <div className="project-top">
                  <span className="project-number">05</span>
                  <span className="project-type">
                    CNC IMPROVEMENT
                  </span>
                </div>

                <h3>
                  Semi-Automatic CNC
                  <br />
                  Offset Adjustment
                </h3>

                <div className="project-focus">
                  CALCULATION LOGIC • CNC OFFSET • OPERATOR SUPPORT
                </div>

                <p>
                  Developed a semi-automatic CNC offset
                  adjustment workflow using calculation
                  logic and a user interface to reduce
                  operator effort and fatigue.
                </p>

                <div className="project-tags">
                  <span>OFFSET</span>
                  <span>CALCULATION</span>
                  <span>UI</span>
                  <span>OPERATOR SUPPORT</span>
                </div>

              </article>


              <article className="project-card">

                <div className="project-top">
                  <span className="project-number">06</span>
                  <span className="project-type">
                    CNC MONITORING
                  </span>
                </div>

                <h3>
                  CNC Tool Life
                  <br />
                  Monitoring Screen
                </h3>

                <div className="project-focus">
                  TOOL VISIBILITY • MONITORING • MACHINE OPERATION
                </div>

                <p>
                  Developed a custom CNC Tool Life
                  Monitoring Screen to improve tool-use
                  visibility and support machine operation.
                </p>

                <div className="project-tags">
                  <span>TOOL LIFE</span>
                  <span>CNC</span>
                  <span>MONITORING</span>
                  <span>HMI</span>
                </div>

              </article>


              <article className="project-card featured-project">

                <div className="project-top">
                  <span className="project-number">07</span>
                  <span className="project-type">
                    AUTOMATION
                  </span>
                </div>

                <h3>
                  BFW Milling Machine
                  <br />
                  Automation
                </h3>

                <div className="project-focus">
                  RETROFIT • AUTOMATION • SEMI-AUTOMATIC OPERATION
                </div>

                <p>
                  Converted a conventional BFW milling
                  machine into a semi-automatic machine,
                  improving its operating capability
                  through automation.
                </p>

                <div className="project-tags">
                  <span>BFW</span>
                  <span>AUTOMATION</span>
                  <span>RETROFIT</span>
                  <span>CONTROL</span>
                </div>

                <div className="project-bottom">
                  <strong>01</strong>
                  <span>SEMI-AUTOMATIC RETROFIT</span>
                </div>

              </article>


            </div>

          </div>

        </section>



        {/* ===================================================
            ACHIEVEMENTS
            =================================================== */}

        <section
          className="achievements-section"
          id="achievements"
        >

          <div className="achievements-container">

            <div className="section-topline">

              <div className="section-label">
                05 / ACHIEVEMENTS
              </div>

              <span className="section-side-note">
                PROFESSIONAL HIGHLIGHTS
              </span>

            </div>


            <div className="achievements-heading">

              <h2>
                Measurable
                <br />
                <span>engineering impact.</span>
              </h2>

            </div>


            <div className="achievement-numbers">

              <div className="achievement-number-card">
                <span className="achievement-category">EXPERIENCE</span>
                <strong>16+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">MACHINE EXPOSURE</span>
                <strong>200+</strong>
                <span>CNC MACHINES</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">FIELD SERVICE</span>
                <strong>50+</strong>
                <span>INSTALLATION &amp; COMMISSIONING</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">MACHINE BUILDING</span>
                <strong>70+</strong>
                <span>MACHINES BUILT / INTEGRATED</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">KNOWLEDGE SHARING</span>
                <strong>100+</strong>
                <span>ENGINEERS &amp; TECHNICIANS TRAINED</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">RELIABILITY</span>
                <strong>20%</strong>
                <span>LOWER MTTR</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">IMPROVEMENT</span>
                <strong>30%</strong>
                <span>FEWER REPEAT BREAKDOWNS</span>
              </div>

              <div className="achievement-number-card">
                <span className="achievement-category">GLOBAL SERVICE</span>
                <strong>5+</strong>
                <span>INTERNATIONAL SERVICE LOCATIONS</span>
              </div>

            </div>


            <div className="achievement-story">

              <div className="story-label">
                INTERNATIONAL FIELD EXPERIENCE
              </div>

              <div className="story-countries">
                <span>AUSTRIA</span>
                <span>LATVIA</span>
                <span>SAUDI ARABIA</span>
                <span>INDONESIA</span>
                <span>THAILAND</span>
                <span>ALGERIA</span>
              </div>

              <p>
                International field-service assignments have
                included installation, commissioning,
                troubleshooting, preventive maintenance,
                customer training and technical support.
              </p>

            </div>

          </div>

        </section>



        {/* ===================================================
            KNOWLEDGE
            =================================================== */}

        <section
          className="knowledge-section"
          id="knowledge"
        >

          <div className="knowledge-container">

            <div className="section-topline">

              <div className="section-label">
                06 / KNOWLEDGE
              </div>

              <span className="section-side-note">
                EDUCATION • TRAINING • CERTIFICATIONS
              </span>

            </div>


            <div className="knowledge-heading">

              <h2>
                Knowledge,
                <br />
                <span>training &amp; education.</span>
              </h2>

              <p>
                Continuous technical learning combined with
                practical field experience, hands-on engineering
                and knowledge sharing.
              </p>

            </div>


            <div className="knowledge-grid">


              <div className="knowledge-column">

                <div className="knowledge-column-title">
                  EDUCATION
                </div>

                <div className="knowledge-column-focus">
                  ACADEMIC FOUNDATION
                </div>


                <article className="knowledge-card">

                  <span className="knowledge-year">
                    2011 – 2015
                  </span>

                  <h3>
                    Bachelor of Technology
                  </h3>

                  <h4>
                    Electrical, Electronics &amp;
                    Communications Engineering
                  </h4>

                  <p>
                    Dr MGR Educational and Research
                    Institute
                  </p>

                </article>


                <article className="knowledge-card">

                  <span className="knowledge-year">
                    2007 – 2010
                  </span>

                  <h3>
                    Diploma in Mechatronics
                  </h3>

                  <p>
                    NTTF – Nettur Technical Training
                    Foundation
                  </p>

                </article>


                <article className="knowledge-card">

                  <span className="knowledge-year">
                    2000 – 2007
                  </span>

                  <h3>
                    Matriculation
                  </h3>

                  <p>
                    Vani Vidhyalaya Matriculation
                  </p>

                </article>

              </div>



              <div className="knowledge-column">

                <div className="knowledge-column-title">
                  CERTIFICATIONS
                </div>

                <div className="knowledge-column-focus">
                  TECHNICAL &amp; PROFESSIONAL TRAINING
                </div>


                <article className="knowledge-card certification">

                  <div className="certificate-icon">
                    ✓
                  </div>

                  <div>
                    <h3>
                      Python Programming Essentials
                    </h3>

                    <p>
                      Programming fundamentals and
                      technical learning.
                    </p>
                  </div>

                </article>


                <article className="knowledge-card certification">

                  <div className="certificate-icon">
                    ✓
                  </div>

                  <div>
                    <h3>
                      Industrial Hydraulics Maintenance
                    </h3>

                    <p>
                      Maintenance and troubleshooting.
                    </p>
                  </div>

                </article>


                <article className="knowledge-card certification">

                  <div className="certificate-icon">
                    ✓
                  </div>

                  <div>
                    <h3>
                      Security Training for Seafarers
                    </h3>

                    <p>
                      Designated Security Duties.
                    </p>
                  </div>

                </article>


                <article className="knowledge-card certification">

                  <div className="certificate-icon">
                    ✓
                  </div>

                  <div>
                    <h3>
                      Continuous Discharge Certificate
                    </h3>

                    <p>
                      Professional certification record.
                    </p>
                  </div>

                </article>

              </div>



              <div className="knowledge-column">

                <div className="knowledge-column-title">
                  KNOWLEDGE SHARING
                </div>

                <div className="knowledge-column-focus">
                  TRAINING • MENTORING • PRACTICAL KNOWLEDGE
                </div>


                <article className="training-highlight">

                  <strong>
                    100+
                  </strong>

                  <span>
                    ENGINEERS &amp; TECHNICIANS
                    <br />
                    TRAINED &amp; MENTORED
                  </span>

                  <div className="training-focus">
                    CNC • MAINTENANCE • TROUBLESHOOTING • AUTOMATION
                  </div>

                  <p>
                    Practical knowledge sharing across CNC
                    service, maintenance, troubleshooting,
                    electrical systems, pneumatics and
                    machine diagnostics.
                  </p>

                </article>


                <div className="knowledge-tags">

                  <span>FANUC</span>
                  <span>PMC</span>
                  <span>PLC</span>
                  <span>CNC</span>
                  <span>SERVO</span>
                  <span>MAINTENANCE</span>
                  <span>AUTOMATION</span>
                  <span>HYDRAULICS</span>
                  <span>PNEUMATICS</span>

                </div>

              </div>


            </div>

          </div>

        </section>



        {/* ===================================================
            CONTACT
            =================================================== */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="contact-content">

            <div className="section-label">
              07 / CONTACT
            </div>

            <h2>
              Let's
              <span> Connect.</span>
            </h2>

            <p>
              Interested in CNC, automation, machine tools,
              technical service, engineering leadership or
              professional opportunities? Let's connect and
              discuss how I can contribute.
            </p>


            <div className="contact-actions">

              <a
                href="mailto:sundhar517@gmail.com"
                className="btn btn-primary"
              >
                Email Me →
              </a>

              <a
                href="https://www.linkedin.com/in/sundhar-mohan-selvi517/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn ↗
              </a>

            </div>

            <div className="contact-focus">
              CNC • AUTOMATION • SERVICE • ENGINEERING LEADERSHIP
            </div>


            <div className="contact-details">

              <div>
                <span>EMAIL</span>
                <strong>
                  sundhar517@gmail.com
                </strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>
                  Bengaluru, India
                </strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>
                  CNC • AUTOMATION • SERVICE
                </strong>
              </div>

            </div>

          </div>

        </section>

      </main>



      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">

        <div>
          © 2026 Sundhar Mohan. All rights reserved.
        </div>

        <div>
          PRECISION
          &nbsp; | &nbsp;
          RELIABILITY
          &nbsp; | &nbsp;
          CONTINUOUS IMPROVEMENT
        </div>

      </footer>

    </div>
  )
}

export default App