export default function HomePage({name}: {name:string}) {
    return (
        <div className="App">
            <header className="App-header">
            <p> Welcome to {name}'s portfolio! </p>
            <a href="https://drive.google.com/file/d/1860ZnFmtkpmGmeNH6JTq1FAwHHAHlYpz/view?usp=sharing">Link to resume</a>
            </header>
        </div>
    );
}