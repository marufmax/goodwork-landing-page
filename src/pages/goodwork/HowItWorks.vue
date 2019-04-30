<template>
<div>
  <navbar navbarBG="bg-blue-darkest"></navbar>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center">
      <div class="text-5xl text-teal-dark py-16">Page Under Construction</div>
      <g-image src="~/assets/images/under_construction.svg" class="illustration"/>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './../../components/Navbar'
import BottomFooter from './../../components/BottomFooter'
export default {
  metaInfo: {
    title: 'How It Works',
    bodyAttrs: {
      class: 'bg-white font-display overflow-x-hidden'
    }
  },
  components: {BottomFooter, Navbar},
}
</script>

<style>
.illustration {
  width: 64rem;
}
</style>
