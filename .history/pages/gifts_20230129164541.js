import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';
import Typed from 'react-typed'
// import './gifts.css'


export default function Home() {
  const [name, setName] = useState('man');
  const [job_title, setJob_title] = useState("");
  const [experience, setExperience] = useState("");
  const [job_ad, setJob_ad] = useState("");
  
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
      body: JSON.stringify({ name, job_title, experience, job_ad}),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\n', '<br />'));
    setLoading(false);
  }

  return (
    <>
    <div className=" hamza flex relative sm:flex-col md:flex-col">
    <div className=" w-full lg:w-1/2 relative  ">
    <div class="  h-full px-5 sm:px-6 bg-white" >
    <div class="h-full w-full max-w-xl mx-auto flex flex-col after:mt-auto after:flex-1">
    <header class= "sm:flex-1 mt-10 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row">
    <div class="flex items-center justify-between h-24 md:h-20">


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
            name="name"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          

          <label>Job title</label>
          <input
            type="text"
            name="job_title"
            placeholder="Job title"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
          />

          <label>Experience </label>
          <input
            type="text"
            name="experience"
            placeholder="Enter the minimum price"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <label> job ad</label>
          <input
            type="text"
            name="job_ad"
            placeholder="Enter the maximum price"
            value={job_ad}
            onChange={(e) => setJob_ad(e.target.value)}
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
    </div>
    </header>
    </div>
    </div>
    </div>
    </div>

    </>
  );
}
// Name Job_title Experience job_ad