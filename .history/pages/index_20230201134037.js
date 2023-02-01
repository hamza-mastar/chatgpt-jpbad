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



    <boddy className="h-full px-5 sm:px-6">
      <div className="flex relative sm:flex-col md: flex-col">
      
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
     <div className="min-h-screen w-full lg:w-1/2 relative">
    <div className="h-full px-5 sm:px-6">
      <div className="h-full w-full max-w-xl mx-auto flex flex-col after:mt-auto after:flex-1">
        <header className="sm:flex-1 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row">
          <div className="flex items-center justify-between h-24 md:h-20">
            <a aria-current="page" href="/" className="router-link-active router-link-exact-active block group" >
              
              
          
          </a>
          </div>
          <div className="my-6 sm:m-0">
            <span className="isolate inline-flex rounded-md shadow-sm">
          <button type="button" className="cursor-pointer relative text-gray-700 -ml-px inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
           Login</button>
          <button type="button" className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <a className="flex items-center" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwritemyprd.com&amp;text=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40TheProductfolks" target="_blank">
               Tweet </a>
                  </button>
                  <button type="button" className="relative -ml-px inline-flex rounded-r-md items-center border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                    <a className="flex items-center" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwritemyprd.com&amp;title=Use%20GPT-3%20to%20generate%20your%20PRD%20in%20seconds%20made%20by%20folks%20at%20%40olvyhq%20and%20%40theproductfolks" target="_blank"> Share </a>
                    </button>
                    </span>
                </div>
              </header>
            
            <div className="flex-1 py-8">
           <div  className="mb-4" >
           <h1 className="text-3xl font-bold font-inter mb-2">Write a detailed cover letter with GPT-3 </h1>
           <div className="text-gray-500 mt-4 mb-6"> Tell us your experience, details about the job ad - and we can give you the bones of a detailed cover letter. </div>
           <div className="divide-y divide-gray-200 my-8 relative border"></div>
           




       
        <form  onSubmit={onSubmit} className="mb-12 relative">
        <div className="rounded-lg bg-white border p-4"><div className="flex"><div className="flex-shrink-0">💡</div><div className="ml-3 flex-1 md:flex md:justify-between"><p className="text-sm text-gray-700 font-medium"> Remember: Less is better! WriteMyCoverLetter is built to help you get started.
You will need to read over and edit! Don't be lazy </p></div></div></div>
        <div>
          <div className="py-6">
          <label className="relative transition text-gray-600 focus-within:text-gray-800 block" >Name</label>
          <input className="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            required
            name="name"
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          

          <label className="relative transition text-gray-600 focus-within:text-gray-800 block">Job title</label>
          <input className="outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined "
            type="text"
            required
            name="job_title"
            placeholder="Job title"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
          />

          <label>Experience </label>
          <textarea className="form-textarea outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined " rows="4"
          required
          type="textarea"
          name="experience"
          placeholder="Enter the minimum price"
          value={experience}
          onChange={(e) => setExperience(e.target.value)} >
            
            </textarea>

          <label className="relative transition text-gray-600 focus-within:text-gray-800 block"> job ad</label>
          <textarea className="form-textarea outline-none focus:outline-none text-lg bg-white rounded-md px-4 py-2 w-full border  focus:border-gray-400 border-gray-300 font-regular mt-2 transition-all undefined " rows="4"
            type="text"
            name="job_ad"
            placeholder="Enter the maximum price"
            value={job_ad}
            onChange={(e) => setJob_ad(e.target.value)}
          ></textarea>

          
          <div className="sticky bottom-1 left-0 right-0 px-2 py-2 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10 space-x-4 rounded-xl shadow-2xl">
            <div className="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg">
            <button id="clearAll" className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100"><div tooltip="Clear All" position="top" className="w-full" data-v-47bc123b=""></div></button>
            <button id="re-generate-prd" className="w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100"><div tooltip="Re-generate PRD" position="top" className="w-full" data-v-47bc123b=""></div></button>
            <link rel="icon" href="/dog.png" />
            
          <input className="sm:p-4 p-3 pt-4 grow rounded-lg flex items-center justify-center bg-pink-600 hover:bg-pink-800 shadow-lg text-xs sm:text-base" type="submit" value="Generate gift ideas" />
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
        className="whitespace-pre-wrap text-gray-800 bg-white h-auto text-lg divide-y px-4 pt-5 pb-4 sm:p-6 sm:pb-4 "
          class={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />

        </div>
        </div>
        
        </div>
       
        
        </div>
        <div className="sticky bottom-1 left-0 right-0 px-2 py-2 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10 space-x-4 rounded-xl shadow-2xl">
            <div className="flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-indigo rounded-lg">
            <CopyToClipboard text={result}
          onCopy={() =>setCopy(true)}>
         
  <button  className="grow h-16 p-0 sm:p-[1.1rem] w-20 sm:w-auto h-auto rounded-lg flex items-center justify-center bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg border">
  {/* {copy ? 'Copied' : "Copy"} */}
  </button>
  </CopyToClipboard>
  <button className="p-4 grow w-auto h-16 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg text-xs sm:text-base"> Copy and Open Slack </button>
  
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
