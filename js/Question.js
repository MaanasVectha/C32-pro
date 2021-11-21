class Question {

  constructor() {
    this.title = createElement('h1')
    this.Question = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.input2 = createInput("Enter your answer Here....")




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.Question.html("Question:You measure my life in hours and I serve you by Expiring.I am Quick when I am thin and slow when I a fat.Wind is my enemy.Who am I?")
    this.title.position(windowWidth/2-80,windowHeight/2-300);
    this.Question.position(windowWidth/2-450,windowHeight/2-125)





    //Create html() and position() for each question, input and answers.




    this.input1.position(windowWidth/2-200,windowHeight/2+200);
    this.input2.position(windowWidth/2,windowHeight/2+200);
    this.button.position(windowWidth/2-50,windowHeight/2+250);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    this.message.html("Your Answer is saved. Thank You")
    this.message.position(windowWidth/2+250,windowHeight/2+200);
    
})


  }
}
