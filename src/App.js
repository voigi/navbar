const switchElem = document.getElementById('flexSwitchCheckDefault');
switchElem.addEventListener('change', handleChange);

function handleChange() {

    // Récupère l'état
    const isDark = !this.checked;
  
    // Définit l'attribut
    document.body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  
  }

  // Définit le thème par défaut
handleChange();