import { Experience, Intro } from "dev-portfolio";

const introParagraphs = `
    Hi there, welcome to my portfolio!

    I am currently a SDE II at Prime Video Sports, doing backend work for Prime Video Sports customer experience. I have extensive experience building microservices on AWS infrastructure.

    I designed the NextUp experience for Prime Video Sports. Each week, we successfully transferred millions of Thursday Night Football watchers to other Prime Video content.
`;

export default function HomePage({ title }: { title:string }) {
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