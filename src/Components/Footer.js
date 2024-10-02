import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <h5>İletişim</h5>
        <ul className="list-unstyled">
          <li>
            <a href="mailto:example@example.com" className="text-white">Email: example@example.com</a>
          </li>
          <li>
            <a href="tel:+123456789" className="text-white">Telefon: +123 456 789</a>
          </li>
        </ul>
        <div className="social-links">
          <a href="https://www.facebook.com/" target='blank' className="text-white mr-3">Facebook</a>
          <a href="https://x.com/" className="text-white mr-3" target='blank'>X</a>
          <a href="https://www.instagram.com/" className="text-white" target='blank'>Instagram</a>
        </div>
        <div className="mt-3">
          <p>© 2024 Renkli Rotalar Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer