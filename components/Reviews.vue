<template>
  <section>
  <div class="flex flex-col justify-center items-center p-4 bg-pink-100">
    <div class="w-full max-w-4xl overflow-hidden p-5 ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="flex flex-col items-center md:items-start">
          <transition name="fade" mode="out-in">
            <h2 class="text-4xl md:text-5xl font-bold uppercase text-purple-800 mb-5" :key="fields.reviews[selectedIndex].fields.title">
              {{ fields.reviews[selectedIndex].fields.title }}
            </h2>
          </transition>
          <div class="flex">
            <span v-for="review in fields.reviews[selectedIndex].fields.stars" :key="n" class="text-yellow-500 text-xl md:text-3xl">★</span>
            <span v-for="review in 5 - fields.reviews[selectedIndex].fields.stars" :key="n + 5" class="text-gray-300 text-xl md:text-3xl">★</span>
          </div>
        </div>
        <div class="flex flex-col items-center md:items-end">
          <div class="relative text-center">
            <transition name="fade" mode="out-in">
              <div class="inline-block text-center" :key="reviews[selectedIndex].content">
                <button @click="indexHandler(selectedIndex - 1)" class="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 text-gray-800 hover:text-gray-600 hidden md:block">
                  <span class="text-3xl cursor-pointer">❮</span>
                </button>
                <button @click="indexHandler(selectedIndex + 1)" class="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-gray-800 hover:text-gray-600 hidden md:block">
                  <span class="text-3xl cursor-pointer">❯</span>
                </button>

                <p class="text-sm font-semibold text-purple-800">{{ fields.reviews[selectedIndex].fields.name }}</p>
                <p class="text-sm md:text-base text-purple-800">{{ formatDate(fields.reviews[selectedIndex].fields.date) }}</p>
                <p class="text-lg md:text-xl font-light mb-4">
                  {{ fields.reviews[selectedIndex].fields.paragraph }}
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <div class="flex mt-6 justify-center w-full">
        <span v-for="(review, index) in fields.reviews" :key="index"
          :class="index === selectedIndex ? 'bg-orange-400' : 'bg-gray-300'"
          class="h-2 w-2 rounded-full mx-1 cursor-pointer"
          @click="indexHandler(index)"
        ></span>
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
  data() {
    return {
      reviews: [
        {
          username: "John Smith",
          createdAt: "06/27/23",
          content: "Phasellus egestas, sem in venenatis lacinia, neque dolor congue nunc, vel dictum justo nunc et nunc. Integer id semper tortor. Cras aliquet, risus id convallis maximus, ex felis viverra sapien, eu sollicitudin enim sapien a velit. Phasellus ut placerat arcu. Vivamus sed ligula metus. Nam ultricies vel turpis sit amet luctus.",
          stars: 5,
          heading: "LOREM IPSUM"
        },
        {
          username: "Jane Smith",
          createdAt: "03/18/23",
          content: "Pellentesque sagittis erat sit amet leo lobortis cursus. Duis sit amet varius neque. In faucibus, mi sit amet euismod sollicitudin, est urna tempus ligula, eget ornare urna quam quis dui. Aenean quis lectus mattis, bibendum magna nec, luctus tortor. Morbi et mauris tortor. Duis suscipit venenatis tellus in euismod.",
          stars: 4,
          heading: "LOREm iPsum"
        },
        {
          username: "Yorm Smith",
          createdAt: "11/3/23",
          content: "Etiam commodo mi vel augue molestie, eleifend tempus dolor placerat. Nulla blandit ultrices augue sit amet sagittis. Phasellus egestas, sem in venenatis lacinia, neque dolor congue nunc, vel dictum justo nunc et nunc. Integer id semper tortor. Cras aliquet, risus id convallis maximus, ex felis viverra sapien, eu sollicitudin enim sapien a velit. ",
          stars: 3,
          heading: "lorem IPSUM"
        },
      ],
      selectedIndex: 0,
    };
  },
  methods: {
    indexHandler(newIdx) {
      const reviewsCount = this.reviews.length;
      if (newIdx >= reviewsCount) {
        this.selectedIndex = 0;
      } else if (newIdx < 0) {
        this.selectedIndex = reviewsCount - 1;
      } else {
        this.selectedIndex = newIdx;
      }
    },
    formatDate(dateStr) {
      // Parse the date string
      const dateObj = new Date(dateStr);
      // Format the date
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Intl.DateTimeFormat('en-US', options).format(dateObj);
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
