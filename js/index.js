Vue.component('single-answer', {
  props: ['answer'],
  template: '<div  :class="answerClass" @click="checkAns" >{{ answer.text }}</div>',
  data: function() {
    return {
      answerClass: ''
    }
  },
  methods: {
    checkAns: function(event) {
      if(this.answer.correct) {
        this.answerClass = 'success';
        this.$emit('increment');
      } else {
        this.answerClass = 'failure';
      }
    }
  }
});

new Vue({
  el: '#quiz',
  data: {
    points: 0,
    question: 'Koja rijeka teče ispod savskog mosta?',
    answers: [
      {text: 'Sava', correct: true},
      {text: 'Una', correct: false},
      {text: 'Drina', correct: false}
    ]
  },
  methods: {
    incrementTotal: function() {
      this.points += 1;
      console.log('yaaay');
    }
  }
});