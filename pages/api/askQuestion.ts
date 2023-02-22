import type { NextApiRequest, NextApiResponse } from "next"
import query from "../../lib/queryApi";
import admin from "firebase-admin"
import adminDB from "../../firebaseAdmin";

type Data = {
  answer: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, session, model } = req.body;

  if (!prompt) {
   res.status(400).json({ answer: "Please Provide a Prompt!" });
   return;
  }

  if (!chatId) {
   res.status(400).json({ answer: "Please Provide a valid chat ID!" });
   return;
  }
  
  // ChatGPT Query
 const response = await query(prompt, chatId, model)
  

  const message: Message = {
   text: response || "ChatGPT was unable to answer for that!",
   createdAt: admin.firestore.Timestamp.now(),
   user: {
     _id: "ChatGPT",
     name: "ChatGPT",
     avatar: "https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
   },
  };

  await adminDB
  .collection("users")
  .doc(session?.user?.email)
  .collection("chats")
  .doc(chatId)
  .collection("messages")
  .add(message)

  res.status(200).json({ answer: message.text })
}