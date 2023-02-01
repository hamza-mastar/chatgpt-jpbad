import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Typed from "react-typed";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import styles from './index.module.css';


// import './gifts.css'



export default function Home()  {
  const [name, setName] = useState('man');
  const [job_title, setJob_title] = useState("");
  const [experience, setExperience] = useState("");
  const [job_ad, setJob_ad] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [what, setWhat] = useState(true);

  const [result, setResult] = useState('');

  const [copy,setCopy] = useState(false)
// Start this is the feedback 

// End  this is the fedback 

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setWhat(false);
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
    setWhat(false);
    
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
        <header class="sm:flex-1 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row">
          <div class="flex items-center justify-between h-24 md:h-20">
            <a aria-current="page" href="/" class="router-link-active router-link-exact-active block group" >
              
              <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.42 335.26">
              <defs>
              <style></style></defs><rect class="b" x="228.59" y="284.44" width="75.1" height="41.99"/>
              <rect class="b" x="60.73" y="4.3" width="205.4" height="328.84" rx="20.98" ry="20.98"/>
              <path d="M61.12,12.01c5.72,8.27,5.3,16.92,5.29,25.56-.04,88.53-.02,177.06,0,265.59,0,2.24-.09,4.57,.45,6.7,1.69,6.63,5.97,10.95,12.71,12.31,6.81,1.38,12.34-1.03,16.26-6.75,4.75-6.94,6.33-14.86,6.69-23.08,.16-3.74,0-7.5,.04-11.25,.06-5.3,2.22-7.47,7.6-7.49,12.5-.04,25-.01,37.5-.01,34.75,0,69.51,0,104.26,0,1.5,0,2.99,0,5.08,0,0-1.49,0-2.8,0-4.12,0-14.13-.02-28.26,.01-42.39,0-4.35,2.07-6.82,5.63-7,3.9-.19,6.33,2.43,6.34,7.07,.04,14,.02,28.01,.02,42.01,0,1.34,0,2.68,0,4.
              42,7.33,0,14.3,0,21.26,0,5.13,0,10.25-.07,15.38,.03,3.96,.08,6.66,2.1,6.68,5.65,.06,10.49,.53,21.06-.58,31.45-1.42,13.26-12.64,23.26-26.04,23.61-17.86,.48-35.75,.22-53.63,.17-3.87-.01-6.38-2.61-6.34-5.97,.05-3.44,2.66-5.89,6.84-5.93,10.88-.11,21.75-.05,32.63-.05,6,0,12,.07,18-.02,10.27-.15,17.11-7,17.23-17.24,.07-6.36,.01-12.73,.01-19.39H114.63c.2,12.63-1.44,24.98-8.92,36.66,2.19,0,3.62,0,5.06,0,18.88,0,37.76,0,56.63,0,6.13,0,9.05,1.92,9.12,5.95,.07,4.05-2.87,6.05-8.94,6.05-27.5,0-55.01,.02-8
              2.51,0-18.89-.01-30.67-11.77-30.67-30.62-.01-77.9,0-155.8,0-233.71v-5.25c-1.52-.07-2.83-.19-4.14-.19-14-.01-28,0-42.01-.01-6.14,0-8.16-1.97-8.19-8.03-.04-9-.1-18.01,.01-27.01C.28,11.81,12.21,.03,30.17,.02,99.68,0,169.19,0,238.7,.02c18.32,0,30.25,12,30.3,30.31,.01,5.5,.01,11,0,16.5-.01,5.05-2.15,7.89-5.92,7.96-3.82,.06-6.05-2.77-6.07-7.77-.02-5.63,0-11.25,0-16.88-.03-11.42-6.72-18.1-18.23-18.11-41.26-.02-82.51,0-123.77,0-16.25,0-32.5,0-48.76,0-1.36,0-2.72,0-5.12,0ZM12.63,52.53H54.17c0-8.95,.54-17.7-.16-26.36-.65-8.17-7.31-13.71-15.48-14.08-3.99-.18-8.01-.19-11.98,.14-6.61,.55-13.14,5.46-13.71,11.93-.83,9.37-.21,18.87-.21,28.38Z"/><path d="M290.12,173.26c4.26,5.43,4.02,7.61-.9,11.93-14.9,13.07-31.87,22.69-50.02,30.44-1.87,.8-3.73,2.46-4.75,4.22-4.16,7.11-7.98,14.42-11.96,21.63-2.32,4.19-5.52,5.46-8.85,3.62-3.31-1.83-3.94-5.18-1.65-9.4,3.98-7.36,8.1-14.64,11.95-22.06,.78-1.5,1.16-3.56,.88-5.22-3.86-22.35-4.77-44.69-.13-67.05,3.02-14.55,8.26-28.23,15.92-40.98,4.25-7.07,4.87-7.31,12.37-5.05,.06-.23,.23-.52,.15-.68-3.83-7.11-.39-12.03,4.5-17.07,17.97-18.55,38.96-32.26,63.39-40.64,5.4-1.85,8.47-.46,9.67,4.76,9.85,42.9,4.88,83.31-20.33,120.33-2.91,4.27-6.54,7.06-11.41,8.47-2.87,.83-5.71,1.78-8.83,2.76Zm-40.08-65.25c-15.21,26.59-18.55,54.89-14.56,84.67,25.12-45.97,50.25-91.93,75.37-137.9-17.74,7.75-33.04,18.5-45.77,32.73-.68,.76-.67,2.56-.36,3.71,1.27,4.7,2.73,9.34,4.21,13.98,.94,2.94,1.1,5.7-1.54,7.86-2.62,2.14-5.28,1.56-7.99,0-3-1.73-6.09-3.3-9.36-5.05Zm72.79-47.15l-1.49-.23-75.42,137.98,.85,.98c9.96-6.23,19.92-12.46,30.52-19.09-2.68-1.48-4.29-2.41-5.93-3.27-2.67-1.39-4.33-3.36-3.94-6.57,.4-3.22,2.53-4.57,5.45-5.35,7.23-1.92,14.5-3.77,21.6-6.14,2.39-.79,4.85-2.64,6.32-4.7,13.61-18.98,20.58-40.41,22.09-63.55,.65-9.98,.01-20.05-.04-30.08Z"/><path d="M166.62,61.77c-18.23,0-36.47,.02-54.7-.03-1.6,0-3.29-.11-4.76-.65-2.63-.97-3.89-3.19-3.61-5.93,.29-2.89,1.99-4.81,4.96-5.3,1.1-.18,2.24-.1,3.37-.1,36.59,0,73.18,0,109.77,0,1.12,0,2.27-.07,3.37,.1,2.78,.43,4.51,2.14,4.94,4.89,.45,2.92-.73,5.24-3.51,6.32-1.46,.57-3.16,.67-4.76,.67-18.36,.04-36.72,.03-55.07,.03Z"/>
              <path d="M162.77,97.82c17.49,0,34.98,.02,52.47-.02,2.98,0,5.44,.72,6.73,3.68,1.56,3.56-.59,7.49-4.56,8.21-1.21,.22-2.49,.13-3.74,.13-34.1,0-68.21,0-102.31,0-.75,0-1.5,.03-2.25-.01-3.82-.19-6.43-2.54-6.52-5.87-.1-3.49,2.56-6.09,6.59-6.1,17.86-.05,35.73-.02,53.59-.02Z"/>
              <path d="M155.52,205.98c-14.88,0-29.75,0-44.63,0-1.25,0-2.54,.12-3.74-.13-2.87-.6-4.65-2.36-4.86-5.39-.2-2.98,1.15-5.09,3.98-6.05,1.03-.35,2.2-.41,3.31-.41,30.63-.02,61.26-.03,91.89,0,4.61,0,7.49,2.44,7.42,6.11-.07,3.68-2.85,5.87-7.61,5.87-15.25,.02-30.5,0-45.76,0Z"/>
              <path d="M156.02,157.9c-14.86,0-29.72,0-44.59,0-1.12,0-2.29,.12-3.36-.12-3.18-.73-5.02-2.71-4.92-6.1,.09-3.21,1.97-5.03,4.98-5.67,1.08-.23,2.24-.11,3.36-.11,29.6,0,59.2,0,88.8,0,1,0,2.01-.06,2.99,.05,3.25,.36,5.62,2.93,5.6,5.98-.02,3.06-2.39,5.61-5.66,5.91-1.61,.15-3.24,.06-4.87,.06-14.11,0-28.22,0-42.34,0Z"/><path d="M150.14,237.3c12.98,0,25.96-.02,38.95,0,4.83,0,7.4,2.14,7.36,5.96-.04,3.7-2.58,6-7.08,6.01-26.21,.05-52.43,.05-78.64,0-5.4-.01-8.45-3.77-6.82-8.1,1.13-3.02,3.51-3.9,6.54-3.89,13.23,.05,26.46,.02,39.7,.02Z"/><path d="M212.43,321.93c3.65-.09,6.76,2.78,6.93,6.39,.17,3.57-2.77,6.74-6.39,6.92-3.91,.19-6.98-2.69-7.03-6.57-.04-3.74,2.76-6.66,6.49-6.75Z"/><path d="M198.32,328.73c-.09,3.6-3.16,6.54-6.8,6.52-3.89-.02-6.76-3.06-6.6-6.98,.15-3.71,3.12-6.45,6.87-6.33,3.64,.12,6.62,3.22,6.53,6.79Z"/>
              <path class="b" d="M12.63,52.53c0-9.51-.62-19.01,.21-28.38,.57-6.46,7.1-11.38,13.71-11.93,3.97-.33,8-.32,11.98-.14,8.16,.37,14.82,5.91,15.48,14.08,.69,8.66,.16,17.42,.16,26.36H12.63Z"/>
              <path class="c" d="M250.04,108.01c3.26,1.75,6.36,3.32,9.36,5.05,2.71,1.57,5.37,2.15,7.99,0,2.64-2.16,2.48-4.92,1.54-7.86-1.48-4.64-2.94-9.28-4.21-13.98-.31-1.15-.32-2.95,.36-3.71,12.73-14.24,28.03-24.99,45.77-32.73-25.12,45.97-50.25,91.93-75.37,137.9-3.99-29.78-.64-58.08,14.56-84.67Z"/><path class="c" d="M322.83,60.86c.05,10.03,.69,20.09,.04,30.08-1.51,23.14-8.48,44.57-22.09,63.55-1.47,2.05-3.93,3.9-6.32,4.7-7.09,2.36-14.36,4.21-21.6,6.14-2.92,.78-5.05,2.13-5.45,5.35-.4,3.2,1.27,5.18,3.94,6.57,1.64,.86,3.25,1.78,5.93,3.27-10.59,6.63-20.55,12.86-30.52,19.09l-.85-.98L321.34,60.63l1.49,.23Z"/></svg>
          
          </a>
          </div>
          <div class="my-6 sm:m-0">
            <span class="isolate inline-flex rounded-md shadow-sm">
          <button type="button" class="cursor-pointer relative text-gray-700 -ml-px inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd">

            </path>
          </svg> Login</button>
          <button type="button" class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <a class="flex items-center" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwritemyprd.com&amp;text=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40TheProductfolks" target="_blank">
              <svg viewBox="0 0 20 20" aria-hidden="true" class="h-4 w-4 mr-2" fill="currentColor">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84">
                  </path>
                  </svg> Tweet </a>
                  </button>
                  <button type="button" class="relative -ml-px inline-flex rounded-r-md items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                    <a class="flex items-center" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwritemyprd.com&amp;title=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40theproductfolks" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3 w-3 mr-2" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg> Share </a>
                    </button>
                    </span>
                </div>
              </header>
            
            <div class="flex-1 py-8">
           <div  class="mb-4" >
           <h1 class="text-3xl font-bold font-inter mb-2">Write a detailed cover letter with GPT-3 </h1>
           <div class="text-gray-500 mt-4 mb-6"> Tell us your experience, details about the job ad - and we can give you the bones of a detailed cover letter. </div>
           <div class="divide-y divide-gray-200 my-8 relative border"></div>
           




       
        <form  onSubmit={onSubmit} class="mb-12 relative">
        <div class="rounded-lg bg-white border p-4"><div class="flex"><div class="flex-shrink-0">💡</div><div class="ml-3 flex-1 md:flex md:justify-between"><p class="text-sm text-gray-700 font-medium"> Remember: Less is better! WriteMyCoverLetter is built to help you get started.
You will need to read over and edit! Don't be lazy </p></div></div></div>
        <div>
          <div class="py-6">
          <label class="relative transition text-gray-600 focus-within:text-gray-800 block" >Name</label>
          <input class="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            required
            name="name"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          

          <label class="relative transition text-gray-600 focus-within:text-gray-800 block">Job title</label>
          <input class="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            required
            name="job_title"
            placeholder="Job title"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
          />

          <label>Experience </label>
          <textarea class="form-textarea outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined " rows="4"
          required
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
            <link rel="icon" href="/dog.png" />
            
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
         
          <div className=" relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto overflow-y-auto top-12">
		<div className="relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto overflow-y-auto top-12" aria-hidden="true">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-white pointer-events-none -z-10" aria-hidden="true">
                    </div>
                    <div className="hidden md:block absolute right-0 pointer-events-none -z-10" aria-hidden="true">
                        <img src="/assets/auth-illustration.0d3f5ab0.svg" className="max-w-none" width="1440" height="900" alt="Page Illustration"/>
                    </div>
                    <div className="h-auto">
                        <div className=" p-6 pb-0 h-[calc(100vh-6rem)]">
                            <div className="form-textarea  bg-white relative text-base w-full p-4 px-8 overflow-scroll h-[calc(100%-1rem)] shadow-2xl flex items-center justify-center">
                                <div className=" font-mono text-left text-base font-semibold absolute top-4 left-4">
                                {what && (
                                    <div className={styles.load}>
                                      <Typed
                                    strings={[
                                      "Hi!</br>I'm CHAT-GPT3 - here to make your cover letter stand out from the rest.'Tell us your experience and the job requirements.",
                                    
                                    ]}
                                    typeSpeed={60}
                                    backSpeed={40}
                                    
                                  loop
                                  />
                                    </div>
                                    
                                    )}

        {loading && (
        
        <div className={styles.typed}>
          
        <Typed
        strings={[
          "We're working on getting everything ready, just as soon as we figure out how to",
        
        ]}
        typeSpeed={60}
        backSpeed={30}
        
      loop
      />
      </div>
        )}
        <div>
        <div type="text" onChange={(e)=>seResult(e.target.result.replaceAll('\n', '<br/>'))} 
        class="whitespace-pre-wrap text-gray-800 bg-white h-auto text-lg divide-y px-4 pt-5 pb-4 sm:p-6 sm:pb-4 "
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />

        </div>
        </div>
        
        </div>
       
        
        </div>
        <div class="sticky bottom-1 left-0 right-0 px-2 py-2 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10 space-x-4 rounded-xl shadow-2xl">
            <div class="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg">
            <CopyToClipboard text={result}
          onCopy={() =>setCopy(true)}>
         
  <button  class="grow h-16 p-0 sm:p-[1.1rem] w-20 sm:w-auto h-auto rounded-lg flex items-center justify-center bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg border">
  {/* {copy ? 'Copied' : "Copy"} */}
  </button>
  </CopyToClipboard>
  <button class="p-4 grow w-auto h-16 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg text-xs sm:text-base"><svg fill="currentColor" class="h-5 w-5 flex-shrink-0 text-gray-600 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.194 14.644c0 1.16-.943 2.107-2.103 2.107a2.11 2.11 0 0 1-2.104-2.107 2.11 2.11 0 0 1 2.104-2.106h2.103v2.106zm1.061 0c0-1.16.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v5.274a2.11 2.11 0 0 1-2.103 2.106 2.108 2.108 0 0 1-2.104-2.106v-5.274zm2.104-8.455c-1.16 0-2.104-.948-2.104-2.107s.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v2.107H9.359zm0 1.06a2.11 2.11 0 0 1 2.103 2.107 2.11 2.11 0 0 1-2.103 2.106H4.092a2.11 2.11 0 0 1-2.104-2.106 2.11 2.11 0 0 1 2.104-2.107h5.267zm8.447 2.107c0-1.16.943-2.107 2.103-2.107a2.11 2.11 0 0 1 2.104 2.107 2.11 2.11 0 0 1-2.104 2.106h-2.103V9.356zm-1.061 0c0 1.16-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106V4.082a2.11 2.11 0 0 1 2.103-2.106c1.16 0 2.104.946 2.104 2.106v5.274zm-2.104 8.455c1.16 0 2.104.948 2.104 2.107s-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106v-2.107h2.103zm0-1.06a2.11 2.11 0 0 1-2.103-2.107 2.11 2.11 0 0 1 2.103-2.106h5.268a2.11 2.11 0 0 1 2.104 2.106 2.11 2.11 0 0 1-2.104 2.107h-5.268z"></path></svg> Copy and Open Slack </button>
  
        </div>
        </div>
        
        </div>
        </div>
        </div>


      </main>
      </div>
   
      </boddy>
  

    </>
  );
}
{/* // Name Job_title Experience job_ad
// overflow-scroll
// className={`${copy ? 'copied' : 'copy' }`} */}
