<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

button {
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
}

// primary
button:hover.primary.flat,
button.primary.outline
{
  background-color: white;
  color: $primary-color;
  border: 2px solid $primary-color;
}

button.primary.flat,
button:hover.primary.outline,
button:active.primary.outline,
button:focus.primary.outline,
button:active.primary.flat
 {
  background-color: $primary-color;
  opacity: 0.9;
  color: white;
  border: 2px solid $primary-color;
}

// success

button:hover.success.flat,
button.success.outline
{
  background-color: white;
  color: $success;
  border: 2px solid $success;
}

button.success.flat,
button:hover.success.outline,
button:active.success.outline,
button:focus.success.outline,
button:active.success.flat
 {
  background-color: $success;
  opacity: 0.9;
  color: white;
  border: 2px solid $success;
}

// error
button:hover.error.flat,
button.error.outline
{
  background-color: white;
  color: $error;
  border: 2px solid $error;
}

button.error.flat,
button:hover.error.outline,
button:active.error.outline,
button:focus.error.outline,
button:active.error.flat
{
  background-color: $error;
  opacity: 0.9;
  color: white;
  border: 2px solid $error;
}

</style>
