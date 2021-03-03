// Object //

var questionArray = [
    {
        ques : "Q.1: 10 - 3 __________",
        opt : ["a. 8",'b. 7','c. 9'],
        correctAns : 'b. 7'
    }
    ,{
        ques : "Q.2: 11 + 2 __________",
        opt : ["a. 14",'b. 12','c. 13'],
        correctAns : 'c. 13'
    }
    ,{
        ques : "Q.3: 9 * 3 __________",
        opt : ["a. 26",'b. 27','c. 28'],
        correctAns : 'b. 27'
    }
    ,{
        ques : "Q.4: 15 / 3 __________",
        opt : ["a. 5",'b. 5.5','c. 6'],
        correctAns : 'a. 5'
    }
    ,{
        ques : "Q.5: 10 - 13 __________",
        opt : ["a. 4",'b. 3','c. -3'],
        correctAns : 'c. -3'
    }
]

// variables //

var quesCount = 0;
var marks = 0;

// functions //

function showQues(){
    var a = document.getElementById('quesCompleted')
    a.innerHTML= quesCount + 1 
    var b= document.getElementById('totalQues')
    b.innerHTML = questionArray.length
   var questiondisplay = document.getElementById('ques')
   questiondisplay.innerHTML = questionArray[quesCount].ques
   var optionDiv = document.getElementById('optionsParent')
   optionDiv.innerHTML = ''
   for(var i=0; i<questionArray[quesCount].opt.length; i++){
     var div = document.createElement('div')
      div.setAttribute('class','col-md-6 p-3')
      var optionBtn = document.createElement('button')
      optionBtn.setAttribute('class','btn btn-outline-danger p-2 m-3 right')
      optionBtn.setAttribute('onclick','checkAnswer(this)')
      var optionBtnText = document.createTextNode(questionArray[quesCount].opt[i])
      optionBtn.appendChild(optionBtnText)
      div.appendChild(optionBtn)
      optionDiv.appendChild(div)
   }
}

function nextQuestion(){
    
    if(quesCount < questionArray.length -1){
        quesCount++;
        if(quesCount == questionArray.length -1){
            submitBtn.setAttribute('class','btn btn-outline-info nextbtn fs-5 p-2 m-2 d-block')
            var nextBtn = document.getElementById('nextBtn')
            nextBtn.setAttribute('class','btn btn-outline-info nextbtn fs-5 p-2 m-2 d-none')
        }
    }
    showQues()
}

function back(){  
    if(quesCount < questionArray.length && quesCount > 0){
        quesCount--
        if(quesCount == questionArray.length -1){
            submitBtn.setAttribute('class','btn btn-outline-info nextbtn fs-5 p-2 m-2 d-none')
            var nextBtn = document.getElementById('nextBtn')
            nextBtn.setAttribute('class','btn btn-outline-info nextbtn fs-5 p-2 m-2 d-block')
        }
    } 
    showQues()
}

showQues()

function checkAnswer(e){
    var userAnswer =  e.firstChild.nodeValue
    var correctAns = questionArray[quesCount].correctAns
    
    if(userAnswer === correctAns){
        marks++
    }  
}
function showResult(){
    alert("Marks: " + marks)
}