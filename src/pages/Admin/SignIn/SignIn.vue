<template>
  <div className="layout-signin">
    <h1 className="logo-signin">
      Logo pet-project
    </h1>
    <div className="content-signin">
      <!-- tab-layout -->
      <div className="tab-layout-signin">
        <!-- tab-row -->
        <div className="tab-header-signin">
          <!-- tab1 -->
          <div
            class="tab1"
            :class="{ active: tab, inactive: !tab }"
            @click="setTab(true)"
          >
            <p className="text">Entrar</p>
          </div>
          <!-- tab2 -->
          <div
            class="tab2"
            :class="{ inactive: tab, active: !tab }"
            @click="setTab(false)"
          >
            <p class="text">Nuevo Usuario</p>
          </div>
        </div>
        <!-- tab-content -->
        <div
          :class="{
            'tab-content-signin': tab,
            'tab-content-signin-hidden': !tab,
          }"
        >
          <LoginForm />
        </div>
        <div
          :class="{
            'tab-content-signin': !tab,
            'tab-content-signin-hidden': tab,
          }"
        >
          <RegisterForm @login="changeTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/Admin/RegisterForm";
import LoginForm from "@/components/Admin/LoginForm";

export default {
  components: { RegisterForm, LoginForm },
  data() {
    return { tab: true };
  },
  methods: {
    setTab(value) {
      this.tab = value;
    },
    changeTab() {
      this.tab = !this.tab;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

.layout-signin {
  background-image: url("../../../assets/img/jpg/background-v1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;

  .logo-signin {
    text-align: center;
    margin-bottom: 5rem;
    width: 100vw;
    padding: 1rem;
  }

  .content-signin {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .tab-layout-signin {
      width: 95vw;
      background-color: white;
      height: auto;
      border-radius: 0px 0 5px 5px !important;
        background-color: transparent;
      @media (min-width: $media-breackpoint-up-sm) {
        width: 500px;
        background-color: inherit;
      }

      .tab-header-signin {
        display: flex;
        height: 3rem;
        background-color: inherit;

        .tab1,
        .tab2 {
          display: flex;
          width: 50%;
          justify-content: center;
          align-content: center;
          cursor: pointer;
          border-radius: 10px 10px 0 0;

          .text {
            display: flex;
            align-items: center;
            margin: 0;
            font-weight: 600;
            font-size: 0em + 20px / $defaultFontSize;
          }
        }

        .active {
          color: $primary-color;
          background-color: white;
          border-bottom: 2px solid transparent;
          border-top: 4px solid $primary-color;
        }

        .inactive {
          background-color: $background-grey-light;
          border-bottom: 2px solid $background-grey;
          border-top: 4px solid $background-grey;
        }

        .tab1.inactive {
          border-bottom: 2px solid $background-grey-light2;
          border-top: 4px solid $background-grey;
          border-right: 1px solid $background-grey;
          border-left: 1px solid $background-grey;
        }

        .tab2.inactive {
          border-bottom: 2px solid $background-grey-light2;
          border-top: 4px solid $background-grey;
          border-right: 1px solid $background-grey;
          border-left: 1px solid $background-grey;
        }
      }

      .tab-content-signin {
        background-color: white;
        color: black;
        padding: 16px 26px;
        text-align: center;
        border-radius: 0 0 5px 5px;
      }

      .tab-content-signin-hidden {
        display: none;
      }
    }
  }
}
</style>
