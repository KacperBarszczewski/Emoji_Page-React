import { useState } from "react";
import { APP_CONFIG } from "../config";
import { HttpMethod, OnError, OnSucces, UrlCategories } from "../types"

type FetchProps = {
    url: UrlCategories,
    method: HttpMethod
}

type FetchActions<Response> = {
    onSucces: OnSucces<Response>,
    onError?: OnError
}

export const useFetch = <Response>(config: FetchProps, actions: FetchActions<Response>) => {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    return {
        isLoading,
        hasError,
        fetch: () => {
            setLoading(true);
            setHasError(false);

            fetch(APP_CONFIG.API_URL + config.url)
                .then(response => {
                    if (response.ok) {

                        return response;
                    }
                    throw response
                })
                .then(response => response.json())
                .then(actions.onSucces)
                .catch(() => {
                    setHasError(true)

                    if (actions.onError) {
                        actions.onError()
                    }
                })
                .finally(() => { setLoading(false) })
        }
    }

}