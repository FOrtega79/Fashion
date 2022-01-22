 import { Route, Routes } from 'react-router-dom'
import AdminDashboardPage from '../pages/AdminDashboardPage/AdminDashboardPage'
import AllItems from '../pages/AllItemsPage/AllItemsPage'
import IndexPage from '../pages/IndexPage/IndexPage'
import ItemDetailsPage from '../pages/ItemDetailsPage/ItemDetailsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewUserSignUpPage from '../pages/SignupPage/SignupPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import PrivateRoute from './PrivateRoutes'





function AppRoutes () {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/list" element={<AllItems />} /> 
            <Route path="/details/:itemId" element={<ItemDetailsPage />} />
            
            <Route path="/admin/dashboard" element={<AdminDashboardPage/>} />
            
            <Route path="/signup" element={<NewUserSignUpPage />} />
            
            <Route path="/login" element={<LoginPage />} />
            
            
            <Route path= "/user/profile" element={<PrivateRoute />}>
                <Route path="" element={<UserProfilePage />} />
            </Route>
            <Route path="*" element={<h1>404... item not found</h1>} />
            
        </Routes>
    )
}

export default AppRoutes