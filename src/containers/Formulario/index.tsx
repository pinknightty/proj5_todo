import { FormEvent, useState } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Escolha } from './styles'
import * as enums from '../../utils/enums/Contato'
import Lista from '../../models/Lista'
import { adicionarContato } from '../../store/reducers/listas'

const Formulario = () => {
  const dispatch = useDispatch() // atualiza a store
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState(enums.Relacionamento.AMIZADE)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionarContato({
        nome,
        categoria,
        status: enums.Relacionamento.OUTROS,
        descricao
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição do contato"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Relacionamento).map((categoria) => (
            <Escolha key={categoria}>
              <input
                value={categoria}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Relacionamento)
                }
                id={categoria}
                defaultChecked={categoria === enums.Relacionamento.CONHECIDO}
              />
              <label htmlFor={categoria}> {categoria}</label>
            </Escolha>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
