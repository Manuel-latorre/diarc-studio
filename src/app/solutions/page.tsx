"use client"

import { Solutions } from "@/components";
import SolutionsMobile from "@/components/solutions/SolutionsMobile";
import { useSectionRefs } from "../SectionsRefsContext";


export default function SolutionsPage(){
    const sectionRefs = useSectionRefs();
    return (
        <div id="solutions"
        ref={(el) => {
            sectionRefs.current['solutions'] = el;
          }}
        >
            <Solutions/>
            <SolutionsMobile/>
        </div>
    )
}