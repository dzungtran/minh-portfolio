interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "International Business",
        startDate: "2014-01-01",
        endDate: "2018-12-01",
        school: "Arcada University of Applied Sciences",
        location: "Finland",
        description: "Bachelor's degree, International Business",
        currentUni: false,
    },
    {
        title: "International Business",
        startDate: "2017-01-01",
        endDate: "2017-12-30",
        school: "Kyung Hee University",
        location: "South Korea",
        description: "Exchange Student, International Business.",
        currentUni: false,
    },
];

export default education;