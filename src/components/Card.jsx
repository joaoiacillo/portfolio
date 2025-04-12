import styled from "styled-components";

const CardWrapper = styled.a `
  display: inline-block;
  background-color: var(--bs-primary-bg-subtle);
  background-image: url(/imgs/bg.png);
  background-blend-mode: overlay;
  text-align: left;
  padding: 20px 0 4px 12px;
  min-width: 138px;
  height: 180px;
  position: relative;
  overflow: hidden;
  border: solid 1px var(--bs-primary-border-subtle);
  cursor: pointer;
  transition: transform .2s ease-in-out;
  transform-origin: center;

  h3 {
    position: absolute;
    bottom: 0;
    color: white;
    font-family: "Pixelify Sans", sans-serif;
    font-size: 1.8rem;
    line-height: 2rem;
    opacity: 0.85;
  }

  &:hover {
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.95);
  }

  &.fixed {
    z-index: 10;
  }
`;

function Card({ to, htmlTitle, name }) {
  return (
    <CardWrapper href={to} title={htmlTitle} className="slide">
      <h3>{name}</h3>
    </CardWrapper>
  );
}

export default Card;
