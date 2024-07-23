import Contato from '../../components/ListaContatos'
import { Container } from './styles'

const contatos = [
  {
    nome: 'José Esquilo',
    descricao: 'Amigo de infância e estripulias nas árvores',
    categoria: 'Amigo',
    status: 'Melhor Amigo'
  },
  {
    nome: 'Vina Vinhedo',
    descricao: 'Aolega de trabalho que bebe vinho comigo',
    categoria: 'Trabalho',
    status: 'Amigo'
  },
  {
    nome: 'Pedro Pedreiro',
    descricao: 'Vizinho que trabalha com obras',
    categoria: 'Outros',
    status: 'Serviços'
  },
  {
    nome: 'Cartório',
    descricao: 'Cartório da cidade',
    categoria: 'Outros',
    status: 'Serviços'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p> contatos marcados como???</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato
            nome={c.nome}
            descricao={c.descricao}
            categoria={c.categoria}
            status={c.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
