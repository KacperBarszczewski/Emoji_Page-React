import { Emoji } from "../models";

interface EmojiDetails {
    emojiDetails: Emoji;
}

export const EmojiCard = ({ emojiDetails }: EmojiDetails) => {

    const { name, category, group, htmlCode, unicode } = emojiDetails

    return (
        <div className=" min-h-[400px]  w-64  bg-foreground  p-3 flex flex-col items-center rounded-md ">
            <div className="text-8xl h-40 w-40 bg-typography-dark rounded-md flex items-center justify-center" dangerouslySetInnerHTML={{ __html: htmlCode[0] }} />
            <div className="grid grid-cols-3 gap-2 mt-4 text-typography-dark">
                <div className="font-semibold">Name:</div><div className="col-span-2 ">{name}</div>
                <div className="font-semibold">Category:</div><div className="col-span-2">{category}</div>
                <div className="font-semibold">Group:</div><div className="col-span-2">{group}</div>
                <div className="font-semibold">HtmlCode:</div><div className="col-span-2">{htmlCode[0]}</div>
                <div className="font-semibold">Unicode:</div><div className="col-span-2"> {unicode[0]}</div>
            </div>
        </div>
    )
}