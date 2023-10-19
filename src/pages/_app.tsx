import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {FC, PropsWithChildren} from 'react';
import theme from '../theme';
import {Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material/styles';
import {useColorScheme} from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <CssVarsProvider theme={theme}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </CssVarsProvider>
  )
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const { mode } = useColorScheme();

  return (
      <div>
        <p>Hey</p>
        {children}
      </div>
  );
};
