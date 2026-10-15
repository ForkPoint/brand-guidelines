import React, { useState } from "react";
import {
  logoClearspaceVector,
  iconClearspaceVector,
  forkpointLogoPositiveSvg,
  forkpointLogoNegativeSvg,
  forkpointLogoMonoPositiveSvg,
  forkpointLogoMonoNegativeSvg,
  forkpointLogoSloganPositiveSvg,
  forkpointLogoSloganNegativeSvg,
  forkpointLogoSloganMonoPositiveSvg,
  forkpointLogoSloganMonoNegativeSvg,
  forkpointMarkGreenSvg,
  forkpointMarkWhiteSvg,
  forkpointMarkDarkSvg,
  svgRawStrings,
} from "../../assets";
import {
  Section,
  SectionHeader,
  ControlBar,
  FilterTabs,
  FilterTab,
  ToggleButton,
  LogoGrid,
  LogoCard,
  LogoPreview,
  LogoMeta,
  MetaTop,
  BadgeRow,
  ColorPill,
  ActionGroup,
  ActionButton,
  ActionLink,
  ConstructionGrid,
  ConstructionCard,
  GuidelinesInfoBox,
  ToastNotification,
  UsageCodeBox,
} from "./styles";
import { Container } from "../Layout/styles";
import Heading from "../Layout/Heading";
import {
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineCheck,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlineFilePdf,
} from "react-icons/ai";

const primaryLogos = [
  {
    id: "logo-positive",
    title: "Full Color Positive",
    subtitle: "Primary brand mark for light surfaces",
    file: "forkpoint-logo-positive.svg",
    src: forkpointLogoPositiveSvg,
    isDark: false,
    colors: ["#8ACF31", "#575757"],
  },
  {
    id: "logo-mono-positive",
    title: "Mono Color Positive",
    subtitle: "Single-ink dark reproduction",
    file: "forkpoint-logo-mono-positive.svg",
    src: forkpointLogoMonoPositiveSvg,
    isDark: false,
    colors: ["#575757"],
  },
  {
    id: "logo-negative",
    title: "Full Color Negative",
    subtitle: "Primary brand mark for dark surfaces",
    file: "forkpoint-logo-negative.svg",
    src: forkpointLogoNegativeSvg,
    isDark: true,
    colors: ["#8ACF31", "#FFFFFF"],
  },
  {
    id: "logo-mono-negative",
    title: "Mono Color Negative",
    subtitle: "High-contrast inverted reproduction",
    file: "forkpoint-logo-mono-negative.svg",
    src: forkpointLogoMonoNegativeSvg,
    isDark: true,
    colors: ["#FFFFFF"],
  },
];

const sloganLogos = [
  {
    id: "slogan-positive",
    title: "Positive with Slogan",
    subtitle: "“Embrace Commerce” tagline on light surfaces",
    file: "forkpoint-logo-slogan-positive.svg",
    src: forkpointLogoSloganPositiveSvg,
    isDark: false,
    colors: ["#8ACF31", "#575757"],
  },
  {
    id: "slogan-mono-positive",
    title: "Mono Positive with Slogan",
    subtitle: "Single-ink tagline lockup on light",
    file: "forkpoint-logo-slogan-mono-positive.svg",
    src: forkpointLogoSloganMonoPositiveSvg,
    isDark: false,
    colors: ["#575757"],
  },
  {
    id: "slogan-negative",
    title: "Negative with Slogan",
    subtitle: "“Embrace Commerce” tagline on dark surfaces",
    file: "forkpoint-logo-slogan-negative.svg",
    src: forkpointLogoSloganNegativeSvg,
    isDark: true,
    colors: ["#8ACF31", "#FFFFFF"],
  },
  {
    id: "slogan-mono-negative",
    title: "Mono Negative with Slogan",
    subtitle: "High-contrast inverted tagline lockup",
    file: "forkpoint-logo-slogan-mono-negative.svg",
    src: forkpointLogoSloganMonoNegativeSvg,
    isDark: true,
    colors: ["#FFFFFF"],
  },
];

