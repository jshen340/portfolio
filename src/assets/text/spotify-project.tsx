import React from "react";
import styled from "styled-components";

const SpotifyProject: React.FC = () => {
  const Container = styled.div`
    color: black;
  `;
  return (
    <Container>
      Everyone loves their Spotify Wrapped. What if you could have one every
      month? Using Android Studio, my team and I developed a monthly Spotify
      Wrapped, allowing users to see their listening for every month, year
      round. With this app, just like the original Spotify Wrapped, you can see
      all of your personalized stats, including your top artists and songs, made
      possible by the Spotify API. In our version of Wrapped, we created three
      modes for seeing your summarized stats, including the last month, last six
      months, and year-to-date. Not only does it provide your personal listening
      summary, it also gives recommendations based on your taste, allowing users
      to expand their listening horizons.
      <br />
      <br />
      To start viewing your monthly Wrapped, you can log in with your Spotify
      login to directly connect our app to Spotify with the help of Firebase.
      Finally, for a finishing touch, we included a dark and light mode for a
      better user experience.
      <br />
      <br />
      In this project, I took on the role of UI/UX designer and frontend
      developer. As our core designer, I made wireframes and mockups to help
      prepare us for the development stages, as well as creating all assets we
      included in the visuals. When it came time to develop, two team members
      and I worked on the frontend interface, utilizing the ViewModel class and
      ConstraintLayout.
      <br />
      <br />
      For more information, visit:
      https://jocelynshen6.wixsite.com/spotify-wrapped-app
    </Container>
  );
};

export default SpotifyProject;
