
export interface JobInterface {
    year: string
    company: string
    jobTitle: string
    jobDescription: string
    produceImage: string
}

export type JobYear = JobInterface['year']

export const yearsEn: Array<JobYear> = [
    '07/2023 to date',
    '10/2022 - 06/2023',
    '06/2018 - 09/2022',
    '12/2014 - 05/2018',
    '07/2011 - 11/2014'
]

export const yearsCH: Array<JobYear> = [
    '07/2023 to date',
    '10/2022 - 06/2023',
    '06/2018 - 09/2022',
    '12/2014 - 05/2018',
    '07/2011 - 11/2014'
]

export const yearsWithLang = {
    CH: yearsCH,
    EN: yearsEn
}

const jobsEn: Array<JobInterface> = [
    {
        year: '07/2023 to date',
        company: 'Freelance',
        jobTitle: 'Software engineer',
        jobDescription: 'Building applications in my personal time. Full stack apps using a mix of the following tech: React, NextJS, Typescript, GraphQL, Styled Components & TailwindCSS, Strapi, AWS(EC2, RDS, S3), NodeJS, Git, VS Code',
        produceImage: '',
    },
    {
        year: '10/2022 - 06/2023',
        company: 'Duozhuayu',
        jobTitle: 'Frontend Developer',
        jobDescription: 'The toC user interface using react, typescript, styled components to build responsive UI with Storybook, using axios to fetch data and redux to manage the state; The in-house CMS system using react & typescript & ant-design & redux to manage the warehouse stock; Working with a dev team of 10 people, mutually review code and address pr feedbacks, split tasks and assign to team members regularly',
        produceImage: '',
    },
    {
        year: '06/2018 - 09/2022',
        company: 'UC Browser',
        jobTitle: 'Frontend Developer',
        jobDescription: 'Writing modern, performant, maintainable code for multiple content management systems; Using different languages, frameworks, and libraries such as JavaScript, TypeScript, React, Redux, Ant Design, Styled Components, Node.js; Communicating with multi - disciplinary teams of engineers, product managers on a regular basis; Providing effective troubleshooting and remediation for web applications',
        produceImage: '',
    },
    {
        year: '12/2014 - 05/2018',
        company: 'Toutiao',
        jobTitle: 'Content Operation Manager',
        jobDescription: 'Select breaking news and high-quality content, utilize advanced personalized recommendation technology to deliver to users, making our APP the most popular news app in China; Collaborate with product and development teams to create new consumer products and build internal operational tools; Responsible for discussing with UI & UX about then content display and user interaction of website content, using sketches and Lark, etc',
        produceImage: '',
    },
    {
        year: '07/2011 - 11/2014',
        company: 'NetEase',
        jobTitle: 'Content Operations',
        jobDescription: 'Writing and publishing news and anecdotes around the world on website, also dealing with comments and interact with viewers',
        produceImage: '',
    }
];

const jobsCH: Array<JobInterface> = [
    {
        year: '07/2023 to date',
        company: '自由职业',
        jobTitle: '软件开发',
        jobDescription: '在我的个人时间里，我正在构建应用程序。我使用了一系列技术来开发全栈应用，包括：React、NextJS、Typescript、GraphQL、Styled Components 和 TailwindCSS、Strapi、AWS（EC2、RDS、S3）、NodeJS、Git 和 VS Code',
        produceImage: '',
    },
    {
        year: '10/2022 - 06/2023',
        company: '多抓鱼',
        jobTitle: '前端开发',
        jobDescription: '使用React、Typescript和Styled Components构建响应式用户界面，使用Storybook进行UI开发，使用axios获取数据，使用Redux管理状态来构建ToC用户界面; 同时，使用React、Typescript、Ant Design和Redux来管理仓库库存的内部CMS系统; 与一个由10人组成的开发团队合作，定期相互审查代码并处理PR反馈，拆分任务并分配给团队成员',
        produceImage: '',
    },
    {
        year: '06/2018 - 09/2022',
        company: 'UC浏览器',
        jobTitle: '前端开发',
        jobDescription: '编写现代、高性能、易维护的代码，适用于多个内容管理系统; 使用不同的语言、框架和库，如JavaScript、TypeScript、React、Redux、Ant Design、Styled Components、Node.js; 与跨部门的工程师和产品经理团队进行定期沟通; 为Web应用程序提供有效的故障排除和修复',
        produceImage: '',
    },
    {
        year: '12/2014 - 05/2018',
        company: '头条',
        jobTitle: '内容运营经理',
        jobDescription: '选择突发新闻和高质量内容，利用先进的个性化推荐技术向用户提供，使我们的APP成为中国最受欢迎的新闻应用; 与产品和开发团队合作，创建新的消费产品并构建内部运营工具; 负责与UI和UX讨论网站内容的展示和用户互动，使用草图和Lark等工具',
        produceImage: '',
    },
    {
        year: '07/2011 - 11/2014',
        company: '网易',
        jobTitle: '内容运营',
        jobDescription: '在网站上撰写和发布世界各地的新闻和趣闻，同时处理评论并与观众互动',
        produceImage: '',
    }
]

const jobsWithLang = {
    EN: jobsEn,
    CH: jobsCH
}

export default jobsWithLang;