const markLogos = [
  {
    id: "mark-green",
    title: "Fork Green Symbol",
    subtitle: "Favicons, app icons & social avatars",
    file: "forkpoint-mark-green.svg",
    src: forkpointMarkGreenSvg,
    isDark: false,
    colors: ["#8ACF31"],
  },
  {
    id: "mark-dark",
    title: "Dark Space Symbol",
    subtitle: "Monochrome dark mark",
    file: "forkpoint-mark-dark.svg",
    src: forkpointMarkDarkSvg,
    isDark: false,
    colors: ["#575757"],
  },
  {
    id: "mark-white",
    title: "White Symbol",
    subtitle: "Inverted standalone mark for dark UI",
    file: "forkpoint-mark-white.svg",
    src: forkpointMarkWhiteSvg,
    isDark: true,
    colors: ["#FFFFFF"],
  },
];

const LogosContainer = () => {
  const [filter, setFilter] = useState("all");
  const [showGrid, setShowGrid] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopy = (filename, label, id) => {
    const raw = svgRawStrings[filename];
    if (raw && navigator.clipboard) {
      navigator.clipboard.writeText(raw);
      setCopiedId(id);
      setToastMessage(`Copied SVG code for ${label}!`);
      setTimeout(() => {
        setCopiedId(null);
        setToastMessage(null);
      }, 2200);
    }
  };

  const handleCopyColor = (hex) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setToastMessage(`Copied color ${hex} to clipboard!`);
      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    }
  };

  const renderLogoCard = (item) => {
    const isCopied = copiedId === item.id;
    return (
      <LogoCard key={item.id} isDark={item.isDark}>
        <LogoPreview isDark={item.isDark} showGrid={showGrid}>
          <img
            src={item.src}
            alt={`Forkpoint ${item.title}`}
            loading="lazy"
          />
        </LogoPreview>
        <LogoMeta isDark={item.isDark}>
          <MetaTop isDark={item.isDark}>
            <div className="title-group">
              <h3 className="title">{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
            </div>
            <BadgeRow>
              {item.colors.map((c) => (
                <ColorPill
                  key={c}
                  isDark={item.isDark}
                  onClick={() => handleCopyColor(c)}
                  title={`Click to copy ${c}`}
                  aria-label={`Copy color ${c}`}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: c,
                      border: c === "#FFFFFF" ? "1px solid #ccc" : "none",
                    }}
                  />
                  {c}
                </ColorPill>
              ))}
            </BadgeRow>
          </MetaTop>

          <ActionGroup>
            <ActionButton
              type="button"
              variant="secondary"
              isDark={item.isDark}
              onClick={() => handleCopy(item.file, item.title, item.id)}
              aria-label={`Copy ${item.title} SVG source code`}
            >
              {isCopied ? (
                <>
                  <AiOutlineCheck size={14} style={{ color: "#8ACF31" }} />
                  Copied SVG!
                </>
              ) : (
                <>
                  <AiOutlineCopy size={14} />
                  Copy SVG
                </>
              )}
            </ActionButton>

            <ActionLink
              variant={item.isDark ? "primary" : "secondary"}
              isDark={item.isDark}
              href={item.src}
              download={item.file}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Download ${item.title} SVG file`}
            >
              <AiOutlineDownload size={14} />
              Download
            </ActionLink>
          </ActionGroup>
        </LogoMeta>
      </LogoCard>
    );
  };

  return (
    <div>
      <Container>
        <Heading
          text="Logos & Brand Identity"
          label="Official vector assets, clearspace rules, and implementation standards for the Forkpoint visual identity."
        />

        <GuidelinesInfoBox>
          <h4>
            <AiOutlineInfoCircle size={18} style={{ color: "#8ACF31" }} />
            Core Implementation Best Practices
          </h4>
          <ul>
            <li>
              <strong>Clearspace Integrity:</strong> Always maintain safety margin equal to the height of the &quot;X&quot; character on all four sides.
            </li>
            <li>
              <strong>Minimum Scale:</strong> Maintain a minimum width of 30mm for print and 115px for digital displays to safeguard legibility.
            </li>
            <li>
              <strong>Color Alignment:</strong> Use Fork Green (<code>#8ACF31</code>) and Dark Space (<code>#575757</code>) exclusively; avoid tints or altered saturation.
            </li>
            <li>
              <strong>Vector Format:</strong> Always deploy SVGs in production for resolution-independent clarity across retina and high-DPI viewports.
            </li>
          </ul>
          <div
            style={{
              marginTop: "14px",
              paddingTop: "12px",
              borderTop: "1px solid rgba(138, 207, 49, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "13px", color: "#475569" }}>
              Looking for print formulas, full Pantone swatches, and typography rules?
            </span>
            <a
              href={`${process.env.PUBLIC_URL}/docs/Forkpoint_Guidelines.pdf`}
              download="Forkpoint_Guidelines.pdf"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12.5px",
                fontWeight: "700",
                color: "#1E293B",
                backgroundColor: "#8ACF31",
                padding: "6px 14px",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <AiOutlineFilePdf size={16} />
              Download Master Guidelines (PDF)
            </a>
          </div>
        </GuidelinesInfoBox>

        {/* CONTROLS & FILTER BAR */}
        <ControlBar>
          <FilterTabs role="tablist" aria-label="Logo Categories">
            <FilterTab
              role="tab"
              aria-selected={filter === "all"}
              isActive={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All Assets (11)
            </FilterTab>
            <FilterTab
              role="tab"
              aria-selected={filter === "primary"}
              isActive={filter === "primary"}
              onClick={() => setFilter("primary")}
            >
              Primary Logotypes (4)
            </FilterTab>
            <FilterTab
              role="tab"
              aria-selected={filter === "slogan"}
              isActive={filter === "slogan"}
              onClick={() => setFilter("slogan")}
            >
              Logo + Slogan (4)
            </FilterTab>
            <FilterTab
              role="tab"
              aria-selected={filter === "mark"}
              isActive={filter === "mark"}
              onClick={() => setFilter("mark")}
            >
              Brand Marks (3)
            </FilterTab>
            <FilterTab
              role="tab"
              aria-selected={filter === "clearspace"}
              isActive={filter === "clearspace"}
              onClick={() => setFilter("clearspace")}
            >
              Clearspace &amp; Rules
            </FilterTab>
          </FilterTabs>

          <ToggleButton
            type="button"
            isActive={showGrid}
            onClick={() => setShowGrid((p) => !p)}
            title="Toggle transparency checkerboard grid"
            aria-pressed={showGrid}
          >
            <AiOutlineEye size={16} />
            {showGrid ? "Hide Transparency Grid" : "Show Transparency Grid"}
          </ToggleButton>
        </ControlBar>

        {/* 1. PRIMARY LOGOTYPES */}
        {(filter === "all" || filter === "primary") && (
          <Section>
            <SectionHeader>
              <h2>1. Primary Horizontal Logotype</h2>
              <p>
                The standard horizontal lockup featuring the iconic fork crescent mark and custom wordmark.
              </p>
            </SectionHeader>
            <LogoGrid>{primaryLogos.map(renderLogoCard)}</LogoGrid>
          </Section>
        )}

        {/* 2. LOGO + SLOGAN */}
        {(filter === "all" || filter === "slogan") && (
          <Section>
            <SectionHeader>
              <h2>2. Logo with Official Slogan (&ldquo;Embrace Commerce&rdquo;)</h2>
              <p>
                Used across official presentations, collateral, and marketing campaigns to reinforce the brand mission.
              </p>
            </SectionHeader>
            <LogoGrid>{sloganLogos.map(renderLogoCard)}</LogoGrid>
          </Section>
        )}

        {/* 3. STANDALONE MARK */}
        {(filter === "all" || filter === "mark") && (
          <Section>
            <SectionHeader>
              <h2>3. Standalone Brand Mark</h2>
              <p>
                The 3-arc crescent leaf symbol for responsive navigation, app icons, favicons, and social media avatars.
              </p>
            </SectionHeader>
            <LogoGrid>{markLogos.map(renderLogoCard)}</LogoGrid>
          </Section>
        )}

        {/* 4. CLEARSPACE & SPECIFICATIONS */}
        {(filter === "all" || filter === "clearspace") && (
          <Section>
            <SectionHeader>
              <h2>4. Clearspace &amp; Geometry Specifications</h2>
              <p>
                Rigorous spacing rules to prevent visual interference and maintain brand hierarchy across all touchpoints.
              </p>
            </SectionHeader>

            <ConstructionGrid>
              <ConstructionCard>
                <div className="img-wrapper">
                  <img
                    src={logoClearspaceVector}
                    alt="Forkpoint Logotype Clearspace Construction Diagram"
                  />
                </div>
                <h3>Logotype Clearspace Margin (&lsquo;X&rsquo;)</h3>
                <p>
                  Maintain an unobstructed exclusion zone equal to the height of the capital letters &lsquo;X&rsquo; on all four borders.
                </p>
                <div>
                  <ActionLink
                    variant="secondary"
                    isDark={false}
                    href={logoClearspaceVector}
                    download="Forkpoint-Logo-Clearspace.svg"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <AiOutlineDownload size={14} /> Download Diagram (SVG)
                  </ActionLink>
                </div>
              </ConstructionCard>

              <ConstructionCard>
                <div className="img-wrapper">
                  <img
                    src={iconClearspaceVector}
                    alt="Forkpoint Icon Safety Clearance Diagram"
                  />
                </div>
                <h3>Icon Proportional Boundary</h3>
                <p>
                  Standalone symbol placement requires proportional safe margins equal to 50% of the mark radius on all sides.
                </p>
                <div>
                  <ActionLink
                    variant="secondary"
                    isDark={false}
                    href={iconClearspaceVector}
                    download="Forkpoint-Icon-Clearspace.svg"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <AiOutlineDownload size={14} /> Download Diagram (SVG)
                  </ActionLink>
                </div>
              </ConstructionCard>
            </ConstructionGrid>
          </Section>
        )}

        {/* 5. CODE USAGE GUIDE */}
        <UsageCodeBox>
          <div className="header">
            <span>Developer Implementation Guide</span>
            <span>React / HTML5</span>
          </div>
          <pre>
            <code>
              <span className="comment">{`// Option 1: Direct React Component (Create React App / Vite)`}</span>
              {"\n"}
              <span className="keyword">import</span> {`{ ReactComponent as ForkpointLogo }`} <span className="keyword">from</span> <span className="string">&quot;./logos/forkpoint-logo-positive.svg&quot;</span>;
              {"\n\n"}
              <span className="keyword">&lt;</span>ForkpointLogo width=<span className="string">&quot;180&quot;</span> height=<span className="string">&quot;auto&quot;</span> aria-label=<span className="string">&quot;Forkpoint&quot;</span> <span className="keyword">/&gt;</span>
              {"\n\n"}
              <span className="comment">{`// Option 2: Standard Semantic HTML5 Image Tag`}</span>
              {"\n"}
              <span className="keyword">&lt;</span><span className="keyword">img</span> src=<span className="string">&quot;/logos/forkpoint-logo-positive.svg&quot;</span> alt=<span className="string">&quot;Forkpoint Logo&quot;</span> width=<span className="string">&quot;180&quot;</span> height=<span className="string">&quot;40&quot;</span> <span className="keyword">/&gt;</span>
            </code>
          </pre>
        </UsageCodeBox>

        {/* TOAST FEEDBACK */}
        {toastMessage && (
          <ToastNotification role="status" aria-live="polite">
            <AiOutlineCheck size={18} style={{ color: "#8ACF31" }} />
            {toastMessage}
          </ToastNotification>
        )}
      </Container>
    </div>
  );
};

export default LogosContainer;
