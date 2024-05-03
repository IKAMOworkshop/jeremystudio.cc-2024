<template>
    <div>
        <ScrollProgress />
        <div id="nebula-experience" class="nebula-experience"></div>

        <TopTitle project-title="<NEBULA"/>
        <HeroVideo video-source="/project-video/angine/header-video.mp4" />

        <ProjectData 
            title-color="#78FF75"
            project-type="COMPLEX SYSTEM"
            project-description="ORCHESTRATING A VIRTUAL AUDIO MIXER FOR A COMPLEX AUDIO SYSTEM ON DESKTOP PC."

            project-timing="SUMMER 2021"
            member-one="JEREMY CHANG"

            tech-one="FIGMA"
            tech-two="ILLUSTRATOR"
            tech-three="AFTER EFFECTS"

            skill-one="PRODUCT DESIGN"
            skill-two="UIUX DESIGN"
            skill-three="DESIGN SYSTEM"
            skill-four="BRAND DESIGN"
            skill-five="MARKET RESEARCH"
        />

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="1"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="ANGINE SEEKS TO OPTIMIZE AUDIO SETTINGS FOR A HOME STUDIO."
            />
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/angine/header.png" alt="A hero shot of the final Angine software on a monitor" class="project-image">
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="SOLVING THE PROBLEM ON A SYSTEMATIC LEVEL."
                description="AFTER SEVERAL TESTS AND YEARS OF DEALING WITH TERRIBLE AUDIO SYSTEMS, I IDENTIFIED SOME GLARING FLAWS. WHILE THE SHORTCOMINGS MAY NOT AFFECT ORDINARY USERS, THEY ARE DETRIMENTAL TO POWER USERS LIKE ME. ON A TRADITIONAL AUDIOSYSTEM FOR MOST PC, USERS ONLY GET ONE INPUT AND OUTPUT OPTION, WHICH CAUSES MANY CONFLICTS WITH DEVICE COMPATIBILITY, MISSING DEVICES, AND LITTLE TO NO CUSTOMIZATION."
            />
        </div>

        <div class="section-container">
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/current_system.png" alt="A diagram showing the current system and the limitation" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BREAKING UP THE SYSTEM INTO INDIVIDUAL TRACKS."
                description="TO CREATE A MORE SEAMLESS SYSTEM, I TOOK INSPIRATION FROM PHYSICAL MIXERS AND DAW (DIGITAL AUDIO WORKSTATION) TO TACKLE THE LIMITATIONS. AS DAW OFFER TRACKS FOR PRODUCERS TO MIX DIFFERENT INSTRUMENTS, ANGINE MIRRORED THIS INTERACTION TO MAKE SOMETHING SIMILAR THAT CAN ROUTE DEVICES AND SOURCES."
            />
        </div>

        <div class="section-container">
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/angine_system.png" alt="A diagram showing the improved system on Angine to free up the flexibility to customize" class="contained-image">
            </ImageContainer>
        </div>
        
        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="2"
            />

            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="WITH THIS SYSTEM IMPLEMENTED, USERS CAN ROUTE AUDIO SOURCES TO INDIVIDUAL OUTPUT DEVICES AND PROGRAM THE INPUT DEVICES TO WORK ON SPECIFIC APPLICATIONS. FURTHERMORE, USERS CAN CONTROL THE SETTINGS FOR EACH DEVICE, SUCH AS VOLUME, MUTING, PANNING, ETC."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/angine/usage.mp4"/>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="CUSTOMIZED TO THE USER’S PREFERENCES."
                description="ANGINE OFFERS ORGANIZATIONAL TOOLS FOR USERS TO CUSTOMIZE THEIR SYSTEMS TO SUIT THEIR PREFERENCES AND NEEDS. LIKE MANY DAWS, USERS CAN FREELY RENAME, REORDER, AND COLOR CODE THE TRACKS. USERS CAN DRAG ROUTING LINES WITH INDIVIDUAL TRACKS TO LINK AUDIO DEVICES WITH APPLICATIONS, PROVIDING USERS FREE RANGE TO ADJUST AND MAKE CHANGES."
            />
        </div>

        <div class="section-container content-hidden">
            <ProjectVideo video-source="/project-video/angine/organization.mp4"/>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="3"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="DOCUMENTING AN EXTENSIVE DESIGN SYSTEM."
                description="TO MAINTAIN A COMPLEX SYSTEM, BUILDING A DESIGN SYSTEM CAN ENSURE THAT CURRENT AND FUTURE DESIGNS STAY CONSISTENT. IT CHELPS AVOID PROBLEMS EARLY AND SETS A STANDARD FOR THE SYSTEM."
            />
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/angine/design-system.png" alt="A collage of the Angine's UI component" class="project-image">
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="FOR ANGINE, IT WAS ESPECIALLY TRICKY AS IT ALLOWED THE USERS TO CUSTOMIZE COLORS FREELY. THIS LED TO KEEPING THE PRIMARY COLORS FOR THE INTERFACE IN GRAYSCALE WHILE SETTING A DYNAMIC COLOR RULE FOR TYPOGRAPHY TO ENSURE ACCESSIBILITY."
            />
        </div>

        <div class="section-container flex gap-36">
            <div class="flex flex-column gap-36">
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-color.png" alt="The Angine design system rules and usage for colors" class="contained-image">
                </ImageContainer>
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-grid.png" alt="The Angine design system rules and usage for grids" class="contained-image">
                </ImageContainer>
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-responsive.png" alt="The Angine design system rules and usage for responsive design" class="contained-image">
                </ImageContainer>
            </div>
            <div class="flex flex-column gap-36">
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-typography.png" alt="The Angine design system rules and usage for typography and type colors" class="contained-image">
                </ImageContainer>
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-icon.png" alt="The Angine design system rules and usage for iconography" class="contained-image">
                </ImageContainer>
                <ImageContainer class="content-hidden">
                    <img src="@/assets/angine/design-system/ds-states.png" alt="The Angine design system rules and usage for different component states" class="contained-image">
                </ImageContainer>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="false"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="DEVELOPING A BRAND FOR AN AUDIO POWER TOOL THAT EMPOWERS THE USERS."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/angine/brand.png" alt="A image showing the final brand logo and color for Angine" class="project-image content-hidden">
            <iframe class="content-hidden" src="https://www.youtube.com/embed/A7a9F97iU0o?si=yhedpYOnY0LDugGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="4"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="FRAMING AN EXTENSIVE RESEARCH PLAN FOR USER DATA AND COMPETITORS."
                description="THE FRAMING OF ANGINE’S RESEARCH DEIFFERED FROM A TRADITIONAL PROCESS AS I TRIED TO IDENTIFY THE SOLUTIONS PEOPLE HAVE USED AND THE REASONING BEHIND THEIR DECISIONS. BY DOING SO, I COULD CONSTRUCT THE LANDSCAPE OF THE DIFFERENT COMPETITORS WHILE COLLECTING USER INSIGHTS."
            />
        </div>

        <div class="section-container flex flex-column align-end gap-100">
            <QuotesBlock
                class="content-hidden"
                quote="SOMETIMES I PLUG MY HEADSET AND IT BOOST THE VOLUME FOR NO REASON, WHICH CAUSES A LOT OF SETTING UP."
                small-text="<VOICEMEETER  />"
                number-color="#78FF75"
            />
            <QuotesBlock
                class="content-hidden"
                quote="WHEN MULTIPLE DEVICES GETS CONNECTED, MY COMPUTER BECOMES CONFUSED OF WHICH DEVICE TO USE."
                small-text="<GOXLR  />"
                number-color="#78FF75"
            />
            <QuotesBlock
                class="content-hidden"
                quote="SOME SOFTWARE HAS ITS OWN AUDIO PROCESSCOR, SO IF I’M NOT AWARE, I’M PRETTY SCREWED WITH MY BUDGET MIC."
                small-text="<WINDOWS AUDIO DRIVER  />"
                number-color="#78FF75"
            />
        </div>

        <div class="section-container">
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/uers-choice.png" alt="A collage of logos for different audio mixer platforms the currently exist. Essentially, the competitors" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="IT WAS A VERY EFFECTIVE METHODOLOGY COMBINING EXPERT AND USER INTERVIEWS INTO ONE CONVERSATION. ON THE ONE HAND, I CAN COLLECT USER DATA TO IDENTIFY OPPORTUNITIES. ON THE OTHER HAND, I CAN SAVE SIGNIFICANT EFFORT AND TIME EXPLORING THE DIFFERENT RESOLUTIONS FROM THE INTERVIEWED USERS."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/competitors.png" alt="A screenshot collage of the different competitor's interface, which includes Voicemeeter, Windows default, Focusrite, and OBS" class="contained-image">
            </ImageContainer>
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/opportunity-map.png" alt="A diagram mapping the opportunity for Angine's need" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="5"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="INTERATIVE TESTING FOR DISCOVERABILITY AND USABILITY."
                description="AS ANGINE CONTAINS MANY MOVING COMPONENTS, IT IS CRUCIAL TO ENSURE THAT I INTRODUCE THE CORRECT HIERARCHY. I DESIGNED VARIABTIONS OF SINGLE COMPONENTS TO TEST WITH VARIOUS USERS TO SEE IF THEY COULD DISCOVER AND UNDERSTAND THE FEATURES BY COMPLETING MULTIOPLE TASKS. ONCE COMPLETED, I ASKED THEM TO COMPLETE THE TASKS AGAIN VERBALLY TO DESCRIBE WHAT THEY BELIEVED AS THE MOST OPTIMAL."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/effect-test.png" alt="A image showing the different iterations and result of user testing for the effects toggle" class="contained-image">
            </ImageContainer>
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/color-test.png" alt="A image showing the different iterations and result of user testing for the color usage on the interface" class="contained-image">
            </ImageContainer>
            <ImageContainer class="content-hidden">
                <img src="@/assets/angine/manage-test.png" alt="A image showing the different iterations and result of user testing for the button arrangement of the organization feature for tracks" class="contained-image">
            </ImageContainer>
        </div>

        <div class="section-container flex justify-between content-hidden">
            <TableContent 
                content-one="SYSTEM DESIGN"
                content-two="THE EXPERIENCE"
                content-three="DESIGN SYSTEM"
                content-four="RESEARCH"
                content-five="PROTOTYPE & TEST"
                content-six="MARKET RESEARCH"

                :active-content="6"
            />

            <TextBlock
                :open-tag-show="true"
                :title-show="true"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                title="BUILDING A THOUGHTFUL MARKET PLAN."
                description="A PRODUCT CAN BE AS GOOD AS IT GETS, BUT IT WILL ONLY BE SUCCESSFUL ONCE SOMEONE IN THIS WORLD NEEDS IT. WITH THIS IN MIND, I CONDUCTED MARKET RESEARCH ALONGSIDE MY USER RESEARCH TO ENSURE MARKET FEASIBILITY AND CREATE MARKET SEGMENTS TO BETTER TARGET SPECIFIC USER."
            />
        </div>

        <div class="section-container flex flex-column gap-36">
            <img src="@/assets/angine/market-size.png" alt="A diagram showing the potential market size of Angine driven by market research" class="project-image content-hidden">
            <img src="@/assets/angine/market-segment.png" alt="A diagram showing the different targeted market segments, which include streamers, content creators, and music producers" class="project-image content-hidden">
            <div class="flex gap-36 content-hidden">
                <div>
                    <img src="@/assets/angine/partnership.png" alt="A image demonstrating the partnership with streamers and content creator strategy for marketing" class="project-image">
                </div>
                <div>
                    <img src="@/assets/angine/community.png" alt="A image that showcase the building of a community strategy for marketing" class="project-image">
                </div>
            </div>
        </div>

        <div class="section-container flex justify-end content-hidden">
            <TextBlock
                :open-tag-show="false"
                :title-show="false"
                :description-show="true"
                :caption-show="false"

                open-tag="<"
                closing-tag="/>"

                description="ONCE THE BUSINESS FOUNDATION AS FORMED AND VALIDATED, I FORMULATED A BUSINESS PLAN AND IDNTIFIED CHANNELS AND MARKET STRATEGIES FOR ANGINE."
            />
        </div>

        <div class="section-container content-hidden">
            <img src="@/assets/angine/marketing.png" alt="The marketing header image for Angine" class="project-image">
        </div>

        <!-- Next Project -->
        <div class="section-container flex flex-column gap-24 content-hidden">
            <SmallTitle 
                highlight-text="NEXT"
                secondary-text="PROJECT"
            />
            <NextProject 
                background-image="/project-thumbnail/stray.png"
                next-project-title="STRAY"
                next-project-link="/STRAY"
                button-text="NEXT PROJECT"
            />
        </div>

        <ProjectFooter class="footer-hidden" />
    </div>
