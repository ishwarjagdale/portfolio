import Hal from "../images/projects/halcyon.png"
import Spotify from "../images/projects/SpotifyProfile.png"
import FeaturedProject from "../components/FeaturedProjects";
import Project from "../components/Projects";

export default function Work() {
    return (
        <>
            <div className={"flex flex-col items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>03.</span><h3 className={"text-2xl whitespace-nowrap slate font-[600]"}>Some Things I've Built</h3>
                </div>
                <FeaturedProject
                    image={Hal}
                    title={"SysMon - System Monitoring Tool"}
                    description={
                        "A system monitoring tool which works in a network or over internet. It looks over available system resources' performance, generate logs and alerts user on any abnormality."
                    }
                    tags={["Python-Flask", "React", "Tailwind", "Sockets"]}
                    links={{"fab fa-github": "https://github.com/ishwarjagdale/sys.mon", "fas fa-external-link": "https://sys-mon.pages.dev/"}}
                />
                <FeaturedProject
                    image={Spotify}
                    title={"Journal - Medium Clone"}
                    description={
                        "This is a simple clone of medium.com created using ReactJS, TailwindCSS, Flask-Python (Backend), Google Photos API"
                    }
                    tags={["React",
                        "Python",
                        "Postgres",
                        "Google Cloud"]}
                    links={{"fab fa-github": "https://github.com/ishwarjagdale/journal"}}
                    orientation={0}
                />
            </div>
            <div className={"flex flex-col items-center max-w-[1000px] pb-32 w-full"}>
                <div className={"flex flex-col items-center justify-center w-full pb-16"}>
                    <h3 className={"text-2xl slate mb-[10px] font-[600]"}>Other Noteworthy Projects</h3>
                    <a href={"https://github.com/ishwarjagdale"} className={"accent text-sm font-monospace"}>view the archive</a>
                </div>
                <div className={"grid md:grid-cols-3 gap-4 w-full"}>
                    <Project
                        title={"SysMon's Backend Server"}
                        description={"SysMon applications backend server made with Python. "}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/sys.mon"}}
                        tags={["Python-Flask", "Threading", "Postgres", "Sockets", "REST"]}
                    />
                    <Project
                        title={"Docket - Cloud based note application"}
                        description={"A simple & secure note taking application with ExpressJS backend connected with Postgres SQL."}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/docket"}}
                        tags={["React", "Express", "Postgres"]}
                    />
                    <Project
                        title={"Apple Airpods Website Clone"}
                        description={"An attempt to clone Apple's airpods animation by applying lottie animation on a custom a 3D phone model."}
                        links={{"fab fa-github": "https://github.com/ishwarjagdale/lottie-animation", "fas fa-external-link": "https://ishwarjagdale.github.io/lottie-animation"}}
                        tags={["Lottie Animation", "Javascript", "CSS"]}
                    />
                </div>
            </div>
        </>

    )
}
