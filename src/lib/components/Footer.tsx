import { APP_CONFIG } from "../config";
import { useTranslations } from "../hooks";

export const Footer = () => {

    const T = useTranslations();
    const year = new Date().getFullYear();

    return (
        <div className="h-14 text-sm flex flex-row items-center justify-between px-5 bg-foreground text-typography-dark">
            <div></div>
            <div>
                <a
                    className="hover:text-stone-50 hover:underline"
                    href={APP_CONFIG.GITHUB_URL}
                    target='_blank'
                >
                    &copy; {year} {T.auth}
                </a>
            </div>
            <div>
                <a
                    className="hover:text-stone-50 hover:underline"
                    href={APP_CONFIG.EMOJIAPI_URL}
                    target='_blank'
                >
                    {T.components.footer.emojiApi}
                </a>
            </div>

        </div>
    )
}