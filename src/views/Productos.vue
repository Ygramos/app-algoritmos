<template>
  <div class="container ">
    <div class="card" v-for="(i, index) in productos" :key="index">
      <img :src="i.img" :alt="i.nombre" />
      <div class="titulo">{{ i.nombre }}</div>
      <div class="precio">$ {{ i.price }}</div>
      <div class="footer">
        <button
          class="btn"
          @click="addProducsCart(i.id, i.nombre, i.price, i.img)"
        >
          Comprar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nicknombre: "Manz",
      life: 99,
      product: [],
      productos: [
        {
          id: 1,
          nombre: "CORE I7 10875H + RTX 2070 SUPER",
          price: 4500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16331241/resize/255/255?1620156653",
        },
        {
          id: 2,
          nombre: "CORE I7 10750H + RTX 3060 - MSI",
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16296326/resize/255/255?1619995655",
        },
        {
          id: 3,
          nombre: "RYZEN 7 4800H + RX 5500 - MSI",
          price: 2500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16296460/resize/255/255?1619996376",
        },
        {
          id: 4,
          nombre: "CORE I7 9750H + GTX 1050 4GBS - HP",
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16388808/resize/255/255?1620506748",
        },
        {
          id: 5,
          nombre: "CORE I5 9300H + GTX 1050 3GBS - HP ",
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16388921/resize/255/255?1620433480",
        },
        {
          id: 6,
          nombre: "CORE I5 9300H + GTX 1050 3GBS / S..",
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16390513/resize/255/255?1620433493",
        },
        {
          id: 7,
          nombre: "CORE I5 10300H + GTX 1050 3GBS - HP",
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16391077/resize/255/255?1620433461",
        },
        {
          id: 8,
          nombre: 'SAMSUNG 49" CURVO CORPORATIVO (14..',
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/15686299/resize/255/255?1620250236",
        },
        {
          id: 9,
          nombre: 'SAMSUNG 34" CURVO G5 (165HZ-1MS)',
          price: 4500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/4638272/resize/255/255?1620107063",
        },
        {
          id: 10,
          nombre: 'LG 34" IPS GAMING CURVO (144HZ-1M..',
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16056558/resize/255/255?1620103669",
        },
        {
          id: 11,
          nombre: 'GIGABYTE 27" 2K CURVO (165HZ-1MS-..',
          price: 2500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/12723767/resize/255/255?1620105000",
        },
        {
          id: 12,
          nombre: 'ASUS 32" 2K TUF GAMING CURVO (1M..',
          price: 8500,
          img:
            "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/11580104/resize/255/255?1620248020",
        },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("product")) {
      try {
        this.product = JSON.parse(localStorage.getItem("product"));
      } catch (e) {
        localStorage.removeItem("product");
      }
    }
  },
  methods: {
    addProducsCart(id, nombre, price, imagen) {
      let array = {
        id: id,
        nombre: nombre,
        price: price,
        imagen: imagen,
      };

      this.product.push(array);
      this.saveProducts();
    },

    saveProducts() {
      const parsed = JSON.stringify(this.product);
      localStorage.setItem("product", parsed);
    },
    removeProducts(x) {
      this.product.splice(x, 1);
      this.saveProducts();
    },
  },
};
</script>

<style scoped>
.precio {
  font-size: 20px;
  font-stretch: semi-expanded;
  font-weight: 700;
}

.container {
  width: 100%;
  max-width: 1400px;
  display: flex;
  background-color: rgb(255, 255, 255);
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.card img {
  width: 200px;
  height: 200px;
}
.card {
  width: 220px;
  height: 340px;
  border-radius: 10px;
  margin: 20px;
  background-color: white;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale3d(1.1, 1.1, 1.1);
}
.titulo {
  font-size: 15px;
  color: rgb(100, 98, 98);
  text-align: center;
}

.btn {
  margin: auto;
  background-color: rgba(62, 60, 173);
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  color: rgba(62, 60, 173);
  background-color: white;
  border: solid 1px rgba(62, 60, 173);
  padding-right: 50px;
  transition: all 0.75s;
}
.content {
  padding: 50px;
}

.footer {
  margin: auto;
  padding: 20px;
}
</style>
