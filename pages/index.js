import { Inter } from '@next/font/google'
import Sidebar from '@/src/sidebar'
import Head from '@/src/infra/components/Head'
import MainContent from '@/src/mainContent'
import { createGlobalStyle } from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
  * {
      --text-color: #fff;
      --text-color-secondary: #fdfdfd;
      --body-bg-color: #e8f1f2;
      --bg-color: #13293d;
      --bg-color-secondary: rgba(36, 123, 160, .2);
      --emphasis: #ff0000;
      --detail: #ee82ee;
      --border-radius: 7px;
      --card-border-radius: 5px;
      --font-size-title: 2.5rem;
      --font-size-text: 1.4rem;
      --margin-distance: 1.5rem;
      font-family: sans-serif;
      margin: 0;
  }
  main {
    max-width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    padding: 5% .5rem;
    background-color: var(--body-bg-color);
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head title="Jorge Alexandre" />
      <main>
        <Sidebar/>
        <MainContent />
      </main>
    </>
  )
}
