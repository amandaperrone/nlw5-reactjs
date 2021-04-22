import React, { useEffect } from "react";



export default function Home(props) {
  return (
    
    <h1>Alô</h1>
   )
}

export async function getStaticProps() {
  // (o quê) => {o quê}, [quando]
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // recarrega a cada 8h
  }
} 

// SPA - use effect
// SSR - export function getServerSideProps(), recarrega TODA vez que abre a página
// SSG - getStaticProps()
