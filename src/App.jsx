import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './app/Login';
import Success from './app/Success';
import Forgot from './app/Forgot';
import Reset from './app/Reset';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/success' element={<Success />} />
				<Route path='/forgot' element={<Forgot />} />
				<Route path='/reset' element={<Reset />} />
			</Routes>
		</Router>
	);
}

export default App;
