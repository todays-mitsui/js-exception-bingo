<template>
  <section class="container">
    <textarea v-model="input" cols="30" rows="10" @keyup.enter="evalute" />
    <ul>
      <li v-for="exception in exceptions" :key="exception">
        {{ exception }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      _exceptions: []
    }
  },

  computed: {
    exceptions() {
      // return [...new Set(this.$data._exceptions)]
      return this.$data._exceptions.map(e => [e.name, e.message])
    }
  },

  methods: {
    evalute() {
      try {
        eval(this.input)
      } catch (e) {
        console.log('Exception:', e.name)
        this.$data._exceptions.push(e)
      }
    }
  }
}
</script>

<style>
</style>
