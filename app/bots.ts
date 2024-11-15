export type BotVariant = {
    name: string;
    description: string;
    localId: string;
    assistantId: string;
}

export const bots: BotVariant[] = [
    // {
    //     name: "INT-1",
    //     description: "Модель для тестирования по международным материалам",
    //     localId: "int-1",
    //     assistantId: "asst_GJs5kUTNjpExxPR6ofTFPvpK",
    // },
    // {
    //     name: "1C-1",
    //     description: "Модель для тестирования по всем 1с материалам",
    //     localId: "1c-1",
    //     assistantId: "asst_ZAhWGis2ohVJEFnBYKUbts30",
    // },
    // {
    //     name: "1C-OnlyLesson",
    //     description: "Модель для тестирования по материалам курса обучения 1с за 22 дня",
    //     localId: "1C-OnlyLesson",
    //     assistantId: "asst_WwEoenAZo04vGkivktALf199",
    // },
    // {
    //     name: "OVA",
    //     description: "Модель для тестирования",
    //     localId: "2G",
    //     assistantId: "asst_2nOtgfWbKhwbnetmddj4UW0x",
    // },
    {
        name: "DNS",
        description: "Модель для тестирование по материалам",
        localId: "DNS",
        assistantId: "asst_gZSnl3qThcB8XODE1qFMd53g",
    }
]