import React from "react";
import styled from "styled-components";
const Container = styled.div`
  color: black;
  text-align: left;
`;
const UnibuzzyProject: React.FC = () => {
  return (
    <Container>
      Unibuzzy is an all-purpose app geared towards university students for all
      things for campus life. From finding exciting events to connecting with
      the community at a deeper level, this app can help students have a fuller
      college experience.
      <br />
      <br />
      I had the opportunity to serve as the team lead of our development team of
      7. We were able to design and develop the friend finder using Vue.js. In
      this feature, students are given the ability to meet someone new on campus
      based on what they are interested in. The options provided include having
      a quick chat, meeting a new study buddy, grabbing a meal, or finding a new
      gym partner. These options help pair people up who share interests. Since
      this is a campus app, we utilized the location of students on campus to
      further improve the pairing system to be as convenient as possible.
      Following the location, users are asked what they are wearing to help the
      users to identify each other to make new connections.
      <br />
      <br />
      Following the conclusion of the meeting, users are prompted to rate their
      experience with the other person to get a better idea of which people they
      get along with the best, as well as serving as a safety measure to ensure
      there are no individuals that may prove to be disrespectful or dangerous.
      <br />
      <br />
      Throughout this process, we had several iterations of designing,
      developing, and improving upon feedback received from users. As team lead,
      I met a few times a week with the team lead of marketing and the founder,
      as well as a meeting with my development team. In these meetings, we had
      many discussions about the course of our work and what direction we should
      move in. I was also able to assist my team members whenever they ran into
      any issues.
    </Container>
  );
};

export default UnibuzzyProject;
