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
        <header class="sm:flex-1 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row" >
          <div class="flex items-center justify-between h-24 md:h-20"> </div>

            {/* logo icone login  */}
            </header>
            <div class="flex-1 py-8">
           <div  class="mb-4" >
           <h1 class="text-3xl font-bold font-inter mb-2"> Make Writing PRDs a Breeze with GPT-3 </h1>
           <div class="text-gray-500 mt-4 mb-6"> Describe the problem your product/service solves. Help the bot with top level information, and let it give you something you can build on. </div>
           <div class="divide-y divide-gray-200 my-8 relative border"></div>
           




        <h3  >Christmas gift generator 🎁 💡</h3>
        <form  onSubmit={onSubmit} class="mb-12 relative">
        <div class="rounded-lg bg-white border p-4"><div class="flex"><div class="flex-shrink-0">💡</div><div class="ml-3 flex-1 md:flex md:justify-between"><p class="text-sm text-gray-700 font-medium"> Remember: Less is better! WriteMyPrd is built to help you get started with writing your PRD, so don't over optimize. Use WriteMyPrd to help you begin your document by providing basic information. </p></div></div></div>
        <div>
          <div class="py-6">
          <label class="relative transition text-gray-600 focus-within:text-gray-800 block" >Name</label>
          <input class="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            name="name"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          

          <label class="relative transition text-gray-600 focus-within:text-gray-800 block">Job title</label>
          <input class="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            name="job_title"
            placeholder="Job title"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
          />

          <label>Experience </label>
          <textarea class="form-textarea outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined " rows="4"
          type="textarea"
          name="experience"
          placeholder="Enter the minimum price"
          value={experience}
          onChange={(e) => setExperience(e.target.value)} >
            
            </textarea>

          <label class="relative transition text-gray-600 focus-within:text-gray-800 block"> job ad</label>
          <textarea class="form-textarea outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined " rows="4"
            type="text"
            name="job_ad"
            placeholder="Enter the maximum price"
            value={job_ad}
            onChange={(e) => setJob_ad(e.target.value)}
          ></textarea>

          
          <div class="sticky bottom-1 left-0 right-0 px-2 py-2 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10 space-x-4 rounded-xl shadow-2xl">
            <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg">
            <button id="clearAll" class="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100"><div tooltip="Clear All" position="top" class="w-full" data-v-47bc123b=""><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd"></path></svg></div></button>
            <button id="re-generate-prd" class="w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100"><div tooltip="Re-generate PRD" position="top" class="w-full" data-v-47bc123b=""><svg class="w-full mt-[30%] h-5 text-gray-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg></div></button>
            
          <input class="sm:p-4 p-3 pt-4 grow rounded-lg flex items-center justify-center bg-pink-600 hover:bg-pink-800 shadow-lg text-xs sm:text-base" type="submit" value="Generate gift ideas" />
          </div>
          </div>
          </div>
        </form>
        </div> 
       </div>
        </div>
        </div>
          </div>
          
          {/* loging page ////////////////// */}
          
          <div class="relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto overflow-y-auto top-12">
            <div class="absolute inset-0 bg-gradient-to-b from-pink-100 to-white pointer-events-none -z-10" >
              {/* <div class="hidden md:block absolute right-0 pointer-events-none -z-10"> */}
                <div class="h-auto">
                <div class="p-6 pb-0 h-[calc(100vh-6rem)]" >
                <div class="form-textarea relative text-base w-full p-4 px-8 overflow-scroll h-[calc(100%-1rem)] shadow-2xl flex items-center justify-center" >
                <div class="text-pink-600 font-mono text-left text-base font-semibold absolute top-4 left-4">
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
          
          

        )}
        <div>
        <div class=""
          className={styles.result}
          // dangerouslySetInnerHTML={{ __html: result }}

          
        />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* </div> */}
      </main>
      </div>
   
      </dody>
  

    </>
  );
}
// Name Job_title Experience job_ad
