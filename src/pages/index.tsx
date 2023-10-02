import type { NextPage } from "next";
import Head from "next/head";
import {
	Header,
	Hero,
	Skills,
	Projects,
	WorkExperience,
	About, Footer
} from "Components";

const Home: NextPage = () => (
	<>
		<Head>
			<title>Fei Zhang</title>
			<meta name="description" content="Fei Zhang's Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<main id="content">
			<Hero />
			<About />
			<WorkExperience />
			<Skills />
			<Projects />
			{/* <Contact /> */}
			{/* <LeftSocialBar />
			<RightEmailBar /> */}
		</main>
		<Footer />
	</>
);

export default Home;
