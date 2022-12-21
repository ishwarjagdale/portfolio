export default function FeaturedProject({image, title, description, tags, links, orientation=1}) {
    return (
        <div className={"flex items-center w-full relative h-[400px] mb-[100px]"}>
            <img src={image} className={`absolute ${orientation ? "left-0" : "right-0"} max-w-[60%] drop-shadow`} alt={"Hal"}/>
            <div className={`flex flex-col z-10 items-${orientation ? "end" : "start"} w-full`}>
                <span className={"font-monospace cursor-default accent mb-2"}>Featured Project</span>
                <span className={"cursor-pointer slate hover-accent text-2xl font-[Poppins] font-[600]"}>{title}</span>
                <p className={`cursor-default div-back rounded p-6 max-w-[500px] dark-slate text-md text-${orientation ? "right" : "left"} my-4 drop-shadow-xl`}>
                    {description}
                </p>
                <ul className={"flex cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace"}>
                    {
                        tags.map((t, i) => {
                            return <li key={i} className={orientation  ? 'ml-5' : `mr-5`}>{t}</li>
                        })
                    }
                </ul>
                <div className={"flex items-center text-lg mt-4 dark-slate"}>
                    {
                        Object.keys(links).map((l, i) => {
                            // eslint-disable-next-line jsx-a11y/anchor-has-content
                            return <a key={i} href={links[l]} className={`hover-accent ${l} ${i === Object.keys(links).length - (orientation ? 1 : Object.keys(links).length) ? "" : "mx-6"}`}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
