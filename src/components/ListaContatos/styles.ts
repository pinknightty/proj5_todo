import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  relacionamento?: enums.Relacionamento
  parametro: 'relacionamento' | 'status'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'relacionamento') {
    if (props.relacionamento === enums.Relacionamento.TRABALHO)
      return variaveis.azulEscuro
    if (props.relacionamento === enums.Relacionamento.AMIZADE)
      return variaveis.salmao
    if (props.relacionamento === enums.Relacionamento.CONHECIDO)
      return variaveis.vermelho
    if (props.relacionamento === enums.Relacionamento.NAMORADX)
      return variaveis.verde
    if (props.relacionamento === enums.Relacionamento.SERVICOS)
      return variaveis.coral
    if (props.relacionamento === enums.Relacionamento.OUTROS)
      return variaveis.purpura
  }

  return variaveis.turquesa
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #ccc;
  background-color: ${(props) => retornaCorDeFundo(props)}
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Email = styled.h4`
  padding: 8px;
  font-size: 8px;
`

export const Telefone = styled.h4`
  padding: 8px;
  font-size: 8px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
