import './App.css';
// import { ReactDOM } from 'react';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
         path: '/',
         element: <MainContainer/>
      },
      {
        path: '/watch',
        element :<WatchPage/>
      }
    ]
  }
])

const App = () => {
  
  return (
    <>
      <Provider store={store}>
        
        <Head />
        <RouterProvider router={appRouter} />
    
      </Provider>
    </>
  )
}






export default App;
