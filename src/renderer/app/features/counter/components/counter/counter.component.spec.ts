import '@testing-library/jest-dom';

import { configure, fireEvent, render, screen } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

configure({ dom: { testIdAttribute: 'data-test-id' } });

describe('<Counter />', () => {
  test('should render default Count', async () => {
    await render(CounterComponent);

    expect(screen.getByTestId('count')).toHaveTextContent('0');
    expect(screen.getByTestId('count')).toHaveClass('count');
    expect(screen.getByTestId('increment-button-1')).toHaveTextContent('+1');
    expect(screen.getByTestId('increment-button-10')).toHaveTextContent('+10');
    expect(screen.getByTestId('decrement-button-1')).toHaveTextContent('-1');
    expect(screen.getByTestId('decrement-button-10')).toHaveTextContent('-10');
    expect(screen.getByTestId('reset-button')).toHaveTextContent('reset');
  });

  test('should render with count', async () => {
    await render(CounterComponent, {
      componentProperties: {
        count: 10,
      },
    });

    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  test('should click +1 button', async () => {
    const handler = jest.fn();
    await render(CounterComponent, {
      componentProperties: {
        incrementClick: {
          emit: handler,
        } as any,
      },
    });

    fireEvent.click(screen.getByTestId('increment-button-1'));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(1);
  });

  test('should click +10 button', async () => {
    const handler = jest.fn();
    await render(CounterComponent, {
      componentProperties: {
        incrementClick: {
          emit: handler,
        } as any,
      },
    });

    fireEvent.click(screen.getByTestId('increment-button-10'));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(10);
  });

  test('should click -1 button', async () => {
    const handler = jest.fn();
    await render(CounterComponent, {
      componentProperties: {
        decrementClick: {
          emit: handler,
        } as any,
      },
    });

    fireEvent.click(screen.getByTestId('decrement-button-1'));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(1);
  });

  test('should click -10 button', async () => {
    const handler = jest.fn();
    await render(CounterComponent, {
      componentProperties: {
        decrementClick: {
          emit: handler,
        } as any,
      },
    });

    fireEvent.click(screen.getByTestId('decrement-button-10'));
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(10);
  });

  test('should click reset button', async () => {
    const handler = jest.fn();
    await render(CounterComponent, {
      componentProperties: {
        resetClick: {
          emit: handler,
        } as any,
      },
    });

    fireEvent.click(screen.getByTestId('reset-button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
