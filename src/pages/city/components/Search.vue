<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus">
  @import '~styles/varibles.styl'
  .search
    padding: 0 .1rem
    height: 1.6rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: 1.4rem
      padding: 0 .1rem
      line-height: 1.4rem
      text-align: center
      border-radius: .1rem
      color: #666
</style>
