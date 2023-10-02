import { FC } from "react";
import Image from "next/image";
import {
	AboutSection,
	IntroWrapper,
	StyledAboutIntro,
	ImageWrapper,
} from "./about.styled";
import { images as myImages } from "Constants";
import { useLangContext } from "context";

const propcessInnerChildren = (arr: Array<any>) => {
	return arr.map((item: any) => {
		if (item.marks[0] === "underline") {
			return <span key={item.text}>{item.text}</span>;
		} else {
			return item.text;
		}
	});
};

const About: FC<{}> = () => {
	// const [contents, setContents] = useState<Array<[]>>([]);
	// const [selfie, setSelfie] = useState<any>({});

	// useEffect(() => {
	// 	const query = '*[_type == "about"]';
	// 	client.fetch(query).then((data) => {
	// 		const [item] = data;
	// 		if (item) {
	// 			setContents(item.content);
	// 			setSelfie(item.selfie);
	// 		}
	// 	});
	// }, []);

	const { lang } = useLangContext();
	return (
		<AboutSection id="about">
			<h2>{lang === 'EN' ? 'About Me' : '关于我'}</h2>
			<IntroWrapper>
				<StyledAboutIntro>
					{/* {contents.map((content: any, index: number) => {
						const { children } = content;

						if (children.length === 1) {
							return <p key={index}>{children[0].text}</p>;
						} else {
							return <p key={index}>{propcessInnerChildren(children)}</p>;
						}
					})} */}
					{
						lang === 'EN' ? <>
							<p>When I was a senior CMS manager 6 years ago, I made this career
								transition to become a software developer. I love getting hands-on
								with Tech, and I have found that working as a software developer, I
								get more exposure and hands-on with technology than any other role I
								have experienced. I don't personally see the previous time as wasted
								though as it gave me an invaluable insight into CMS industry.</p>
							<p>To this day, I've had<span> more than 5 years' experience</span> as a frontend developer building <span>to B and to C projects</span> both on <span>desktop and mobile</span> for a variety of users. The main focus on my recent involvement was using NextJS, Typescript, Strapi, Graphql, AWS to build and deploy a blog website.</p>

						</> : <>
							<p style={{ lineHeight: 1.6 }}>
								6年前，当我还是一名高级内容管理系统（CMS）经理时，我做出了职业转型的决定，成为一名软件开发人员。我喜欢亲自动手进行技术工作，而我发现作为一名软件开发人员，我比我之前从事的任何其他职位都更多地接触和实践技术。尽管如此，我个人并不认为之前的时间是浪费的，因为它为我提供了宝贵的CMS行业洞察。</p>
						</>
					}

				</StyledAboutIntro>
				<ImageWrapper>
					<Image
						src={myImages.selfie}
						alt="Picture of the author"
						layout="intrinsic"
					/>
				</ImageWrapper>
			</IntroWrapper>
			{/* {abouts.map((about, index) => (
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
            >
                <img src={urlFor(about.selfie) as any as string} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="p-text" style={{ marginTop: 10 }}>{about.introduction}</p>
            </motion.div>
        ))} */}
		</AboutSection>
	);
};

export default About;
