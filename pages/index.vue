


<template>
  <div>
    <div v-for="component in entries.fields.components">
    <Hero :fields="component.fields" v-if="component.sys.contentType.sys.id == 'hero'" />
    <Info :fields="component.fields" v-if="component.sys.contentType.sys.id == 'info'"/>
    <Banner1 :fields="component.fields" v-if="component.sys.contentType.sys.id  == 'banner' && component.fields.alignment == 'left'"/>
    <Services :fields="component.fields" v-if="component.sys.contentType.sys.id == 'services'"/>
    <Banner2 :fields="component.fields" v-if="component.sys.contentType.sys.id == 'banner'  && component.fields.alignment == 'right'"/>
    <Reviews :fields="component.fields" v-if="component.sys.contentType.sys.id == 'reviews'"/>
    <Footer :fields="component.fields" v-if="component.sys.contentType.sys.id == 'footer'"/>
    <!-- <pre>
      {{ component.fields }}
    </pre> -->
    </div>
  </div>
</template>


<script>
import Hero from '~/components/Hero.vue';
import Info from '~/components/Info.vue';
import Banner1 from '~/components/Banner1.vue';
import Services from '~/components/Services.vue';
import Banner2 from '~/components/Banner2.vue';
import Reviews from '~/components/Reviews.vue';
import Footer from '~/components/Footer.vue';
import client from '~/plugins/contentful.js';





export default {
  components: {
    Hero,Info,Banner1,Services,Banner2,Reviews,Footer,
  },
  async asyncData({ $contentful }) {
    console.log("contentful", $contentful)
    const entries = await $contentful.getEntries({
      content_type: 'pageOrder',
      include: 5
    })
    return { entries: entries.items[0] }
  }
}

</script>
