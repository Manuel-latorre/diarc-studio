"use client"

import { Projects } from "@/components";
import { useSectionRefs } from "../SectionsRefsContext";

export default function Portfolio(){
    const sectionRefs = useSectionRefs();

    return(
        <div id="portfolio" className="w-full" 
        ref={(el) => {
            sectionRefs.current['portfolio'] = el;
          }}
        >
            <Projects/>
        </div>
    )
}