import React from 'react';
import { ReactElement } from 'react'
import {render, RenderOptions} from '@testing-library/react';
import { AppProvider } from './components/providers/AppProvider/AppProvider';
import { createTheme } from '@mui/material';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(<AppProvider>{ui}</AppProvider>, options);

export * from '@testing-library/react'
export {customRender as render}