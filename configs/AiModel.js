const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
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
          {text: "```json\n[\n  {\n    \"Image Prompt\": \"A bustling marketplace in ancient Rome, with merchants selling their wares and people going about their daily lives. Focus on the detail of the clothing and architecture.\",\n    \"Content Text\": \"Imagine Rome in its prime, a vibrant city teeming with life. The air is thick with the scent of spices and the clamor of merchants hawking their goods. A young boy, barely a teenager, pushes through the crowd, his eyes wide with wonder at the sights and sounds around him. He's not just any boy, though. This is Lucius, a young slave who dreams of freedom.\"\n  },\n  {\n    \"Image Prompt\": \"Lucius, a young slave, looking weary and exhausted, working in a field under the hot sun. The scene should convey the harsh realities of slavery.\",\n    \"Content Text\": \"Lucius's days are long and arduous. He toils in the fields under the unforgiving Roman sun, his back aching, his spirit crushed. His only solace is the whispered hope of one day escaping his chains.\"\n  },\n  {\n    \"Image Prompt\": \"A dramatic scene of gladiators fighting in a Colosseum. The crowd roars with excitement, their faces lit by the flickering flames of torches.\",\n    \"Content Text\": \"But fate has a cruel twist in store for Lucius. He's chosen to be a gladiator, forced to fight for his life in the Colosseum. The roars of the crowd, the smell of blood, the fear that grips his heart - it's a world he never could have imagined.\"\n  },\n  {\n    \"Image Prompt\": \"Close-up of Lucius's determined face as he fights bravely against a much larger opponent. The scene should be dramatic and intense.\",\n    \"Content Text\": \"But Lucius is no ordinary slave. He possesses a fierce spirit, a burning desire to live. He fights with the courage of a lion, his every move a testament to his resilience.\"\n  },\n  {\n    \"Image Prompt\": \"Lucius, free from his chains, standing victorious in the arena. The crowd cheers wildly, celebrating his triumph.\",\n    \"Content Text\": \"Against all odds, Lucius emerges victorious. The crowd erupts in a thunderous ovation, celebrating his bravery. His freedom is finally within reach.\"\n  }\n]\n```\n\n**Explanation:**\n\nThis JSON object contains five entries, each representing a 6-second segment of the 30-second video. \n\n* **Image Prompt:** This field provides a detailed description for the AI image generator to create a realistic image that complements the text. \n* **Content Text:** This field contains the narration for the video, providing historical context and emotional depth to the story.\n\n**Creating the Video:**\n\n1. **Generate Images:** Use an AI image generator (like Midjourney or DALL-E) to create images based on the prompts provided in the JSON object. \n2. **Edit Images:**  Combine and edit the images to create a visual flow, adding transitions and effects as needed.\n3. **Add Audio:**  Record or find suitable audio for the narration and background music. \n4. **Combine Visuals and Audio:** Synchronize the images and audio to create a compelling video.\n\n**Tips for Creating the Video:**\n\n* Use a variety of camera angles and shots to keep the video engaging.\n* Include dramatic music and sound effects to heighten the emotions of the story.\n* Add text overlays or graphics to provide additional information or context.\n* Make sure the video is clear and easy to understand. \n\nThis script provides a starting point for your historical video. You can modify the prompts, add additional segments, or adjust the narration to create your own unique video. \n"},
        ],
      },
    ],
  });