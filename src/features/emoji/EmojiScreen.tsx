import { useEffect, useState } from "react";

import { emojiActions } from ".";
import { EmojiCard, Loader, Message } from "../../lib/components";
import { useTranslations } from "../../lib/hooks"
import { Emoji } from "../../lib/models";
import { HttpMethod, UrlCategories } from "../../lib/types";

type Props = {
    category: UrlCategories
}

export const EmojiScreen = ({ category }: Props) => {
    const T = useTranslations();
    const [emojis, setEmojis] = useState<Array<Emoji>>([]);
    const { isLoading, hasError, fetch: getEmojis } = emojiActions.useEmojis(setEmojis, category);

    let ignore = false;

    useEffect(() => {
        if (!ignore) {
            getEmojis();
        }
        return () => {
            ignore = true
        }
    }, [category])


    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <Loader>
                    <div>
                        {T.screen.emoji.loading}
                    </div>
                </Loader>
            </div>
        )
    }

    if (hasError) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <Message
                    withButton
                    message={T.screen.emoji.error}
                    onClick={() => getEmojis()}
                />
            </div>
        )
    }

    if (emojis.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <Message message={T.screen.emoji.empty} />
            </div>
        )
    }


    return (
        <div className="flex-1 flex  justify-center">
            <div className=" my-3 flex flex-wrap w-2/3 justify-center gap-3">
                {emojis.map((emoji, i) => (
                    <EmojiCard key={i} emojiDetails={emoji} />
                ))}
            </div>
        </div>
    )
}