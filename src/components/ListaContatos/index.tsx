import * as S from './styles'

const Contato = () => (
  <S.Card>
    <S.Nome>Nome do Contato</S.Nome>
    <S.Tag>Amigo</S.Tag>
    <S.Tag>Trabalho</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Contato
