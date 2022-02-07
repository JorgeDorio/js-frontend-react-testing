import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routerRender from '../routerRender';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon',
    () => {
      routerRender(<App />);
      const pokemonName = screen.getByText(/pikachu/i);
      expect(pokemonName).toBeInTheDocument();
      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent('Electric');
      const pokemonAverage = screen.getByText(/average weight: 6\.0 kg/i);
      expect(pokemonAverage).toBeInTheDocument();
      const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });
      expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });

  it('Teste se o card do Pokémon contém um link para exibir mais detalhes', () => {
    routerRender(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toHaveAttribute('href', '/pokemons/25');
  });

  it('Teste se ao clicar no link é redirecionado para a página de detalhes', () => {
    const { history } = routerRender(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const pokemonDetails = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pokemonDetails).toBeInTheDocument();
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    routerRender(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const favorites = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favorites);
    const imgFavorite = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(imgFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(imgFavorite).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
