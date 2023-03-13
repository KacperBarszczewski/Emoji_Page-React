import { useState } from "react"
import { APP_CONFIG } from "../../lib/config";
import { Emoji } from "../../lib/models";

export const useEmojis = (
    onSucces: (emojis: Array<Emoji>) => void
) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    return {
        isLoading,
        hasError,
        fetch: () => {
            setLoading(true);
            setHasError(false);

            fetch(APP_CONFIG.API_URL + '/all')
                .then(response => {
                    if (response.ok) {

                        return response;
                    }
                    throw response
                })
                .then(response => response.json())
                .then(onSucces)
                .catch(() => { setHasError(true) })
                .finally(() => { setLoading(false) })
        }
    }
}