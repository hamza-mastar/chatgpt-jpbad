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
   


    <div>
      
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
      <div class=" flex relative sm:flex-col md:flex-col">
            <div class="   w-full lg:w-1/2 relative  ">
                    <div class="  h-full px-5 sm:px-6 bg-white" >
                        <div class="h-full w-full max-w-xl mx-auto flex flex-col after:mt-auto after:flex-1">
                            <header class= "sm:flex-1 mt-10 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row">
                                <div class="flex items-center justify-between h-24 md:h-20">
                                    <a aria-current="page" href="/" class="router-link-active router-link-exact-active block group" aria-label="Write My PRD">
                                    {/* <img className="youlogo" src={logo} alt="Your Logo" /> */}
                                    </a>

                                </div>
                                <div class="my-6 sm:m-0">
                                    <span class="isolate inline-flex rounded-md shadow-sm">
                                    
                                        
                                        
                                        <button type="button" class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"></button>
                                    </span>
                                </div>
                            </header>
                                
                            {/* <!-----------2-4-1--------> */}
                            <div class="flex-1 ">
                                {/* <!-----------2-4-1-1-------> */}

                                <div class="mb-4">
                                    {/* <!-----------2-4-1-1-1------> */}
                                    <h1 class="tex-0-w text-3xl font-bold font-inter mb-2">Write a detailed cover letter with GPT-3</h1>
                                    <div class="text-gray-500 mt-4 mb-6"> Tell us your experience, details about the job ad - and we can give you the bones of a detailed cover letter. </div>
                                    
                                    <div class="divide-y divide-gray-200 my-8 relative border"></div>               
                                </div>
                                {/* <!-----------2-4-1-2-------> */}
                                <form class="mb-12 relative">
                                    {/* <!-----------2-4-1-2-1------> */}
                                  
                                    <div class="rounded-lg bg-white border p-4">
                                        <div class="flex">
                                            <div class="flex-shrink-0">💡</div>
                                            <div class="ml-3 flex-1 md:flex md:justify-between">
                                                <p class="text-sm text-gray-700 font-medium"> Remember: Less is better! WriteMyCoverLetter is built to help you get started. You will need to read over and edit! Don't be lazy </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-----------2-4-1-2-2------> */}
                                    
                                </form>
                        </div>
                    </div>
                </div>
            </div>
                {/* <!-----------2-1-1---------> */}
                
        </div>
        <div>
        <div className="bg-white flex relative sm:flex-col md:flex-col">
            <div className="  min-h-screen  lg:w-1/2 relative">
                <div className="  h-full px-5 sm:px-6">
                    <div className=" max-w-xl mx-auto flex flex-col after:mt-auto after:flex-1">
                        <div className="py-6 ">
                            <div className="text-lg font-bold text-gray-800 mb-5">
                                <div className="text-pink-500">
                                    <div className=" flex-shrink-0 inline-flex items-center justify-center md:h-12 md:w-12 h-6 w-6 rounded-full bg-gray-300 sm:mx-0 sm:h-10 sm:w-10  bg-gray-300 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="  h-3 w-3 md:h-6 md:w-6 text-gray-500 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="mt-0 ml-4 text-left">
                                        <div as="h3" className="text-lg leading-6 font-medium text-gray-900">Detailed Ad</div>
                                        <p className="text-sm text-gray-500">Write a short few words about the ad</p>
                                    </div>
                                </div>
                                <div className="mt-4">
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
          </div>
          </div>
          </div>
          </div>
          </div>
          
          
          
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
        </div>
       
        
        
        
        
        
    

        
        

        
      </main>
      </div>
   
  

    </>
  );
}
// Name Job_title Experience job_ad