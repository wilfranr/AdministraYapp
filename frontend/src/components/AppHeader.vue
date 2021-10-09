<template>
  <div class="container-max-width">
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
          <input class="login-btn" type="button" value="Ingresar" />
        </router-link>
      </div>
    </section>
  </div>
</template>