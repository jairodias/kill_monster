new Vue({
  el: "#app",
  data:{
    lifeplay: 100,
    lifemonster: 100,
    arrayJogador: [],
    arrayMonster: [],
    winner: false,
    cor: '',
    ganhador: ''
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
  },
  methods:{
    atk(){
      var atkmonster = parseInt((Math.random() * 10) + (Math.random() * 2));
      var atkjogador = parseInt(Math.random() * 10);
      this.arrayJogador.push("O Monstro inferiu: " + atkmonster + "% de dano no life do jogador");
      this.arrayMonster.push("O jogador inferiu: " + atkjogador + "% de dano no life do monstro");
      this.returnLife(atkjogador, atkmonster);
    },
    atkEspecial(){
      var atkmonster = parseInt((Math.random() * 10));
      var atkjogador = parseInt(Math.random() * 10 + (Math.random() * 3));
      this.arrayJogador.push("O Monstro inferiu: " + atkmonster + "% de dano no life do jogador");
      this.arrayMonster.push("O jogador inferiu: " + atkjogador + "% de dano no life do monstro");
      this.returnLife(atkjogador, atkmonster);
    },

    returnLife(jogador, monster){ 
      if(!this.winner){
        if((this.lifeplay - monster) > 0){
          this.lifeplay -= monster;
        }else{
          this.winnerPlay('monster')
          return false;
        }

        if((this.lifemonster - jogador) > 0){
          this.lifemonster -= jogador;
        }else{
          this.winnerPlay('play')
          return false;
        }
      }
      

    },
    winnerPlay(vencedor){
      console.log(vencedor);
      this.winner = true;
      if(vencedor == 'monster'){
        this.lifeplay = 0;
        this.cor = 'red';
        this.ganhador = 'Monstro Venceu !';
      }else{
        this.lifemonster = 0;
        this.cor = 'green';
        this.ganhador = 'Jogador Venceu !!';
      }
    },
    reiniciar(){
      this.lifemonster = 100;
      this.lifeplay = 100;
      this.cor = '';
      this.ganhador = '';
      this.winner = false; 
      while(this.arrayJogador.length) {
        this.arrayJogador.pop();
        this.arrayMonster.pop();
      }
      
    },
    curar(){
      var atkmonster = parseInt((Math.random() * 10));
      var curaJogador = parseInt(Math.random() * 10);
      ((this.lifeplay + curaJogador) > 100) ? this.lifeplay = 100 : this.lifeplay += curaJogador;
      this.arrayJogador.push("O jogador curou: " + curaJogador + "% de life");
      this.arrayJogador.push("O monstro inferiu: " + atkmonster + "% de dano no life do jogador");
      this.returnLife(0, atkmonster);
    }
  }
});