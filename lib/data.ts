import { Icons } from "@/components/ui/icons";
import { Contributions, Experience, NavLink, Project, Skill, SocialLink } from "@/types/types";

export const socialLinks: SocialLink[] = [
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/sahillamba0008/",
        icon: Icons.linkedin,
    },
    {
        name: "Twitter",
        link: "https://x.com/SahilLamba003",
        icon: (Icons.twitter),
    },
    {
        name: "GitHub",
        link: "https://github.com/SahilLamba0008",
        icon: Icons.github,
    }
] as const; // make it readonly

export const navLinks: NavLink[] = [
    {
        id: "home",
        name: "home",
        link: "/",
    },
    {
        id: "blogs",
        name: "blogs",
        link: "/blogs",
    },
    // {
    //     id: "projects",
    //     name: "projects",
    //     link: "/#projects",
    // },
    // {
    //     id: "skills",
    //     name: "skills",
    //     link: "/#skills",
    // },
    {
        id: "contributions",
        name: "contributions",
        link: "/contributions",
    },
] as const;

export const projects: Project[] = [
    {
        id: "appManager",
        name: "App Manager",
        description:
            "Developed a feature-rich Task Manager app using TypeScript, NextJS, Server Actions, MongoDB, and Tailwind. Implemented CRUD functionalities, RESTful APIs, Toastify notifications, Cloudinary for user images, Zod for form validation, and token-based authentication for enhanced security.",
        skills: [
            "NextJS-14",
            "TypeScript",
            "JSON Web Token",
            "App Router",
            "Server Actions",
            "NodeJS",
            "REST Api",
            "MongoDB",
            "Cloudinary",
            "Git",
        ],
        image: "/assets/app.png",
        coverImage: "/assets/appmanager.png",
        Link: "/project/appManager",
        RepoLink: "https://github.com/SahilLamba0008/App-Manager-fullstack",
        LiveLink: "https://app-manager-next.vercel.app/",
        VideoLink: "https://youtube.com/embed/zNP13G8UodE?rel=0",
        keyPoints: [
            "Created a Task Manager app with <span>CRUD operations</span> for streamlined task organization.",
            "Implemented <span>RESTful APIs</span> for seamless frontend-backend communication.",
            "Implemented <span>token-based authentication</span> and <span>Next.js middlewares</span> for a secure system.",
            "Enhanced UX with <span>Toastify notifications</span> and <span>Cloudinary</span> for user profile images.",
            "Ensured <span>password encryption</span> with bcrypt for secure storage of user information.",
        ],
        skillsSvg: [
            "/assets/svgs/next-js.svg",
            "/assets/svgs/typescript.svg",
            "/assets/svgs/nodejs.svg",
            "/assets/svgs/jwt.svg",
            "/assets/svgs/mongodb.svg",
            "/assets/svgs/tailwind.svg",
            "/assets/svgs/git.svg",
        ],
        even: false,
    },
    {
        id: "swiftmessenger",
        name: "Swift Messenger",
        description:
            "Built a messaging app using the MERN stack, offering one-on-one and group chats with real-time communication through Socket.io. We prioritize security with user authorization using JWT and secure user data storage using bcrypt encryption. The app also includes admin-controlled user management for group chats, allowing administrators to add and remove users with ease.",
        skills: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Socket.io",
            "Web Token",
            "Git",
        ],
        image: "/assets/swift.png",
        coverImage: "/assets/swiftMessenger.png",
        Link: "/project/swiftmessenger",
        RepoLink: "https://github.com/SahilLamba0008/Swift-Messenger",
        LiveLink: "",
        VideoLink: "https://youtube.com/embed/YDqwGb7GTys?rel=0",
        keyPoints: [
            "Developed a messaging app supporting <span>one-on-one</span> and <span>group conversations</span> using the MERN stack.",
            "Integrated <span>real-time communication</span> features powered by <span>Socket.io.</span>",
            "Implemented <span>secure user authorization</span> using JWT.",
            "Ensured <span>password encryption</span> with bcrypt for secure storage of user information.",
            "Enabled <span>administrators to add and remove users</span> from group chats.",
        ],
        skillsSvg: [
            "/assets/svgs/socket-io.svg",
            "/assets/svgs/react.svg",
            "/assets/svgs/javascript.svg",
            "/assets/svgs/nodejs.svg",
            "/assets/svgs/express.svg",
            "/assets/svgs/jwt.svg",
            "/assets/svgs/mongodb.svg",
            "/assets/svgs/postman.svg",
            "/assets/svgs/axios.svg",
            "/assets/svgs/chakra-ui.png",
            "/assets/svgs/git.svg",
        ],
        even: false,
    },
    {
        id: "fitnessMatch",
        name: "Fitness Match",
        description:
            "Created Fitness Match a full-stack application using ReactJS, NodeJS, ExpressJS, MongoDB, and RestAPI. Revolutionized fitness connections with a Tinder-inspired swiping approach for instant matches. Ensured security with JWT and bcrypt, while boosting interaction through integrated chat functionality.",
        skills: [
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "REST Api",
            "JWT",
            "Postman",
            "Git",
        ],
        image: "/assets/fitness.png",
        coverImage: "/assets/fitnessmatch.png",
        Link: "/project/fitnessMatch",
        RepoLink: "https://github.com/SahilLamba0008/Fitness_Match",
        LiveLink: "",
        VideoLink: "https://youtube.com/embed/L7eUWp-W8M0?rel=0",
        keyPoints: [
            "Developed Fitness Match using <span>ReactJS, NodeJS, ExpressJS, MongoDB,</span> and <span>RestAPI.</span>",
            "Introduced a Tinder-inspired <span>swiping mechanism</span> for instant matches and <span>recycled profiles.</span>",
            "Implemented <span>robust authentication</span> with JWT and ensured <span>password encryption</span> using bcrypt.",
            "Enhanced communication between fitness partners with integrated <span>chat functionality.</span>",
        ],
        skillsSvg: [
            "/assets/svgs/react.svg",
            "/assets/svgs/javascript.svg",
            "/assets/svgs/nodejs.svg",
            "/assets/svgs/express.svg",
            "/assets/svgs/jwt.svg",
            "/assets/svgs/mongodb.svg",
            "/assets/svgs/postman.svg",
            "/assets/svgs/axios.svg",
            "/assets/svgs/git.svg",
        ],
        even: false,
    },
    // {
    //     id: "digitalmart",
    //     name: "Digital Mart",
    //     description:
    //         "Designed an electronics-centered e-commerce website using ReactJs and Styled Components, ensuring a user-friendly and responsive interface for shopping digital products. The platform offers advanced features such as state management, product filtering, dynamic price sorting, and responsive UI. It also includes client-side form validation for a secure and smooth user experience and integrates Axios for seamless API data retrieval.",
    //     skills: [
    //         "ReactJS",
    //         "JavaScript",
    //         "Context API",
    //         "Axios",
    //         "Styled - Components(CSS)",
    //         "Git",
    //     ],
    //     image: "/assets/mart.png",
    //     coverImage: "/assets/digitMart.png",
    //     Link: "/project/digitalmart",
    //     RepoLink: "https://github.com/SahilLamba0008/Digital-Mart",
    //     LiveLink: "https://tranquil-raindrop-bfb648.netlify.app/",
    //     VideoLink: "https://youtube.com/embed/Xc9gvr9XpmQ?rel=0",
    //     keyPoints: [
    //         "Leveraged <span>useState</span> , <span>useReducer</span> and <span>Context API</span> for efficient state management and React Router DOM for seamless navigation.",
    //         "Implemented dynamic features like <span>product rating</span>, <span>product filtering</span> and <span>responsive design.</span>",
    //         "Intergrated <span>form validation</span> and fetched API data using <span>react-axios</span> library.",
    //     ],
    //     skillsSvg: [
    //         "/assets/svgs/react.svg",
    //         "/assets/svgs/javascript.svg",
    //         "/assets/svgs/styled-components.svg",
    //         "/assets/svgs/axios.svg",
    //         "/assets/svgs/git.svg",
    //     ],
    //     even: true,
    // },
    // {
    //     id: "dinehub",
    //     name: "Dine Hub",
    //     description:
    //         "Developed an engaging front-end food ordering application using React, JavaScript, and CSS. The app features dynamic components, including carousels, to enhance user engagement. For smooth navigation, React Router DOM was used to transition between various pages. Advanced filtering options and interactive user design were implemented for an enjoyable experience. CSS Grids, Flexbox, and StyledComponents were employed to craft an interactive platform for restaurant exploration and food ordering.",
    //     skills: [
    //         "ReactJS",
    //         "JSX",
    //         "JavaScript",
    //         "React Router",
    //         "CSS",
    //         "Carousels",
    //         "Conditional Classes",
    //         "Git",
    //     ],
    //     image: "/assets/dine.png",
    //     coverImage: "/assets/dinehub.png",
    //     Link: "/project/dinehub",
    //     RepoLink: "https://github.com/SahilLamba0008/Dine-Hub",
    //     LiveLink: "",
    //     VideoLink: "https://youtube.com/embed/uO8FKW78WSE?rel=0",
    //     keyPoints: [
    //         "Developed an interactive food ordering app featuring dynamic components like carousels for enhanced user engagement using <span>React</span> , <span>JavaScript</span> , and <span>CSS.</span>",
    //         "Integrated advanced <span>filtering features</span>, <span>interactive user design</span> and <span>state management</span> using React Hooks and JavaScript Event-Handling.",
    //         "Styled using CSS Grids , Flexbox , and StyledComponents , creating an interactive place for exploring restaurants and ordering food.",
    //     ],
    //     skillsSvg: [
    //         "/assets/svgs/react.svg",
    //         "/assets/svgs/javascript.svg",
    //         "/assets/svgs/css-3.svg",
    //         "/assets/svgs/react-router.png",
    //         "/assets/svgs/git.svg",
    //     ],
    //     even: false,
    // },
] as const;

