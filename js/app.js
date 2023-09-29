const imagenes = document.querySelectorAll('.propiedad__imagen');

const handleScroll = () => {
  const scroll = this.scrollY / -20;
  imagenes.forEach((imagen) => {
    imagen.style.backgroundPositionY = `${scroll}px`;
  });
};
window.addEventListener('scroll', handleScroll);
