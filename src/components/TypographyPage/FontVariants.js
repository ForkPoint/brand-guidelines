import React from "react";
import useTextChange from "../../hooks/change-typography-text";
import { Container } from "../Layout/styles";
import { RiLineHeight, RiTextSpacing } from "react-icons/ri";
import { CgFontSpacing } from "react-icons/cg";
import {
  TypeScaleGrid,
  TypeScaleCard,
  SpacingBar,
  TextInputWrapper,
  SpecimenCard,
  SpecimenHeader,
  SpecimenSample,
  SpecimenGlyphs,
  FontActionBar,
} from "./styles";
import {
  BtnPrimarySmall,
  BtnSecondarySmall,
} from "../ButtonPage/styles";

const OPEN_SANS_WEIGHTS = [
  {
    name: "Open Sans Light",
    weight: 300,
    tag: "300 Light",
    usage: "Long-form editorial, subtle caption notes, and delicate display copy.",
    sample: "Every great digital experience begins with thoughtful commerce architecture.",
  },
  {
    name: "Open Sans Regular",
    weight: 400,
    tag: "400 Regular",
    usage: "Default body copy, navigation labels, inputs, and functional UI elements.",
    sample: "Forkpoint creates scalable, human-centered commerce platforms that elevate brand performance.",
  },
  {
    name: "Open Sans Semi-Bold",
    weight: 600,
    tag: "600 Semi-Bold",
    usage: "Section headers, card titles, table headings, and emphasized callouts.",
    sample: "Embrace Commerce with reliable high-performance engineering.",
  },
  {
    name: "Open Sans Bold",
    weight: 700,
    tag: "700 Bold",
    usage: "Primary page headings, modal titles, and prominent calls to action.",
    sample: "Accelerate your digital potential with future-ready solutions.",
  },
  {
    name: "Open Sans Extra-Bold",
    weight: 800,
    tag: "800 Extra-Bold",
    usage: "Hero headlines, campaign key statements, and high-impact numerical figures.",
    sample: "FORKPOINT — DRIVING BOLD COMMERCE INNOVATION",
  },
];

const TYPE_SCALE = [
  { label: "H1", size: "36px", weight: "Bold (700)" },
  { label: "H2", size: "32px", weight: "Bold (700)" },
  { label: "H3", size: "28px", weight: "Semi-Bold (600)" },
  { label: "H4", size: "24px", weight: "Semi-Bold (600)" },
  { label: "H5", size: "22px", weight: "Regular (400)" },
  { label: "H6", size: "20px", weight: "Regular (400)" },
  { label: "Body", size: "18px", weight: "Regular (400)" },
  { label: "Footnote", size: "14px", weight: "Light (300)" },
];

const FontVariants = () => {
  const { value: enteredValue, inputChangeHandler: handleChange } =
    useTextChange((value) => value);

  return (
    <Container>
      <h3>Type Hierarchy & Scale</h3>
      <p style={{ opacity: 0.8, marginBottom: "16px" }}>
        Consistent typography establishes clear hierarchy and optimal legibility across digital touchpoints.
      </p>

      <TypeScaleGrid>
        {TYPE_SCALE.map(({ label, size, weight }) => (
          <TypeScaleCard key={label}>
            <span className="level">{label}</span>
            <span className="size">{size}</span>
            <span className="size">{weight}</span>
          </TypeScaleCard>
        ))}
      </TypeScaleGrid>

      <SpacingBar>
        <div className="spec-item">
          <RiLineHeight />
          <span>Line Height: <strong>1.3 – 1.4</strong></span>
        </div>
        <div className="spec-item">
          <RiTextSpacing />
          <span>Letter Spacing: <strong>1.1px</strong></span>
        </div>
        <div className="spec-item">
          <CgFontSpacing />
          <span>Word Spacing: <strong>0.01mm</strong></span>
        </div>
      </SpacingBar>

      <TextInputWrapper>
        <h4>Live Type Tester</h4>
        <textarea
          placeholder="Type here to test copy live across all Open Sans brand weights..."
          onChange={handleChange}
        />
      </TextInputWrapper>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "6px" }}>Official Primary Typeface: Open Sans</h3>
        <p style={{ opacity: 0.8, marginBottom: "20px" }}>
          Open Sans is a humanist sans-serif typeface designed with an upright feel, open forms, and neutral yet friendly appearance across print and web interfaces.
        </p>

        {OPEN_SANS_WEIGHTS.map(({ name, weight, tag, usage, sample }) => (
          <SpecimenCard key={name}>
            <SpecimenHeader>
              <div className="title-group">
                <h3>{name}</h3>
                <span className="weight-tag">{tag}</span>
              </div>
              <span className="usage-note">{usage}</span>
            </SpecimenHeader>

            <SpecimenSample weight={weight} size={weight >= 700 ? "24px" : "18px"}>
              {enteredValue || sample}
            </SpecimenSample>

            <SpecimenGlyphs weight={weight}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ • abcdefghijklmnopqrstuvwxyz • 0123456789 • !@#$%^&*()
            </SpecimenGlyphs>
          </SpecimenCard>
        ))}

        <FontActionBar>
          <a
            href="https://fonts.google.com/download?family=Open%20Sans"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <BtnPrimarySmall>Download Font</BtnPrimarySmall>
          </a>
          <a
            href="https://fonts.google.com/specimen/Open+Sans"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <BtnSecondarySmall>Google Fonts Specimen</BtnSecondarySmall>
          </a>
        </FontActionBar>
      </div>
    </Container>
  );
};

export default FontVariants;