export const skills: Skill[] = [
    {
        id: "javascript",
        name: "JavaScript",
        link: "",
        image: "/assets/skills/javascript.png",
    },
    {
        id: "typescript",
        name: "TypeScript",
        link: "",
        image: "/assets/skills/typescript.png",
    },
    {
        id: "cpp",
        name: "C++",
        link: "",
        image: "/assets/skills/cpp.png",
    },
    {
        id: "react",
        name: "React",
        link: "",
        image: "/assets/skills/react.png",
    },
    {
        id: "nextjs",
        name: "Nextjs",
        link: "",
        image: "/assets/skills/nextjs.png",
    },
    {
        id: "nodejs",
        name: "NodeJS",
        link: "",
        image: "/assets/skills/nodejs.png",
    },
    {
        id: "expressjs",
        name: "ExpressJS",
        link: "",
        image: "/assets/skills/expressjs.png",
    },
    {
        id: "mongodb",
        name: "MongoDB",
        link: "",
        image: "/assets/skills/mongo-db.png",
    },
    {
        id: "mysql",
        name: "MySql",
        link: "",
        image: "/assets/skills/mysql.png",
    },
    {
        id: "html",
        name: "HTML",
        link: "",
        image: "/assets/skills/html.png",
    },
    {
        id: "css",
        name: "CSS",
        link: "",
        image: "/assets/skills/css.png",
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        link: "",
        image: "/assets/skills/bootstrap.png",
    },
    {
        id: "tailwind",
        name: "Tailwind",
        link: "",
        image: "/assets/skills/tailwind.png",
    },
    {
        id: "figma",
        name: "Figma",
        link: "",
        image: "/assets/skills/figma.png",
    },
    {
        id: "vscode",
        name: "VsCode",
        link: "",
        image: "/assets/skills/vs-code.png",
    },
] as const;

