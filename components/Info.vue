<template>
    <section id='informationPage' class="info-section grid grid-cols-1 md:grid-cols-2">
        <div class="info-body flex flex-col justify-center p-20">
            <h1 class="text-2xl md:text-4xl text-purple-800 font-bold mb-6 text-left">{{fields.title}}</h1>
            
            <p class="text-left text-sm md:text-base w-full md:w-3/4">{{fields.paragraph}}</p>
            <button @click="goHome" class="info-btn mt-4 text-sm md:text-base text-left text-purple-700 font-bold"> > {{fields.buttonText}}</button>
        </div>
        <div class="info-image">
            <img :src="fields.backgroundImage.fields.file.url" class="w-full h-full object-cover">
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