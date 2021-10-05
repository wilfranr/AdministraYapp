<template>
  <div>
    <section id="header">
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/img/logo.png" alt="logo" width="120px"
        /></router-link>
      </div>
      <div id="userName">
        Invitado <img src="@/assets/img/user.svg" alt="user" width="20px" />
      </div>
      <div class="login">
        <router-link to="login">
          <input
            class="login-btn"
            type="button"
            value="Ingresar"
          />
        </router-link>
      </div>
    </section>
    <section id="panel">
      <div class="grid">
        <div>
          <router-link to="clasificados"
          ><img src="@/assets/img/Clasificados.png" alt="" width="150px"
        /></router-link>
        </div>
        <div>
          <router-link to="comunicados"
          ><img src="@/assets/img/Comunicados.png" alt="" width="150px"
        /></router-link>
        </div>
        <div>
          <router-link to="contacto"
          ><img src="@/assets/img/Contacto.png" alt="" width="150px"
          /></router-link>
        </div>
        <div>
          <router-link to="estadocuenta"
          ><img src="@/assets/img/EstadoCuenta.png" alt="" width="150px"
          /></router-link>
        </div>
        <div>
          <router-link to="emprendimientos"
          ><img src="@/assets/img/store.png" alt="" width="150px"
          /></router-link>
        </div>
        <div>
          <router-link to="about"
          ><img src="@/assets/img/Acerca.png" alt="" width="150px"
          /></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {},
};

</script>

<style>
</style>