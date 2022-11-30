<template>
  <div class="navigation">
      <ul>
          <li class="list">
              <a href="#" >
                  <span class="icon">
                      <ion-icon name="heart"></ion-icon>
                  </span>
                  <span class="text">Home</span>
              </a>
          </li>
          <li class="list">
              <a href="#" >
                  <span class="icon"></span>
                  <span class="text">Profile</span>
              </a>
          </li>
          <li class="list">
              <a href="#" >
                  <span class="icon"></span>
                  <span class="text">Message</span>
              </a>
          </li>
          <li class="list">
              <a href="#" >
                  <span class="icon"></span>
                  <span class="text">Help</span>
              </a>
          </li>
          <li class="list">
              <a href="#" >
                  <span class="icon"></span>
                  <span class="text">Settings</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'IconHover',
    mounted() {
      let ionicons = document.createElement('script')
      ionicons.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js')
      document.head.appendChild(ionicons)
    },
}
</script>

<style scoped>

</style>