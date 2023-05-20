

import React from 'react'
import Link from 'next/link'
import Movies from '../components/Movies';
import styles from "@/app/styles/common.module.css"
const movie = async function () {

  const url = process.env.RAPID_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fd08c4896cmshd1932eff70c4c27p18a83djsn348846d69153',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();;
  const main_data = data.titles;


  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curElem) => {
                return <Movies key={curElem.id} {...curElem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default movie