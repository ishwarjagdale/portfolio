import {useState} from "react";

export default function Experience() {

    const [work, setWork] = useState({
        "Smart City, Aurangabad Gov.": {
            url: "#",
            position: "Smart Scan",
            duration: "Nov - Feb 2023",
            content: [
                `Successfully managed and led a team of 7 developers throughout the project, ensuring smooth
                 coordination and timely delivery of the application before G-20.`,
                `Developed the Smart Scan application using full-stack technologies such as ReactJS and Flask.
                Collaborated with ASI, the Smart City, including government officials, to gather requirements
                and incorporate their insights into the application's design and functionality.`,
                `Handled the entire deployment and provided technical support and troubleshooting assistance
                to the officials, addressing their queries and resolving any issues promptly.`,
                `Received recognition for the successful completion of the application, contributing to the
                enhancement of tourism experiences in Aurangabad and promoting historical knowledge among
                visitors.`
            ]
        },
        "Oasis InfoByte": {
            url: "https://oasisinfobyte.com/",
            position: "Java Developer",
            duration: "May - July 2022",
            content: ["Built projects using concepts of OOPs",
                "Completed projects like ATM Machine, Number Guessing Game and fulfilled all the requirements as stated"
            ]
        },
        "Rinex.Ai": {
            url: "https://rinex.ai/",
            position: "Web Developer",
            duration: "February - March 2021",
            content: ["Worked as the only web developer in a team of 12",
                "Developed an event website for inter-state hackathon which we conducted",
            ]
        }
    })

    const [certifications, setCertifications] = useState({
        "Automating Real-World Tasks with Python": {
            url: "https://coursera.org/share/3d778b5a6dd8449da384fdd30f99a296",
            provider: "Google & Coursera",
            font: "google"
        },
        "From Data to Insights with Google Cloud": {
            url: "https://www.coursera.org/account/accomplishments/specialization/LHTMWADX74T6",
            provider: "Google & Coursera",
            font: "google"
        },
        "Data Analysis with Python": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/data-analysis-with-python-v7",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "Scientific Computing with Python": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/scientific-computing-with-python-v7",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "JavaScript Algorithms and Data Structures": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/javascript-algorithms-and-data-structures",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "Responsive Web Design": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/responsive-web-design",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        }
    })

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span
                    className={"text-[22px] whitespace-nowrap slate font-Poppins font-[600]"}>Experience & Achievements</span>
                </div>
                <p className={"dark-slate w-full mb-2 leading-7"}>
                    As in 2023, I have about 6 years of experience in development. I'm a self-learned programmer,
                    Python, HTML & CSS being my initial stack I further learned C, Java, JavaScript, and SQL.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>I've worked with APIs, cloud services such as <a
                    href={"https://aws.amazon.com/"}>Amazon AWS</a>, <a href={"https://cloud.google.com/"}>Google
                    Cloud</a>,
                    and gained experience by building full stack web applications with variety of frameworks like <a
                        href={"https://flask.palletsprojects.com/"} target={"_blank"}>Flask</a> and <a
                        href={"https://www.djangoproject.com/"} target={"_blank"}>Django</a> in Python,
                    React and Express in Javascript.
                </p>
                <div className={"flex flex-col md:flex-row w-full mt-12"}>
                    <ul className={"flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <li onClick={() => setActiveTab(i)}
                                           className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${activeTab === i ? "active-item" : ""}`}>{k}</li>
                            })
                        }
                    </ul>
                    <div className={"p-2"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <div className={`${activeTab === i ? "" : "hidden"}`}>
                                    <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                                        <span className={"slate mr-2"}>{work[k].position}</span><a href={work[k].url}
                                                                                                   className={"accent"}>@ {k}</a>
                                    </div>
                                    <span className={"slate text-sm font-monospace"}>{work[k].duration}</span>
                                    <ul className={"flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 text-sm"}>
                                        {
                                            Object.values(work[k].content).map((v) => <li className={"mb-2 text-justify"}>{v}</li>)
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={"flex items-center justify-center w-full pt-28 pb-8"}>
                    <h3 className={"text-2xl slate font-[600]"}>Certifications</h3>
                </div>
                <ul className={"flex w-full flex-col text-md slate font-monospace cert-list"}>
                    {
                        Object.keys(certifications).map((k, i) => {
                            return <li onClick={() => setActiveTab(i)} className={`p-3 px-6 cursor-pointer`}>
                                <a href={certifications[k].url} target={"_blank"} rel="noreferrer">
                                    <i className={`mr-4 w-[20px] text-center accent fab fa-${certifications[k].font}`}/>
                                    <span>{k}</span>
                                    <span
                                        className={"ml-2 hidden md:block text-sm slate-alt"}>- {certifications[k].provider}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
