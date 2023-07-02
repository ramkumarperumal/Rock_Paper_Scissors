import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameBgContainer,
  TitleScoreContainer,
  TitleContainer,
  Title,
  ScoreContainer,
  ScoreText,
  GamePlayButtonContainer,
  GameResultContainer,
  GameResultImgContainer,
  GameResultItemContainer,
  GameResultChoiceText,
  GameResultChoiceImg,
  GameResultPlayAgainContainer,
  GameRulesContainer,
  GameRulesViewPopupContainer,
  GameRulesCloseBtn,
  GameRulesImg,
  GameCustomBtn,
  GameRulesBtnContainer,
} from './styledComponent'
import ChoiceItem from '../ChoiceItem'

const gameResultConstant = {
  won: 'YOU WON',
  loss: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class RockPaperScissorGame extends Component {
  state = {
    score: 0,
    gameResultView: false,
    gameResult: '',
    choice1: {},
    choice2: {},
  }

  gameResult = (choice1, choice2) => {
    if (choice1 === 'ROCK') {
      return choice2 === 'SCISSORS'
    }
    if (choice1 === 'SCISSORS') {
      return choice2 === 'PAPER'
    }
    if (choice1 === 'PAPER') {
      return choice2 === 'ROCK'
    }
    return null
  }

  playAgain = () => {
    this.setState({
      gameResult: '',
      gameResultView: false,
      choice1: {},
      choice2: {},
    })
  }

  onClickChoiceBtn = id => {
    console.log(`${id} btn click`)
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * 3)
    const randomChoice = choicesList[randomNum].id
    const choice1 = choicesList.filter(each => each.id === id)[0]
    const choice2 = choicesList.filter(each => each.id === randomChoice)[0]

    if (id === randomChoice) {
      this.setState({
        gameResultView: true,
        gameResult: gameResultConstant.draw,
        choice1,
        choice2,
      })
    } else if (this.gameResult(id, randomChoice)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResultView: true,
        gameResult: gameResultConstant.won,
        choice1,
        choice2,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResultView: true,
        gameResult: gameResultConstant.loss,
        choice1,
        choice2,
      }))
    }
  }

  render() {
    const {choicesList} = this.props
    const {score, gameResultView, gameResult, choice1, choice2} = this.state

    return (
      <GameBgContainer>
        <TitleScoreContainer>
          <TitleContainer>
            <Title>Rock Paper Scissors</Title>
          </TitleContainer>
          <ScoreContainer>
            <ScoreText fontFamily="Bree Serif" size="22px">
              Score
            </ScoreText>
            <ScoreText fontFamily="Roboto" size="40px">
              {score}
            </ScoreText>
          </ScoreContainer>
        </TitleScoreContainer>
        {!gameResultView ? (
          <GamePlayButtonContainer>
            {choicesList.map(each => (
              <ChoiceItem
                testId={`${each.id.toLowerCase()}Button`}
                key={each.id}
                choices={each}
                onClickChoiceBtn={this.onClickChoiceBtn}
              />
            ))}
          </GamePlayButtonContainer>
        ) : (
          <GameResultContainer>
            <GameResultImgContainer>
              <GameResultItemContainer>
                <GameResultChoiceText size="18px">YOU</GameResultChoiceText>
                <GameResultChoiceImg alt="your choice" src={choice1.imageUrl} />
              </GameResultItemContainer>
              <GameResultItemContainer>
                <GameResultChoiceText size="18px">
                  OPPONENT
                </GameResultChoiceText>
                <GameResultChoiceImg
                  alt="opponent choice"
                  src={choice2.imageUrl}
                />
              </GameResultItemContainer>
            </GameResultImgContainer>
            <GameResultPlayAgainContainer>
              <GameResultChoiceText size="24px">
                {gameResult}
              </GameResultChoiceText>
              <GameCustomBtn
                width="120px"
                type="button"
                onClick={this.playAgain}
              >
                PLAY AGAIN
              </GameCustomBtn>
            </GameResultPlayAgainContainer>
          </GameResultContainer>
        )}
        <GameRulesContainer>
          <Popup
            modal
            trigger={
              <GameRulesBtnContainer>
                <GameCustomBtn type="button" width="85px">
                  RULES
                </GameCustomBtn>
              </GameRulesBtnContainer>
            }
          >
            {close => (
              <GameRulesViewPopupContainer>
                <GameRulesCloseBtn onClick={() => close()}>
                  <RiCloseLine />
                </GameRulesCloseBtn>
                <GameRulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </GameRulesViewPopupContainer>
            )}
          </Popup>
        </GameRulesContainer>
      </GameBgContainer>
    )
  }
}

export default RockPaperScissorGame
