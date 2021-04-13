<template>
  <!-- spinner -->
  <base-dialog
    :show="isLoading"
    :showHeader="true"
    :mode="response.mode"
    title="Espere por favor..."
    :showButton="false"
  >
    <base-spinner></base-spinner>
  </base-dialog>
  <!-- modal -->
  <base-dialog
    :show="response.showModal"
    :title="showResponseTitle"
    @close="handleError"
    :mode="response.mode"
  >
    <div>
      <p v-if="response.code === 200">login-success</p>
      <p v-if="response.code === 401">Error 401</p>
      <p v-if="response.code === 403">inactive-user</p>
      <p v-if="response.code === 404">Error 404</p>
      <p v-if="response.code === 500">Error en petición</p>
    </div>
  </base-dialog>

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
          autoFocus
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
    <base-button
      mode="primary flat button"
      class="button-form"
      type="submit"
    >
      Iniciar sesión
    </base-button>
  </form>
</template>

<script>
import { signInApi } from "../../../api/user.api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { localStorageItem } from "../../../services/auth.service";

export default {
  data() {
    return {
      formData: {
        email: "email@email.com",
        password: "asdfasf",
      },
      response: {
        showModal: false,
        title: "",
        message: "",
        mode: "",
        code: "",
      },
      isLoading: false,
    };
  },
  computed: {
    showResponseTitle() {
      if (this.response.code === 200) {
        return "success-200";
      } else {
        return "success-200-not";
      }
    },
  },
  methods: {
    async submitForm() {
      try {
        this.isLoading = true;
        const { data, response } = await signInApi(this.formData);
        this.isLoading = false;
        if (response.status === 200) {
          this.isLoading = false;
          this.saveTokens(data);
          this.redirect("/admin")
        } else if (response.status === 401) {
          this.response = {
            showModal: true,
            mode: "error flat",
            code: response.status,
          };
        } else if (response.status === 403) {
          this.response = {
            showModal: true,
            mode: "error flat",
            code: response.status,
          };
        } else if (response.status === 404) {
          this.response = {
            showModal: true,
            mode: "error flat",
            code: response.status,
          };
        }
      } catch (error) {
        this.response = {
          showModal: true,
          mode: "error flat",
          code: 500,
        };
      }
      this.isLoading = false;
    },
    handleError() {
      this.response = { showModal: false, message: "" };
    },
    saveTokens({accessToken, refreshToken}) {
      localStorageItem("set", ACCESS_TOKEN, accessToken);
      localStorageItem("set", REFRESH_TOKEN, refreshToken);
    },
    redirect(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.container-form {
  padding: 30px 15px 10px 15px;
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
      border: 2px solid $primary-color;
    }

    .input-container-form:focus-within {
      background-color: $primary-color-ultra-light;
    }
  }
  .button {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
