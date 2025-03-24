import Typewriter from "typewriter-effect";

interface ProfileData {
  typewriterName: string[];
  graduatingClass: number;
  majorMinor: string;
  currentPosition?: string;
  websiteHref: string;
  imgSrc: string;
}

/**
 * TODO: replace each `typewriterName`, `graduatingClass`, `majorMinor`,
 * `websiteHref`, and `imgSrc` with your personal information.
 */
const profileData: ProfileData = {
  typewriterName: [
    "Heyo peeps, I'm Will.",
    "I love to learn.",
    "William De Rocco :)",
  ],
  graduatingClass: 2025,
  majorMinor: "B.A. in Computer Science, Minor in Economics",
  websiteHref: "https://github.com/wderocco8",
  imgSrc: "/images/profile/profile.jpeg",
};

export default function Profile() {
  return (
    <div className="profile-flex">
      <div>
        <h1>
          <Typewriter
            options={{
              strings: profileData.typewriterName,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <ul>
          <li>Class of {profileData.graduatingClass}</li>
          <li>{profileData.majorMinor}</li>
          {profileData.currentPosition && (
            <li>{profileData.currentPosition}</li>
          )}
        </ul>
      </div>

      <div className="profile tilt">
        <a
          href={profileData.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="profile-img"
            src={profileData.imgSrc}
            alt="Profile picture."
          />
        </a>
      </div>
    </div>
  );
}
