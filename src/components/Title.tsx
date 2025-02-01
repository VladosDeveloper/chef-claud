import styled from "styled-components";

type TitleProps = {
	title: string
}

export const Title = ({title}: TitleProps) => {
	return (
		<StyledTitle>
			{title}
		</StyledTitle>
	);
};


const StyledTitle = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 1.26667;
    color: #141413;
    margin-bottom: 24px;
`