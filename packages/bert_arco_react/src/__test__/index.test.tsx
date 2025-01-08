/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { bert_arco_react } from '../index';

describe('bert_arco_react', () => {
  it('render current content', () => {
    render(<bert_arco_react />);
    expect(document.querySelector('div')).toHaveTextContent('Edit this component');
  });
});
