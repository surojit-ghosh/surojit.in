export type IEducation = {
    degree: string;
    institute: string;
    year: string;
    logo: string;
};

export const educations: IEducation[] = [
    {
        degree: "Master of Computer Applications",
        institute: "Institute of Engineering & Management, Kolkata",
        year: "2024 - 2026",
        logo: "/assets/logos/iem.png",
    },
    {
        degree: "B.Sc. in Computer Science",
        institute: "Netaji Mahavidyalaya, Arambagh",
        year: "2021 - 2024",
        logo: "/assets/logos/netajimahavidyalaya.png",
    },
];
