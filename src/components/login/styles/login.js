import styled from "styled-components/macro";
export const Container = styled.div`
  width: 48.65%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  margin: auto;
`;
export const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const ImageTop = styled.img`
  width: 61.32px;
  height: 70px;
  padding: 20px 24.34px;
`;
export const Email = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  height: 46px;
  color: #363636;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
`;
export const Password = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  height: 46px;
  color: #363636;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;
export const Link = styled.a`
  color: #999;
  font-size: 14.4px;
  font-family: Roboto, sans-serif;
`;
export const Question = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 380px) {
    width: 320px;
    margin: auto;
  }
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 24px;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
export const Main = styled.div`
  width: 380px;
  height: 418px;
  @media (max-width: 375px) {
    width: 320px;
  }
`;
export const BorderTop = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 50%;
  background: #f2f3fa;
  height: 110px;
  width: 110px;
  border: 1.4px solid #cecece;
  margin-bottom: 40px;
`;
export const BorderMid = styled.div`
  border-radius: 50%;
  background: #f53b57;
  height: 86px;
  width: 86px;
  border: 7px solid white;
  position: absolute;
  left: -50px;
  top: 41.5vh;
  z-index: 10;
  @media (max-width: 780px) {
    display: none;
  }
`;
export const ImageMid = styled.img`
  width: 54px;
  height: 61.64px;
  padding: 12.18px 16px;
`;
export const Form = styled.form`
  @media (max-width: 380px) {
    width: 320px;
    margin: auto;
  }
`;
export const BorderButton = styled.div`
  width: 100%;
  height: 46px;
  background-color: #f53b57;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`;
export const FbButton = styled.div`
  width: 100%;
  height: 38px;
  background-color: #3b5998;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.8px;
  font-family: Roboto, sans-serif;
  @media (max-width: 380px) {
    width: 320px;
    margin: auto;
  }
`;
