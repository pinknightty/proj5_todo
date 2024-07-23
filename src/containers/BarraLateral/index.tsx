import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar Contato" />
      <S.Filtros>
        <FiltroCard apelido="Chico" contador={1} />
        <FiltroCard apelido="Merlot" contador={2} />
        <FiltroCard apelido="Peido" contador={3} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
