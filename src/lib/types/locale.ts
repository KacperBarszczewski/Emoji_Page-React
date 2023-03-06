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