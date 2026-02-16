interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "English",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Vietnamese",
        level: "Native",
        description: "",
        show: true
    }
];

export default languages;