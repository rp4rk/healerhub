<template>
  <span class="material-design-icon check-circle-outline-icon"
        :aria-hidden="decorative"
        role="img"
        :aria-label="title">
    <svg class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         :fill="fillColor">
      <title>{{title}}</title>
      <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"></path>
    </svg>
  </span>
</template>

<script>
  export default {
    name: "check-circle-outline-icon",
    props: {
      title: {
        type: String,
        default: "Check circle outline icon"
      },
      decorative: {
        type: Boolean,
        default: false
      },
      fillColor: {
        type: String
      }
    }
  }
</script>
