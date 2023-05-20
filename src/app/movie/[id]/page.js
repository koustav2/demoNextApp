
import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

async function page({ params }) {
    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fd08c4896cmshd1932eff70c4c27p18a83djsn348846d69153',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}><span> <Link href={'/movie'} 
            style={{
                textDecoration: 'none',
                color: 'red',
                fontSize: 30,
                fontWeight: 'bold',
              }}
            >Netflix</Link> </span>\ <span> {main_data.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data.title}</h1>
                    <p>{main_data.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default page

{/* <Link href={`/movie/${id}`}>
<button>Read More</button>
</Link> */}