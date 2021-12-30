import { Route, Routes } from 'react-router-dom'
import AllItems from '../pages/AllItemsPage/AllItemsPage'

function AppRoutes () {



    return(
        <Routes>
            <Route path="/" element={<AllItems />} />  {/* en el path estaba puesto /list ----> en el vídeo dice /listado */}
            
        </Routes>
    )
}

export default AppRoutes