<template>
    <div class="about-skills-container flex flex-column gap-24">
    <div v-for="skill in skills" class="about-skills">
            <div class="flex flex-column gap-4">
                <h2 class="title-light text-light">{{ skill.skill }}</h2>
                <p class="caption-light text-light-gray">{{ skill.skillJp }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
        name: 'Skills',
        data (){
            return {
                skills: [
                    {
                        skill: 'WEB DESIGN',
                        skillJp: 'WEB デザイン',
                    },
                    {
                        skill: 'UI/UX DESIGN',
                        skillJp: 'UI/UX デザイン',
                    },
                    {
                        skill: 'EXPERIENCE DESIGN',
                        skillJp: 'エクスペリエンスデザイン',
                    },
                    {
                        skill: 'BRAND DESIGN',
                        skillJp: 'ブランドデザイン',
                    },
                    {
                        skill: 'TECH-CENTER RESEARCH',
                        skillJp: 'テックリサーチ',
                    },
                    {
                        skill: 'FRONT-END DEVELOPMENT',
                        skillJp: 'フロントエンド開発.',
                    },
                    {     
                        skill: 'WEBGL',
                        skillJp: 'WEBGL',
                    },
                    {
                        skill: 'DESIGNOPS',
                        skillJp: 'デザインオプス',
                    },
                ]
            }
        }
    }

</script>