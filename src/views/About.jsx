export default function About() {
    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>01.</span><span className={"text-2xl slate font-Poppins font-[600]"}>About me</span>
                </div>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                    <li>Python</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Javascript (ES6+)</li>

                </ul>
            </div>
        </>
    )
}
