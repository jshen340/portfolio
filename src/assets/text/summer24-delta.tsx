import React from "react";
import styled from "styled-components";
interface Props {
  text: string;
  h3: React.CSSProperties;
}
const Summer24Delta: React.FC = () => {
  const Container = styled.div`
    color: white;
    text-align: left;
  `;
  return (
    <Container>
      <h6>Rotation 3: In-Flight Services Data Engineer Co-op</h6>
      <p>For my 3rd rotation as a co-op at Delta Air Lines,</p>
      <ul>
        <li>
          Contributed 3 functions to the operations utilities package, available
          to over 20 teams
        </li>
        <li>
          Migrated 6 jobs from AWS Glue to Lambda to optimize for cost and
          resource allocation
        </li>
        <li>
          Conducted research on PySpark and its multithreading capabilities in
          the ETL process to improve over 520 jobs
        </li>
      </ul>
    </Container>
  );
};

export default Summer24Delta;
