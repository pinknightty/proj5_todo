import * as S from './styles'

export type Props = {
  apelido: string
  contador: number
}

const FiltroCard = ({ apelido, contador }: Props) => (
  <S.Card>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{apelido}</S.Label>
  </S.Card>
)

export default FiltroCard
