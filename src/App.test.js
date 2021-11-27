import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from './store';
import App from './App';

it('gets todos', () => {
  const todos = store.getState().list;
  expect(todos).toEqual([]);
});

test('renders header', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('To Do List:')).toBeInTheDocument();
});

test('renders form', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('Add a new task:')).toBeInTheDocument();
});

test('handles user input', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  const mockTaskName = 'Thaw the turkey';

  userEvent.type(screen.getByPlaceholderText('Add a new task...'), mockTaskName);
  expect(screen.getByPlaceholderText('Add a new task...')).toHaveValue('Thaw the turkey');
  fireEvent.click(screen.getByText('Add'));
  await waitFor(() => screen.getByText('Thaw the turkey'));

  expect(getByText('To Do List:')).toBeInTheDocument();

  const todos = store.getState().list;
  expect(todos).toHaveLength(1);
});

test('delete button removes from list user input', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const mockTaskName = 'Thaw the turkey';

  userEvent.type(screen.getByPlaceholderText('Add a new task...'), mockTaskName);
  expect(screen.getByPlaceholderText('Add a new task...')).toHaveValue('Thaw the turkey');
  await waitFor(() => screen.getByText('Thaw the turkey'));
  fireEvent.click(screen.getByText('Thaw the turkey'));
  fireEvent.click(screen.getByText('Remove'));

  const todos = store.getState().list;
  expect(todos).toHaveLength(0);
});




