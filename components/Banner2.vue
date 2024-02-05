<template>
    <section class="h-screen">
        <div class="relative h-full">
            <img class=" w-full h-full object-cover" :src="fields.backgroundImage.fields.file.url" alt="">

            <div class="absolute right-[10%] top-1/2 transform -translate-y-1/2 p-6 w-[90%] lg:w-[33%]">
                <h1 class="text-2xl md:text-4xl text-purple-800 font-bold mb-4">{{fields.title}}</h1>
                <p>{{ fields.paragraph }}</p>
                <button @click="goHome" class="banner-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mt-10 ">{{ fields.buttonText }}</button>

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