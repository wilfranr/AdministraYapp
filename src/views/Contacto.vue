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

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 pb-5">
          <form action="#" method="post">
            <div class="card border-light rounded-5">
              <div class="card-header p-0">
                <div class="bg-custom text-light text-center py-2">
                  <h3><i class="fa fa-envelope"></i>Contáctanos</h3>
                  <p class="m-0">
                    Tienes algo que contarnos? Con gusto te ayudaremos
                  </p>
                </div>
              </div>
              <div class="card-body p-3">
                <!--Body-->
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-user text-secondary m-1"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre y Apellido"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-envelope text-secondary m-1"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="ejemplo@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="far fa-building text-secondary m-1"></i>
                      </div>
                    </div>
                    <select
                      class="form-select text-secondary"
                      aria-label="Default select example"
                    >
                      <option selected>Seleccione la torre</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fas fa-house-user text-secondary m-1"></i>
                      </div>
                    </div>
                    <input
                      type="number"
                      class="form-control"
                      id="apto"
                      name="apto"
                      placeholder="Apartamento"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-comment text-secondary m-1"></i>
                      </div>
                    </div>
                    <textarea
                      class="form-control"
                      placeholder="Envianos tu Mensaje"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="text-center">
                  <input
                    type="submit"
                    value="Enviar"
                    class="btn btn-custom btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </form>
          <!--Form with header-->
        </div>
        <div class="col-12 col-md-8 col-lg-6 pb-5">
          <div class="card-body p-3">
            <div class="card border-light rounded-5">
              <div class="card-header p-0">
                <div class="bg-custom text-light text-center py-2">
                  <h3>
                    <i class="fas fa-phone"></i><slot></slot> Directorio
                    telefónico
                  </h3>
                  <p>
                    Administración:
                    <a href="#" class="text-decoration-none text-info"
                      >3001234568</a
                    >
                  </p>
                  <p>
                    Recepción:
                    <a href="#" class="text-decoration-none text-info"
                      >3001234568</a
                    >
                  </p>
                  <p>
                    Seguridad:
                    <a href="#" class="text-decoration-none text-info"
                      >3001234568</a
                    >
                  </p>
                  <p>
                    Emergencias:
                    <a href="#" class="text-decoration-none text-info"
                      >3001234568</a
                    >
                  </p>
                  <p>
                    Email:
                    <a href="#" class="text-decoration-none text-info"
                      >ejemplo@ejemplo.com</a
                    >
                  </p>
                  <p>
                    Dirección:
                    <a href="#" class="text-decoration-none text-info"
                      >Av. Siempre viva 123</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>