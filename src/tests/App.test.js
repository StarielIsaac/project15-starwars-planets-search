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

  test('testa as funcoes', async () => {
    render(<App />);

    const button = screen.getByRole('button', {
      name: /filtrar/i
    })
  
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter').value).toBe('population');
    userEvent.click(button);

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que')
    expect(screen.getByTestId('comparison-filter').value).toBe('menor que');
    userEvent.type(screen.getByTestId('value-filter'), '9')
    expect(screen.getByTestId('value-filter').value).toBe('09');
    userEvent.click(button)

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'maior que')
    expect(screen.getByTestId('comparison-filter').value).toBe('maior que');
    userEvent.clear(screen.getByTestId('value-filter'))
    userEvent.type(screen.getByTestId('value-filter'), '10000')
    expect(screen.getByTestId('value-filter').value).toBe('10000');
    userEvent.click(button)
    
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter').value).toBe('igual a');
    userEvent.clear(screen.getByTestId('value-filter'))
    userEvent.type(screen.getByTestId('value-filter'), '9')
    expect(screen.getByTestId('value-filter').value).toBe('9');
    userEvent.click(button)

    expect(screen.getByTestId('remove-0')).toBeInTheDocument();

  })

  test('teste os filtros', async () => {
    render(<App />);

    const button = screen.getByRole('button', {
      name: /filtrar/i
    })
  
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();

    userEvent.selectOptions(screen.getByTestId('column-filter'), 'population')
    expect(screen.getByTestId('column-filter').value).toBe('population');
    userEvent.click(button)

    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter').value).toBe('igual a');
    userEvent.click(button)

    userEvent.type(screen.getByTestId('value-filter'), '30000')
    expect(screen.getByTestId('value-filter').value).toBe('030000');
    userEvent.click(button)

    userEvent.type(screen.getByTestId('value-filter'), '1000')
    userEvent.click(button)
    

    const filter1 = (screen.getByTestId('remove-0'))
    const filter2 = (screen.getByTestId('remove-1'))

    expect(filter1).toBeInTheDocument();
    expect(filter2).toBeInTheDocument();

    const removeAll = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAll);
    expect(filter1).not.toBeInTheDocument();
    expect(filter2).not.toBeInTheDocument();

  })

  test('teste os filtros', async () => {

    render(<App />)

    const planeta = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    expect(planeta).toBeInTheDocument()

    const removeAll = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAll);

    const button = screen.getByRole('button', {
      name: /filtrar/i
    })

    expect(button).toBeInTheDocument()

    userEvent.click(button);
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'menor que')
    expect(screen.getByTestId('comparison-filter').value).toBe('menor que')

    userEvent.click(button);
    userEvent.selectOptions(screen.getByTestId('comparison-filter'), 'igual a')
    expect(screen.getByTestId('comparison-filter').value).toBe('igual a')
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    const filter0 = (screen.getByTestId('remove-0'))
    const filter1 = (screen.getByTestId('remove-1'))
    const filter2 = (screen.getByTestId('remove-2'))
    const filter3 = (screen.getByTestId('remove-3'))
    const filter4 = (screen.getByTestId('remove-4'))

    expect(filter0).toBeInTheDocument()
    expect(filter1).toBeInTheDocument()
    expect(filter2).toBeInTheDocument()
    expect(filter3).toBeInTheDocument()
    expect(filter4).toBeInTheDocument()

    userEvent.click(filter0);
    userEvent.click(filter1);
    userEvent.click(filter2);
    userEvent.click(filter3);
    userEvent.click(filter4);

    userEvent.click(removeAll);
    expect(filter0).not.toBeInTheDocument()

  })

  test('teste os filtros', async () => {

    render(<App />)

    const planeta = await screen.findByRole('cell', {
      name: /tatooine/i
    });

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'ho')

    const name = screen.getByRole('cell', {
      name: /hoth/i
    })
    
    expect(input).toBeInTheDocument()

  })
}); 