import { useTranslations } from "../hooks";
import useColorMode from "../hooks/useColorMode";

export const Header = () => {

    const T = useTranslations();
    const [colorMode, setColorMode] = useColorMode();

    return (
        <div className="h-16 bg-foreground flex flex-row items-center justify-between px-4 text-typography-dark">
            <div className="flex flex-row items-center">
                <p className="text-4xl">&#129303;</p>
                <h1 className="text-xl ml-3 font-bold">{T.components.header.title}</h1>
            </div>
            <div>
                <button className='bg-foreground'
                    onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                    Change color
                </button>
            </div>

        </div>
    )
}