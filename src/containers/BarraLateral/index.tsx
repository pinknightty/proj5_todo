import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar Contato"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Relacionamento.AMIZADE}
                criterio="status"
                apelido="Chico"
              />
              <FiltroCard
                valor={enums.Relacionamento.CONHECIDO}
                criterio="status"
                apelido="Merlot"
              />
              <FiltroCard
                valor={enums.Relacionamento.NAMORADX}
                criterio="categoria"
                apelido="Peido"
              />
              <FiltroCard
                valor={enums.Relacionamento.TRABALHO}
                criterio="status"
                apelido="Todos os Contatos"
              />
              <FiltroCard
                valor={enums.Relacionamento.SERVICOS}
                criterio="status"
                apelido="Todos os Contatos"
              />
              <FiltroCard
                valor={enums.Relacionamento.OUTROS}
                criterio="status"
                apelido="Todos os Contatos"
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
