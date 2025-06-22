import React from "react";
import styled from "styled-components";

const WildfireProject: React.FC = () => {
  const Container = styled.div`
    color: black;
  `;
  return (
    <Container>
      My team and I created a wildfire simulation using C++ and GLSL shaders.
      Early in the process, we began with a simple top down view of an
      environment where each pixel denoted a different material. These materials
      included water, trees, and bed rock which were blue, green, and gray
      respectively. We included a height map that allowed us to visualize
      greater elevation points in darker green and lower in lighter green. With
      predetermined probabilities, we were able to simulate the spread of fire
      where randomly generated starting points destroyed some of the cells
      around them, turning them black.
      <br />
      <br />
      To elevate our simulation, we decided to utilize an actual landscape. I
      was able to use scipy and sklearn packages to implement a k-means
      algorithm cluster together similar colors into 3 distinct ones to simulate
      the three materials we had previously been using.Using Perlin noise, we
      were able to introduce a new material, grass, to the simulation where
      grass are areas that are less likely to catch on fire.
      https://colab.research.google.com/drive/1yRKs30Ay4t8Z8u8rw7wrn3XpihSlz97A#scrollTo=fOASxr3f2jtI
      <br />
      <br />
      Using the height map associated with the real landscape, we were able to
      make the simulation to be 3D using a fragment shader, tessellation
      controll shader, tessellation evaluation shader, and vertex shader. We
      also implemented a control where the fire starts only if you click
      somewhere on the map.
      <br />
      <br />
      https://github.com/athe27/compute-shader-test
      https://i.gyazo.com/ed1ce05bd4d9c852abcd3df8659b3e5e.mp4
    </Container>
  );
};

export default WildfireProject;
