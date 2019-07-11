<template>
<div class="min-h-screen flex flex-col">
  <navbar navbarBG="bg-white" shadow="true"></navbar>
  <div class="px-4 lg:px-0 lg:max-w-4xl xl:max-w-6xl lg:mx-auto xxl:max-w-8xl lg:my-16 flex-grow">
    <h1 class="text-4xl">Frequently Asked Question</h1>
  </div>
  <bottom-footer></bottom-footer>
</div>
</template>

<script>
import Navbar from './../components/Navbar'
import BottomFooter from './../components/BottomFooter'
export default {
  metaInfo: {
    title: 'Demo',
    bodyAttrs: {
      class: 'bg-white font-display overflow-x-hidden'
    }
  },
  components: {BottomFooter, Navbar},
}
</script>
