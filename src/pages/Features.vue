<template>
<div>
  <navbar navbarBG="bg-white" shadow></navbar>
  <div class="px-4 lg:px-0 lg:max-w-4xl xl:max-w-6xl lg:mx-auto xxl:max-w-8xl pt-16">
    <div class="text-5xl text-gray-700">
      Every Features in Goodwork
    </div>
    <div class="bg-white border rounded px-8 py-4 text-blue-700 flex flex-wrap">
      <div class="w-64 my-4">
        Project, Team & Office
      </div>
      <div class="w-64 my-4">
        Task Board
      </div>
      <div class="w-64 my-4">
        Discussion Board
      </div>
      <div class="w-64 my-4">
        Message Board
      </div>
      <div class="w-64 my-4">
        Event Board
      </div>
      <div class="w-64 my-4">
        File Board
      </div>
      <div class="w-64 my-4">
        Activity
      </div>
      <div class="w-64 my-4">
        Role & Permissions
      </div>
      <div class="w-64 my-4">
        Direct Messages
      </div>
      <div class="w-64 my-4">
        Roadmap
      </div>
    </div>
    <!-- <div class="flex flex-col justify-center items-center">
      <div class="text-5xl text-teal-500-600 py-16">Page Under Construction</div>
      <g-image src="~/assets/images/under_construction.svg" class="illustration"/>
    </div> -->
  </div>
  <bottom-footer></bottom-footer>
</div>
</template>

<script>
import Navbar from './../components/Navbar'
import BottomFooter from './../components/BottomFooter'
export default {
  metaInfo: {
    title: 'Features',
    bodyAttrs: {
      class: 'bg-indigo-100 font-display overflow-x-hidden'
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
