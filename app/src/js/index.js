new Vue({
  el: "#app",
  data:{
    lifeplay: 100,
    lifemonster: 100,
  },
  computed:{
    life(){
      return{
        width: this.lifeplay + '%'
      }
    },
    lifemonstro(){
      return{
        width: this.lifemonster + '%'
      }
    }
  }
});