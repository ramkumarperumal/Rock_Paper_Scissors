import {GamePlayBtn, GamePlayItemCon, GameChoicesImg} from './styledComponent'

const ChoiceItem = props => {
  const {choices, onClickChoiceBtn, testId} = props
  const {id, imageUrl} = choices

  const clickChoice = () => {
    onClickChoiceBtn(id)
  }
  return (
    <GamePlayItemCon>
      <GamePlayBtn data-testid={testId} type="button" onClick={clickChoice}>
        <GameChoicesImg src={imageUrl} alt={id} />
      </GamePlayBtn>
    </GamePlayItemCon>
  )
}

export default ChoiceItem
