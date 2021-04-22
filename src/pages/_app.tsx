import React from "react";

import '../styles/global.scss';

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from '../styles/app.module.scss';

// fica por volta de TODAS as páginas, porém é carregador novamente toda vez
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
