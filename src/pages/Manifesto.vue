<template>
<div>
  <navbar navbarBG="bg-white" shadow="true"></navbar>
  <div class="container mx-auto flex justify-center">
    <div class="flex flex-col justify-center items-start text-gray-700 text-base">
      <div class="text-5xl font-semibold text-teal-600 pt-16 pb-4">The Manifesto</div>
      <div class="py-4 text-lg">Goodwork was born out of frustration. I was fed up with how work was managed in software projects and created Goodwork to tackle that problem.</div>
      <div class="text-lg">A successful business lie upon 3 things. 1. <span class="text-indigo-600">Quality Product</span>, 2. <span class="text-indigo-600">Satisfied Customer</span> and 3. <span class="text-indigo-600">Happy Employees.</span></div>
      <div class="text-lg">Its a three legged table. When one goes missing the whole things fall down.</div>
      <div class="text-xl pt-8 pb-2">Following is a list of principles, with respect to above mentioned three requirements, upon which Goodwork is built .</div>
      <div class="py-1">
        1. More efficiency not productivity
      </div>
      <div class="py-1">
        2. Transparency.
      </div>
      <div class="py-1">
        3. Team should be small.
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './../components/Navbar'
import BottomFooter from './../components/BottomFooter'
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
