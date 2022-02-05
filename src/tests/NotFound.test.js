import React from 'react';
import { screen } from '@testing-library/react';
import routerRender from '../services/routerRender';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto "Page requested not found 😭"',
    () => {
      const { history } = routerRender(<App />);
      history.push('/paginaqualquer');
      const notFound = screen.getByRole('heading', { level: 2 });
      expect(notFound).toBeInTheDocument();
      expect(notFound).toHaveTextContent(/Page requested not found 😭/i);
    });
  it('Teste se página mostra a imagem do pikachu chorando', () => {
    const { history } = routerRender(<App />);
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    history.push('/paginaqualquer');
    const image = screen.getByRole('img', { name:
      /pikachu crying because the page requested was not found/i });
    expect(image).toHaveAttribute('src', url);
  });
});