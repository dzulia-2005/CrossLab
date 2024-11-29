import { Routes,Route} from 'react-router-dom';
import DefaultLayout from './layouts/default/layoutdefault';
import Home from './pages/home/home';
import { SignUp } from './pages/signUp';
import {  SignIn } from './pages/logIn';
import Createquestion from './pages/createquestion/createquestion';

function App() {
  return (
   <Routes>
      <Route element={<DefaultLayout/>}>
          <Route
            path='/'
            element = {
             <SignUp/>
            }
          />
          <Route path="/signin" element={ <SignIn/>} />
          <Route path="/home" element={ <Home/>} />
          <Route path='/createquestion' element={<Createquestion/>}/>
      </Route>
      
   </Routes>
  );
}

export default App;
