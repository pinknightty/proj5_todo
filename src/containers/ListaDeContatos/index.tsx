import { useSelector } from 'react-redux'

import Contato from '../../components/ListaContatos'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.listas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraListas = () => {
    let listasFiltradas = itens
    if (termo != undefined) {
      listasFiltradas = listasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        listasFiltradas = listasFiltradas.filter(
          (item) => item.categoria === valor
        )
      } else if (criterio === 'status') {
        listasFiltradas = listasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return listasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio} = ${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const listas = filtraListas()
  const mensagem = exibeResultadoFiltragem(listas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {listas.map((l) => (
          <li key={l.nome}>
            <Contato
              id={l.id}
              nome={l.nome}
              descricao={l.descricao}
              status={l.status}
              categoria={l.categoria}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeContatos
