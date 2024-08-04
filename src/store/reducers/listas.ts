import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Lista from '../../models/Lista'

import * as enums from '../../utils/enums/Contato'

type ListasState = {
  itens: Lista[]
}

const initialState: ListasState = {
  itens: [
    {
      id: 1,
      descricao: 'Amiga de bebedeira',
      categoria: enums.Relacionamento.AMIZADE,
      status: enums.Status.VIVO,
      nome: 'Vina Vinhedo'
    },
    {
      id: 2,
      descricao: 'Parceira de vida',
      categoria: enums.Relacionamento.NAMORADX,
      status: enums.Status.VIVO,
      nome: 'Merlot'
    },
    {
      id: 3,
      descricao: 'Cozinheira da familia',
      categoria: enums.Relacionamento.SERVICOS,
      status: enums.Status.VIVO,
      nome: 'Mel Lisboa'
    }
  ]
}

const listasSlice = createSlice({
  name: 'listas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((lista) => lista.id !== action.payload)
      ]
      //state.itens = state.itens.filter((lista) => lista.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Lista>) => {
      const indexDaLista = state.itens.findIndex(
        (l) => l.id === action.payload.id
      )

      if (indexDaLista >= 0) {
        state.itens[indexDaLista] = action.payload
      } // indexDaLista = action.payload
    },
    adicionarContato: (state, action: PayloadAction<Omit<Lista, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (lista) =>
          lista.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const listaNova = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(listaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaLista = state.itens.findIndex(
        (l) => l.id === action.payload.id
      )

      if (indexDaLista >= 0) {
        state.itens[indexDaLista].status = action.payload.finalizado
          ? enums.Relacionamento.AMIZADE
          : enums.Relacionamento.OUTROS
      }
    }
  }
})

export const { remover, editar, adicionarContato, alteraStatus } =
  listasSlice.actions

export default listasSlice.reducer
