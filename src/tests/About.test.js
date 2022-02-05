// Import React
import React from 'react';

// Imports RTL
import { screen } from '@testing-library/react';

// Imports Files
import routerRender from '../services/routerRender';
import { About } from '../components';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    routerRender(<About />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/about pokédex/i);
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    routerRender(<About />);
    const paragraphs = screen.getAllByText(/Pokédex/i);
    expect(paragraphs).toHaveLength(2);
  });

  it('Teste se a página contém a imagem de uma Pokédex', () => {
    routerRender(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Pokédex');
    expect(image).toHaveAttribute('src', url);
  });
});
