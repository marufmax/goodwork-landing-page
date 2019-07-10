<template>
<div class="min-h-screen flex flex-col">
  <navbar navbarBG="bg-white" shadow="true"></navbar>
  <div class="px-4 lg:px-0 lg:max-w-4xl xl:max-w-6xl lg:mx-auto xxl:max-w-8xl lg:my-16 flex-grow">
    <div class="text-4xl">Demo</div>
    <div class="text-lg">
      "Goodwork" project itself is managed on an instance of "Goodwork" application on this address
      <a href="https://goodworkfor.life" class="text-blue-700 underline">goodworkfor.life</a>. You can checkout the application there as a guest user using below described email & password. This user has limited permission so you may not see all the features.
    </div>
    <div class="pt-4">
      <div class="flex">
        <div class="w-20">
          Email
        </div>
        <div>: </div>
        <div class="ml-2 p-1 bg-gray-200 rounded">guest@example.com</div>
      </div>
      <div class="flex pt-2">
        <div class="w-20">
          Password
        </div>
        <div>: </div>
        <div class="ml-2 p-1 bg-gray-200 rounded">guestpass</div>
      </div>
    </div>
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
