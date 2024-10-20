

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate a 30 seconds video on topic : Interesting historical story alone with AI Image prompt in realistic format for video script and give me result in JSON format with Image prompt and Content Text as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"Image Prompt\": \"A bustling medieval marketplace, full of people, stalls, and animals, with a vibrant tapestry hanging in the background, focused on a lone woman with a determined expression, holding a map in her hand.\",\n    \"Content Text\": \"In the heart of 14th century Florence, a young woman named Caterina de' Medici dreamt of a life beyond the confines of her noble family. While others focused on courtly affairs, Caterina devoured maps and historical texts, her mind filled with tales of faraway lands. Driven by an insatiable thirst for knowledge, she defied societal expectations, secretly studying astronomy, alchemy, and philosophy.\"\n  },\n  {\n    \"Image Prompt\": \"A dramatic portrait of Caterina de' Medici, dressed in elegant attire, holding a book and surrounded by books and scientific instruments, with a stern but determined expression on her face.\",\n    \"Content Text\": \"Caterina's unconventional pursuits made her a target of gossip and criticism. Yet, she persevered, her intellect and ambition blazing a path through the rigid traditions of her time. Her thirst for knowledge would eventually lead her to the French court, where she became a powerful queen, leaving a lasting mark on history.\"\n  }\n]\n```\n\n**Explanation:**\n\nThis JSON structure provides two data points, each representing a scene for a 30-second video. \n\n* **Image Prompt:** These are detailed descriptions for AI image generators, providing information on the scene, characters, and atmosphere. \n* **Content Text:** This is the accompanying narration for the video, providing historical context and a captivating narrative.\n\n**How to Use the Script:**\n\n1. **Generate Images:**  Use an AI image generator (like Midjourney, DALL-E 2, or Stable Diffusion) to create visuals based on the prompts provided.\n2. **Edit Images:**  Combine and edit the generated images to create a visually compelling sequence.\n3. **Add Audio:**  Record or find voiceover narration that matches the content text. \n4. **Combine Elements:**  Sync the images and audio to create a smooth and engaging 30-second video. \n\n**Note:**  You can adjust the image prompts and content text to suit your specific needs and preferences.  You can also add more data points to the JSON to create a longer video. \n"},
          ],
        },
      ],
    });

    console.log(result.response.text())