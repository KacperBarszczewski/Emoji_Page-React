
type LoaderProps = {
    children: React.ReactNode;
}

export const Loader: React.FunctionComponent<LoaderProps> = ({ children }) => (
    <div>
        <div className="animate-pulse">
        {children}
        </div>
    </div>
)