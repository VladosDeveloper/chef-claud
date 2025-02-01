import './App.css'
import {FlexWrapper} from "./components/FlexWrapper.tsx";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import styled from "styled-components";
import {TestFile} from "./components/TestFile.tsx";

function App() {
	
	return (
		<StyledApp>
			
			<FlexWrapper direction="column"  alignItems={"center"} height={"100%"} >
				<Header/>
				<Main/>
				{/*<TestFile/>*/}
			</FlexWrapper>
		</StyledApp>
	)
}

const StyledApp = styled.div`
	height: 100vh;
`

export default App
