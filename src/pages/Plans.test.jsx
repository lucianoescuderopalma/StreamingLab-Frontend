import { render, screen, within } from '@testing-library/react';
import Plans from './Plans';

describe('Plans Component', () => {
  test('Renderiza correctamente la estructura básica', () => {
    const { container } = render(<Plans />);

    // Header
    const header = within(container.querySelector('header'));
    expect(header.getByText(/Streaming Lab/i)).toBeInTheDocument();
    expect(header.getByText(/Inicio/i)).toBeInTheDocument();
    expect(header.getByText(/Cuentas/i)).toBeInTheDocument();
    expect(header.getByText(/Iniciar sesión/i)).toBeInTheDocument();

    // Planes
    expect(screen.getByText(/Planes disponibles/i)).toBeInTheDocument();
    expect(screen.getByText(/Individual/i)).toBeInTheDocument();
    expect(screen.getByText(/Familiar/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporativo/i)).toBeInTheDocument();

    // Video embed
    const video = container.querySelector('iframe');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', expect.stringContaining('youtube.com'));
  });

  test('Renderiza correctamente los precios y botones de selección', () => {
    render(<Plans />);

    expect(screen.getByText(/\$5.990/i)).toBeInTheDocument();
    expect(screen.getByText(/\$9.990/i)).toBeInTheDocument();
    expect(screen.getByText(/\$14.990/i)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button', { name: /Seleccionar/i });
    expect(buttons.length).toBe(3);
  });

  test('Renderiza el footer', () => {
    render(<Plans />);
    expect(screen.getByText(/© 2025 Streaming Lab/i)).toBeInTheDocument();
  });
});
