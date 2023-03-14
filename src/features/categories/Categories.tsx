import { Category, Message } from "../../lib/components";
import { useTranslations } from "../../lib/hooks";
import { UrlCategories } from "../../lib/types";

type Props = {
    onChange(urlCategories: UrlCategories): void
}

export const Categories = ({ onChange }: Props) => {

    const T = useTranslations();

    return (
        <div className="flex flex-col items-center mt-3 gap-2">
            <div className="font-semibold">{T.screen.categories.Categories}</div>
            <div className="flex gap-2 justify-center flex-wrap">
                <Category categoryName={T.screen.categories.All} onClick={() => onChange(UrlCategories.All)} />
                <Category categoryName={T.screen.categories.Activities} onClick={() => onChange(UrlCategories.Activities)} />
                <Category categoryName={T.screen.categories.AnimalsNature} onClick={() => onChange(UrlCategories.AnimalsNature)} />
                <Category categoryName={T.screen.categories.Flags} onClick={() => onChange(UrlCategories.Flags)} />
                <Category categoryName={T.screen.categories.FoodDrink} onClick={() => onChange(UrlCategories.FoodDrink)} />
                <Category categoryName={T.screen.categories.Objects} onClick={() => onChange(UrlCategories.Objects)} />
                <Category categoryName={T.screen.categories.SmileysPeople} onClick={() => onChange(UrlCategories.SmileysPeople)} />
                <Category categoryName={T.screen.categories.Symbols} onClick={() => onChange(UrlCategories.Symbols)} />
                <Category categoryName={T.screen.categories.TravelPlaces} onClick={() => onChange(UrlCategories.TravelPlaces)} />
            </div>
        </div>

    )
}