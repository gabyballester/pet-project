<template>
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
    <base-button mode="primary flat button" class="button-form" type="submit">
      Iniciar sesión
    </base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "email@email.com",
        password: "asdfasf",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      // if (!this.errors.email.status) {
      //   try {
      //     this.isLoading = true;
      //     const result = await signUpApi(this.formData);
      //     this.response = { status: result.ok, message: result.message };
      //     if (result.ok) {
      //       this.mode = "success flat";
      //     } else {
      //       this.mode = "error flat";
      //     }
      //     this.isLoading = false;
      //   } catch (error) {
      //     this.isLoading = false;
      //   }
      // } else {
      //   this.isLoading = false;
      // }
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
