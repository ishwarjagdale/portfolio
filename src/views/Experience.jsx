import {useState} from "react";

export default function Experience() {

    const [work, setWork] = useState({
        "Oasis InfoByte": {
            position: "Java Developer",
            duration: "May - July 2022",
            content: ["Built projects using concepts of OOPs",
                "Completed projects like ATM Machine, Number Guessing Game and fulfilled all the requirements as stated"
            ]
        },
        "Rinex.Ai": {
            position: "Web Developer",
            duration: "February - March 2021",
            content: ["Worked as the only web developer in a team of 12",
                "Developed an event website for inter-state hackathon which we conducted",
            ]
        }
    })

    const [achievements, setAchievements] = useState({

    })

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span className={"text-2xl slate font-[Poppins] font-[600]"}>Experience & Achievements</span>
                </div>
                <p className={"dark-slate w-full mb-2 leading-7 font-[Poppins]"}>
                    As in 2022, I have almost 5-6 years of non-professional experience. I'm a self-learned programmer, Python, HTML & CSS being my initial stack I further learned C, Java, JavaScript, and SQl.
                    </p>
                <p className={"dark-slate w-full mb-4 leading-7 font-[Poppins]"}>I've worked with APIs, cloud services such as <a className={"accent"} href={"https://aws.amazon.com/"}>Amazon AWS</a>, <a className={"accent"} href={"https://cloud.google.com/"}>Google Cloud</a>,
                    and gained experience by building full stack web applications with variety of frameworks like <a className={"accent"} href={"https://flask.palletsprojects.com/en/2.2.x/"}>Flask</a> in Python,
                    React and Express in Javascript.
                </p>
                <p className={"slate-alt text-sm w-full mt-12 leading-7 font-[Poppins]"}>* Currently looking for new work opportunities</p>
                <div className={"flex w-full mt-2"}>
                    <ul className={"flex flex-col slate-alt font-monospace mr-6 work-list"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <li onClick={() => setActiveTab(i)} className={`p-3 px-6 cursor-pointer ${activeTab === i ? "active-item": ""}`}>{k}</li>
                            })
                        }
                    </ul>
                    <div className={"p-2"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <div className={`${activeTab === i ? "" : "hidden"}`}>
                                    <div className={`font-[Poppins] text-xl mb-1 font-[500]`}>
                                        <span className={"slate mr-2"}>{work[k].position}</span><span className={"accent"}>@ {k}</span>
                                    </div>
                                    <span className={"slate font-monospace"}>{work[k].duration}</span>
                                    <ul className={"flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 font-[Poppins] text-sm"}>
                                        {
                                            Object.values(work[k].content).map((v) => <li className={"mb-2"}>{v}</li>)
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
