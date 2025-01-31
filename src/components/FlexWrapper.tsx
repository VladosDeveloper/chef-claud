import styled from "styled-components";

type FlexWrapperProps = {
	direction?: string
	alignItems?: string
	justifyContent?: string
	gap?: string
	wrap?: string
	height?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    align-items: ${props => props.alignItems || undefined};
    justify-content: ${props => props.justifyContent || undefined};
    gap: ${props => props.gap || undefined};
    flex-wrap: ${props => props.wrap || undefined};
    height: ${props => props.height || "100%"};
`
