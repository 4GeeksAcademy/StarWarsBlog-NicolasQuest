import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management

const Main = () => {
    return (
        <React.StrictMode>  
            {/* Provide global state to all components */}
            <StoreProvider> 
                {/* Set up routing for the application */}
                <div className='row'>
                    <div className="col-1 bg"></div>
                    <div className="col-10 bg-main px-4">
                    <RouterProvider router={router}>
                    </RouterProvider>
                    </div>
                    <div className="col-1 bg"></div>
                </div> 
               
            
            </StoreProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
