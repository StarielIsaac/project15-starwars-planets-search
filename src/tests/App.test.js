import React from 'react';
import { render, screen } from '@testing-library/react';
import testData from "../../cypress/mocks/testData";
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('Testando a página', () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
  });

  test('testando se existem inputs ', async () => {
    render(<App />)

    const input = screen.getByRole('textbox');
    
    userEvent.type(input, 'Hoth')

    expect(input).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(input.value).toBe('Hoth');
  })  


  test('testando se existem inputs ', async() => {
    render(<App />);

    const planeta = await screen.findByRole('cell', {
      name: /tatooine/i
    });


    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter').value).toBe('population');

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter').value).toBe('maior que');

    userEvent.clear(screen.getByTestId('value-filter'))
    userEvent.type(screen.getByTestId('value-filter'), '30000')
    expect(screen.getByTestId('value-filter').value).toBe('30000');

    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })

    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(buttonFilter).toBeInTheDocument()
    expect(planeta).toBeInTheDocument();

  });
  test('verifica se existe o button', async() => {
    render(<App />);

    const planet = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    const buttonFilter = screen.getByRole('button', {
      name: /filtrar/i
    })

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter').value).toBe('population');

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter').value).toBe('maior que');

    userEvent.clear(screen.getByTestId('value-filter'))
    userEvent.type(screen.getByTestId('value-filter'), '30000')
    expect(screen.getByTestId('value-filter').value).toBe('30000');

    userEvent.click(buttonFilter)
    expect(planet).toBeInTheDocument()
    
    expect(screen.getByTestId('remove-0')).toBeInTheDocument();
    const esse = screen.getByTestId('remove-0')

     userEvent.click(screen.getByTestId('remove-0'))

  });

  test('teste se filtra da forma correta', async () => {
    render(<App />);

    const planeta = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    const button = screen.getByRole('button', {
      name: /filtrar/i
    })
  
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();

  userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter').value).toBe('population');

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que')
    expect(screen.getByTestId('comparison-filter').value).toBe('menor que');

    userEvent.type(screen.getByTestId('value-filter'), '30000')
    expect(screen.getByTestId('value-filter').value).toBe('030000');

    userEvent.click(button)

    expect(screen.getByTestId('remove-0')).toBeInTheDocument();

  })
}); 