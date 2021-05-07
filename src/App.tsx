import React, {  useState } from 'react';
import Item from './components/item';
import styled from 'styled-components';
import Home from './components/home';
import NotFound from './components/notfound';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
//import BookManager from './components/book';
//import AdminPage from './components/admin';
import { ThemeContext,themes } from './theme-context';
import Connexion from './components/connexion';
import Profil from "./components/profil";

function App() {
  const [isLight,setLight] = useState(true);
  const theme = isLight ? themes.light : themes.dark;
  
  return (
    <React.Fragment>
      <ThemeContext.Provider value={{theme,isLight,toggleTheme: () => setLight(!isLight)}}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/connexion" component={Connexion}/>
          <Route exact path="/profil" component={Profil}/> 
          <Route component={NotFound}/>
        </Switch>
      </Router>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
