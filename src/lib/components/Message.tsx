import { useTranslations } from "../hooks";

type MessageProps = {
    message: string,
    withButton?: boolean,
    onClick?(): void,
}

export const Message: React.FunctionComponent<MessageProps> = ({
    message,
    withButton,
    onClick
}) => {

    const T = useTranslations();

    return (
        <div>
            <div>
                {message}
            </div>

            {withButton ? (
                <div
                    className="text-center py-1 rounded-lg cursor-pointer mt-2 bg-primary  text-foreground hover:bg-opacity-70"
                    onClick={onClick}
                >
                    {T.components.message.tryAgain}
                </div>
            ) : null}
        </div>
    )
}