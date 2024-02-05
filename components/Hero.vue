<template>
  <section class="hero-section">
    <div class="hero-body grid-container relative grid">

      <img class="hero-picture w-full h-auto" :src="fields.backgroundImage.fields.file.url">

      <img class="company-logo absolute top-0 left-0 z-10 w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 h-auto ml-4 sm:ml-8 md:ml-28 mt-2 sm:mt-6 md:mt-10" src="../static/images/logo-white.svg" alt="">


      <div class="overlay grid place-items-center absolute inset-0">
        <div class="text-center">
          <h1 class="hero-title text-white mb-2 xs:mb-3 text-4xl xs:text-5xl sm:text-6xl md:text-7xl hollow-text fade-in">{{ fields.subtitle }}</h1>
          <h1 class="hero-title text-white mb-4 xs:mb-5 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold fade-in">{{ fields.title }}</h1>
          <button @click="wasButtonClicked" class="hero-cta bg-purple-500 hover:bg-purple-400 text-white font-bold py-1 xs:py-2 px-2 xs:px-4 fade-in">{{ fields.buttonText }}</button>
        </div>
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
    wasButtonClicked() {
      const informationPage = document.querySelector('#informationPage'); 
      if (informationPage) {
        window.scrollTo({
          top: informationPage.offsetTop,
          behavior: 'smooth', 
        });
      }
    },
  },
};

</script>


<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.hollow-text {
  -webkit-text-stroke: 1px white;
  color: transparent;
}
</style>
