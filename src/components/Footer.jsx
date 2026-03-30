import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <span className="accent">Stan Wang</span> — Built with React + Vite.
        Passion for technology and security.
      </p>
    </footer>
  );
}
