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
          LoginForm
        </div>
        <div
          :class="{
            'tab-content-signin': !tab,
            'tab-content-signin-hidden': tab,
          }"
        >
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../../../components/Admin/RegisterForm";

export default {
  components: {
    RegisterForm,
  },
  data() {
    return {
      tab: false,
    };
  },
  methods: {
    setTab(value) {
      this.tab = value;
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
      border-radius: 0 0 5% 5% !important;

      @media (min-width: $media-breackpoint-up-sm) {
        width: 500px;
      }

      .tab-header-signin {
        display: flex;
        height: 3rem;

        .tab1,
        .tab2 {
          display: flex;
          width: 50%;
          justify-content: center;
          align-content: center;
          cursor: pointer;

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
          border-bottom: 2px solid $background-grey-light2;
          border-top: 4px solid $background-grey;
        }

        .tab1.inactive {
          border-right: 2px solid $background-grey-light2;
          border-left: 2px solid transparent;
        }

        .tab2.inactive {
          border-right: 2px solid transparent;
          border-left: 2px solid $background-grey-light2;
        }
      }

      .tab-content-signin {
        background-color: white;
        color: black;
        padding: 16px 46px;
        text-align: center;
        border-radius: 0 0 5% 5% !important;
      }

      .tab-content-signin-hidden {
        display: none;
      }
    }
  }
}
</style>
