<template>
    <section class="review-section">

        <div class="flex flex-col md:flex-col lg:flex-row justify-center bg-white text-black  ">
            <div class="flex-none w-full lg:w-1/2 flex flex-col justify-center items-center px-10 lg:px-40 py-4 sm:pb-10 md:pb-10 ">
                <div class=" space-y-4">
                <h1 class="text-2xl font-bold text-purple-800">{{ fields.title }}</h1>
                <p class="">{{ fields.paragraph }}</p>
                <button @click="goHome" class="flex items-center text-purple-800 font-bold hover:underline self-start mt-4">> {{ fields.buttonText }}</button>
                </div>
            </div>
            <div class="flex-1 flex justify-center items-center bg-gray-50">
                <div class="grid grid-cols-2 gap-x-5 sm:gap-x-60 py-20">


                    <div v-for="logo in fields.logos " class="flex flex-col items-center justify-center px-10 py-10 ">
                        <div class="w-40 h-40 rounded-full border border-purple-800 px-8 py-8 flex items-center justify-center transform transition duration-1000 hover:rotate-180 cursor-pointer">
                            <img :src="logo.fields.image.fields.file.url" alt="Home Expertise">
                        </div>
                        <p class="mt-10 text-center font-bold">{{ logo.fields.title }}</p>
                    </div>
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
    goHome() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}
</script>