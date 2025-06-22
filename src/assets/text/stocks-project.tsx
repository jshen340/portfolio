import React from "react";
import styled from "styled-components";

const StocksProject: React.FC = () => {
  const Container = styled.div`
    color: black;
  `;
  return (
    <Container>
      Based on Trend Signals with TP & SL by UAlgo on TradingView, I was able to
      create my own indicator that suited my needs. This indicator labels buy
      and sell signals on the chart and has a cloud for the general trend based
      on the MACD. TradingView utilizes Pinescript, but for my purposes, I
      needed to create an indicator in Javascript for the Tradovate platform. I
      first directly translated the Pinescript to Javascript. My indicator also
      shows where to buy and where to sell, and I was able to make my own tweaks
      to adjust the calculations that reflected my strategy.
      <br />
      <br />
      For further verification of the efficacy of this strategy, I then
      translated my Javascript to Python, allowing me to create a Jupyter
      notebook where I was able to use pandas dataframes for my computations.
      Once I had everything ready, I was able to use the Backtesting.py
      framework to see the efficacy of this strategy. With this I was able to
      assess and re-evaluate the calculations. With these tools I have been
      iterating upon my previous work and searching for new approaches and
      improvements.
    </Container>
  );
};

export default StocksProject;
