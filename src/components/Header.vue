<template>
  <header>
    <h1>Logotipo</h1>
    <nav>
      <div class="nav-link">Publicaciones</div>
      <div class="nav-link">Mascotas</div>
      <div class="nav-link">Protectoras</div>
      <div class="nav-link">Veterinarios</div>
      <div class="nav-link">Tiendas</div>
    </nav>
    <div class="toggle">
      <base-toggle />
      <language-selector />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 25px;
  height: 60px;
  background: #c3c3c3;
  transition: background 0.3s ease-in-out;
}

header h1 {
  font-size: 32px;
  font-weight: 900;
}

header nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}

header nav .nav-link:hover {
  background: #b0b0b0;
}

.toggle {
  height: 100%;
  width: 7.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
}
/* Dark styles */
.dark header {
  background: #15202b;
}

.dark header nav .nav-link:hover {
  background: #101520;
}
</style>
