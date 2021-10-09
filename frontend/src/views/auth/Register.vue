<template>
  <div>
<AppHeader></AppHeader>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center"></div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap py-5">
              <div class="img d-flex align-items-center justify-content-center">
                <img src="@/assets/img/logo.png" alt="" width="180%" />
              </div>
              <p class="text-center">Registro</p>
              <form action="#" class="login-form mt-2">
                <div class="form-group">
                  <!-- <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-user"></span></div> -->
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Seleccione un Rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Seguridad</option>
                    <option value="3">Tercero</option>
                    <option value="4">Propietario</option>
                    <option value="5">Residente</option>
                  </select>
                  <input
                    type="text"
                    class="form-control mt-2"
                    placeholder="Nombres y Apellidos"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mt-2"
                    placeholder="Torre"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mt-2"
                    placeholder="Apartamento"
                    required
                  />
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Identificación"
                    required
                  />
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Teléfono fijo"
                  />
                  <input
                    type="number"
                    class="form-control mt-2"
                    placeholder="Celular"
                    required
                  />
                  <input
                    type="email"
                    class="form-control mt-2"
                    placeholder="E-mail"
                    required
                  />
                </div>
                

                <div class="form-group mt-2">
                  <button
                    type="submit"
                    class="btn form-control btn-primary rounded submit px-3"
                  >
                    Registrar
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components:{
      AppHeader,
      AppFooter
  }
}
</script>