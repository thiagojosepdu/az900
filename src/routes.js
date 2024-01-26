import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Pergunta from './pages/Pergunta';

import Header from './components/Header';
import Dezperguntas from './pages/Dezperguntas';
import Quinzeperguntas from './pages/Quizeperguntas';
import Vinteperguntas from './pages/Vinteperguntas';
import Trintaperguntas from './pages/Trintaperguntas';
import Quarentaperguntas from './pages/Quarentaperguntas';
import Resultado from './pages/Dezperguntas/Resultado';
import QuinzeResultado from './pages/Quizeperguntas/QuinzeResultado';
import VinteResultado from './pages/Vinteperguntas/VinteResultado';
import TrintaResultado from './pages/Trintaperguntas/TrintaResultado';
import QuarentaResultado from './pages/Quarentaperguntas/QuarentaResultado';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
               <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/pergunta" element={ <Pergunta/> } />     
                <Route path="/dezperguntas" element={ <Dezperguntas/> } />   
                <Route path="/quinzeperguntas" element={ <Quinzeperguntas/> } />
                <Route path="/vinteperguntas" element={ <Vinteperguntas/> } />
                <Route path="/trintaperguntas" element={ <Trintaperguntas/> } />
                <Route path="/quarentaperguntas" element={ <Quarentaperguntas/> } />
                <Route path="/resultado" element={<Resultado />} />   
                <Route path="/quinzeresultado" element={<QuinzeResultado />} />  
                <Route path="/vinteresultado" element={<VinteResultado />} />  
                <Route path="/trintaresultado" element={<TrintaResultado />} /> 
                <Route path="/quarentaresultado" element={<QuarentaResultado />} />    
            </Routes>
        </BrowserRouter>
    )
}


export default RoutesApp;