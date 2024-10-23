import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

function App() {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route index path="signin" element={<SignIn />} />
			</Route>
		</Routes>
	)
}

export default App;
