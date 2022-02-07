import React from 'react';
import ReactDOM from 'react-dom';
import ProposalForm from './ProposalForm';

it('renders appropriately', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProposalForm />, div);
});