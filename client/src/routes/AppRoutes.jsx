import { Route, Routes } from 'react-router-dom'
import AllItems from '../pages/AllItemsPage/AllItemsPage'
import IndexPage from '../pages/IndexPage/IndexPage'

function AppRoutes () {



    return(
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/list" element={<AllItems />} /> 
            
        </Routes>
    )
}

export default AppRoutes