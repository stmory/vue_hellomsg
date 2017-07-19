<template>
  <div id="app">
    <div class="simple">
      <input type="button" class="input" value="commonMsg" @click="commonMsg()"/>
      <input type="button" class="input" value="autoCloseMsg" @click="autoCloseMsg()"/>
      <input type="button" class="input" value="cancelAndConfirm" @click="cancelAndConfirm()"/>
    </div>
  </div>
</template>

<script>
import HelloMsg from './components'

export default {
  name: 'app',
  data(){
      return{
        ppp:[],
      }
  },
  mounted(){

  },
  components: {

  },
  methods:{
    commonMsg(){
      HelloMsg('hello','good boy','right')
    },
    autoCloseMsg(){
      HelloMsg({title:'hello',msg:'good boy',showPicture:'false',showConfirm:'false',autoClose:'true'})
    },
    cancelAndConfirm(){
      HelloMsg({title:'hello',msg:'good boy',showPicture:'right',showCancel:'true'}).then(function(a){HelloMsg(a)}).catch(function(a){HelloMsg(a)})
    },
  },
}
</script>

<style>
#app{
  width:100%;
  height:100%;
}
.simple{
  display: flex;
  flex-flow: column;
}
  .input{
    margin:20px;
    height:48px;
    line-height: 48px;
    border-radius: 6px;
    color:#ffffff;
    font-size: 24px;
    text-align: center;
    background-color: #8CD4F5;
  }
</style>
