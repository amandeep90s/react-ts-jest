import { SyntheticEvent, useState } from 'react';
import LoginService from './services/LoginService';

type LoginProps = {
  loginService: LoginService;
  setToken: (token: string) => void;
};

const LoginComponent = ({ loginService, setToken }: LoginProps) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResult, setLoginResult] = useState<string>('');

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (userName && password) {
      const loginResponse = await loginService.login(userName, password);
      if (loginResponse) {
        setLoginResult('Login successful');
        setToken(loginResponse);
      } else {
        setLoginResult('Invalid credentials');
      }
    } else {
      setLoginResult('UserName and password are required');
    }
  };

  function renderLoginResult() {
    if (loginResult) {
      return (
        <label htmlFor='resultLabel' data-testid='resultLabel'>
          {loginResult}
        </label>
      );
    }
  }

  return (
    <div className='card col-lg-4 col-md-6 col-xs-12' role='main'>
      <div className='card-header'>
        <h2 className='h4'>Login form</h2>
      </div>
      <div className='card-body'>
        <form method='POST' onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='userName'>Username *</label>
            <input
              type='text'
              data-testid='input'
              id='userName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password *</label>
            <input
              type='password'
              data-testid='input'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <input
              type='submit'
              value='Login'
              data-testid='input'
              className='btn btn-primary'
            />
          </div>
          {renderLoginResult()}
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
