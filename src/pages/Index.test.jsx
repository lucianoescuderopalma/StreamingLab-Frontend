import { render, screen, within } from '@testing-library/react';
import Index from './index';

describe('Index Component', () => {
  test('Renderiza correctamente header y navbar', () => {
    const { container } = render(<Index />);

    // Header
    const header = within(container.querySelector('header'));
    expect(header.getByText(/Streaming Lab/i)).toBeInTheDocument();
    expect(header.getByText(/Inicio/i)).toBeInTheDocument();
    expect(header.getByText(/Planes/i)).toBeInTheDocument();
    expect(header.getByText(/Cuentas/i)).toBeInTheDocument();
    expect(header.getByText(/Iniciar sesión/i)).toBeInTheDocument();

    // Hero
    const hero = container.querySelector('.hero');
    expect(within(hero).getByText(/Administra todas tus cuentas/i)).toBeInTheDocument();
    expect(within(hero).getByText(/Organiza usuarios/i)).toBeInTheDocument();
    expect(within(hero).getByText(/Comenzar gratis/i)).toBeInTheDocument();

    // Footer
    expect(screen.getByText(/© 2025 Streaming Lab/i)).toBeInTheDocument();
    expect(screen.getByText(/streaminglab@example.com/i)).toBeInTheDocument();
  });

  test('Renderiza correctamente las features', () => {
    render(<Index />);
    const features = screen.getAllByRole('img');
    expect(features.length).toBe(3); // tres imágenes de las features
    expect(screen.getByAltText(/Gestión de Cuentas/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Planes Flexibles/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Dashboard Centralizado/i)).toBeInTheDocument();
  });
});
