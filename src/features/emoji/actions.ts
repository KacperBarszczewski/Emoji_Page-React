import { useState } from "react"
import { APP_CONFIG } from "../../lib/config";
import { useFetch } from "../../lib/hooks/useFetch";

import { Emoji } from "../../lib/models";
import { HttpMethod } from "../../lib/types";

export const useEmojis = (
    onSucces: (emojis: Array<Emoji>) => void
) => {

    return useFetch<Array<Emoji>>({
        url: '/all',
        method: HttpMethod.GET
    }, {
        onSucces: emojis => onSucces(emojis)
    })

}