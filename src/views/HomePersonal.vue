<template>
  <div>
    <img src="../assets/4136918.jpg" alt="" srcset="" />
    <hr class="linea" />
    <div class="container">
      <div v-for="(i, index) in infoHome" :key="index">
        <div class="card">
          <img :src="i.img" alt="" srcset="" />
          <div class="text">
            <h3>{{ i.title }}</h3>
            {{ i.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <br /><br /><br /><br />

      asssss dddd
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoHome: [
        {
          title: "¿Que es HTML?",
          img: require("@/assets/PageDeveloper.png"),
          desc: `El HTML o Lenguaje de Marcado de Hipertextos
                es el lenguaje utilizado para crear documentos en la web.
                El HTML proporciona significado (semántica) y estructura al contenido de una página web. Además, funciona con tags
                (etiquetas), gracias a los cuales podemos organizar el contenido de una página web: texto, imágenes,             
                formularios, tablas, links, etc.
                ¿Y qué es el CSS o Hojas de Estilo en Cascada?  Se trata del lenguaje que usaremos para la presentación (diseño o aspecto visual) del contenido de una página web. Utilizando CSS daremos estilo a cualquier tag de HTML.`,
        },
        {
          title: "¿Que es javascript",
          img: require("@/assets/webpagepersonal-01.png"),
          desc: `JavaScript es un lenguaje de programación
           o de secuencias de comandos que te permite implementar
           funciones complejas en páginas web, cada vez que una página web 
           hace algo más que sentarse allí y mostrar información estática para que la veas, 
           muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D,
           desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente
           JavaScript está involucrado. Es la tercera capa del pastel de las tecnologias`,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ABeeZee&display=swap");
.linea {
  color: #92e3a9;
}
img {
  width: 100%;
  height: 700px;
}
.container {
  width: 100%;
  height: 100%;
  background-color: transparent;

  align-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.content {
  width: 100%;
  height: 100%;
}

.card {
  width: 50%;
  height: 450px;
  float: left;
  padding: 10px;
}

@media (max-width: 500px) {
  .card {
    width: auto;
    float: none;
  }
}
.card img {
  width: 50%;
  height: 50%;
}
.text {
  text-align: justify;
}
</style>
