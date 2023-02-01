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
 
 
  
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };


 
  

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
        <header class="sm:flex-1 flex mb-auto sm:py-10 pt-6 items-center sm:justify-between flex-col sm:flex-row" >
          <div class="flex items-center justify-between h-24 md:h-20"> </div>

            {/* logo icone login  */}
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
         
          <div className=" goho relative lg:fixed right-0 bottom-0 lg:block lg:w-1/2 overflow-hidden sm:px-5 lg:h-full h-auto overflow-y-auto top-12">
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
  <button onClick={toggleModal} class="p-4 grow w-auto h-16 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 hover:bg-gray-100 shadow-lg text-xs sm:text-base"><svg class="h-5 w-5 flex-shrink-0 text-gray-600 fill-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"></path></svg> Download </button></div></div>
  <button onClick={toggleModal} className="sm:p-4 p-3 pt-4 grow rounded-lg flex items-center justify-center bg-amber-300 hover:bg-amber-500 shadow-lg text-xs sm:text-base text-black">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 mr-2 text-gray-200">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                                        </svg>Perform Request
                                                                </button>
        </div>
        </div>
        
        </div>
        

{/* // fedback start  */}

<div id="olvy-widget" class="widget-background feedback-widget h-auto w-full rounded-lg" >
          <div  class="rounded-lg" id="olvy-widget-content" >
<div class="h-auto w-full flex flex-col rounded-lg max-h-[640px] overflow-y-auto hide-scrollbar-thumbnail" >
<div class="absolute top left w-full z-10 widget-header-background" >
</div>
<div class="h-full w-[calc(100%-1rem)] m-auto flex flex-col relative z-20" >
  <div class="h-full w-full" >
<div class="widget-header rounded-t-lg w-full h-auto" >
{/* <!----> */}
<div class="h-8 w-full flex items-center justify-end cursor-pointer mb-2" >
<div class="h-8 w-8 rounded-full flex items-center justify-center"  >

</div>
</div>
<div class="w-full relative z-10">
<div class="widget-title text-lg w-full mb-1 widget-header-title break-words leading-snug" data-test="header-text" >Share your Feedback 💭</div>
<div class="w-full widget-header-title text-base" data-test="header-description" >Powered by Olvy</div>
{/* <!----> */}
</div>
</div>
  <div class="widget-content pt-4 flex flex-col shadow-sm rounded-t-md"  >
{/* <!----><!----> */}
<div class="min-h-[315px] w-full" >
<form class="flex flex-col flex-grow" >
<div class="mb-4" >
<div  class="relative text-left w-full relative flex items-center" data-test="feedback-type-selector"  >
<button id="headlessui-menu-button-9" type="button" aria-haspopup="true" aria-expanded="true"  class="w-full text-left" >
  <button class="border px-2 py-2 rounded-lg text-sm mt-1 flex-grow w-full flex items-center justify-between gap-1" >
<span class="flex items-center gap-2" >No type</span>
<span class="flex" >
<span class="font-black icon-arrow-down-1 h-5 w-5" >
</span>
</span>
</button>
{/* <!----> */}
</button>
{/* <!----> */}
</div>
</div>
<div class="mb-2 w-full relative" >
<div class="feedback-textarea"  >
<textarea required="" data-test="feedback-input" rows="10" name="Please let us know what's your feedback?" id="Please let us know what's your feedback?" class="w-full" placeholder="Please let us know what's your feedback...">
</textarea>
</div>
<div class="absolute right-4 flex items-center bottom-4" >
<button type="button" class="font-medium flex items-center justify-center shadow-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-500 rounded-lg widget-background v-popper--has-tooltip" data-test="capture-screenshot"  >
<div class="flex items-center justify-center w-full" >
{/* <!----> */}
<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z" >
</path><path d="M3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm0 4h2v2h-2V7zM3 19h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3v-2zm0-4h2v2H3V7zm7.667 4l1.036-1.555A1 1 0 0 1 12.535 9h2.93a1 1 0 0 1 .832.445L17.333 11H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.667zM9 19h10v-6h-2.737l-1.333-2h-1.86l-1.333 2H9v6zm5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" ></path>
</svg>
</div>
</button>
<button type="button" class="font-medium flex items-center justify-center shadow-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-500 rounded-lg mx-2 widget-background v-popper--has-tooltip"   >
<div class="flex items-center justify-center w-full" >
{/* <!----> */}
<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0H24V24H0z" ></path><path d="M16 4c.552 0 1 .448 1 1v4.2l5.213-3.65c.226-.158.538-.103.697.124.058.084.09.184.09.286v12.08c0 .276-.224.5-.5.5-.103 0-.203-.032-.287-.09L17 14.8V19c0 .552-.448 1-1 1H2c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h14zm-1 2H3v12h12V6zM8 8h2v3h3v2H9.999L10 16H8l-.001-3H5v-2h3V8zm13 .841l-4 2.8v.718l4 2.8V8.84z" ></path>
</svg>
</div>
</button>
<button type="button" class="font-medium flex items-center justify-center shadow-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-offset-1 border border-gray-300 text-gray-900 bg-white hover:bg-gray-50 focus:ring-gray-500 rounded-lg widget-background v-popper--has-tooltip" data-test="upload-file"   >
  <div class="flex items-center justify-center w-full" >
    {/* <!----> */}
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
      <path fill="none" d="M0 0h24v24H0z" ></path><path d="M14 13.5V8a4 4 0 1 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 1 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 0 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0z" ></path>
      </svg>
</div>
</button>
</div>
{/* <!----> */}
</div>
<div class="w-full flex flex-col" >
  <input type="file" class="invisible h-0 w-0" multiple="" aria-label="attach feedback file" accept="audio/aac,image/avif,video/x-msvideo,text/csv,application/msword,image/gif,text/html,image/jpeg,application/json,audio/mpeg,video/mp4,video/mpeg,audio/ogg,image/png,application/pdf,text/plain,audio/wav,video/webm,image/webp" /></div>
<div >
<div class="w-full" >
<label class="text-sm w-full" >Email</label>
<input label="Your email" name="email_id" data-test="email-input" type="text" class="mt-1 rounded-lg w-full" placeholder="Your email id, so we can get back to you" />
</div>
{/* <!----> */}
</div>
</form>
</div>
{/* <!----> */}
</div>
</div>
</div>
{/* <!---- */}
<div class="absolute z-50 w-full bottom-0 widget-background rounded-b-lg" >
  <div class="w-[calc(100%-2rem)] m-auto widget-background rounded-b-lg" >
    <button data-test="send-feedback" type="submit" class="btn-send-feedback text-base flex gap-2 rounded-lg py-2 font-normal w-full h-12 mb-6 v-popper--has-tooltip" disabled="">Send feedback</button>
    </div>
    {/* <!----> */}
    </div>
    </div>
    </div>
    <div >
     {/* <!---->
     <!---->
     <!----> */}
     </div>
     </div>






{/* // fedback End   */}


      </main>
      </div>
   
      </boddy>
  

    </>
  );
}
// Name Job_title Experience job_ad
// overflow-scroll
// className={`${copy ? 'copied' : 'copy' }`}
