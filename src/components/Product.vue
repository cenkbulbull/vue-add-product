<template>
	<div class="container mt-3 mb-3">
		<form @submit.prevent class="w-100 bg-white p-3 rounded ">
			<div class="row">


				<div class="form-group col-sm-6">
					<div class="form-group border rounded">
						<div class="form-group">
							<img :src="product.selectedImage == null ? '/src/assets/logo.png' : product.selectedImage" class="selectedImage rounded mx-auto d-block mt-2 p-2">
						</div>
						<div class="form-group text-center ">
							<input ref="file" type="file" style="display:none" @change="onChange($event)" accept="image/*" class="form-control-file">
							<button class="btn btn-outline-success w-50 " @click="$refs.file.click()">Resim Seç</button>
						</div>
					</div>
				</div>


				<div class="form-group col-sm-6">
					<div class="form-group">
						<input @input="$v.product.name.$touch()" v-model="product.name" type="text" class="form-control" placeholder="Ürün Adı">
					</div>
					<div class="form-group">
						<textarea @input="$v.product.description.$touch()" v-model="product.description" type="text" class="form-control" placeholder="Ürün Açıklaması"></textarea>
						<span v-if="!$v.product.description.maxLength" class="badge badge-danger p-1"> Açıklama en fazla {{$v.product.description.$params.maxLength.max}} karakter olmalı</span>
					</div>
					<div class="form-row">
						<div class="form-group col-md-6">
							<input @input="$v.product.stock.$touch()" v-model="product.stock" type="number" class="form-control" placeholder="Stok">
						</div>
						<div class="form-group col-md-6">
							<input @input="$v.product.price.$touch()" v-model="product.price" type="number" class="form-control" placeholder="Fiyat">
						</div>
					</div>
					<button :disabled="$v.$invalid" @click="addProduct()" class="btn btn-outline-info w-100">Ekle</button>
				</div>

			</div>
		</form>
	</div>
</template>

<script>
	import {required,maxLength} from "vuelidate/lib/validators"
	import {eventBus} from "../main"
	export default{
		data(){
			return{
				product:{
					name:"",
					description:"",
					stock:"",
					price:"",
					selectedImage:null
				}
			}
		},
		validations: {
			product:{
				name: {
					required,
				},
				description: {
					required,
					maxLength: maxLength(100)
				},
				stock:{
					required,
				},
				price:{
					required,
				},
				selectedImage:{
					required,
				}

			}
			
		},
		methods:{
			onChange(e){
				//console.log(e)
				const file = e.target.files[0]
				this.product.selectedImage= URL.createObjectURL(file)
			},
			addProduct(){
				//console.log(this.product)
				eventBus.$emit("product",this.product)
				this.product={
					name:"",
					description:"",
					stock:"",
					price:"",
					selectedImage:null
				}
			}
		}
	}
</script>
<style scoped>
	.container{
		width: 600px !important;
		font-size: 13px ;
	}
	.form-group textarea{
		height: 117px;
	}
	.selectedImage{
		width:250px;
		height:200px
	}

	@media screen and (max-width: 600px) {
		.container{
			width: 100% !important;
			font-size: 13px ;
		}
		form{
			width: 75% !important;
			margin: 0 auto;
		}

		.form-group input,textarea,button {
			font-size: 12px !important;
		}
		.selectedImage{
			width:200px;
			height:150px
		}

	}
</style>