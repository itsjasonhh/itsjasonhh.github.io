import { Experience, Header, Intro } from "dev-portfolio";

const introParagraphs = `
    Hi there, welcome to my portfolio!

    I am currently a SDE II at Prime Video sports, doing backend work for Prime Video Sports customer experience.
`;

export default function HomePage({title, resumeUrl}: {title:string, resumeUrl: string}) {
    const historyList = [
        {
            startDate: 'May 2021',
            endDate: 'Present',
            title: 'Software Development Engineer',
            description: 'SDE II at Prime Video Sports'
        },
        {
            startDate: 'August 2016',
            endDate: 'June 2019',
            title: 'Math Teacher',
            description: 'High School Math Teacher'
        }
    ]
    return (
        <>
            <Intro
                id='intro'
                title={title}
                shortIntro="Former math teacher, now software engineer."
                description={introParagraphs} 
            />
            <Experience
                id='experience'
                title='Experience'
                textAlign='left'
                theme='basic'
                shape='round-square'
                historyList={historyList} 
            />
        </>
    );
}