import styled from "styled-components";

const Main = styled.main`
    font-family: Inter, sans-serif;
    max-width: 720px;
    width: 100%;
    //min-height: 180px;
    background-color: #FAFAF8;
    border-radius: 0 0 5px 5px;
	padding: 0 15px;
`

const Button = styled.button`
    font-family: Inter, sans-serif;
    border-radius: 6px;
    padding: 9px 17px;
    width: 183px;
    height: 38px;
    background: #141413;
    color: #fff;
    cursor: pointer;
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
	margin: 50px 0 30px;
`

export const S = {
	Main,
	Button,
	Input,
	FormBlock,
	
}