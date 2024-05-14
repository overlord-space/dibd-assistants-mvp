export type BotVariant = {
    name: string;
    description: string;
    localId: string;
    assistantId: string;
}

export const bots: BotVariant[] = [
    {
        name: "INT-1",
        description: "Модель для тестирования по международным материалам",
        localId: "int-1",
        assistantId: "asst_GJs5kUTNjpExxPR6ofTFPvpK",
    },
    {
        name: "1C-1",
        description: "Модель для тестирования по международным материалам",
        localId: "1c-1",
        assistantId: "asst_ZAhWGis2ohVJEFnBYKUbts30",
    },
]