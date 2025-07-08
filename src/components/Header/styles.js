import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    display: flex;
    gap: 20px;
`
export const Titulo = styled.div`
    margin-top: 40px;
    color: var(--text);
    font-size: 24px;
    h2{
        &:hover {
            color: var(--ciano);
            cursor: pointer;
            transform: scale(1.1);
            transition: all 0.3s ease;
        }
`
export const Menu = styled.div`
    margin-right: 5px;
    margin-bottom: 20px;
    ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    li {
      padding: 5px;
      transition: all 0.3s ease; 
      
      span {
        font-size: 16px;
        color: var(--text);
        font-weight: 400;
        transition: color 0.3s ease; 
      }
      
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease;
        
        span {
          color: var(--ciano);
        }
      }
    }
  }
`