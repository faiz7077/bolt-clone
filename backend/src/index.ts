require("dotenv").config();
import express from "express";
import type { Request, Response } from "express";
import OpenAI from "openai";
import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import { basePrompt as nodeBasePrompt } from "./defaults/node";
import { basePrompt as reactBasePrompt } from "./defaults/react";
import cors from "cors";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
app.use(cors());
app.use(express.json());

app.post("/template", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "Return either node or react based on what do you think this project should be. Only return a single word either 'node' or 'react'. Do not return anything extra",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 10,
    temperature: 0,
  });

  const answer = response.choices[0].message.content?.trim().toLowerCase();

  if (answer === "react") {
    res.json({
      prompts: [
        BASE_PROMPT,
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompts: [reactBasePrompt],
    });
    return;
  }

  if (answer === "node") {
    res.json({
      prompts: [
        `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${nodeBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`,
      ],
      uiPrompts: [nodeBasePrompt],
    });
    return;
  }

  res.status(403).json({ message: "You can't access this" });
});

app.post("/chat", async (req, res) => {
    const userMessages = req.body.messages;

    // Prepend the system prompt correctly
    const messages = [
      {
        role: "system",
        content: getSystemPrompt(),
      },
      ...userMessages,
    ];
  const responseStream = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
    max_tokens: 8000,
    temperature: 0.7,
    stream: true,
  });

  let fullResponse = "";
  for await (const chunk of responseStream) {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      fullResponse += content;
    }
  }

  console.log(fullResponse);

  res.json({
    response: fullResponse,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
