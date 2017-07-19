<template>
  <div class="hellomsg_content">
    <transition name="hellomsg_bounce" >
      <div class="hellomsg_main" v-show="isShow">
        <div class="hellomsg_title">
          <div class="hellomsg_pic" v-show="showPicture=='right'">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="64" height="64" viewBox="0 0 16 16">
              <path fill="#66CDAA" d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"></path>
            </svg>
          </div>
          <div class="hellomsg_pic" v-show="showPicture=='wrong'">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="64" height="64" viewBox="0 0 16 16">
              <path fill="#FF3333" d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
            </svg>
          </div>
          <div class="hellomsg_tit" v-show="title!=''">
            {{title}}
          </div>
          <div class="hellomsg_msg" v-show="msg!=''">
            {{msg}}
          </div>
          <div class="hellomsg_btn">
            <div class="hellomsg_cancel" @click="close('cancel')" v-show="showCancel=='true'">
              {{cancel}}
            </div>
            <div class="hellomsg_sure" @click="close('confirm')" v-show="showConfirm=='true'" >
              {{confirm}}
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="hellomsg_cover_show">
      <div class="hellomsg_cover" v-show="isShow">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirm:'确定',
      cancel:'取消',
      showPicture:'',
      isShow:'',
      title:'',
      msg: '',
      showCancel:'',
      showConfirm:'',
      autoClose:'',
      autoCloseTime:2000,
      lockScroll:'',
      callback: null,
    }
  },
  props:[

  ],
  created(){

  },
  mounted(){

  },
  updated(){
    if(this.isShow==true){
      this.autoCloseFun()
    }
  },
  computed:{

  },
  methods:{
    autoCloseFun(){
      let t = this
      if(this.autoClose=='true'){
        setTimeout(function(){t.isShow=false},t.autoCloseTime)
      }
    },
    close(action){
      let callback = this.callback;
      this.isShow=false
      setTimeout(function(){callback(action)},200)
    },
  },
  watch:{

  },
}
</script>

<style>
  .hellomsg_content{
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .hellomsg_main{
    top:0;
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    z-index: 100;
    overflow: hidden;
  }
  .hellomsg_title{
    width:80%;
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    background-color: #ffffff;
    font-size: 24px;
    border-radius: 6px;
    z-index: 101;
    padding:24px;
  }
  .hellomsg_btn{
    display:flex;
    margin-top: 20px;
    font-size: 18px;
    justify-content: space-around;
    align-items: flex-end;
    width:100%;
  }
  .hellomsg_tit{
    margin-top: 10px;
    text-align: center;
  }
  .hellomsg_msg{
    width:100%;
    text-align: center;
    margin-top: 10px;
    color:#999999;
    font-size:18px;
  }

  .hellomsg_sure{
    width:120px;
    height:48px;
    line-height: 48px;
    border-radius: 6px;
    color:#ffffff;
    font-size: 24px;
    text-align: center;
    background-color: #8CD4F5;
  }
  .hellomsg_sure:active {
    background-color: #4dc2f0;
  }
  .hellomsg_cancel{
    width:120px;
    height:48px;
    line-height: 48px;
    border-radius: 6px;
    color:#ffffff;
    font-size: 24px;
    text-align: center;
    background-color: #999999;
  }
  .hellomsg_cancel:active {
    background-color: #7ecff4;
  }
  .hellomsg_cover{
    top:0;
    width:100%;
    height:100%;
    position:fixed;
    background-color: rgba(0,0,0,0.3);
    z-index: 99;
  }
  .hellomsg_bounce-enter, .hellomsg_bounce-leave-to {
    opacity: 0;
    transform: scale(0);
  }
  .hellomsg_bounce-enter-active, .hellomsg_bounce-leave-active{
    transition: all .2s ease;
  }
  .hellomsg_cover_show-enter-active, .hellomsg_cover_show-leave-active {
    transition: opacity .2s
  }
  .hellomsg_cover_show-enter, .hellomsg_cover_show-leave-to {
    opacity: 0
  }
</style>
