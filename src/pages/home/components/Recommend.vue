<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-buttom">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .6rem
    line-height: 1.0rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 3.9rem
    .item-img
      width: 3.7rem
      height: 3.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        margin-top: .4rem
        line-height: .54rem
        font-size: .32rem
      .item-desc
        margin-top: .2rem
        line-height: 1.2rem
        color: #ccc
        ellipsis()
      .item-buttom
        margin-bottom: .1rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .4rem
        color: #fff
</style>
