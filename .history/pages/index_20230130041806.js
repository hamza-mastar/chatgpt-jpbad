import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

import styles from './index.module.css';


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
    setResult('hamza');
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
   


    <dody class="h-full px-5 sm:px-6">
      <div class="flex relative sm:flex-col md: flex-col">
      
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
     <div class="min-h-screen w-full lg:w-1/2 relative">
    <div class="h-full px-5 sm:px-6">
      <div class="h-full w-full max-w-xl mx-auto flex flex-col after:mt-auto after:flex-1">




        <h3  >Christmas gift generator 🎁 💡</h3>
        <form  onSubmit={onSubmit}>
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
        </div>
        </div>
          </div>
          {/* loging page ////////////////// */}
          
          <div class="relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto overflow-y-auto top-12">
            <div class="absolute inset-0 bg-gradient-to-b from-pink-100 to-white pointer-events-none -z-10" >
              {/* <div class="hidden md:block absolute right-0 pointer-events-none -z-10"> */}
                <div class="h-auto">
                {/* <div class="p-6 pb-0 h-[calc(100vh-6rem)]" > */}
                {/* <div class="form-textarea relative text-base w-full p-4 px-8 overflow-scroll h-[calc(100%-1rem)] shadow-2xl flex items-center justify-center" > */}
                {/* <div class="text-pink-600 font-mono text-left text-base font-semibold absolute top-4 left-4"> */}
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
          
          

        )}
        <div class="is-typed"
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}

          
        />
        </div>
        </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div>
        </div> */}
      </main>
      </div>
   
      </dody>
  

    </>
  );
}
// Name Job_title Experience job_ad