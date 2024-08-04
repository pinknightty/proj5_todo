import * as enums from '../utils/enums/Contato'

class Lista {
  nome: string
  categoria: enums.Categoria
  status: enums.Status
  descricao: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Lista
