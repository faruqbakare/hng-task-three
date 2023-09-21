import logo from './logo.svg';
import './App.css';
import Previews from './preview/preview';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LoginButton';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="App">
      {isAuthenticated && (
        <div>
          <LogoutButton/>
          <Previews/>
          
          
        </div>
        

      )}
      {!isAuthenticated && (
        <div>
          <LoginButton/>
          
          
        </div>
        
        

    )}

    
      
      
      
      
    </div>
  );
}

export default App;
