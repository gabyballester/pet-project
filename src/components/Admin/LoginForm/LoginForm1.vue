<template>
  <!-- <base-dialog
    :show="showModal"
    title="¡ Ups !"
    @close="handleError"
    :mode="mode"
  >
    <div :class="mode">
      <div v-if="response.status">
        <p>Usuario creado satisfactoriamente!</p>
        <p>Revisa tu correo para activar tu cuenta y loguéate</p>
      </div>
      <div v-else>
        <p>¡Aviso! El correo ya está registrado</p>
        <p>Elige otro, loguéate o solicita contraseña si no la recuerdas</p>
      </div>
    </div>
  </base-dialog> -->

  <!-- <base-dialog
    :show="isLoading"
    title="Cargando"
    mode="success"
    :showButton="false"
    :showHeader="false"
  >
    <base-spinner></base-spinner>
  </base-dialog> -->

  <form class="container-form" @submit.prevent="submitForm">
    <!-- email input  -->
    <div class="row-form">
      <div class="input-container-form">
        <icon class="icon" icon="envelope" />
        <input
          class="input-element"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          autocomplete="email"
          v-model.trim="formData.email"
        />
      </div>
    </div>

    <!-- password input -->
    <div class="row-form">
      <div id="password" class="input-container-form">
        <icon class="icon" icon="key" />
        <input
          class="input-element"
          name="password"
          type="password"
          placeholder="Contraseña"
          autocomplete="current-password"
          v-model.trim="formData.password"
        />
      </div>
    </div>

    <!-- button -->
    <base-button mode="success flat" class="button-form" type="submit">
      Crear cuenta
    </base-button>
  </form>
</template>

<script>
import { signUpApi } from "../../../api/user.api";

export default {
  data() {
    return {
      formData: {
        email: "email@email.com",
        password: "asdfasf",
      },
      isLoading: false,
      response: {
        status: null,
        message: "",
      },
      mode: null,
    };
  },
  computed: {
    showModal() {
      if (this.response.status === null) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    async submitForm() {
      if (!this.errors.email.status) {
        try {
          this.isLoading = true;
          const result = await signUpApi(this.formData);
          this.response = { status: result.ok, message: result.message };
          if (result.ok) {
            this.mode = "success flat";
          } else {
            this.mode = "error flat";
          }
          this.isLoading = false;
        } catch (error) {
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

div.error.flat > p {
  color: $error;
}

div.error.flat > div > p:first-child {
  margin-bottom: 10px;
}

.container-form {
  padding: 30px 15px 15px 15px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .row-form {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 15px;

    .input-container-form {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 1px solid $background-grey-light2;
      border-radius: 3px;
      width: 100%;
      height: 35px;

      .icon {
        padding: 0 !important;
        margin-left: 10px !important;
        margin-right: 10px;
        color: $background-grey-light2;
        width: auto !important;
        height: 65% !important;
      }

      .input-element {
        display: inherit;
        flex-grow: inherit;
        border: none;
        color: black;
        font-size: 0em + 19px / $defaultFontSize;
        background-color: transparent;
        padding-right: 10px;
      }

      .input-element:focus {
        outline: none !important;
      }

      .input-element::placeholder {
        color: $background-grey-light2;
        opacity: 1;
      }
    }

    .input-container-form:hover {
      border: 1px solid $primary-color;
    }

    .input-container-form:focus-within {
      border: 2px solid $primary-color;
      background-color: $primary-color-ultra-light;
    }

    .checkbox-container-form {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: auto;
      justify-content: flex-start;
      align-items: center;
      height: 25px;
      margin-bottom: 10px;

      input[type="checkbox"] {
        border: none;
        height: 0.9em;
        width: 0.9em;
        cursor: pointer;
      }

      .label-conditions {
        text-align: left;
        width: 100%;
        margin-left: 10px;
        font-size: $defaultFontSize;
        padding-bottom: 3px;
      }
    }
  }

  .error-div {
    background: $background-error !important;
    border-color: $error !important;
  }

  .error-text {
    margin-top: 5px;
    color: $error !important;
  }
}
</style>
