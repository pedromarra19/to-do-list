import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { App } from './App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText('To do list')).toBeDefined();
    expect(getByPlaceholderText('insert task')).toBeDefined();
  });

  it('adds a task when Add button is pressed with input text', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText('insert task');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'Test Task');
    fireEvent.press(addButton);

    const taskItem = getByText('Test Task');
    expect(taskItem).toBeDefined();

    const checkbox = getByTestId('checkbox');
    const removeButton = getByTestId('remove-button');
    expect(checkbox).toBeDefined();
    expect(removeButton).toBeDefined();

  });

  it('disables Add button when input is empty', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('insert task');
    const addButton = getByText('Add');

    expect(addButton).toBeDisabled();

    fireEvent.changeText(input, 'Test Task');
    expect(addButton).toBeEnabled();

    fireEvent.changeText(input, '');
    expect(addButton).toBeDisabled();
  });

  it('pressed checkbox and removes a task when Remove button is pressed', () => {
    const { getByPlaceholderText, getByText, getByTestId, queryByText } = render(<App />);
    const input = getByPlaceholderText('insert task');
    const addButton = getByText('Add');

    const checkbox = getByTestId('checkbox');
    const initialBackgroundColor = checkbox.props.style.backgroundColor;
    
     // Simulate press on the checkbox
     fireEvent.press(checkbox);
    
     // Get the checkbox after pressing it
     const updatedBackgroundColor = getByTestId('checkbox').props.style.backgroundColor;
     
     // Verify if the checkbox background color has changed
     expect(updatedBackgroundColor).not.toBe(initialBackgroundColor);
   
     // Get the remove button of the task
     const removeButton = getByTestId('remove-button');
     expect(removeButton).toBeDefined();
   
     // Simulate press on the remove button
     fireEvent.press(removeButton);
   
     // Verify if the task has been removed correctly
     const removedTaskItem = queryByText('Test Task');
     expect(removedTaskItem).toBeNull();
 
  });
});

