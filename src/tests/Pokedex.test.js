import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderRouter from '../routerRender';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons',
    () => {
      renderRouter(<App />);
      const encountered = screen.getByRole('heading', { name: /encountered pokémons/i });
      expect(encountered).toBeInTheDocument();
    });

  it('Teste se é exibido o próximo Pokémon quando o botão Próximo pokémon é clicado',
    () => {
      renderRouter(<App />);
      const pikachuSprite = screen.getByRole('img', { name: /pikachu sprite/i });
      expect(pikachuSprite).toBeInTheDocument();
      const nextPokemonBtn = screen.getByRole('button', { name: /próximo pokémon/i });
      userEvent.click(nextPokemonBtn);
      const charmanderSprite = screen.getByRole('img', { name: /charmander sprite/i });
      expect(charmanderSprite).toBeInTheDocument();
    });
  it('O botão deve conter o texto Próximo pokémon',
    () => {
      renderRouter(<App />);
      const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
      expect(nextPokemonBtn).toHaveTextContent(/Próximo pokémon/i);
    });
  it('Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar no botão',
    () => {
      renderRouter(<App />);
      const pikachuSprite = screen.getByRole('img', { name: /pikachu sprite/i });
      expect(pikachuSprite).toBeInTheDocument();
      const nextPokemonBtn = screen.getByRole('button', { name: /próximo pokémon/i });
      userEvent.click(nextPokemonBtn);
      const charmanderSprite = screen.getByRole('img', { name: /charmander sprite/i });
      expect(charmanderSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const caterpieSprite = screen.getByRole('img', { name: /caterpie sprite/i });
      expect(caterpieSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const ekansSprite = screen.getByRole('img', { name: /ekans sprite/i });
      expect(ekansSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const alakazanSprite = screen.getByRole('img', { name: /alakazam sprite/i });
      expect(alakazanSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const mewSprite = screen.getByRole('img', { name: /mew sprite/i });
      expect(mewSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const rapidashSprite = screen.getByRole('img', { name: /rapidash sprite/i });
      expect(rapidashSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const snorlaxSprite = screen.getByRole('img', { name: /snorlax sprite/i });
      expect(snorlaxSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const dragonairSprite = screen.getByRole('img', { name: /dragonair sprite/i });
      expect(dragonairSprite).toBeInTheDocument();
      userEvent.click(nextPokemonBtn);
      const pikachu = screen.getAllByText(/pikachu/i);
      expect(pikachu).toHaveLength(1);
    });
  it('Teste se a Pokédex tem os botões de filtro',
    () => {
      renderRouter(<App />);
      const buttons = screen.getAllByTestId('pokemon-type-button');
      expect(buttons[0]).toHaveTextContent(/electric/i);
      expect(buttons[1]).toHaveTextContent(/fire/i);
      expect(buttons[2]).toHaveTextContent(/bug/i);
      expect(buttons[3]).toHaveTextContent(/poison/i);
      expect(buttons[4]).toHaveTextContent(/psychic/i);
      expect(buttons[5]).toHaveTextContent(/normal/i);
      expect(buttons[6]).toHaveTextContent(/dragon/i);

      const psychicBtn = screen.getByRole('button', { name: /psychic/i });
      userEvent.click(psychicBtn);
      const alakazanSprite = screen.getByRole('img', { name: /alakazam sprite/i });
      expect(alakazanSprite).toBeInTheDocument();

      const allBtn = screen.getByRole('button', { name: /all/i });
      expect(allBtn).toHaveTextContent(/All/i);
      userEvent.click(allBtn);
      const pikachuSprite = screen.getByRole('img', { name: /pikachu sprite/i });
      expect(pikachuSprite).toBeInTheDocument();
    });
});
