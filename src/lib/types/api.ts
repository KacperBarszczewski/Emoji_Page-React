export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete'
}

export enum UrlCategories {
    All = '/all',
    SmileysPeople = '/all/category/smileys-and-people',
    AnimalsNature = '/all/category/animals-and-nature',
    FoodDrink = '/all/category/food-and-drink',
    TravelPlaces = '/all/category/travel-and-places',
    Activities = '/all/category/activities',
    Objects = '/all/category/objects',
    Symbols = '/all/category/symbols',
    Flags = '/all/category/flags'
}

export type OnSucces<Response> = (response: Response) => void
export type OnError = () => void