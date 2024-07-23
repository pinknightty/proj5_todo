import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

type TagProps = {
  categoria?: enums.Categoria
  status?: enums.Status
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.AMIGO) return variaveis.salmao
    if (props.categoria === enums.Categoria.OUTROS) return variaveis.amarelo
  } else if ('status' in props) {
    if (props.status === enums.Status.TRABALHO) return variaveis.azulEscuro
    if (props.status === enums.Status.SERVICOS) return variaveis.indigo
  }
  return '#f1f1'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
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

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
