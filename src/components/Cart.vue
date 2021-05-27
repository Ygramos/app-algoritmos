<template>
  <div class="items-cart">
    <div href="#" class="car" @click="OpenItemsaCarFn">
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
    <span class="contentcar ">{{ valor }}</span>
    <div>
      
    </div>
    <div
      class="cartcomponent "
      v-bind:class="{ opencomponentcar: openCar == true }"
    >
      <div class="caropen">
        <div class="headercar">
          Su carrito de compra
        </div>
        <div class="bodyCar">
          <div v-for="(items, index) in producCart" :key="index">
            <div class="listCar">
              <img :src="items.imagen" alt="s" />
              <div class="">{{ items.nombre }}</div>
              <div
                style=" font-size: 20px;font-stretch: semi-expanded;font-weight: 700;"
              >
                {{ items.price }}
              </div>
              <div style="width:40px; height:30px; padding:4px;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="footercar">
          <button class="btnheader " @click="OpenItemsaCarFn">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valor: 0,
      openCar: false,
      producCart: null,
    };
  },
  mounted() {
    this.producCart = JSON.parse(localStorage.getItem("product"));
    this.valor = this.producCart.length;
  },

  methods: {
    listar() {
      let carrito = JSON.parse(localStorage.getItem("product"));
      this.valor = carrito.length;
    },
    OpenItemsaCarFn() {
      console.log('dd');
      this.openCar = !this.openCar;
    },
  },
};
</script>

<style>
.listCar {
  display: flex;
}
.car {
  width: 30px;
  text-align: center;
  height: 30px;
  display: block;
  margin: auto;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  color: white;
  text-decoration: none;
}

.contentcar {
  background-color: red;
  border-radius: 50px;
  color: white;
  margin: auto;
  padding: 3px;
  text-decoration: none;
  -transform: translateY(40px);
}
.items-cart {
  display: flex;
  text-decoration: none;
}
.items-cart:hover {
  background: transparent;

  /* transform: scale(0.8); */
}
.bodyCar img {
  width: 90px;
  height: 80px;
  padding: 1px;
  margin: auto;
  justify-content: center;
}
.cartcomponent {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.9s ease;
  transform: translateX(150%);
}
.opencomponentcar {
  transform: translateX(0);
}
.headercar {
  background-color: rgba(62, 60, 173);
  padding: 3%;
  text-align: center;
  color: #fff;
  border-radius: 10px;
}
.bodyCar {
  padding-top: 4%;
}
.caropen {
  padding: 21px;
}
.footercar {
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #fff;
}
</style>
