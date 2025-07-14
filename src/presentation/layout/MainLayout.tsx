import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Aquí se renderiza la ruta hija actual */}
      </main>

      <footer>
        <p> {new Date().getFullYear()} Blog Alexis-UI</p>
      </footer>
    </div>
  );
};

export default MainLayout;
