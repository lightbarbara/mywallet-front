import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import NewTransaction from "../pages/NewTransaction";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Transactions from "../pages/Transactions";
import GlobalStyle from "./GlobalStyle";

export default function App() {



    return (
        <UserContext.Provider value={{}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/new-transaction/:type' element={<NewTransaction />} />
                    {/* <Route path='/edit-transaction' element={<EditTransaction />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}