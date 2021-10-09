 
<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="@/assets/img/logo.png"
              width="120px"
              alt=""
              loading="lazy"
            />
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
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger"
              >1</span
            >
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
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
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              class="rounded-circle"
              height="25"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
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
    <br /><br /><br />
    <div class="container mb-5">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      > {{mensaje.texto}}
      </b-alert>
      <h1 class="text-white text-center">Clasificado</h1>
      
      <!-- EDITAR CLASIFICADO -->
      <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3 class="text-white text-center">Editar clasificado</h3>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Email"
          aria-label=".form-control-lg example"
          v-model="notaEditar.email"
        /><br />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Titulo"
          aria-label=".form-control-lg example"
          v-model="notaEditar.nombre"
        />
        <br />
        <input
          class="form-control"
          type="text"
          placeholder="Descripción"
          aria-label="default input example"
          v-model="notaEditar.descripcion"
        /><br />
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Contacto"
          aria-label=".form-control-sm example"
          v-model="notaEditar.contacto"
        /><br />
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Url"
          aria-label=".form-control-sm example"
          v-model="notaEditar.url"
        />
        <br />
        <!-- <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Imagen"
          aria-label=".form-control-sm example"
          v-model="notaEditar.image"
        /> -->
        <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="previewFiles" class="form-control" id="customFile" />        
        <br/>
        <img :src="`http://localhost:3000/${notaEditar.image}`" width="120" height="80">        
        <br/>
        <b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
        <b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
      </form>

      <!-- AGREGAR CLASIFICADO -->
      <form @submit.prevent="agregarNota()" enctype="multipart/form-data" v-if="!editar">
        <h3 class="text-white text-center">Nuevo clasificado</h3>
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Email"
          aria-label=".form-control-lg example"
          v-model="nota.email"
        /><br />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Titulo"
          aria-label=".form-control-lg example"
          v-model="nota.nombre"
        />
        <br />
        <input
          class="form-control"
          type="text"
          placeholder="Descripción"
          aria-label="default input example"
          v-model="nota.descripcion"
        /><br />
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Contacto"
          aria-label=".form-control-sm example"
          v-model="nota.contacto"
        /><br />
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Url"
          aria-label=".form-control-sm example"
          v-model="nota.url"
        />
        <br />
        <!-- <input
          class="form-control form-control-sm"
          type="text"
          placeholder="Imagen"
          aria-label=".form-control-sm example"
          v-model="nota.image"
        /> -->
        <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="previewFiles" class="form-control" id="customFile" />
        <br/>
        <!-- <input type="file" @change="previewFiles" multiple> https://stackoverflow.com/questions/45179061/file-input-on-change-in-vue-js-->
        <br />
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>
      </form>
      <br />
      <!-- <input type="file" name="Examinar" id="Examinar" />
      <input class="btn btn-info" type="submit" value="Crear" /> -->

      <table class="table bg-light">
        <thead>
            <tr>
            <th scope="col">Email</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Contacto</th>
            <th scope="col">Url</th>
            <th scope="col">Imagen</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in notas" :key="index">
                <td>{{item.email}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
                <td>{{item.contacto}}</td>
                <td>{{item.url}}</td>
                <!-- <td>{{item.image}}</td> -->
                <td> 
                  <img :src="'http://localhost:3000/'+item.image" width="120" height="80">
                  </td>    
                <td> 
                    <b-button class="btn-warning btn-sm mx-2 mb-2" height="90%" style="width: 70%;" @click="activarEdicion(item._id)">Editar</b-button>
                    <b-button class="btn-danger btn-sm mx-2" height="90%" style="width: 70%;" @click="eliminarNota(item._id)">Eliminar</b-button>                    
                    
                </td>
            </tr>            
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    
    data(){
        return{
            notas:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,
            nota:{email:'', nombre:'', descripcion:'',contacto:'',url:'',image:''},
            image:'',
            editar: false,
            notaEditar:{},
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
      previewFiles(event) {
        //console.log(event.target.files[0]);
        this.image = event.target.files[0]
      },
      agregarNota(){
        const formData = new FormData()
        formData.append('image', this.image)
        formData.append('email', this.nota.email)
        formData.append('nombre', this.nota.nombre)
        formData.append('descripcion', this.nota.descripcion)
        formData.append('contacto', this.nota.contacto)
        formData.append('url', this.nota.url)
        
        //this.axios.post('/nuevo-classified',formData)
        this.axios.post('/nuevo-classified',formData)
        .then(res=>{
            this.notas.push(res.data)
            this.nota.email =''
            this.nota.nombre =''
            this.nota.descripcion =''
            this.nota.contacto =''
            this.nota.url =''
            this.nota.image =''
            this.mensaje.color='success'
            this.mensaje.texto='Clasificado agregado'
            this.showAlert()
        })
        .catch(e=>{
            console.log(e.response)
            if(e.response.data.error.erros.nombre.message){
                this.mensaje.texto = e.response.data.error.erros.nombre.message
            }else{
                this.mensaje.texto = 'Error de sistema'
            }
            this.mensaje.color = 'danger'
            this.showAlert()
        })


        // this.axios.post('/nuevo-classified',this.nota)
        // .then(res=>{
        //     this.notas.push(res.data)
        //     this.nota.email =''
        //     this.nota.nombre =''
        //     this.nota.descripcion =''
        //     this.nota.contacto =''
        //     this.nota.url =''
        //     this.nota.image =''
        //     this.mensaje.color='success'
        //     this.mensaje.texto='Clasificado agregado'
        //     this.showAlert()
        // })
        // .catch(e=>{
        //     console.log(e.response)
        //     if(e.response.data.error.erros.nombre.message){
        //         this.mensaje.texto = e.response.data.error.erros.nombre.message
        //     }else{
        //         this.mensaje.texto = 'Error de sistema'
        //     }
        //     this.mensaje.color = 'danger'
        //     this.showAlert()
        // })
      },
      eliminarNota(id){
          this.axios.delete(`/classified/${id}`)
          .then(res=>{
              const index = this.notas.findIndex(item=> item._id===res.data._id)
              this.notas.splice(index,1)
              this.mensaje.color='success'
              this.mensaje.texto='Clasificado eliminado'
              this.showAlert()
          })
          .catch(e=>{
              console.log(e.response)
          })
      },
      activarEdicion(id){
          this.editar = true
          this.axios.get(`classified/${id}`)
          .then(res=>{
              this.notaEditar = res.data                
          })
          .catch(e=>{
              console.log(e.response)
          })
      },
      editarNota(item){
          this.editar = false
          const formData = new FormData()
          formData.append('image', this.image)
          formData.append('email', this.notaEditar.email)
          formData.append('nombre', this.notaEditar.nombre)
          formData.append('descripcion', this.notaEditar.descripcion)
          formData.append('contacto', this.notaEditar.contacto)
          formData.append('url', this.notaEditar.url)
          formData.append('old_image', this.notaEditar.image)
          this.axios.put(`/classified/${item._id}`,formData)
          //this.axios.put(`/classified/${item._id}`,item)
          .then(res=>{
              const index = this.notas.findIndex(n => n._id===res.data._id)
              this.notas[index].email = res.data.email
              this.notas[index].nombre = res.data.nombre
              this.notas[index].descripcion = res.data.descripcion
              this.notas[index].contacto = res.data.contacto
              this.notas[index].url = res.data.url
              this.notas[index].image = res.data.image
              this.mensaje.color='success'
              this.mensaje.texto='Clasificado editado'
              this.showAlert()
          })
          .catch(e=>{
              console.log(e.response)
          })
      },
      countDownChanged(dismissCountDown){
          this.dismissCountDown = dismissCountDown
      },
      showAlert(){
          this.dismissCountDown = this.dismissSecs
      }
    },
}
</script>
