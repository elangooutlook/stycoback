
import { NextResponse } from 'next/server'


const prompp = {
  "Haruki Murakami": [
    {text: "i like the author Haruki Murakami of the 'A Wild Sheep Chase' . Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by   Haruki Murakami, which i might like reading. Some text from url is added in PAGE BODY to get the better understanding of the text its from. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of  Haruki Murakami, I should feel  Murakamis' - Deeply Imaginative, Use of Magical Realist Elements, Influence of Western Culture, Ambiguity, Lack of a Political or Intellectual Stanced - style when i read it. one example is added."},
    {text: "HEADING Interview: NASA’s New Push to Track Unexplained Objects"},
    {text: "PAGE BODY Much of David Spergel’s career has been focused on studying the universe. An astrophysicist at Princeton University, he’s known especially for his research using the cosmic microwave background, the faint radiation associated with the Big Bang, to determine the basic properties of the universe.He also serves as president of the Simons Foundation, a charitable organisation that funds research in math and science. But last year he was recruited to pursue a rather different question: Who or what else might be out there?"},
    {text: "PART OF PASSAGE Now some of this, I think, particularly on the military side, could have military applications. That Chinese balloon that drifted across Canada and the United States – those balloons were almost certainly seen off of Guam, probably by commercial and military pilots, and they didn’t get reported. And in both Ukraine and Russia, they have apps for civilians to report drones. So one of the ways in which the Russians stop Ukrainian drones and the Ukrainians stop Russian drones, is civilians see them fly over, and then there’s an app for reporting information on where it is."},
    {text: "output: {\n “rephrased_text”: \"Certain aspects of this research, particularly on the military front, hold potential military applications. Take the Chinese balloon that traversed Canada and the United States, for example. Commercial and military pilots likely spotted those balloons near Guam, yet they went unreported. In conflict regions like Ukraine and Russia, civilian apps exist for reporting drones. Civilians play a role in halting enemy drones by observing their flights and using these apps to relay information about their locations.\"\n}"},
   
   ],
  "Stephen King": [
      {text: "i like the author Stephen King of the 'The Shining'. Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by  Stephen King, which i might like reading. Some text from url is added in PAGE BODY to get the context. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of Stephen King, I should feel  kings' - Vivid and suspenseful descriptions, Strong character development, Masterful use of foreshadowing and suspense, Shifting perspectives and unreliable narrators, Exploration of psychological themes - style when i read it. one example is added."},
    {text: "HEADING A Heatwave in Antarctica Totally Blew the Minds of Scientists. What They Deciphered is Alarming"},
    {text: "PAGE BODY Climate scientists don’t like surprises. It means our deep understanding of how the climate works isn’t quite as complete as we need. But unfortunately, as climate change worsens, surprises and unprecedented events keep happening.In March 2022, Antarctica experienced an extraordinary heatwave. Large swathes of East Antarctica experienced temperatures up to 40°C (72°F) above normal, shattering temperature records. It was the most intense heatwave ever recorded anywhere in the world."},
    {text: "PART OF PASSAGE Between late February and late March 2022, 12 tropical storms had brewed. Five storms revved up to become tropical cyclones, and heat and moisture from some of these cyclones mashed together. A meandering jet stream picked up this air and swiftly transported it vast distances across the planet to Antarctica.Below Australia, this jet stream also contributed to blocking the eastward passage of a high pressure system. When the tropical air collided with this so-called “blocking high”, it caused the most intense atmospheric river ever observed over East Antarctica. This propelled the tropical heat and moisture southward into the heart of the Antarctic continent."},
    {text: "output: {\"rephrased_text\": \"Late February through late March of '22, a dozen tropical storms brewed. Five turned into cyclones, heat and moisture from some of 'em mixed together. A winding jet stream picked up this air, hauling it 'cross the globe to Antarctica.Down near Australia, this jet stream also stopped a high pressure system from moving east. When tropical air crashed into this \\u201cblocking high,\\u201d it birthed the wildest atmospheric river ever seen over East Antarctica. This shoved tropical heat and moisture southward, straight into the heart of the Antarctic continent.\"}"},
    
     ] ,
  "Ernest Hemingway": [
    {text: "i like the author Ernest Hemingway of the \"The Old Man and the Sea\". Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by  Ernest Hemingway, which i might like reading. Some text from url is added in PAGE BODY to get the context. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of Hemingway, I should feel  hemingway- Intense Masculinity, Adventurous Life,Succinct and Lucid Prose, short words and understated - style when i read your version. Use words found in the book. one example is added."},
    {text: "HEADING Interview: NASA’s New Push to Track Unexplained Objects"},
    {text: "PAGE BODY Much of David Spergel’s career has been focused on studying the universe. An astrophysicist at Princeton University, he’s known especially for his research using the cosmic microwave background, the faint radiation associated with the Big Bang, to determine the basic properties of the universe.He also serves as president of the Simons Foundation, a charitable organisation that funds research in math and science. But last year he was recruited to pursue a rather different question: Who or what else might be out there?"},
    {text: "PART OF PASSAGE Now some of this, I think, particularly on the military side, could have military applications. That Chinese balloon that drifted across Canada and the United States – those balloons were almost certainly seen off of Guam, probably by commercial and military pilots, and they didn’t get reported. And in both Ukraine and Russia, they have apps for civilians to report drones. So one of the ways in which the Russians stop Ukrainian drones and the Ukrainians stop Russian drones, is civilians see them fly over, and then there’s an app for reporting information on where it is."},
    {text: "output: {\"rephrased_text\": \"I reckon some of this, especially on military side, could have military uses. That Chinese balloon that drifted across Canada and the United States \\u2014 those balloons were probably seen off Guam, likely by commercial and military pilots, but they weren't reported. And in both Ukraine and Russia, they got apps for civilians to report drones. So one way Russians stop Ukrainian drones and Ukrainians stop Russian drones is civilians see them fly over, then there's an app to report where it is.\"}"},
    ],
  "Yuval Noah Harari": [
    {text: "i like the author Yuval Noah Harari of the 'Sapiens: A Brief History of Humankind'. Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by Yuval Noah Harari, which i might like reading. Some text from url is added in PAGE BODY to get the context. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of HARARI, I should feel Yuval Noah Harari style when i read your version. Use words found in the book. one example is added."},
    {text: "HEADING A Heatwave in Antarctica Totally Blew the Minds of Scientists. What They Deciphered is Alarming"},
    {text: "PAGE BODY Climate scientists don’t like surprises. It means our deep understanding of how the climate works isn’t quite as complete as we need. But unfortunately, as climate change worsens, surprises and unprecedented events keep happening.In March 2022, Antarctica experienced an extraordinary heatwave. Large swathes of East Antarctica experienced temperatures up to 40°C (72°F) above normal, shattering temperature records. It was the most intense heatwave ever recorded anywhere in the world."},
    {text: "PART OF PASSAGE Between late February and late March 2022, 12 tropical storms had brewed. Five storms revved up to become tropical cyclones, and heat and moisture from some of these cyclones mashed together. A meandering jet stream picked up this air and swiftly transported it vast distances across the planet to Antarctica.Below Australia, this jet stream also contributed to blocking the eastward passage of a high pressure system. When the tropical air collided with this so-called “blocking high”, it caused the most intense atmospheric river ever observed over East Antarctica. This propelled the tropical heat and moisture southward into the heart of the Antarctic continent."},
    {text: "output: {“rephrased_text”: “In late February and late March 2022, a series of tropical storms formed, five of which intensified into cyclones. The heat and moisture from these cyclones combined, and a meandering jet stream carried this air mass across the globe, reaching Antarctica. In the meantime, the jet stream also prevented a high-pressure system from moving eastward near Australia. When the tropical air encountered this ‘blocking high,’ it resulted in the formation of an extremely strong atmospheric river over East Antarctica. This phenomenon transported the tropical heat and moisture southward, affecting the heart of the Antarctic continent.”}"},
  ],
  "J. K. Rowling": [
    {text: "i like the author J.K Rowling of the \"Harry Potter\". Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by  JK rowlings, which i might like reading. Some text from url is added in PAGE BODY to get the context. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of JK rowlings, I should feel  JK rowlings' - Intricately detailed magical universe and Internal consistency. - style when i read it. I have added an example."},
    {text: "HEADING Interview: NASA’s New Push to Track Unexplained Objects"},
    {text: "PAGE BODY Much of David Spergel’s career has been focused on studying the universe. An astrophysicist at Princeton University, he’s known especially for his research using the cosmic microwave background, the faint radiation associated with the Big Bang, to determine the basic properties of the universe.He also serves as president of the Simons Foundation, a charitable organisation that funds research in math and science. But last year he was recruited to pursue a rather different question: Who or what else might be out there?"},
    {text: "PART OF PASSAGE Now some of this, I think, particularly on the military side, could have military applications. That Chinese balloon that drifted across Canada and the United States – those balloons were almost certainly seen off of Guam, probably by commercial and military pilots, and they didn’t get reported. And in both Ukraine and Russia, they have apps for civilians to report drones. So one of the ways in which the Russians stop Ukrainian drones and the Ukrainians stop Russian drones, is civilians see them fly over, and then there’s an app for reporting information on where it is."},
    {text: "output: {\n “rephrased_text”: \"I believe that certain aspects of this, particularly on the military side, have potential applications. Balloons, like the Chinese balloon that crossed over Canada and the United States, were likely observed near Guam by both commercial and military pilots, but weren't reported. In Ukraine and Russia, civilians use apps to report drones. This helps both sides to stop enemy drones by using civilian sightings and reports.\"\n}"},
     ] ,
  "Rabindranath Tagore": [
    {text: "i like the author Rabindranath Tagore of the 'The Home and the World'. Safely rephrase the PART OF PASSAGE which has the HEADING as if it was written by  Tagore, which i might like reading. Some text from url is added in PAGE BODY to get the better understanding of the text its from. Return only the rephrased text in JSON format {“rephrased_text”: \"output\"}, without any additional commentary or explanation, and keep the rephrased text around same size. As a fan of Rabindranath Tagore, I should feel  Tagores' - Simplicity and Clarity, Lyricism, Prose and Verse Forms, Use of Colloquial Language, Prose Poetry- style when i read it. one example is added."},
    {text: "HEADING A Heatwave in Antarctica Totally Blew the Minds of Scientists. What They Deciphered is Alarming"},
    {text: "PAGE BODY Climate scientists don’t like surprises. It means our deep understanding of how the climate works isn’t quite as complete as we need. But unfortunately, as climate change worsens, surprises and unprecedented events keep happening.In March 2022, Antarctica experienced an extraordinary heatwave. Large swathes of East Antarctica experienced temperatures up to 40°C (72°F) above normal, shattering temperature records. It was the most intense heatwave ever recorded anywhere in the world."},
    {text: "PART OF PASSAGE Between late February and late March 2022, 12 tropical storms had brewed. Five storms revved up to become tropical cyclones, and heat and moisture from some of these cyclones mashed together. A meandering jet stream picked up this air and swiftly transported it vast distances across the planet to Antarctica.Below Australia, this jet stream also contributed to blocking the eastward passage of a high pressure system. When the tropical air collided with this so-called “blocking high”, it caused the most intense atmospheric river ever observed over East Antarctica. This propelled the tropical heat and moisture southward into the heart of the Antarctic continent."},
    {text: "output: {\n “rephrased_text”: \"In the heart of Antarctica, a relentless heatwave unveiled a concerning revelation. A peculiar confluence of events unfolded in March 2022, with 12 tropical storms brewing and five escalating into cyclones. The heat and moisture from these cyclones merged, then a winding jet stream swiftly carried this tropical air across vast distances, reaching Antarctica. As this tropical air encountered a blocking high pressure system near Australia, it created an intense atmospheric river, pushing the tropical heat and moisture deep into the heart of the Antarctic continent.\"\n}"},
    
     ]

}


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



async function run(author,prompturl,promptheading,promptpob,prompt) {
const genAI = new GoogleGenerativeAI(getapi());
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const generationConfig = {
    temperature: 0.8,
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

  var prompt1 = prompp[author]
  let promptp = [
    {text: "HEADING "+promptheading},
    {text: "PAGE BODY "+promptpob},
    {text: "PART OF PASSAGE "+prompt},{text: "output: "}]
 
  const parts = prompt1.concat(promptp)
  console.log(parts)
  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result?.response;
  return response
}



export async function POST(req,res) {
  const data  =await req.json()
  // console.log("data",data)
    try{
      var generation = await run(data.author,data.prompturl,data.promptheading,data.promptpob,data.prompt)
     let sentt= await generation.text() 
      return new Response(JSON.stringify({"gen":sentt}))
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Internal server error' });
        }
        

    }




