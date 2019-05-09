<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题</div>
      <div class="header-right">{{this.city}}
          <span class="iconfont arrow-icon">&#xe62d;</span>

      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// @代表src目录，在CSS中引用需用～@
// 在webpack.base.conf中创建styles别名代表目录
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: 1.80rem
    background: $bgColor
    color: #fff
    .header-left
      width: 2.00rem
      float: left
      margin-left: .24rem
      .back-icon
        text-align: center
        font-size: 0.90rem
    .header-input
      flex: 1
      background: #fff
      height: 1.5rem
      line-height: 1.5rem
      margin-top: .12rem
      margin-left: 0.2rem
      padding-left: 0.4rem
      border-radius: .2rem
      color: #ccc
    .header-right
      width: 3.0rem
      margin-right: .24rem
      float: right
      color: #fff
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
