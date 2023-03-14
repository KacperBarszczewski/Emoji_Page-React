export type Dictionary = {
    auth: string,
    components: {
        header: {
            title: string,
        },
        footer: {
            emojiApi: string,
        },
        message: {
            tryAgain: string,
        },
        emojiCard: {
            name: string,
            category: string,
            group: string,
            htmlCode: string,
            unicode: string
        }
    },
    screen: {
        emoji: {
            loading: string,
            error: string,
            empty: string,
        }
    }
}