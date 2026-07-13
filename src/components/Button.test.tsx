import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
    it('renders correctly with given children text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Submit</Button>);

        const button = screen.getByText('Submit');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows loading text and disables button when isLoading is true', () => {
        render(<Button isLoading={true}>Submit</Button>);

        const button = screen.getByText('로딩중...');
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('applies the appropriate variant classes', () => {
        render(<Button variant="danger">Delete</Button>);

        const button = screen.getByText('Delete');
        expect(button.className).toContain('bg-rose');
    });
});
