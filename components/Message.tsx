import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData;
}

const Message = ({message}: Props) => {
    const isChatGPT = message?.user?.name === "ChatGPT"

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message?.user?.avatar} alt="profile" className="w-8 h-8 rounded-full" />
            <p className="pt-1 text-sm">
                {message.text}
            </p>
        </div>
    </div>
  )
}

export default Message