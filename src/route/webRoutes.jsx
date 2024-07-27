import {Home} from "../page/Web/Home/Home.jsx";
import {Package} from "../page/Web/Package/Package.jsx"


const webRoutes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/package',
        element: <Package/>
    },
  
  
   
]

export default webRoutes;