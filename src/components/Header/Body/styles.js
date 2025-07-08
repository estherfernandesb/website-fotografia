import styled from "styled-components";

export const Corpo = styled.div`
  background-color: var(--primary);
  color: var(--text);
  font-family: "Cinzel", serif;
  font-weight: 400;
  margin: 0;
  padding: 0;

  section{
    .container_sobre,
    .container_galeria,
    .container_projetos,
    .container_contato{
      height: 100vh;
      display: flex;
      align-items: center;
      background-size: cover;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover{
        opacity: 0.8;
        transition: opacity 0.5s ease;
      }
    }
      div.imagem_sobre {
      position: absolute;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 80%;
      margin-top: 275px;
      margin-left: 535px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;

      a {
        color: var(--text);
        font-family: "Cinzel", serif;
        font-size: 22px;
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
        p{
          &:hover {
           color: var(--ciano);
            cursor: pointer;
          }
        }
    }
    
    div.imagem_galeria {
      position: absolute;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 80%;
      margin-top: 1500px;
      margin-left: 860px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;

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
    }

    div.imagem_projetos {
      position: absolute;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 80%;
      margin-top: 2775px;
      margin-left: 860px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;

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
    }

    div.imagem_contato {
      position: absolute;
      justify-content: center;
      align-items: center;
      z-index: 1;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 80%;
      margin-top: 4175px;
      margin-left: 860px;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;

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
    }
  }
`;