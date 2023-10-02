import { FC } from "react";
import {
	Footer as StyledFooter, Copyright,
	StyledHiOutlineMail
} from "./footer.styled";

const Footer: FC<{}> = () => {
	return (
		<StyledFooter>
			<Copyright>Built by Fei Zhang @2023</Copyright>
			<div>
				<a href="mailto:zhangfei.rocinante@gmail.com"><StyledHiOutlineMail /></a>
			</div>
		</StyledFooter>
	);
};

export default Footer;
