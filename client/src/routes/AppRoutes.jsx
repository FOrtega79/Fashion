import { Route, Routes } from 'react-router-dom'
import AllItems from '../pages/AllItemsPage/AllItemsPage'
import IndexPage from '../pages/IndexPage/IndexPage'
import ItemDetailsPage from '../pages/ItemDetailsPage/ItemDetailsPage'

function AppRoutes () {



    return(
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/list" element={<AllItems />} /> 
            <Route path="/details/:itemId" element={<ItemDetailsPage />} />
            <Route path="*" element={<h1>404... item not found</h1>} />
            
        </Routes>
    )
}

export default AppRoutes