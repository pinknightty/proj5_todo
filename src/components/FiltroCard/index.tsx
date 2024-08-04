import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  apelido: string
  criterio: 'categoria' | 'status' | 'todas'
  valor: enums.Relacionamento | enums.Status
}

const FiltroCard = ({ apelido, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, listas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarListas = () => {
    if (criterio === 'todas') return listas.itens.length
    if (criterio === 'categoria') {
      return listas.itens.filter((item) => item.categoria === valor).length
    }
    if (criterio === 'status') {
      return listas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarListas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{apelido}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
