import { createBrowserRouter} from 'react-router-dom';
import Home from './pages/home';
function Routas(){
    return(
        createBrowserRouter([
            {
                path:"/",
                element: <Home/>
            }
        ])
    )
}
export default Routas;