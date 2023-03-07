import { Emoji } from "../models";

interface EmojiDetails {
    emojiDetails: Emoji;
}

export const EmojiCard = ({ emojiDetails }: EmojiDetails) => {

    const { name, category, group, htmlCode, unicode } = emojiDetails

    return (
        <div className="text-center bg-foreground m-3 p-3">
            <div className="text-8xl p-5 bg-slate-400" dangerouslySetInnerHTML={{ __html: htmlCode[0] }} />
            <div className="grid grid-cols-3 gap-2">
                <div>Name:</div><div className="col-span-2">{name}</div>
                <div>category:</div><div className="col-span-2">{category}</div>
                <div>group:</div><div className="col-span-2">{group}</div>
                <div>htmlCode:</div><div className="col-span-2">{htmlCode[0]}</div>
                <div>unicode:</div><div className="col-span-2"> {unicode[0]}</div>
            </div>
        </div>
    )
}