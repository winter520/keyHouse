<template>
  <div class="boxConntent1 plr15">
    <div class="flex-bc t-logo-box">
      <logo @click-logo="closeDrawer"></logo>
      <div class="quit-box cursorP" @click="quitApp()"> {{$t('title').quit}} </div>
    </div>
    <ul class="user-list">
      <li class="item flex-sc" @click="createAccount" :title="$t('btn').createAccount"><i class="el-icon-plus icon"></i>{{$t('btn').createAccount}}</li>
      <li class="item flex-sc" v-if="false" @click="changeMode('1')" :title="$t('title').personAccount"><i class="el-icon-user icon"></i>{{$t('title').personAccount}}</li>
      <li class="item flex-sc" @click="changeMode('0')" :title="$t('title').groupAccount"><i class="el-icon-money icon"></i>{{$t('title').groupAccount}}</li>
      <li class="item flex-sc" @click="openUrl('/set')" :title="$t('btn').set"><i class="el-icon-setting icon"></i>{{$t('btn').set}}</li>
    </ul>
    <set-enode class="mt-20 set-node-box" :isSetNode="false"></set-enode>
  </div>
</template>

<style lang="scss" scoped>
.t-logo-box {
  border-bottom: 1px solid #ddd;padding-bottom: size(20);
  .quit-box {
    padding: size(0) size(8);border: 1px solid $color-primary;color: $color-primary;font-size: $text-sm;display: inline-block;
  }
}
.user-list {
  width: 100%;max-height: size(400);background: #fff;padding: size(5) size(0);border-radius: size(3);margin-bottom: size(50);
  .item {
    padding: size(15) size(0);text-align: left;cursor: pointer;font-size: $text-normal;line-height: size(21);
    &:hover {
      background: #f1f1f1;
    }
    .icon {
      margin-right: size(10);font-size: $text-md;
    }
  }
}
.set-node-box {
  $lrb: size(15);
  position: absolute;left: $lrb;right: $lrb;bottom: $lrb;
}
</style>

<script>
import {computedPub} from '@/assets/js/pages/public'
import setEnode from '@/components/setEnode/index'
export default {
  name: 'personInfo',
  data () {
    return {

    }
  },
  components: {setEnode},
  computed: {
    ...computedPub
  },
  mounted () {

  },
  methods: {
    closeDrawer () {
      this.$emit('closeDrawer')
    },
    createAccount () {
      this.$store.commit('setSafeMode', {info: '0'})
      this.toUrl('/createGroup')
      this.closeDrawer()
    },
    openUrl (url) {
      this.toUrl(url)
      this.closeDrawer()
    },
    changeMode (type) {
      if (Number(type)) {
        this.toUrl('/person')
      } else {
        this.toUrl('/group')
      }
      this.$store.commit('setSafeMode', {info: type})
      this.closeDrawer()
    },
  }
}
</script>