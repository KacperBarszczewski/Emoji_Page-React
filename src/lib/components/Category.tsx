import { UrlCategories } from "../types"

type Props={
    categoryName: string,
    onClick(): void
}

export const Category = ({categoryName, onClick}:Props) => {

    return (
        <button  onClick={onClick} className="flex items-center h-7  p-3 rounded hover:bg-opacity-50 bg-foreground text-typography-dark">
            {categoryName}
        </button>
    )
}