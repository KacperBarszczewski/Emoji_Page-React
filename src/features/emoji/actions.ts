import { useState } from "react"
import { APP_CONFIG } from "../../lib/config";
import { useFetch } from "../../lib/hooks/useFetch";

import { Emoji } from "../../lib/models";
import { UrlCategories, HttpMethod } from "../../lib/types";


export const useEmojis = (
    onSucces: (emojis: Array<Emoji>) => void,
    urlCategories: UrlCategories
) => {

    return useFetch<Array<Emoji>>({
        url: urlCategories,
        method: HttpMethod.GET
    }, {
        onSucces: emojis => onSucces(emojis)
    })

}