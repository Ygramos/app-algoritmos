<template>
  <div class="space">
    <nav>
      <ul class="menu">
        <div class="logo" style="color:white;  font-size: 20px;">
          <div>Desarrollo Frontend</div>
          Fetdevelopers
        </div>
        <li class="item">
          <router-link to="/inicio-personal"><a>inicio</a></router-link>
        </li>

        <li class="item">
          <router-link to="/cursos"><a>Cursos</a></router-link>
        </li>
        <li class="item">
          <router-link to="/"><a>Practica</a></router-link>
        </li>

        <li class="navmovil">
          <a href="#" class="menuMovil"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="menuMovil"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              /></svg
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Elementos globales */
.space {
  padding-bottom: 66px;
  z-index: 3;
  z-index: 100;
}
.menuMovil {
  width: 40px;
  height: 40px;
  background-color: #005959;
  z-index: 100;
}
nav {
  background: #92e3a9;
  padding: 5px 20px;
  position: fixed;
  width: 100%;
  height: 65px;
  z-index: 100;
}
ul {
  list-style-type: none;
}
a {
  color: white;
  text-decoration: none;
}

.logo a:hover {
  text-decoration: none;
}
.btnheader {
  padding: 7.5px 15px;
  background: rgb(42, 67, 209);
  border: 1px #00146d solid;
  color: white;
}
.btnheader:hover {
  transform: scale3d(1.3, 1.3, 1.3);
  color: white;
}
.menu li {
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
}
.logo a,
.navmovil a {
  font-size: 20px;
}
.button.secondary {
  border-bottom: 1px #444 solid;
}

/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.navmovil {
  order: 1;
}
.item.button {
  order: 2;
}
.item {
  width: 100%;
  text-align: center;
  order: 3;
  display: none;
}
.item.active {
  display: block;
}
/* Tablet menu */
@media all and (min-width: 600px) {
  .menu {
    justify-content: center;
  }
  .logo {
    flex: 1;
  }
  .item.button {
    width: auto;
    order: 1;
    display: block;
  }

  .button.secondary {
    border: 0;
  }
  .button a {
    padding: 7.5px 15px;
    background: rgb(42, 67, 209);
    border: 1px #00146d solid;
  }

  .button.secondary a {
    background: transparent;
  }
  .button a:hover {
    text-decoration: none;
  }
  a:hover {
    background: transparent;
    border-color: #bdb7b6;
    text-decoration: underline;
    transform: scale3d(1.3, 1.3, 1.3);
  }
  .button.secondary a:hover {
    color: #ddd;
  }
}
@media all and (min-width: 900px) {
  .item {
    display: block;
    width: auto;
  }
  .navmovil {
    display: none;
  }
  .logo {
    order: 0;
  }
  .item {
    order: 1;
  }

  .menu li {
    padding: 15px 10px;
  }
  .menu li.button {
    padding-right: 0;
  }
}
</style>
