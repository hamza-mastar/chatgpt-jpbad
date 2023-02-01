import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';


export default function Home() {
  const [gender, setGender] = useState('man');
  const [age, setAge] = useState(30);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState('');
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    const response = await fetch('/api/generate-gifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceMin, priceMax, gender, age, hobbies }),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\n', '<br />'));
    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Christmas gift generator 🎁 💡</h3>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Enter the Name"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />

          <label>Job title</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Job title"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />

          <label>Experience </label>
          <textarea 
           
            min={1}
             name=""
             rows="4"
            placeholder="Enter the minimum price"
            cols="50"
              value={priceMin}>
            onChange={(e) => setPriceMin(Number.parseInt(e.target.value))}
           </textarea>

          <label> job ad</label>
          <input
            type="number"
            min={1}
            name="priceMax"
            placeholder="Enter the maximum price"
            value={priceMax}
            onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
          />

          <label>Hobbies</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Enter the hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input type="submit" value="Generate gift ideas" />
        </form>
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
    </div>
  );
}