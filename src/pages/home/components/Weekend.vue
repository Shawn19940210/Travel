<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList"
            :key="item.id">
                <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
        title: '秦淮金粉里的南京',
        desc: '欣赏秦淮风光上独具特色的人文景观，夫子庙里深刻体会古代科举制度'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/58/a02ad3ab47e3e3.jpg_r_640x214_08977098.jpg',
        title: '扬州大明寺',
        desc: '大明寺扬州第一名胜，集佛教庙宇、文物古迹和园林风光于一体的游览胜地'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/24/4b609109dba139.jpg_r_640x214_b28f6052.jpg',
        title: '无锡打卡',
        desc: '到无锡，一水，一山，一佛'
      }]
    }
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      margin-top: .4rem
      line-height: .54rem
      font-size: .32rem
    .item-desc
      margin-top: .2rem
      line-height: 1.2rem
      ellipsis()
      margin-bottom: .4rem
</style>
