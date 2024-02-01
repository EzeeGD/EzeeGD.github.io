function cambiarColorMenu() {
    const menuItems = document.querySelectorAll('nav ul li a');
  
    menuItems.forEach((menuItem, index) => {
      const targetId = menuItem.getAttribute('href').substring(1); // Obtener el id de la sección objetivo
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        
        // Verificar si la sección está al menos parcialmente visible en la ventana actual
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          // Si la sección está visible, cambia el color del elemento del menú correspondiente
          menuItems[index].classList.add('activo');
        } else {
          // Si no está visible, quita la clase 'activo' del elemento del menú
          menuItems[index].classList.remove('activo');
        }
      }
    });
  }
  
  // Escuchar el evento de desplazamiento (scroll) para llamar a la función
  window.addEventListener('scroll', cambiarColorMenu);
  