</template>

<script setup>
import TopTitle from '@/components/projects/TopTitle.vue'
import HeroVideo from '@/components/projects/HeroVideo.vue'
import ProjectData from '@/components/projects/ProjectData.vue'
import TextBlock from '@/components/projects/TextBlock.vue'
import QuotesBlock from '@/components/projects/QuotesBlock.vue'
import TableContent from '@/components/projects/TableContent.vue'
import ProjectVideo from '@/components/projects/ProjectVideo.vue'
import ImageContainer from '../components/projects/ImageContainer.vue'
import SmallTitle from '../components/projects/SmallTitle.vue'
import NextProject from '../components/projects/NextProject.vue'

import ScrollProgress from '../components/ScrollProgress.vue'
import ProjectFooter from '@/components/ProjectFooter.vue'

import { onMounted, onUnmounted } from 'vue'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    smooth: true,
});

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('content-reveal')
        }
        // } else {
		// 	entry.target.classList.remove('content-reveal');
		// }
    })
    },
    {
        threshold: .2,
    })

    const hiddenElement = document.querySelectorAll(".content-hidden")
    hiddenElement.forEach((el) => observer.observe(el))

    const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footer-reveal')
        }
        else {
			entry.target.classList.remove('footer-reveal');
		}
    })
    },
    {
        threshold: .1,
    })

    const hiddenFooter = document.querySelectorAll(".footer-hidden")
    hiddenFooter.forEach((el) => footerObserver.observe(el))
})

onUnmounted(() => {
    function destroy(){
        lenis.destroy()
    }
    
    destroy()
})

</script>