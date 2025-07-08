import styled from "styled-components";

export const Corpo = styled.div`
  background-color: var(--primary);
  color: var(--text);
  font-family: "Cinzel", serif;
  font-weight: 400;
  margin: 0;
  padding: 0;

  section {
    height: 100vh;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        opacity: 0.8;
        transition: opacity 0.5s ease;
      }
    }

    .overlay_text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 80%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        color: var(--text);
        font-size: 22px;
        font-family: "Cinzel", serif;
        text-decoration: none;
        display: inline-block;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        border: 0.5px solid white;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          background-color: white;
          color: black;
        }
      }

      h4,
      p {
        &:hover {
          color: var(--ciano);
          cursor: pointer;
        }
      }
    }
  }
`;
