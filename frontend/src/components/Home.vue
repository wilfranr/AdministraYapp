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
        <input
          class="login-btn"
          type="button"
          value="Ingresar"
          onclick="formLogin()"
        />
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
function formLogin() {
    Swal.fire({
        title: 'Iniciar Sesión',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Ingresar',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Por favor ingrese usuario y password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })
    
}
</script>

<style>
</style>