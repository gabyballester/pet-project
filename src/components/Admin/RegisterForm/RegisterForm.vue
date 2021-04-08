<template>
  <base-dialog
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
        <p>Intenta loguearte o solicita contraseña</p>
      </div>
    </div>
  </base-dialog>

  <base-dialog
    :show="isLoading"
    title="Cargando"
    mode="success"
    :showButton="false"
    :showHeader="false"
  >
    <base-spinner></base-spinner>
  </base-dialog>
  <form class="container-form" @submit.prevent="submitForm">
    <!-- email input  -->
    <div class="row-form">
      <div
        class="input-container-form"
        :class="{ 'error-div': formData.email.length && errors.email.status }"
      >
        <icon class="icon" icon="envelope" />
        <input
          class="input-element"
          :class="{ 'error-text': errors.email.status }"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          autocomplete="email"
          v-model.trim="formData.email"
          @keyup="validateEmail"
        />
      </div>
      <p v-if="formData.email.length && errors.email.status" class="error-text">
        {{ errors.email.message }}
      </p>
    </div>

    <!-- password input -->
    <div class="row-form">
      <div
        id="password"
        class="input-container-form"
        :class="{
          'error-div': formData.password.length && errors.password.status,
        }"
      >
        <icon class="icon" icon="key" />
        <input
          class="input-element"
          :class="{
            'error-text': formData.password.length && errors.password.status,
          }"
          name="password"
          type="password"
          placeholder="Contraseña"
          autocomplete="current-password"
          v-model.trim="formData.password"
          @keyup="validatePassword"
        />
      </div>
      <p
        v-if="formData.password.length && errors.password.status"
        class="error-text"
      >
        {{ errors.password.message }}
      </p>
    </div>
    <!-- repeat password input -->
    <div class="row-form">
      <div
        id="repeatPassword"
        class="input-container-form"
        :class="{
          'error-div':
            formData.repeatPassword.length && errors.repeatPassword.status,
        }"
      >
        <icon class="icon" icon="key" />
        <input
          class="input-element"
          :class="{
            'error-text':
              formData.repeatPassword.length && errors.repeatPassword.status,
          }"
          name="repeatPassword"
          type="password"
          placeholder="Repite contraseña"
          autocomplete="new-password"
          v-model.trim="formData.repeatPassword"
          @keyup="validateRepeatPassword"
        />
      </div>
      <p
        v-if="formData.repeatPassword.length && errors.repeatPassword.status"
        class="error-text"
      >
        {{ errors.repeatPassword.message }}
      </p>
      <p
        v-if="
          formData.password.length &&
            formData.repeatPassword.length &&
            errors.comparePasswords.status
        "
        class="error-text"
      >
        {{ errors.comparePasswords.message }}
      </p>
    </div>
    <!-- checkbox container -->
    <div class="row-form">
      <div class="checkbox-container-form">
        <input
          type="checkbox"
          name="privacyPolicy"
          class="checkbox"
          :checked="formData.privacyPolicy"
          v-model="formData.privacyPolicy"
          @click="handleChange"
        />

        <label class="label-conditions"
          >He leído y acepto la política de privacidad</label
        >
      </div>
      <div></div>
    </div>

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
        password: "asdfasfd",
        repeatPassword: "asdfasfd",
        privacyPolicy: true,
      },
      isLoading: false,
      minLength: 6,
      response: {
        status: null,
        message: "",
      },
      mode: null,
      errors: {
        email: {
          status: true,
          message: "Email incorrecto",
        },
        password: {
          status: true,
          message: "Mínimo: 6 caracteres.",
        },
        repeatPassword: {
          status: true,
          message: "Mínimo: 6 caracteres.",
        },
        comparePasswords: {
          status: true,
          message: "Passwords no coinciden",
        },
      },
    };
  },
  computed: {
    emailChecker() {
      const checker = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return !checker.test(this.formData.email);
    },
    showModal() {
      if (this.response.status === null) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    validateEmail() {
      if (this.formData.email.length === 0) {
        this.errors.email.status = false;
      } else {
        this.errors.email.status = this.emailChecker;
      }
    },
    validatePassword() {
      this.errors.comparePasswords.status = false;
      const length = this.formData.password.length;
      const minLength = this.minLength;
      if (length === 0) {
        this.errors.password.status = false;
      } else if (length < minLength) {
        this.errors.password.status = true;
      } else {
        this.errors.password.status = false;
      }
    },
    validateRepeatPassword() {
      this.errors.comparePasswords.status = false;
      const length = this.formData.repeatPassword.length;
      const minLength = this.minLength;
      if (length === 0) {
        this.errors.repeatPassword.status = false;
      } else if (length < minLength) {
        this.errors.repeatPassword.status = true;
      } else {
        this.errors.repeatPassword.status = false;
      }
    },
    comparePasswordsValidation() {
      if (this.formData.password === this.formData.repeatPassword) {
        this.errors.comparePasswords.status = false;
      } else {
        this.errors.comparePasswords.status = true;
      }
    },
    async submitForm() {
      this.comparePasswordsValidation();
      if (
        !this.errors.email.status &&
        !this.errors.password.status &&
        !this.errors.repeatPassword.status &&
        !this.errors.comparePasswords.status &&
        this.formData.privacyPolicy
      ) {
        try {
          this.isLoading = true;
          const result = await signUpApi(this.formData);
          console.log(result);
          this.response.status = result.ok;
          this.response.message = result.message;
          if (result.ok) {
            (this.mode = "success flat"), this.$emit("login");
          } else {
            this.mode = "error flat";
          }
        } catch (error) {
          this.isLoading = false;
        } finally {
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
      }
    },
    handleError() {
      this.response = { status: null, message: "" };
    },
  },
  emits: ["login"],
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

    // .button-form {
    //   margin-top: 10px;
    //   background-color: $primary-color;
    //   color: $font-light;
    //   border-radius: 5px;
    //   border: 1px solid $background-grey-light2;
    //   height: 42px;
    //   width: 100%;
    //   font-size: 0em + 18px / $defaultFontSize;
    //   cursor: pointer;
    // }

    // .button-form:hover {
    //   background-color: $primary-color-hover;
    //   color: $font-light;
    // }

    // .button-form:focus,
    // .button-form:active {
    //   background-color: $primary-color;
    //   color: $font-light;
    //   outline: none;
    // }
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
