import { renderHook, act } from '@testing-library/react-hooks';
import { useList, Item } from '../index';

describe('useList hook', () => {
  test('adiciona item à lista', () => {
    const { result } = renderHook(() => useList());

    const newItem: Item = { id: 1, text: 'Test Item', checkbox: false };
    act(() => {
      result.current.addToList(newItem);
    });

    expect(result.current.list).toHaveLength(1);
    expect(result.current.list[0]).toEqual(newItem);
  })
})
