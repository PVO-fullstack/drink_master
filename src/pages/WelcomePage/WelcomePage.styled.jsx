 import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import coctailImgMobile from "../../images/WelcomePage/cocktailMainMob.jpg";
import coctailImgMobileR from "../../images/WelcomePage/cocktailMainMob@2x.jpg";
import coctailImgTab from "../../images/WelcomePage/cocktailMainTab.jpg";
import coctailImgTabR from "../../images/WelcomePage/cocktailMainTab@2x.jpg";
import coctailImgDesc from "../../images/WelcomePage/cocktailMainDesc.jpg";
import coctailImgDescR from "../../images/WelcomePage/cocktailMainDesc@2x.png";

export const BaseDiv = styled.div`
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background-image: url(${coctailImgMobile}),
    linear-gradient(to bottom, rgba(10, 10, 17, 1), rgba(10, 10, 17, 0)),
    linear-gradient(
      to right,
      rgba(10, 10, 17, 1),
      rgba(10, 10, 17, 0),
      rgba(10, 10, 17, 0.2)
    );
  background-position: right;
  background-repeat: no-repeat, no-repeat;
  background-color: #07070b;
  @media (-webkit-min-device-pixel-ratio: 2) {
    background-image: url(${coctailImgMobileR});
  }
  @media (min-width: 768px) {
    background-image: url(${coctailImgTab});

    justify-content: left;
    padding-left: 64px;
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${coctailImgTabR});
    }
  }
  @media (min-width: 1440px) {
    background-image: url(${coctailImgDesc});
    justify-content: left;
    padding-left: 100px;
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: url(${coctailImgDescR});
    }
  }
`;

export const PicturedWrapper = styled.img`
  position: relative;
  margin-left: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  .no-click {
    pointer-events: none;
    user-select: none;
  }
  @media screen and (min-width: 1440px) {
    width: 100vh;
  }
`;
export const SummaryWrapper = styled.div`
  width: 335px;
  height: 248px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 470px;
    height: 248px;
    padding: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    width: 488px;
    height: 248px;
  }
`;
export const WelcomeTitle = styled.h1`
  color: #fafafa;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  padding-bottom: 14px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.8px;
    text-align: left;
  }
`;
export const WelcomeText = styled.p`
  color: #fafafa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  padding-bottom: 40px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.28px;
  }
`;
export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
export const RegistrationNavLink = styled(NavLink)`
  display: block;
  padding: 14px 40px;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #0a0a11;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.28;
    padding: 18px 44px;
  }
`;
export const SignInNavLink = styled(NavLink)`
  display: block;
  padding: 14px 40px;
  border-radius: 42px;
  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #0a0a11;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.28;
    padding: 18px 44px;
  }
`;