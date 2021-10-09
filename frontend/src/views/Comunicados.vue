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
    <div class="container mb-5">
      <h2>COMUNICADOS</h2>
      <br /><br />
      <router-link to="/NuevoComunicado">
        <button class="btn btn-primary" type="button">Nuevo</button></router-link
      ><br /><br />
      <div class="row mb-5">
        <div class="col-3">
          <img src="@/assets/img/tuboRoto.jpeg" alt="" class="img-fuid" />
          <p class="lead text-center text-light">04-septiembre-2021</p>
        </div>
        <div class="col-12 col-md-9">
          <a href="#">
            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
          </a>
          <p class="text-light">
            Se informa a los residentes que el dia 15 de septiembre se realizará
            un corte de agua de 8:00am a 6:00pm para la reparacion de la
            tubería.
          </p>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
            molestiae perferendis?
          </p>
          <a href="#" class="btn btn-light btn-sm">Ver más...</a>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-3">
          <img src="@/assets/img/tuboRoto.jpeg" alt="" class="img-fuid" />
          <p class="lead text-center text-light">04-septiembre-2021</p>
        </div>
        <div class="col-12 col-md-9">
          <a href="#">
            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
          </a>
          <p class="text-light">
            Se informa a los residentes que el dia 15 de septiembre se realizará
            un corte de agua de 8:00am a 6:00pm para la reparacion de la
            tubería.
          </p>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
            molestiae perferendis?
          </p>
          <a href="#" class="btn btn-light btn-sm">Ver más...</a>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-3">
          <img src="@/assets/img/tuboRoto.jpeg" alt="" class="img-fuid" />
          <p class="lead text-center text-light">04-septiembre-2021</p>
        </div>
        <div class="col-12 col-md-9">
          <a href="#">
            <h3 class="text-light text-decoration-none">Corte de agua.</h3>
          </a>
          <p class="text-light">
            Se informa a los residentes que el dia 15 de septiembre se realizará
            un corte de agua de 8:00am a 6:00pm para la reparacion de la
            tubería.
          </p>
          <p class="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
            voluptatibus voluptate aspernatur fugit est qui nesciunt obcaecati
            molestiae perferendis?
          </p>
          <a href="#" class="btn btn-light btn-sm">Ver más...</a>
        </div>
      </div>
      <div
        class="btn-toolbar d-flex justify-content-center mb-3"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-light">Inicio</button>
          <button type="button" class="btn btn-light">1</button>
          <button type="button" class="btn btn-light">2</button>
          <button type="button" class="btn btn-light">3</button>
          <button type="button" class="btn btn-light">4</button>
          <button type="button" class="btn btn-light">Fin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>