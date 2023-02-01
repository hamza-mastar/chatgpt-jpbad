
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { name, job_title, experience, job_ad } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(name,  job_title, experience, job_ad),
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(name, job_title, experience, job_ad ) {
  return `Dear Hiring Manager,My name is ${name}$  and I am excited to apply for the position of for a ${job_title}$ \n\  ${experience}$ First full time employee at Bamboo as Head of Growth. Operating in a start-up environment with limited resources I found myself doing most of Marketing, Product and Design tasks. Responsible for acquiring new users, retaining users, \n\  ${job_ad}$ is Asia’s largest smart commerce platform. With our customers in mind, we strive to deliver scalable commerce solutions to merchants of all sizes`;
}

// name job_title experience job_ad