import styled from 'styled-components'

export const GameBgContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  padding: 20px;
`

export const TitleScoreContainer = styled.div`
  border: 2px solid #ffffff;
  width: 70%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const TitleContainer = styled.div`
  width: 100px;
`

export const Title = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px 15px 30px;
  border-radius: 15px;
`

export const ScoreText = styled.p`
  font-family: ${props => props.fontFamily};
  color: #223a5f;
  font-size: ${props => props.size};
  margin: 0px;
`

export const GamePlayButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`
export const GameResultImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const GameResultItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameResultChoiceText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.size};
  font-weight: 600;
  font-size: 20px;
`

export const GameResultChoiceImg = styled.img`
  width: 90%;
  max-width: 200px;
`

export const GameResultPlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameCustomBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  height: 40px;
  width: ${props => props.width};
  border-radius: 5px;
  font-family: 'Bree Serif';
  border: 0px;
  cursor: pointer;
`

export const GameRulesBtnContainer = styled.div`
  text-align: right;
`

export const GameRulesContainer = styled.div`
  width: 90%;
`

export const GameRulesViewPopupContainer = styled.div`
  width: 90%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: auto;
  max-width: 700px;
`

export const GameRulesCloseBtn = styled.button`
  align-self: flex-end;
  margin-bottom: 15px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const GameRulesImg = styled.img`
  width: 90%;
  text-align: center;
`
