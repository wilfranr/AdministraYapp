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