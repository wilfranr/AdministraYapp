<template>
  <div class="container">
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center mt-5">
				
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap py-5">
                        <router-link to="/">
							<div class="img d-flex align-items-center justify-content-center" ><img src="@/assets/img/logo.png" alt="" width="180%"></div>
						</router-link>
						<form action="#" class="login-form mt-2">
		      		<div class="form-group">
		      			<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-user"></span></div>
		      			<input type="text" class="form-control" placeholder="Usuario" required>
		      		</div>
	            <div class="form-group">
	            	<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-lock"></span></div>
	              <input type="password" class="form-control mt-3" placeholder="Password" required>
	            </div>
	            <div class="form-group d-md-flex">
								<div class="w-100 text-md-right">
									<a href="#">Recuperar contraseña</a>
								</div>
	            </div>
	            <div class="form-group">
	            	<button type="submit" class="btn form-control btn-primary rounded submit px-3">Ingresar</button>
	            </div>
	          </form>
	          <div class="w-100 text-center mt-4 text">
	          	<p class="mb-0">No tienes cuenta?</p>
		          <router-link to="Register">
					  <a href="#">Registrar</a>
				  </router-link>
	          </div>
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