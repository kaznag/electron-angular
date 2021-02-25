import '@testing-library/jest-dom';

import { configure, fireEvent, render, screen } from '@testing-library/angular';
import { TitleBarComponent } from './title-bar.component';

configure({ dom: { testIdAttribute: 'data-test-id' } });

describe('<TitleBar />', () => {
  test('should render default TitleBar', async () => {
    await render(TitleBarComponent);

    expect(screen.getByTestId('close-button').className).toBe('close-button');
    expect(screen.getByTestId('maximize-button').className).toBe('maximize-button');
    expect(screen.getByTestId('minimize-button').className).toBe('minimize-button');
    expect(screen.getByTestId('window-title').className).toBe('window-title');
  });

  test('should render with resize button', async () => {
    await render(TitleBarComponent, {
      componentProperties: {
        isMaximized: true,
      }
    });

    expect(screen.getByTestId('close-button').className).toBe('close-button');
    expect(screen.getByTestId('maximize-button').className).toBe('resize-button');
    expect(screen.getByTestId('minimize-button').className).toBe('minimize-button');
    expect(screen.getByTestId('window-title').className).toBe('window-title');
  });

  test('should render blur TitleBar', async () => {
    await render(TitleBarComponent, {
      componentProperties: {
        isFocused: false,
      }
    });

    expect(screen.getByTestId('close-button').className).toBe('close-button blur');
    expect(screen.getByTestId('maximize-button').className).toBe('maximize-button blur');
    expect(screen.getByTestId('minimize-button').className).toBe('minimize-button blur');
    expect(screen.getByTestId('window-title').className).toBe('window-title blur');
  });

  test('should render with blur resize button', async () => {
    await render(TitleBarComponent, {
      componentProperties: {
        isFocused: false,
        isMaximized: true,
      }
    });

    expect(screen.getByTestId('close-button').className).toBe('close-button blur');
    expect(screen.getByTestId('maximize-button').className).toBe('resize-button blur');
    expect(screen.getByTestId('minimize-button').className).toBe('minimize-button blur');
    expect(screen.getByTestId('window-title').className).toBe('window-title blur');
  });

  test('should render title', async () => {
    await render(TitleBarComponent, {
      componentProperties: {
        windowTitle: 'Hello world'
      },

    });

    expect(screen.getByTestId('window-title')).toHaveTextContent('Hello world');
  });

  test('should click close button', async () => {
    const handler = jest.fn();
    await render(TitleBarComponent, {
      componentProperties: {
        onCloseButtonClick: {
          emit: handler,
        } as any,
      }
    });

    fireEvent.click(screen.getByTestId('close-button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('should click maximize button', async () => {
    const handler = jest.fn();
    await render(TitleBarComponent, {
      componentProperties: {
        onMaximizeResizeButtonClick: {
          emit: handler,
        } as any,
      }
    });

    fireEvent.click(screen.getByTestId('maximize-button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('should click minimize button', async () => {
    const handler = jest.fn();
    await render(TitleBarComponent, {
      componentProperties: {
        onMinimizeButtonClick: {
          emit: handler,
        } as any,
      }
    });

    fireEvent.click(screen.getByTestId('minimize-button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
