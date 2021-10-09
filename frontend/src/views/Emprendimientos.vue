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

    <div class="container text-center mt-3">
        <i class="fas fa-store"></i>
        <h2>Emprendimientos</h2>
        <br> <router-link to="NuevoEmprendimiento"> <button class="btn btn-primary" type="button">Nuevo</button></router-link>
        <div class="container d-flex justify-content-end col-6 col-md-12">
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    </div>
    <div class="container py-3">
        <div class="row">
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <router-link class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    to="/#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</router-link>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    href="#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</a>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    href="#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</a>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    href="#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</a>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    href="#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</a>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <div class="col">
                <section class="mx-auto my-5" style="max-width: 23rem;">

                    <div class="card">
                        <div class="card-body bg-light d-flex flex-row">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                class="rounded-circle me-3" height="50px" width="50px" alt="avatar" />
                            <div>
                                <h5 class="card-title font-weight-bold mb-2">New spicy meals</h5>
                                <p class="card-text"><i class="far fa-clock pe-2"></i>07/24/2018</p>
                            </div>
                        </div>
                        <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                            <img class="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                alt="Card image cap" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body bg-light">
                            <p class="card-text collapse" id="collapseContent">
                                Recently, we added several exotic new dishes to our restaurant menu. They come from
                                countries such as Mexico, Argentina, and Spain. Come to us, have some wine and enjoy
                                our juicy meals from around the world.
                            </p>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse"
                                    href="#collapseContent" role="button" aria-expanded="false"
                                    aria-controls="collapseContent">Read more</a>
                                <div>
                                    <i class="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="Share this post"></i>
                                    <i class="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip"
                                        data-mdb-placement="top" title="I like it"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    
    
    
    
    
    
    
        <div class="btn-toolbar d-flex justify-content-center mb-3" role="toolbar" aria-label="Toolbar with button groups">
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