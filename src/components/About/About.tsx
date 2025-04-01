import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hello there, my name is Ambika, and I'm originally from Goa in India,
        although I have lived all over the world in countries like Hong Kong, Oman, Singapore, and the UAE. I am currently 
      </p>
      <p>
        I absolutely love learning new skills and challenging myself in
        different respects. To learn more about what I've been working on, feel
        free to check out my <a href="https://github.com/wderocco8">GitHub</a>{" "}
        😁.
      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}
