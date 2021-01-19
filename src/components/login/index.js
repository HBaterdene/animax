import React from "react";
import {
  Container,
  Icon,
  ImageTop,
  ImageMid,
  Email,
  Input,
  Password,
  Button,
  Link,
  Question,
  Item,
  BorderTop,
  BorderMid,
  Logo,
  Main,
  Form,
  BorderButton,
  FbButton,
} from "./styles/login";
export default function Login({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
}
Login.Main = function LoginMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};
Login.Container = function LoginContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Login.Icon = function LoginIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};
Login.ImageTop = function LoginImageTop({ children, ...restProps }) {
  return <ImageTop {...restProps} />;
};
Login.ImageMid = function LoginImageMid({ children, ...restProps }) {
  return <ImageMid {...restProps} />;
};
Login.Email = function LoginEmail({ children, ...restProps }) {
  return <Email {...restProps}>{children}</Email>;
};
Login.Input = function LoginInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Login.Password = function LoginPassword({ children, ...restProps }) {
  return <Password {...restProps}>{children}</Password>;
};
Login.Button = function LoginButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Login.Link = function LoginLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Login.Question = function LoginQuestion({ children, ...restProps }) {
  return <Question {...restProps}>{children}</Question>;
};
Login.BorderTop = function LoginBorderTop({ children, ...restProps }) {
  return <BorderTop {...restProps}>{children}</BorderTop>;
};
Login.Logo = function LoginLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Login.BorderMid = function LoginBorderMid({ children, ...restProps }) {
  return <BorderMid {...restProps}>{children}</BorderMid>;
};
Login.Form = function LoginForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};
Login.BorderButton = function LoginBorderButton({ children, ...restProps }) {
  return <BorderButton {...restProps}>{children}</BorderButton>;
};
Login.FbButton = function LoginFbButton({ children, ...restProps }) {
  return <FbButton {...restProps}>{children}</FbButton>;
};
