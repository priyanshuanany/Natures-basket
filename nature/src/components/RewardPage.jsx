import React from "react";
import styled from "styled-components";
import reward from "../images/reward.jpeg";
const HeadDiv = styled.div`
  /* border: 1px solid orange; */
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  /* border: 2px solid gray; */

  width: 20%;
`;
const RightDiv = styled.div`
  /* border: 2px solid gray; */

  width: 77%;
`;
const BoxDiv = styled.div`
  /* border: 1px solid black; */

  width: 90%;
`;
const InBoxDiv = styled.div`
  border: 1px solid lightgray;
  color: gray;
  height: 2.7rem;
  width: 90%;
  padding-left: 10%;
  padding-top: 5%;
  text-align: left;
  &:hover {
    background-color: #cac8c8;
    color: black;
  }
`;
const TopRight = styled.div`
  /* border: 1px solid blue; */
`;
const BottomRight = styled.div`
  /* border: 1px solid orange; */
`;
const RewardDiv = styled.div`
  border-bottom: 1px solid gray;
  text-align: left;
`;
const ItemDiv = styled.div`
  /* border: 1px solid purple; */
  margin-top: 10px;
  margin-bottom: 40px;
`;
const Span = styled.span`
  color: #b61672;
`;
const InItemDiv = styled.div`
  font-weight: 500;
  text-align: left;
  margin-top: 3px;
  margin-bottom: 13px;
`;
const BenefitdDiv = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  text-align: left;
`;
const Img = styled.img`
  width: 75%;
  margin-top: 40px;
`;

export const RewardPage = () => {
  return (
    <HeadDiv>
      <LeftDiv>
        <BoxDiv>
          <InBoxDiv>About the Rewards Program</InBoxDiv>
          <InBoxDiv>Benefits & Privileges</InBoxDiv>
          <InBoxDiv>My Rewards</InBoxDiv>
          <InBoxDiv>Terms & Conditions</InBoxDiv>
        </BoxDiv>
      </LeftDiv>
      <RightDiv>
        <TopRight>
          <RewardDiv>
            <p style={{ fontWeight: "400" }}>
              REWARDS <Span>PROGRAM</Span>
            </p>
          </RewardDiv>
          <ItemDiv>
            <InItemDiv> &gt; YOUR GATEWAY TO WORLD FOOD</InItemDiv>
            <InItemDiv> &gt; EARNING POINTS IS EASY</InItemDiv>
            <InItemDiv> &gt; REWARDS IS MORE THAN JUST POINTS</InItemDiv>
            <InItemDiv> &gt; REDEEMING POINTS IS IRRESISTIBLE</InItemDiv>
            <InItemDiv>&gt; KNOW YOUR NATURES BASKET REWARDS PROGRAM</InItemDiv>
          </ItemDiv>
        </TopRight>
        <BottomRight>
          <BenefitdDiv>BENEFITS OF REWARDS PROGRAM</BenefitdDiv>
          <div style={{ textAlign: "left" }}>
            <Img src={reward} alt="" />
          </div>
        </BottomRight>
      </RightDiv>
    </HeadDiv>
  );
};