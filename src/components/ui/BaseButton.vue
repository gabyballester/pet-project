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
  margin-right: 0.5rem;
  outline: none;
  font-weight: bold;
  // display: inline-block;
}

button.success.flat,
button:hover.success.outline,
button:active.success.outline,
button:focus.success.outline
 {
  background-color: $success;
  opacity: 0.9;
  color: white;
  border: 2px solid $success;
}

button:hover.success.flat,
button.success.outline,
button:focus.success.flat,
button:active.success.flat
{
  background-color: white;
  color: $success;
  border: 2px solid $success;
}

button.error.flat,
button:hover.error.outline,
button:active.error.outline,
button:focus.error.outline
{
  background-color: $error;
  opacity: 0.9;
  color: white;
  border: 2px solid $error;
}

button:hover.error.flat,
button:active.error.flat,
button:focus.error.flat,
button.error.outline
{
  background-color: white;
  color: $error;
  border: 2px solid $error;
}
</style>
