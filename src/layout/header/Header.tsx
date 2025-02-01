import styled from "styled-components";
import chef from '../../images/chef-claude-icon.png'

export const Header = () => {
	return (
		<StyledHeader>
			<HeaderWrapper>
				<li><HeaderImage src={chef} alt="Chef Head"/></li>
				<li><HeaderTitle>Chef Claud</HeaderTitle></li>
			</HeaderWrapper>
		</StyledHeader>
	);
};


const StyledHeader = styled.header`
    max-width: 720px;
    width: 100%;
    min-height: 110px;
    background-color: #eef3f3;
    border-radius: 5px 5px 0 0;
	z-index: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
	margin-top: 50px;
`

const HeaderWrapper = styled.ul`
	display: flex;
    justify-content: center;
    align-items: center;
	gap: 10px;
	height: 100%;
	list-style: none;
`
const HeaderImage = styled.img`
	width: 50px;
`

const HeaderTitle = styled.h1`
    font-weight: 400;
    font-size: 32px;
    line-height: 1.875;
    letter-spacing: -0.05em;
    color: #141413;
`