<template>
  <header>
    <h1>Logo</h1>
    <nav>
      <div class="nav-link">{{ $t("header.publication",2) }}</div>
      <div class="nav-link">{{ $t("header.pet",2) }}</div>
      <div class="nav-link">{{ $t("header.shelter",2) }}</div>
      <div class="nav-link">{{ $t("header.vet",2) }}</div>
      <div class="nav-link">{{ $t("header.shop",2) }}</div>
    </nav>
    <div class="toggle">
      <language-selector />
      <base-toggle />
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
  width: 8rem;
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
