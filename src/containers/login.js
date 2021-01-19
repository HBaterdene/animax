import React from "react";
import { Login } from "../components";
import { HiCheckCircle } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockLine } from "react-icons/ri";

const hiCheckCircleStyle = {
  color: "#1ce589",
  background: "white",
  position: "absolute",
  top: 0,
  left: "75px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
};

export default function LoginContainer() {
  return (
    <Login.Container>
      <Login>
        <Login.Main>
          <Login.Logo>
            <Login.BorderTop>
              <HiCheckCircle style={hiCheckCircleStyle} />
              <Login.ImageTop src={"./img/logo.webp"} />
            </Login.BorderTop>
          </Login.Logo>
          <Login.Form>
            <Login.Email>
              <Login.Icon>
                <FaRegEnvelope />
              </Login.Icon>
              <Login.Input placeholder="Имэйл хаяг" type="email" />
            </Login.Email>
            <Login.Password>
              <Login.Icon>
                <RiLockLine />
              </Login.Icon>
              <Login.Input placeholder="●●●●●●●" type="password" />
            </Login.Password>
            <Login.BorderButton>
              <Login.Button>Нэвтрэх</Login.Button>
            </Login.BorderButton>
          </Login.Form>
          <Login.Question>
            <Login.Link href="#">Нууц үгээ мартсан?</Login.Link>
            <Login.Link href="#">Сайтад бүртгүүлэх</Login.Link>
          </Login.Question>
          <Login.FbButton>
            <Login.Button>Фэйсбүүк эрхээр нэвтрэх</Login.Button>
          </Login.FbButton>
        </Login.Main>
        <Login.BorderMid>
          <Login.ImageMid src={"./img/logo.webp"} />
        </Login.BorderMid>
      </Login>
    </Login.Container>
  );
}
