import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Can be omitted if set in env
});

async function main() {
  const prompt = "Create a todo app"; // You can replace this with dynamic input

  const stream = await client.chat.completions.create({
    model: "gpt-4o", // or "gpt-4" or "gpt-3.5-turbo"
    messages: [
      {
        role: "system",
        content: "You are a helpful coding assistant that responds in structured steps.",
      },
      {
        role: "user",
        content: `Give me the steps and code to: ${prompt}`,
      },
    ],
    temperature: 0.7,
    stream:true
  });

  process.stdout.write("\n🧠 AI Response:\n");

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
  console.log("\n");
}

main().catch(console.error);
