<template>
	<div>
		<h5 v-if="productList.length>0">Eklenen Ürünler</h5>
		<hr>
		<!--  Transition Olmadan
			
		<div class="row mb-3">
			<div v-for="(product,index) in productList" class="col-lg-3">
				<div @click="deleteProduct(index)" class="card" >
					<img class="card-img-top mt-2" :src="product.selectedImage">
					<div class="card-body rounded">
						<p class="card-text">{{product.description}}</p>
						<p>Ürün adı : {{product.name}}</p>
						<p>Stok Sayısı : {{product.stock}}</p>
						<p>Ürün Fiyatı : {{product.price}} </p>
					</div>
				</div>
			</div>
		</div>

		-->

		<TransitionGroup name="list" tag="div" class="row mb-3 justify-content-center ">
			<div v-for="(product,index) in productList" :key="index" class="col-sm-6 col-md-4 col-lg-3 ">
				<div @click="deleteProduct(index)" class="card mt-2" >
					<img class="card-img-top mt-2" :src="product.selectedImage">
					<div class="card-body rounded">
						<p class="card-text">{{product.description}}</p>
						<p>Ürün adı : {{product.name}}</p>
						<p>Stok Sayısı : {{product.stock}}</p>
						<p>Ürün Fiyatı : {{product.price}} ₺ </p>
					</div>
				</div>
			</div>
		</TransitionGroup>

	
	</div>
</template>

<script>
	import {eventBus} from "../main"
	export default{
		data(){
			return{
				productList:[]
			}
		},
		methods:{
			deleteProduct(index){
				this.productList.splice(index,1)
			}
		},
		watch:{
			//listenin değişmesine göre local storage liste aktarılacak
			productList(value){
				localStorage.setItem("productList",JSON.stringify(value))
			}
		},
		created(){
			//local storageden listeye veri çekiliyor
			if (localStorage.getItem("productList") !=null) {
				this.productList = JSON.parse(localStorage.getItem("productList"))
			}
			eventBus.$on("product", (product)=>{
				this.productList.push(product)
				//console.log(this.productList)
			})
		},
	}
</script>
<style scoped>
	.row{
		width: 100% !important;
		margin: 0 auto;
	}
	.card{
		width: 100% !important;
		height: 320px !important;
		font-size: 13px;
		cursor: pointer;
	}
	.card img{
		width: 100px;
		height: 100px;
		margin: 0 auto;
	}

	/*Transition Class */
	.list-enter{
		opacity: 0;
	}
	.list-enter-active{
		transition: all 1s ease;		
	}
	.list-leave {
		
	}
	.list-leave-active {
		transition: all 1s ease;
		opacity: 0;
	}

	@media screen and (max-width: 600px) {
		.row{

		}
	}
	
</style>