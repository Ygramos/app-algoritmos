<template>
  <div>
    <div class="header-content">
      <button @click="openTabs(1)" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          /></svg
        >Maquetacion¿
      </button>
      <button @click="openTabs(2)" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          /></svg
        >Temas
      </button>
      <button @click="openTabs(3)" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          /></svg
        >Plugins
      </button>
      <button @click="openTabs(5)" class="btn">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        >
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Genesis
      </button>
      <button @click="openTabs(4)" class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          /></svg
        >Desarrollo web
      </button>
    </div>
    <div class="card-container" v-if="openTabsActive == 1">
      <div class="card" v-for="(maqueta, index) in maquetacion" :key="index">
        <!-- en el card de arriba va el v-for -->

        <img :src="maqueta.img" alt="i.nombre" />
        <div class="desc">
          {{ maqueta.desc }}
        </div>
      </div>
    </div>

    <div class="card-container" v-if="openTabsActive == 2">
      <div class="card" v-for="(tema, i) in temas" :key="i">
        <!-- en el card de arriba va el v-for -->
        <img :src="tema.img" alt="i.nombre" />
        <div class="desc">
          {{ tema.desc }}
        </div>
      </div>
    </div>
    <div class="card-container" v-if="openTabsActive == 3">
      <div class="card" v-for="(pluggin, z) in pluggins" :key="z">
        <img :src="pluggin.img" alt="i.nombre" />
        <div class="desc">
          {{ pluggin.desc }}
        </div>
      </div>
    </div>
    <div class="card-container" v-if="openTabsActive == 5">
      <div class="card" v-for="(genesi, l) in genesis" :key="l">
        <img :src="genesi.img" alt="i.nombre" />
        <div class="desc">
          {{ genesi.desc }}
        </div>
      </div>
    </div>
    <div class="card-container" v-if="openTabsActive == 4">
      <div class="card" v-for="(desarrollo, x) in desarrollos" :key="x">
        <img :src="desarrollo.img" alt="i.nombre" />
        <div class="desc">
          {{ desarrollo.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTabsActive: 1,
      maquetacion: [
        {
          desc: `HTML y CSS para WordPress - 
                Aprende a manejar los lenguajes más importantes a la hora de crear un sitio web desde cero.`,
          img: require("@/assets/curso-html-css.png"),
        },
        {
          desc: `Introducción al preprocesador LESS -
                Si vas a dedicarte a desarrollar temas de WordPress de forma profesional, te interesará siempre ser lo más eficiente posible. Gracias al preprocesador de CSS, LESS, podrás crear tus hojas de estilo más rápido y de forma mejor organizada.`,
          img: require("@/assets/curso-less.png"),
        },
        {
          desc: `Si vas a dedicarte a desarrollar temas de WordPress de forma profesional, te interesará siempre ser lo más eficiente posible. Gracias al preprocesador de CSS, LESS, podrás crear tus hojas de estilo más rápido y de forma mejor organizada.`,
          img: require("@/assets/curso-grid.png"),
        },
        {
          desc: `CSS GRID - Como no podría ser de otra manera una vez visto Flexbox es momento de aprender a utilizar CSS Grid.`,
          img: require("@/assets/curso-grid.png"),
        },
        {
          desc: `Diseño web responsive con Bootstrap 3 - Bootstrap ha sido durante mucho tiempo y sigue siendo el framework más popular de HTML, CSS y JS para diseñar proyectos webs responsive.`,
          img: require("@/assets/curso-grid.png"),
        },
      ],
      temas: [
        {
          desc: `En este curso voy a enseñarte a convertir sitios web estáticos construidos con HTML, CSS y JS, en sitios web dinámicos y 100% administrables por el usuario final. Y esto lo lograrás gracias a la creación de temas de WordPress.`,
          img: require("@/assets/curso-wordpress.png"),
        },
        {
          desc: `Creación de Temas Hijo (Child Themes)`,
          img: require("@/assets/curso-wordpress.png"),
        },
        {
          desc: `Este curso va dirigido a todo profesional que se dedique al diseño y desarrollo de temas de WordPress.`,
          img: require("@/assets/curso-bloques.png"),
        },
      ],
      pluggins: [
        {
          desc: `En este curso avanzado de desarrollo WordPress, te mostraré qué son los Hooks y su gran importancia para convertirte en mejor profesional de WordPress.`,
          img: require("@/assets/curso-hooks.png"),
        },
        {
          desc: `Este curso va dirigido a todo profesional que se dedique al diseño y desarrollo de temas de WordPress.`,
          img: require("@/assets/curso-plugins.png"),
        },
        {
          desc: `Advanced Custom Fields
                Mejora la estructura de tus desarrollos mediante los campos personalizados.`,
          img: require("@/assets/curso-acf.png"),
        },
        {
          desc: `curso de Diseño y desarrollo de temas de WordPress te mostré cómo crear tus propios tipos de contenido (CPT)`,
          img: require("@/assets/curso-cpt.png"),
        },
        {
          desc: `Ajax en WordPress En este curso te explicaré de forma simple:
                  Qué es el Ajax.
                  Cómo se puede implementar de la forma que WordPress recomienda.`,
          img: require("@/assets/curso-ajax.png"),
        },
      ],
      genesis: [
        {
          desc: `Introducción a Genesis Framework - En este curso aprenderás los fundamentos del framework más popular de WordPress: Genesis Framework.`,
          img: require("@/assets/curso-genesis.png"),
        },
        {
          desc: `Introducción a Genesis Framework – Novedades - Este es un curso dirigido a aquellas personas que acaban de aterrizar al universo de Genesis Framework atraídas con aprender a desarrollar temas hijo.`,
          img: require("@/assets/curso-genesis.png"),
        },
        {
          desc: `Personalizando temas con Genesis Framework - Ahora que ya dominas las bases de este framework y qué posibilidades ofrece a nivel de usuario es momento de meter las manos en el código. En este curso aprenderás a personalizar temas hijo de Genesis Framework.`,
          img: require("@/assets/curso-genesis.png"),
        },
        {
          desc: `Personalizando temas con Genesis Framework - Ahora que ya dominas las bases de este framework y qué posibilidades ofrece a nivel de usuario es momento de meter las manos en el código. En este curso aprenderás a personalizar temas hijo de Genesis Framework`,
          img: require("@/assets/curso-genesis.png"),
        },
        {
          desc: `Desarrollo de temas hijo para Genesis Framework - En este curso aprenderás a desarrollar un tema hijo para Genesis Framework de inicio a fin.`,
          img: require("@/assets/curso-genesis.png"),
        },
      ],
      desarrollos: [
        {
          desc: `Este curso va dirigido a todo profesional que se dedique al diseño y desarrollo de temas de WordPress.`,
          img: require("@/assets/curso-php.png"),
        },
        {
          desc: `JavaScript ES5
                Aprenderás a utilizar el lenguaje desde cero y a comprender su sintaxis.`,
          img: require("@/assets/curso-js.png"),
        },
        {
          desc: `JavaScript ES6
                  Aprende todas las novedades introducidas en la especificación ECMAScript 20015 (ES6).`,
          img: require("@/assets/curso-js.png"),
        },
        {
          desc: `Introducción a Gulp
                🤘😎Este curso ha sido actualizado para que sea válido con las versiones 4.x.x de Gulp.`,
          img: require("@/assets/curso-gulp.png"),
        },
        {
          desc: `Introducción al Web Hosting
                🤘😎Este curso ha sido actualizado para que aprendas a publicarlos en un hosting adecuado..`,
          img: require("@/assets/curso-hosting.png"),
        },
      ],
    };
  },
  methods: {
    openTabs(tabsActive) {
      this.openTabsActive = tabsActive;
      console.log(tabsActive);
    },
  },
};
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
}

.header-content {
  flex-wrap: wrap;
  margin: auto;
  align-content: center;
  text-align: center;
  margin-top: 20px;
}
.card-container {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 10px;
  width: 180px;
  height: 34px;
  color: #92e3a9;
  margin-left: 10px;
  border: solid 1px;
  border-color: #92e3a9;
  background-color: white;
  display: inline-flex;
  border-radius: 10px;
  text-align: center;
}
.btn svg {
  width: 20px;
  height: 20px;
}
.btn:hover {
  background-color: #92e3a9;
  color: white;
}
.desc {
  font-size: 20px;
  font-stretch: semi-expanded;
  font-weight: 700;
  color: #92e3a9;
  text-align: justify;
}

.card img {
  width: 310px;
  height: 200px;
  border-radius: 20px;
}
.card {
  width: 310px;
  height: 340px;
  border-radius: 10px;
  margin: 20px;
  background-color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale3d(1.1, 1.1, 1.1);
}
.desc {
  font-size: 15px;
  color: rgb(100, 98, 98);
  text-align: center;
}
</style>
