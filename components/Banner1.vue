<template>
    <section class="banner-section h-screen">
        <div class="banner-body relative h-full">

            <img class=" w-full h-full object-cover" :src="fields.backgroundImage.fields.file.url" alt="Banner">


            <div class="absolute left-1/4 top-1/3 p-8">
                <h1 class="text-2xl md:text-4xl text-purple-800 font-bold mb-8">{{ fields.title }}</h1>
                <button @click="goHome" class="banner-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 ">{{fields.buttonText}}</button>
            </div>


        </div>
    </section>
</template>

<script>
export default {
  props:{
    fields: {
    type:Object,
    default:() => ({})
  }
},
  methods: {
    goHome() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}
</script>