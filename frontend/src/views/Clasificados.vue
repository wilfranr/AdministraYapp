<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <!-- Container wrapper -->
            <div class="container-fluid">
                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                
                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Navbar brand -->
            <router-link class="navbar-brand mt-2 mt-lg-0" to="/"> <img src="@/assets/img/logo.png"
                width="120px" alt="" loading="lazy">
            </router-link>

            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/"
                    >Inicio</router-link
                >
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/Clasificados"
                    >Clasificados</router-link
                >
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/Comunicados"
                    >Comunicados</router-link
                >
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/Emprendimientos"
                    >Emprendimientos</router-link
                >
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/EstadoCuenta"
                    >Estado de cuenta</router-link
                >
                </li>
                <li class="nav-item">
                <router-link class="nav-link text-light" to="/Contacto"
                    >Contacto</router-link
                >
                </li>
            </ul>
                    <!-- Left links -->
                </div>
                <!-- Collapsible wrapper -->
                
                <!-- Right elements -->
                <div class="d-flex align-items-center">
                    
                    
                    <!-- Notifications -->
                    <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="#">Some news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Another news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    </ul>
                    
                    <!-- Avatar -->
                    <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle" height="25" alt=""
                    loading="lazy" />
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="#">My profile</a>
                    </li>
                        <li>
                            <a class="dropdown-item" href="#">Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
                <!-- Right elements -->
            </div>
            <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
    
        <div class="clasificados">
            <h1>CLASIFICADOS</h1><br> 
            <!-- <router-link to="/foo" tag="button">foo</router-link> -->
            <router-link to="/NuevoClasificado">
                <button class="btn btn-primary mb-4" type="button" >Nuevo</button>
            </router-link>
                       
            <div class="cards">
                <div v-for="(item, index) in notas" :key="index" class="card" style="width: 18rem;">
                    <!-- <img :src="'http://localhost:3000/'+item.image" width="100" height="200" class="card-img-top" alt="..."> -->
                    <v-img :src="`/${item.image}`" width="100%" height="200" class="card-img-top" alt="..."></v-img>
                    <div class="card-body bg-light">
                        <h5 class="card-title">{{item.nombre}}</h5>
                        <p class="card-text">{{item.descripcion.substring(0, 100)+"..."}}</p>
                            <a :href="`${item.url}`" class="btn btn-primary">Ver anuncio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            notas:[],
            nota:{email:'', nombre:'', descripcion:'',contacto:'',url:'',image:''},
            image:''
        }
    },
    created(){
        this.listarNotas()
        //,this.countDownChanged(),
        //,this.showAlert()
    },
    methods:{
      listarNotas(){
          this.axios.get('/classified')
          .then(res=>{
              console.log(res.data)
              this.notas=res.data
          })
          .catch(e=>{
              console.log(e.response)
          })
          
      },
    },
}
</script>

