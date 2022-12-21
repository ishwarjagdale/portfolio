export default function Home() {
    return (
        <div className={"flex flex-col h-full mb-24 justify-center max-w-[1000px] w-full"}>
            <span className={"accent text-[14px] font-monospace mb-4"}>Hi, my name is</span>
            <h1 className={"text-7xl font-[600] slate mb-2"}>Ishwar J.</h1>
            <h2 className={"text-7xl font-[600] opacity-60 slate tracking-tight"}>I build open-source apps.</h2>
            <p className={"py-8 slate text-md leading-7 opacity-60 max-w-[600px]"}>
                I’m a computer science student specializing in full-stack development and building software with exceptional digital experiences.
                Currently, I’m focused on building skills, projects and gaining experience.
            </p>
            <a href={"/work"} className={"accent hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace w-fit p-4 px-6 mt-4"}>
                Check out my work!
            </a>
        </div>
    )
}
