import React from "react";
import styled from "styled-components";

const UPS: React.FC = () => {
  const Container = styled.div`
    color: white;
    text-align: left;
    font-size: 21px;
    padding-right: 80px;
  `;
  return (
    <Container>
      <h4>Airline and Transportation Solutions Developer Intern</h4>During my
      time as an intern for UPS, I improved their Planned Actual Fuel dashboard
      that is used by over 110 flight dispatchers who are responsible for
      optimizing fuel allocation across a fleet of 280 aircraft. With my team,
      we built two responsive Angular web interfaces in collaboration with
      stakeholders. We also helped set up backend services and revised project
      builds using Spring Boot, Maven, and JFrog in coordination with
      cross-functional teams.
    </Container>
  );
};

export default UPS;
