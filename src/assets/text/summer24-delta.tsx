import React from "react";
import styled from "styled-components";

const Summer24Delta: React.FC = () => {
  const Container = styled.div`
    color: white;
    text-align: left;
    font-size: 18px;
  `;
  return (
    <Container>
      <h4>Rotation 3: In-Flight Services Data Engineer Co-op</h4>
      For my 3rd rotation as a co-op at Delta Air Lines, As a Data Engineer
      intern on the In-Flight Services Operations Analytics team, I contributed
      three key functions to the operations utilities package, enabling over 20
      teams to access AWS Secrets Manager, load daily data into S3, and extract
      historical catering data into a DataFrame. I also migrated six jobs from
      AWS Glue to Lambda, optimizing cost and resource allocation. Additionally,
      I researched PySpark’s multithreading capabilities to enhance the
      efficiency of over 520 ETL jobs.
    </Container>
  );
};

export default Summer24Delta;
