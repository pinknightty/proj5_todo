import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string
  status?: string
  descricao: string
}

const Contato = ({ categoria, nome, descricao, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag>{categoria}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
