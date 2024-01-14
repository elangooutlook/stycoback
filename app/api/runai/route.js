
import { NextResponse } from 'next/server'
import prmpts from './prompts.json';

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
function getapi(){
    const Apis = ["AIzaSyB_evRoaXWH77p3skPjlNvQdvTs1Z3qXyI","AIzaSyByzM_-MV_ivuSbOvs-Hqs7WRyBApaAxSg",
    "AIzaSyCQd1TAik0YId5mdaB5crO3b3PyDeKsRWg",
    "AIzaSyCZJW3zArsjsiR9VNyZsB_p6I-8iBk_cmM",
    "AIzaSyBtMGUqSdVwLVLOWw7hc2S3jkI9bbh-ffw",
    "AIzaSyBC5pgR9htY-H1bZaPKS3PtX_rBjSoiu1U",
    "AIzaSyDylfwUPK4LPVhyj8cNydDLHrP9sSlfAlQ"]
    return Apis[Math.floor(Math.random() *  Apis.length)];
}


async function run(author,prompt) {
const genAI = new GoogleGenerativeAI(getapi());
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
let prompt1 = prmpts[author]
  const parts = prompt1.push(prompt)
 
  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  return response
}



export async function GET(req, res) {
    
    try{
      var generation = await run(req.author,req.prompt)
    
            return NextResponse.json({ generation })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
        

    }

