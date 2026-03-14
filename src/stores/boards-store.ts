import { create } from 'zustand'

type BoardState = {
  boards: Board[];
}

type BoardActions = {
  addBoard: (board: Board) => void;
}

export const useBoardsStore = create<BoardState & BoardActions>((set) => ({
  boards: [],
  addBoard: (board: Board) => {
    set((state) => ({
      boards: [...state.boards, board]
    }))
  }
}))