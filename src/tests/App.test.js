// Import React
import React from 'react';

// Imports RTL
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Imports Files
import routerRender from '../routerRender';
import App from '../App';

describe('Testando o componente <App.js />', () => {
  //   Testing navigation bar
  it('Teste se o primeiro link possui o texto "Home"', () => {
    const { history } = routerRender(<App />);

    const home = screen.getByRole('link', { name: /home/i });

    userEvent.click(home);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Teste se o segundo link possui o texto "About"', () => {
    const { history } = routerRender(<App />);

    const about = screen.getByRole('link', { name: /about/i });

    userEvent.click(about);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Teste se o terceiro link possui o texto "Favorite Pokémons"', () => {
    const { history } = routerRender(<App />);

    const favorite = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(favorite);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  // Testing redirection links
  it('Teste se é redirecionado para a página inicial, na URL / ao clicar em "Home"',
    () => {
      const { history } = routerRender(<App />);

      history.push('/');

      const titleNotFound = screen.getByRole('heading', { level: 2 });
      expect(titleNotFound).toBeInTheDocument();
      expect(titleNotFound).toHaveTextContent(/Encountered pokémons/i);
    });

  it(
    'Teste se é redirecionado para a página About ao clicar em "About"',
    () => {
      const { history } = routerRender(<App />);

      history.push('/about');

      const titleNotFound = screen.getByRole('heading', { level: 2 });
      expect(titleNotFound).toBeInTheDocument();
      expect(titleNotFound).toHaveTextContent(/About Pokédex/i);
    },
  );

  it(
    'Teste se é redirecionado para a página Favoritados ao clicar em "Favorite Pokémons"',
    () => {
      const { history } = routerRender(<App />);

      history.push('/favorites');

      const titleNotFound = screen.getByRole('heading', { level: 2 });
      expect(titleNotFound).toBeInTheDocument();
      expect(titleNotFound).toHaveTextContent(/Favorite pokémons/i);
    },
  );

  it('Teste se ao entrar em uma URL desconhecida há o redirecionamento para Not Found',
    () => {
      const { history } = routerRender(<App />);

      history.push('/paginaqualquer');

      const titleNotFound = screen.getByRole('heading', { level: 2 });
      expect(titleNotFound).toBeInTheDocument();
      expect(titleNotFound).toHaveTextContent(/Page requested not found/i);
    });
});
