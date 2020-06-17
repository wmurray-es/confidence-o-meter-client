<template>
  <div class="hello">
    <div v-if="mode === 'form'">
      <h1>Confidence-o-meter</h1>
      <p>How confident are you that we will meet this Sprint's goal?</p>
      <input type="range" step="25" v-model="confidencePercentage">
      <div>
        <button @click="showResults">{{ confidencePercentageEmoji }}</button>
      </div>
    </div>
    <div v-if="mode === 'results'">
      <div>Total responses:</div>
      <div>General confidence:</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    confidencePercentageEmoji() {
      if (this.confidencePercentage <= 0) return "😔";
      if (this.confidencePercentage <= 25) return "😕";
      if (this.confidencePercentage <= 50) return "😬";
      if (this.confidencePercentage <= 75) return "🤨";
      return "😄";
    }
  },
  data: () => ({
    confidencePercentage: 50,
    totalClicks: 0,
    totalResponses: 0,
    mode: "form"
  }),
  methods: {
    showResults() {
      this.mode = "results";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  border-radius: 15px;
  text-align: center;
  width: 3em;
  height: 3em;
  font-size: 5em;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
