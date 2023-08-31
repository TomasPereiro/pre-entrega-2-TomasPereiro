import React from 'react';
import NavBar from '../components/navBar/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/itemDetailContainer';
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}
