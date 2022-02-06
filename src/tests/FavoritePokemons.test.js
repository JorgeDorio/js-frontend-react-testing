import React from 'react';
import { screen } from '@testing-library/react';
import routerRender from '../routerRender';
import { FavoritePokemons } from '../components';
import pokemons from '../dataFavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido a mensagem No favorite pokemon found',
    () => {
      routerRender(<FavoritePokemons />);
      const titleFavorite = screen.getByRole('heading', { level: 2 });
      const message = screen.getByText(/no favorite pokemon found/i);
      expect(titleFavorite).toBeInTheDocument();
      expect(titleFavorite).toHaveTextContent(/favorite pokémons/i);
      expect(message).toBeInTheDocument();
    });

  it('Teste se é exibido todos os cards de pokémons favoritados',
    () => {
      routerRender(<FavoritePokemons pokemons={ pokemons } />);
      const cardFavorite = screen.getAllByRole('img', { name: /marked as favorite/i });
      const name = screen.getAllByTestId(/name/i);
      const type = screen.getAllByTestId(/type/i);
      const average = screen.getAllByTestId(/weight/i);
      expect(cardFavorite).toHaveLength(2);
      expect(name).toHaveLength(2);
      expect(type).toHaveLength(2);
      expect(average).toHaveLength(2);
    });
});
