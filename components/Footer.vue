<template>
    <section>
    <div class="bg-gray-50 text-black py-6">
        <div class="mx-auto text-center">
            <p class="font-bold mb-5">{{fields.footerText}}</p>
            <div class="flex justify-center space-x-4">
                <img v-for="logo in fields.logos" :src="logo.fields.image.fields.file.url" alt="" class="w-12 h-12">
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
}
</script>