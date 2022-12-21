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
                    title={"Halcyon Theme"}
                    description={
                        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
                    }
                    tags={["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"]}
                    links={{"fab fa-github": "", "fas fa-external-link": ""}}
                />
                <FeaturedProject
                    image={Spotify}
                    title={"Spotify Profile"}
                    description={
                        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                    }
                    tags={["React",
                        "Styled Components",
                        "Express",
                        "Spotify API"
                        , "Heroku"]}
                    links={{"fab fa-github": "", "fas fa-external-link": ""}}
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
                        title={"Integrating Algolia Search with WordPress Multisite"}
                        description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                        links={{"fab fa-github": "", "fas fa-external-link": ""}}
                        tags={["Angolia", "Wordpress", "PHP"]}
                    />
                    <Project
                        title={"Integrating Algolia Search with WordPress Multisite"}
                        description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                        links={{"fab fa-github": "", "fas fa-external-link": ""}}
                        tags={["Angolia", "Wordpress", "PHP"]}
                    />
                    <Project
                        title={"Integrating Algolia Search with WordPress Multisite"}
                        description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                        links={{"fab fa-github": "", "fas fa-external-link": ""}}
                        tags={["Angolia", "Wordpress", "PHP"]}
                    />
                    <Project
                        title={"Integrating Algolia Search with WordPress Multisite"}
                        description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                        links={{"fab fa-github": "", "fas fa-external-link": ""}}
                        tags={["Angolia", "Wordpress", "PHP"]}
                    />
                    <Project
                        title={"Integrating Algolia Search with WordPress Multisite"}
                        description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                        links={{"fab fa-github": "", "fas fa-external-link": ""}}
                        tags={["Angolia", "Wordpress", "PHP"]}
                    /><Project
                    title={"Integrating Algolia Search with WordPress Multisite"}
                    description={"Building a custom multisite compatible WordPress plugin to build global search with Algolia"}
                    links={{"fab fa-github": "", "fas fa-external-link": ""}}
                    tags={["Angolia", "Wordpress", "PHP"]}
                />
                </div>
            </div>
        </>

    )
}
