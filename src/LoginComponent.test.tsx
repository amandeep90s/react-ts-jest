import { render, screen } from '@testing-library/react';
import LoginComponent from './LoginComponent';

describe('LoginComponent test suite', () => {
  const loginServiceMock = {
    login: jest.fn(),
  };

  const setTokenMock = jest.fn();

  it('should render the login component correctly', () => {
    const container = render(
      <LoginComponent loginService={loginServiceMock} setToken={setTokenMock} />
    ).container;

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