export const experienceData: Experience[] = [
    {
        companyName: "Global Logic",
        companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-_VBuH1pCTI_Or2pnRPTiG_EcDherdGtvQ&s",
        positions: [
            "Trainee Software Engineer",
            "Associate Software Engineer",
            "Software Engineer",
        ],
        startDate: new Date(2024, 2, 4),
        endDate: "current",
        contributions: ["", "", ""],
        skills: [".Net", "React", "TypeScript", "MsSql"],
    },
    {
        companyName: "MPS Infotech",
        companyLogo:
            "https://media.licdn.com/dms/image/v2/C4D0BAQFBateOXwNs_g/company-logo_200_200/company-logo_200_200/0/1630556906732/mps_infotech_logo?e=1735776000&v=beta&t=2jj4zH9IBeFQOaKeexFWjNxesXMMlmhVaTbVkvqqxbs",
        positions: ["Full Stack Developer"],
        startDate: new Date(2024, 1, 1),
        endDate: new Date(2024, 2, 20),
        contributions: ["", "", ""],
        skills: ["Cypress", "NextJs", "TypeScript", "MongoDB"],
    },
] as const;

export const contributions: Contributions[] = [
    {
        prTitle: "Add support for theme 36 #46",
        repoLink: "https://github.com/metz-sh/simulacrum",
        prDescription: "Fix color scheme for improved visibility (#36): Added a new file theme-light.json for the light theme and defined it in Monaco editor as lightTheme. Created state management for theme changes and stored the selected theme in local storage. Added a dropdown to toggle between themes.",
        link: "https://github.com/metz-sh/simulacrum/pull/46"
    },
] as const;