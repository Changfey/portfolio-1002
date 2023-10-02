import { FC } from "react";
import { useRouter } from "next/router";
import { HeroSection, ResumeButton, SelfIntro, Hi } from "./hero.styled";
import BackgroundAnimation from "./BackgroundAnimation";
import { useLangContext } from "context";
import resume from "Assets/resume.pdf";

const Hero: FC<{}> = () => {
	const router = useRouter();
	const { lang } = useLangContext();
	return (
		<HeroSection>
			<BackgroundAnimation />
			{lang === "EN" ? (
				<>
					<h1>{`Hey, I'm`}</h1>
					<h2>{`Fei Zhang`}</h2>
					<SelfIntro>
						{`I'm a software developer specializing in building CMS and e-commerce websites, currently I'm looking for new opportunities, please feel free to contact me`}{` -> `}
						<Hi href="mailto:zhangfei.rocinante@gmail.com">zhangfei.rocinante@gmail.com.</Hi>
					</SelfIntro>
					<a href={resume}>
						<ResumeButton>Check out my resume</ResumeButton>
					</a>
				</>
			) : (
				<>
					<h1>{`Hi, my name is`}</h1>
					<h2>{`张飞`}</h2>
					<SelfIntro lineHeight="1.6">
						{`我是一名软件工程师，擅长搭建CMS和电商网站，最近正在寻找新的机会，欢迎随时联系我`}{` `}
						<Hi href="mailto:zhangfei.rocinante@gmail.com">zhangfei.rocinante@gmail.com.</Hi>
					</SelfIntro>
					<a href={resume}>
						<ResumeButton>查看我的简历</ResumeButton>
					</a>
				</>
			)}
		</HeroSection>
	);
};

export default Hero;
