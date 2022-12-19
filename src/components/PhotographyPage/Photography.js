import React from "react";
import { Container } from "../Layout/styles";
import {
  BlueBox,
  GreenBox,
  PhotographyLayoutsColumn,
  PhotographyLayoutsGrid,
  Textarea,
  TextAreaCenter,
  YellowBox,
} from "./styles";
import {
  compositionDo,
  compositionDont,
  facebookLayout,
  instagramLayout,
  jobsLayout,
  linkedinLayout,
  packagesDo,
  packagesDont,
  partyDo,
  partyDont,
  photographyAnnyaPresent,
  photographyMeeting,
  photographyNewComputers,
  photographyPresentation,
  photographyRelax,
  photographyTeam,
  teamDo,
  teamDont,
  tiktokLayout,
  tshirtsDo,
  tshirtsDont,
  websiteLayout,
} from "../../assets";

const Photography = ({}) => {
  return (
    <Container>
      <Textarea>
        <h1>Photography in layout</h1>
        <p>
          To capture photography for our various design needs, photographers
          should shoot multiple viewpoints of the same content. This will
          provide flexibility when placing the image into layouts/crops as well
          as help tell a bigger story.
        </p>
        <p>
          Shooting wide is the best way to ensure photography is flexible enough
          to use in multiple layouts.
        </p>
        <p>
          In cases where a singular image needs to be captured, in addition to
          hero shots, photographers should shoot as wide as possible and be
          mindful of safe zones for horizontal and vertical crops.
        </p>
      </Textarea>
      <Textarea>
        <h3>Think mobile-first</h3>
        <p>
          When framing shots, know that photos will be used on mobile
          applications. With this in mind, aim for shots that can work well as
          both a portrait (for mobile) and landscape (for desktop).
        </p>
        <div>
          <GreenBox />
          <span>1x1 social crop</span>
        </div>
        <div>
          <BlueBox />
          <span>Extreme vertical crop</span>
        </div>
        <div>
          <YellowBox />
          <span>Extreme horizontal crop</span>
        </div>
      </Textarea>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={photographyPresentation}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={photographyTeam}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={photographyAnnyaPresent}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={photographyMeeting}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={photographyNewComputers}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={photographyRelax}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <Textarea>
        <h1>General Guidelines:</h1>
        <ul>
          <li>Aim to achieve good and bright lighting.</li>
          <li>Photography should feel natural, not overly staged.</li>
          <li>
            Try to capture shots that can work well as both a portrait and a
            landscape.
          </li>
          <li>
            Shoot wide to ensure photography is flexible enough to use in
            multiple layouts.
          </li>
        </ul>
      </Textarea>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <h3>Do</h3>
          <ul>
            <li>Include all subjects on the image.</li>
            <li>Ensure the background or work area is organized enough.</li>
            <li>
              Ensure all subjects look happy, relaxed, natural and positive.
            </li>
            <li>
              Try centering all subjects to improve the overall composition.
            </li>
            <li>
              Ensure subjects are wearing the proper clothes, preferably
              branded.
            </li>
            <li>
              Capture subjects in their element to achieve aspirational and real
              look.
            </li>
            <li>
              Ensure the body language is appropriate and the subjects feel open
              and approachable.
            </li>
          </ul>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <h3>Don't</h3>
          <ul>
            <li>Avoid busy backgrounds.</li>
            <li>Avoid overly staged posing.</li>
            <li>Avoid shooting from above or down.</li>
            <li>Do not show personal information on photos.</li>
            <li>
              Avoid shooting from behind, try to get the subjects facing
              forward.
            </li>
            <li>
              Avoid aggressive body language (crossing arms, pointing at camera,
              etc.)
            </li>
            <li>
              Avoid wearing clothing that features licensed characters from
              movies, cartoons, video games or sports teams. - ???
            </li>
          </ul>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={compositionDo}></img>
          <h4>Do - The composition is on focus.</h4>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={compositionDont}></img>
          <h4>Don't - Both items are not centered and on focus.</h4>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={packagesDo}></img>
          <h4>Do - Photo is from great angle.</h4>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={packagesDont}></img>
          <h4>Don't - Photo is not from a good angle.</h4>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={tshirtsDo}></img>
          <h4>Do - Photo is from good angle.</h4>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={tshirtsDont}></img>
          <h4>Don't - Avoid making photos from underneath.</h4>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={partyDo}></img>
          <h4>Do - ???</h4>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={partyDont}></img>
          <h4>Don't - Avoid wearing inappropriate items.</h4>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={teamDo}></img>
          <h4>Do - Wear branded tshirts when needed.</h4>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={teamDont}></img>
          <h4>Don't - Avoid being naked on team photos.</h4>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <h1>Examples of social medias layouts:</h1>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={instagramLayout}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={facebookLayout}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={websiteLayout}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={tiktokLayout}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
      <PhotographyLayoutsGrid>
        <PhotographyLayoutsColumn>
          <img src={jobsLayout}></img>
        </PhotographyLayoutsColumn>
        <PhotographyLayoutsColumn>
          <img src={linkedinLayout}></img>
        </PhotographyLayoutsColumn>
      </PhotographyLayoutsGrid>
    </Container>
  );
};

export default Photography;
