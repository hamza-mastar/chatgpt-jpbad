import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';
import {
  MDBInput

  
} from 'mdb-react-ui-kit';



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
        <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' 
         
          
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
          {/* <textarea>
          
          </textarea> */}
          <textarea 
            type="text"
            min={1}
            name="hobbies"
            placeholder="Enter the minimum price"
            value={priceMin}
            onChange={(e) => setHobbies(e.target.value)}
            >
              hmaxasdasfasdf
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
// Name Job_title Experience job_ad

// export default function App() {
//   return (
//     <form>
     
      
//       <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      
//       <MDBBtn type='submit' className='mb-4' block>
//         Sign in
//       </MDBBtn>
//     </form>
//   );
// }