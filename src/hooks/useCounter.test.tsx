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
})