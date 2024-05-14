import { create } from 'zustand'

export type Item = {
  id: number,
  text: String,
  checkbox: boolean,
}

export type List = {
  list: Item[],
  addToList: (item: Item) => void
  removeFromList: (id: number) => void,
  isChecked: (id: number) => void,
}

export const useList = create<List>((set) => {
    return {
      list: [],
      addToList: (item) => set((state) => ({list: [...state.list, item]})),
      removeFromList: (id) => set((state) => ({list: state.list.filter((item) => {
        return item.id !== id}) })),
      isChecked: (id) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, checkbox: !item.checkbox } : item
          ), 
      })),
    };
  });