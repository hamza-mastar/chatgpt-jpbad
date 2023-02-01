import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import styles from './index.module.css';


// import './gifts.css'







export default function Home() {
  const [name, setName] = useState('man');
  const [job_title, setJob_title] = useState("");
  const [experience, setExperience] = useState("");
  const [job_ad, setJob_ad] = useState("");
  
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  
  const [copy,setCopy] = useState(false)

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
   


    <boddy class="h-full px-5 sm:px-6">
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
         
          <div class="relative  lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto  top-12">
            <div class="absolute inset-0 bg-gradient-to-b from-pink-100 to-white  -z-10" >
              <div class="relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 sm:px-5 lg:h-full h-auto overflow-y-auto top-12">
                <div  className={styles.container} class=" h-auto ">
                <div class="p-6 pb-0 h-[calc(100vh-6rem)] overflow-y-auto" >
                <div className={styles.form-textarea } class=" relative text-base overflow-y-auto w-full p-4 px-8  h-[calc(100%-1rem)] shadow-2xl flex items-center justify-center" >
                <div class="text-pink-600 font-mono text-left text-base font-semibold absolute top-4 left-4">
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
          
          

        )}
        <div type="text" onChange={(e)=>seResult(e.target.result.replaceAll('\n', '<br/>'))} 
        class="whitespace-pre-wrap text-gray-800 bg-white h-auto text-lg divide-y px-4 pt-5 pb-4 sm:p-6 sm:pb-4 "
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
          

          
        />
      
      
      <CopyToClipboard text={result}
          onCopy={() =>setCopy(true)}>
           <button className={`${copy ? 'copied' : 'copy' }`}>
             {copy ? 'Copied' : "Copy"}
           </button>
        </CopyToClipboard>
     
     
        </div>
        
        </div>
       
        
        </div>
        
        </div>
        <div class="sticky bottom-1 left-0 right-0 px-2 py-2 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10 space-x-4 rounded-xl shadow-2xl">
            <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg">
  <button class="grow h-16 p-0 sm:p-[1.1rem] w-20 sm:w-auto h-auto rounded-lg flex items-center justify-center bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg border"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 flex-shrink-0 text-gray-600"><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z"></path><path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z"></path></svg>
  </button>
  <button class="p-4 grow w-auto h-16 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg text-xs sm:text-base"><svg fill="currentColor" class="h-5 w-5 flex-shrink-0 text-gray-600 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.194 14.644c0 1.16-.943 2.107-2.103 2.107a2.11 2.11 0 0 1-2.104-2.107 2.11 2.11 0 0 1 2.104-2.106h2.103v2.106zm1.061 0c0-1.16.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v5.274a2.11 2.11 0 0 1-2.103 2.106 2.108 2.108 0 0 1-2.104-2.106v-5.274zm2.104-8.455c-1.16 0-2.104-.948-2.104-2.107s.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v2.107H9.359zm0 1.06a2.11 2.11 0 0 1 2.103 2.107 2.11 2.11 0 0 1-2.103 2.106H4.092a2.11 2.11 0 0 1-2.104-2.106 2.11 2.11 0 0 1 2.104-2.107h5.267zm8.447 2.107c0-1.16.943-2.107 2.103-2.107a2.11 2.11 0 0 1 2.104 2.107 2.11 2.11 0 0 1-2.104 2.106h-2.103V9.356zm-1.061 0c0 1.16-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106V4.082a2.11 2.11 0 0 1 2.103-2.106c1.16 0 2.104.946 2.104 2.106v5.274zm-2.104 8.455c1.16 0 2.104.948 2.104 2.107s-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106v-2.107h2.103zm0-1.06a2.11 2.11 0 0 1-2.103-2.107 2.11 2.11 0 0 1 2.103-2.106h5.268a2.11 2.11 0 0 1 2.104 2.106 2.11 2.11 0 0 1-2.104 2.107h-5.268z"></path></svg> Copy and Open Slack </button>
  <button class="p-4 grow w-auto h-16 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg text-xs sm:text-base"><svg class="h-5 w-5 flex-shrink-0 text-gray-600 fill-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"></path></svg> Download </button></div></div>
        </div>
        </div>
        </div>
       
      </main>
      </div>
   
      </boddy>
  

    </>
  );
}
// Name Job_title Experience job_ad
// overflow-scroll