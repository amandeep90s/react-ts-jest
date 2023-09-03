import LoginComponent from './LoginComponent';
import LoginService from './services/LoginService';

function App() {
  const loginService = new LoginService();
  const setToken = (token: string) => {
    console.log(`received the token ${token}`);
  };

  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1 className='h3 text-center mb-5'>ReactJs testing with Jest</h1>
          <div className='d-flex justify-content-center align-items-center'>
            <LoginComponent loginService={loginService} setToken={setToken} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
