import React from "react";
import { Container, Title, Content, Item } from "./styles/hero";
export default function Hero({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
}
Hero.Content = function HeroContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.Container = function HeroContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
