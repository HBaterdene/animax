import styled from "styled-components/macro";

export const Item = styled.div`
  background: url("./img/login-bg.jpg") no-repeat center center/cover;
  height: 100vh;
  width: 51.35%;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h2`
  margin: auto;
  color: #f3f4f5;
  font-size: 3.2rem;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;
`;
export const Content = styled.div`
  width: 70.5%;
  margin: auto;
`;
export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(25, 7, 26, 0.45);
`;
