import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { device } from "../mediaQueries";
import { duration } from "./duration";
import { departureArrivalTime } from "./departureArrivalTime";
import { stopsText } from "./stopsText";
import { priceConverter } from "./priceConverter";
import "./style.css";

const StyledTicket = styled.div`
  width: 100%;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.25s;

  &:hover,
  &:focus {
    cursor: pointer;
    border-bottom: 3px solid #2196f3;
  }

  @media ${device.desktop} {
    width: 100%;

    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #fff;
  }
`;

const StyledShadow = styled.div`
  position: relative;
  z-index: 0;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  transition: box-shadow 0.25s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 5px 25px rgba(91, 137, 164, 0.1);
  }

  &:hover ${StyledTicket}, &:focus ${StyledTicket} {
    border-bottom: 3px solid #2196f3;
  }

  &:after {
    content: "";
    width: 100%;
    height: 46px;
    position: absolute;
    box-shadow: 0px 10px 50px rgba(91, 137, 164, 0.25);
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.25s;
    border-radius: 5px;
  }

  &:hover:after,
  &:focus:after {
    content: "";
    width: 100%;
    height: 46px;
    position: absolute;
    box-shadow: 0px 10px 50px rgba(91, 137, 164, 0.25);
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: -1;
    opacity: 1;
  }
`;

const StyledPriceAndLogo = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoWrap = styled.picture`
  width: 140px;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLogo = styled.img`
  width: 99px;
  height: 36px;
  margin-right: 5px;

  @media ${device.desktop} {
    margin-right: 0px;
  }
`;

const StyledPrice = styled.div`
  margin-left: 5px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;

  @media ${device.desktop} {
    margin-left: 0;
  }
`;

const StyledContentWrap = styled.div`
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;

  @media ${device.desktop} {
    width: 140px;
    justify-content: flex-start;
  }
`;

const StyledMeta = styled(StyledContentWrap)`
  font-size: 12px;
  height: 18px;
  color: #a0b0b9;
`;

const StyledContent = styled(StyledContentWrap)`
  font-size: 13px;
  height: 21px;
  color: #4a4a4a;

  @media ${device.desktop} {
    font-size: 14px;
    height: 21px;
    color: #4a4a4a;
  }
`;

const StyledSegment = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
  margin-top: 20px;

  &:last-child {
    margin-top: 10px;
  }
`;

const Ticket = props => {
  const ticket = props.ticket.map(el => {
    return (
      <StyledShadow
        key={
          el.carrier +
          el.price +
          el.segments[0].origin +
          el.segments[0].duration +
          el.segments[1].duration
        }
        tabIndex="0"
      >
        <StyledTicket>
          <StyledPriceAndLogo>
            <StyledPrice>
              {priceConverter(
                el.price,
                props.currentCurrency,
                props.currencyRates
              )}
            </StyledPrice>
            <StyledLogoWrap>
              <source
                srcSet={`https://pics.avs.io/99/36/${el.carrier}@2x.png`}
                type="image/png"
                media="screen and (-webkit-min-device-pixel-ratio: 1.25), screen and ( min--moz-device-pixel-ratio: 1.25), screen and (-o-min-device-pixel-ratio: 1.25/1), screen and (min-device-pixel-ratio: 1.25), screen and ( min-resolution: 200dpi), screen and ( min-resolution: 1.25dppx)"
              ></source>
              <StyledLogo
                src={`https://pics.avs.io/99/36/${el.carrier}.png`}
                alt="Логотип авиакомпании"
              />
            </StyledLogoWrap>
          </StyledPriceAndLogo>

          <StyledSegment>
            <StyledMeta>{`${el.segments[0].origin} – ${el.segments[0].destination}`}</StyledMeta>
            <StyledContent>
              {departureArrivalTime(
                el.segments[0].date,
                el.segments[0].duration
              )}
            </StyledContent>
            <StyledMeta>В пути</StyledMeta>
            <StyledContent>{duration(el.segments[0].duration)}</StyledContent>
            <StyledMeta>{stopsText(el.segments[0].stops)}</StyledMeta>
            <StyledContent>
              {[...el.segments[0].stops].join(", ")}
            </StyledContent>
          </StyledSegment>
          <StyledSegment>
            <StyledMeta>{`${el.segments[1].origin} – ${el.segments[1].destination}`}</StyledMeta>
            <StyledContent>
              {departureArrivalTime(
                el.segments[1].date,
                el.segments[1].duration
              )}
            </StyledContent>
            <StyledMeta>В пути</StyledMeta>
            <StyledContent>{duration(el.segments[1].duration)}</StyledContent>
            <StyledMeta>{stopsText(el.segments[1].stops)}</StyledMeta>
            <StyledContent>
              {[...el.segments[1].stops].join(", ")}
            </StyledContent>
          </StyledSegment>
        </StyledTicket>
      </StyledShadow>
    );
  });

  return ticket;
};

export default Ticket;

Ticket.propTypes = {
  ticket: PropTypes.array.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  currencyRates: PropTypes.object.isRequired
};
