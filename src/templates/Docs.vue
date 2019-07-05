<template>
  <div>
    <navbar navbarBG="bg-white" shadow></navbar>
    <div class="max-w-7xl container mx-auto p-8 my-8">
      <div v-html="$page.docs.content"></div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<page-query>
query Docs ($path: String!) {
   docs: docs (path: $path) {
    id
    content
  }
}
</page-query>

<script>
import Navbar from "./../components/Navbar"
import BottomFooter from "./../components/BottomFooter"

export default {
  components: {Navbar, BottomFooter}
}
</script>
