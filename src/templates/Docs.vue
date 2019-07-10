<template>
  <div>
    <navbar navbarBG="bg-white" shadow></navbar>
    <div class="max-w-7xl container mx-auto p-8 my-8 text-gray-800">
      <div class="text-4xl text-teal-700 pb-4">{{ $page.docs.title }}</div>
      <div v-html="$page.docs.content"></div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<page-query>
query Docs ($path: String!) {
   docs: docs (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
import Navbar from "./../components/Navbar"
import BottomFooter from "./../components/BottomFooter"

export default {
  metaInfo: {
    title: 'Developer Guide',
    bodyAttrs: {
      class: 'bg-indigo-100 font-display overflow-x-hidden'
    }
  },
  components: {Navbar, BottomFooter}
}
</script>

<style scoped>
h1 {
  @apply text-3xl py-4;
}

h2 {
  @apply text-2xl py-3;
}

h3 {
  @apply text-xl py-2;
}

h4 {
  @apply text-lg;
}

h5 {
  @apply text-base;
}

a {
  @apply text-blue-700 underline;
}

blockquote {
  @apply border-l-4 px-4 py-1 text-gray-900 bg-gray-200;
}

li {
  @apply py-1;
}

li::before {
  content: '⭕  ';
}
</style>
