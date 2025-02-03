import styled, {css} from "styled-components";

type ButtonProps = {
	isItRed?: boolean
}

const Main = styled.main`
    font-family: Inter, sans-serif;
    max-width: 720px;
    width: 100%;
    //min-height: 180px;
    background-color: #FAFAF8;
    border-radius: 0 0 5px 5px;
	padding: 0 15px;
`

export const Button = styled.button<ButtonProps>`
    font-family: Inter, sans-serif;
    border-radius: 6px;
    padding: 9px 17px;
    width: 183px;
    height: 38px;
    background-color: #141413;
    color: #fff;
    cursor: pointer;

	${props => props.isItRed && css<ButtonProps>`
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        background-color: #d17557;

        max-width: 150px;
        padding: 5px 2px 10px;
	`}
`

const Input = styled.input`
    font-family: Inter, sans-serif;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 9px 13px;
	min-width: 150px;
    height: 38px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	flex-grow: 1;
	
`

const FormBlock = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
	gap: 15px;
	margin: 60px 0 40px;
`

export const S = {
	Main,
	Button,
	Input,
	FormBlock,
	
}