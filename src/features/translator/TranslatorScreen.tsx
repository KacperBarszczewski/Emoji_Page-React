import { useTranslations } from "../../lib/hooks"

export const TranslatorScreen = () =>{

    const T= useTranslations()

    return(
        <div>
            {T.appName}
        </div>
    )
}