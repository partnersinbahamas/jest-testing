import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
  it('renders with default initialState', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  it('renders with initialState', () => {
    const { result } = renderHook(useCounter, {initialProps: { initialCount: 10 }});
    expect(result.current.count).toBe(10);
  });
  it('renders with increment functions', () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  it('renders count with decrement function', () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
})