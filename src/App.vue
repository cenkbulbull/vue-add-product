<template>
  <div id="app">
    <div class="text-center">
      <Product/>
      <Products/>
    </div>
  </div>
</template>

<script>
  import Product from "./components/Product"
  import Products from "./components/Products"
  export default {
    components:{
      Product,
      Products
    }
  }
</script>

<style>
  /*
font-family: 'Work Sans', sans-serif;
font-family: 'Poppins', sans-serif;
*/
  @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans:wght@400;700&display=swap');
  body{
    background-color: #f1f8ff;
    font-family: 'Work Sans', sans-serif;
  }
</style>
