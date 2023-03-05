import { useEffect, useState } from "react";
import { useTranslations } from "../../lib/hooks"
import { useEmojis } from "./useEmojis";

export const EmojiScreen = () => {

    const T = useTranslations();
    const { isLoading, hasError, fetch: getEmojis} = useEmojis(
        emojis=>console.log(emojis)
    );

    let ignore = false;

    useEffect(() => {
        if (!ignore) {
            getEmojis();
        }
        return () => {
            ignore = true
        }
    }, [])


    return (
        <div>
            nic
        </div>
    )
}