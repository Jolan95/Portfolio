import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Work from './work';
import Cv from './cv';


function App() {


 
  return (
 
	<div>
		<HashRouter>
        <Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/cv' element={<Cv/>} />
			<Route path='/work' element={<Work/>} />
        </Routes>
      </HashRouter>
	</div>
  );
}

export default App;
