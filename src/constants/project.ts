export interface ProjectInterface {
    name: string
    desc: string
    technologies: Array<string>,
    github: string,
    demo?: string
}

export const projectCH: Array<ProjectInterface> = [
    {
        name: 'Headless CMS Blog',
        desc: '响应式blog页面，包含特色文章、近期文章、类别，留言评论功能等',
        technologies: ['React', 'Next.js', 'Strapi', 'GraphQl', 'Styled Components'],
        github: '',
    },
    {
        name: '模拟TikTok',
        desc: '提供google第三方登录的短视频浏览和发布应用',
        technologies: ['React', 'Next.js', 'Sanity', 'Google OAuth', 'Zustand', 'Tailwindcss'],
        github: '',
    },
    {
        name: '个人网站',
        desc: '使用NextJS, Tailwindcss搭建个人静态网站，用vercel部署',
        technologies: ['NextJS', 'Tailwindcss', 'Vercel'],
        github: '',
    },

]

export const projectEN: Array<ProjectInterface> = [
    {
        name: 'Headless CMS Blog',
        desc: 'Responsive blog website with featured posts, categories. Using NextJS, Strapi, Graphql, Styled Components to build, and asw & vecel to deploy CMS & website separately',
        technologies: ['React', 'Next.js', 'Strapi', 'GraphQl', 'Styled Components'],
        github: '',
    },
    {
        name: 'Clone TikTok',
        desc: 'A responsive web app provides short-cut videos waching and publishing, using @react-oauth/google',
        technologies: ['React', 'Next.js', 'Sanity', 'Google OAuth', 'Zustand', 'Tailwindcss'],
        github: '',
    },
    {
        name: 'Portfolio (Not this one)',
        desc: 'Using NextJS, Tailwindcss, to build a static portfolio website',
        technologies: ['NextJS', 'Tailwindcss', 'Vercel'],
        github: ''
    },
]

const projectWithLang = {
    CH: projectCH,
    EN: projectEN
}

export default projectWithLang;