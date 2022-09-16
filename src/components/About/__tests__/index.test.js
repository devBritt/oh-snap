import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// remove test components from DOM after each test
afterEach(cleanup);

describe('About component', () => {
    // baseline test (creates snapshot)
    it('renders', () => {
        render(<About />);
    });

    // test case 1
    it ('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})