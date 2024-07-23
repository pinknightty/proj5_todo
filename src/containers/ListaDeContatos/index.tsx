import Contato from '../../components/ListaContatos'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p> contatos marcados como???</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
