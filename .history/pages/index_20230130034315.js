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
                                    <a class="cursor-pointer relative text-gray-700 -ml-px inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50text-lg flex py-3 px-6 xl:py-4 xl:px-8 cursor-pointer bg-grenn-200 text-grenn-600 hover:bg-gray-100 rounded-t-md font-medium transition items-center" tabindex="-1" href="/login"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path></svg><div class="hidden lg:block"> Login </div></a>
                                        
                                        
                                        <button type="button" class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"><a class="flex items-center" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwritemyprd.com&amp;text=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40TheProductfolks"><svg viewBox="0 0 20 20" aria-hidden="true" class="h-4 w-4 mr-2" fill="currentColor"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path></svg> Tweet </a></button>
                                        <button type="button" class="relative -ml-px inline-flex rounded-r-md  border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 items-center"><a class="flex items-center" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwritemyprd.com&amp;title=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40theproductfolks" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3 w-3 mr-2" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg> Share </a></button>
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
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-white pointer-events-none -z-10" aria-hidden="true">
                
                            
                                
                   
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