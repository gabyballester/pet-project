<template>
  <teleport to="body">
    <div>
      <section>
        <slot></slot>
      </section>
    </div>
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show">
      <header v-if="showHeader" :class="mode">
        <slot name="header">
          <p>{{ title }}</p>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu v-if="!fixed">
        <slot name="actions">
          <base-button v-if="showButton" :mode="mode" @click="tryClose"
            >Cerrar</base-button
          >
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    mode: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    showButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ["close"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  // z-index: -10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  padding: 10px;
  color: white;
  width: 100%;
  p {
    font-size: 1.5rem;
    margin: 0;
  }
}

header.error {
  background-color: $error;
}

header.success {
  background-color: green;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  $padding: 1.4rem;
  padding: $padding $padding 0 $padding;
  font-size: 1.1rem;
  font-weight: bolder;
}

menu {
  $padding: 1rem;
  padding: $padding $padding $padding $padding;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
