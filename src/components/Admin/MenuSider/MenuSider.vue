<template>
  <aside class="menu-sider">
    <h2>Administrar</h2>
    <div class="external-container">
      <div v-for="item in items" :key="item.item">
        <router-link class="link" :to="item.to">
          <p class="item-row">
            <icon class="icon" :icon="item.icon" />
            <span class="item">{{ item.item }}</span>
          </p>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { item: "Publicaciones", to: "/admin", icon: "ad" },
        { item: "Mascotas", to: "/admin", icon: "paw" },
        { item: "Protectoras", to: "/admin", icon: "hand-holding-medical" },
        { item: "Veterinarios", to: "/admin", icon: "briefcase-medical" },
        { item: "Tiendas", to: "/admin", icon: "store" },
      ],
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index.scss";

.menu-sider {
  background: $background-light;
  padding-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .external-container {
    width: 80%;
    margin-top: 2rem;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
  }

  .item-row {
    width: 100%;
    color: black;
    border-radius: 5px;
    padding: 1rem;
  }

  .link{
    text-decoration: none;
  }
    .item-row:hover{
    background-color: blue;
    color: white;
  }
  .icon {
    margin-right: 5%;
  }
}

.dark .menu-sider {
  background: $background-darker;
  .icon,
  .link, .item {
    color: white !important;
  }
  .external-container{
    border: 2px solid white;
  }
}

</style>
