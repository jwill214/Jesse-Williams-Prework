//Round 3 function
const round3=function(){
    var start=document.querySelector('#start');
    var stroke = document.querySelector('#stroke');
    var wins = document.querySelector('#wins');
    var currentword = document.querySelector('#current-word');
    var remaining = document.querySelector('#remaining');
    var picture = document.querySelector('#picture');
    var answer ='jinchuriki';
    var guessed1='-';
    var guessed2='-';
    var guessed3='-';
    var guessed4='-';
    var guessed5='-';
    var guessed6='-';
    var guessed7='-';
    var guessed8='-';
    var guessed9='-';
    var guessed10='-';
    var guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
    var incorrect=''
    var attempts=5
    var i=0
    var wrongs=0
    
    
    while(i < 5 && wrongs < 6) {
        start.innerText='YOU BEAT THE GAME! CONGRATS!!!';
        stroke.innerText='Rounds Won:\n1.) kakashi \n2.) jariya \n3.) '+guessed;
        wins.innerText='Wins Under Your Belt: 3';
        if (guessed === answer){
            alert('You Win');
            
            i=5;

        }
        else if (wrongs === 5){
            document.write('GameOver')
            wrongs=6
        }
        else {
             var guess=prompt('Enter Guess Here');

                if (guess==='j'){
                guessed1=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            
            }    
            else if(guess==='i'){
                guessed2=guess;
                guessed8=guess;
                guessed10=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='n'){
                guessed3=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            }
            else if(guess==='c'){
                guessed4=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            }
            else if(guess==='h'){
                guessed5=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='u'){
                guessed6=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='r'){
                guessed7=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='k'){
                guessed9=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
        
            else {
                incorrect=incorrect+guess+',';
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7+guessed8+guessed9+guessed10;
                attempts=attempts-1;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                wrongs++;
                
            } 
            document.removeEventListener('keypress',startround3);
            picture.innerHTML='<img src="assets/images/jinchuriki.jpeg" alt="background image" style="margin-top:15px; margin-bottom:25px; border:solid orange 5px; width: 90%; height:500px;">'
            stroke.innerText=guessed;
            
            
        }
        
    }
    
    
}



//press Any key to get Started!
const startround3=function(x){
    const key=x.key
    if (key !==''){
        round3();
    }

    else {
    }

}



//Round 2 function
const round2=function(){
    var start=document.querySelector('#start');
    var stroke = document.querySelector('#stroke');
    var wins = document.querySelector('#wins');
    var currentword = document.querySelector('#current-word');
    var remaining = document.querySelector('#remaining');
    var picture = document.querySelector('#picture');
    var answer ='jariya';
    var guessed1='-';
    var guessed2='-';
    var guessed3='-';
    var guessed4='-';
    var guessed5='-';
    var guessed6='-';
    var guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
    var incorrect=''
    var attempts=5
    var i=0
    var wrongs=0
    
    
    while(i < 5 && wrongs < 6) {
        start.innerText='You Are On a ROLL! Press another Key to begin round 3!';
        stroke.innerText='Rounds Won:\n1.) kakashi \n2.) '+guessed;
        wins.innerText='Wins Under Your Belt: 2';
        if (guessed === answer){
            alert('You Win');

            i=5

        }
        else if (wrongs === 5){
            document.write('GameOver')
            wrongs=6
        }
        else {
             var guess=prompt('Enter Guess Here');

                if (guess==='j'){
                guessed1=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            
            }    
            else if(guess==='a'){
                guessed2=guess;
                guessed6=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='r'){
                guessed3=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
            else if(guess==='y'){
                guessed5=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            }
            else if(guess==='i'){
                guessed4=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
            }
        
            else {
                incorrect=incorrect+guess+',';
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6;
                attempts=attempts-1;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                wrongs++;
                
            } 
            document.removeEventListener('keypress',startround2);
            picture.innerHTML='<img src="assets/images/jariya.jpeg" alt="background image" style="margin-top:15px; margin-bottom:25px; border:solid orange 5px; width: 90%; height:500px;">'
            
            
            
        }
        
    }
    document.addEventListener('keypress', startround3);
    
}

//press Any key to get Started!
const startround2=function(x){
    const key=x.key
    if (key !==''){
        round2();
    }

    else {
    }

}

//Round 1 function
const round=function(){
    var start=document.querySelector('#start');
    var stroke = document.querySelector('#stroke');
    var wins = document.querySelector('#wins');
    var currentword = document.querySelector('#current-word');
    var remaining = document.querySelector('#remaining');
    var picture = document.querySelector('#picture');
    var answer ='kakashi';
    var guessed1='-';
    var guessed2='-';
    var guessed3='-';
    var guessed4='-';
    var guessed5='-';
    var guessed6='-';
    var guessed7='-';
    var guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
    var incorrect='';
    var attempts=5
    var i=0
    var wrongs=0
    
    
    while(i < 5 && wrongs < 6) {
        start.innerText='Press Any Key to Begin Round 2';
        stroke.innerText='Rounds Won:\n1.) '+guessed;
        wins.innerText='Wins Under Your Belt: 1';

        if (guessed === answer){
            alert('You Win');

            i=5;
            

        }

        else if (wrongs === 5){
            document.write('GameOver')
            wrongs=6
            
        }

        else {
            document.removeEventListener('keypress',startbutton);
            stroke.innerText=guessed;
             var guess=prompt('Enter Guess Here');

                if (guess==='k'){
                guessed1=guess;
                guessed3=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            
            }    
            else if(guess==='a'){
                guessed2=guess;
                guessed4=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            
            }
            else if(guess==='s'){
                guessed5=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            
            }
            else if(guess==='h'){
                guessed6=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                
            }
            else if(guess==='i'){
                guessed7=guess;
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
            
                
            
            }
        
            else {
                incorrect=incorrect+guess+',';
                guessed=guessed1+guessed2+guessed3+guessed4+guessed5+guessed6+guessed7;
                attempts=attempts-1;
                alert('Correct guesses:    '+guessed+'\nIncorrect Geusses: '+incorrect+'\n'+attempts+' wrong guesses until YOU LOSE!');
                wrongs++;
                
                
            } 
            document.removeEventListener('keypress',startbutton);
            picture.innerHTML='<img src="assets/images/kakashi.jpeg" alt="background image" style="margin-top:15px; margin-bottom:25px; border:solid orange 5px; width: 90%; height:500px;">'
            
            
            
        }
        
    }
    
    document.addEventListener('keypress', startround2);
}





//Game. Round 1
const Game=function(){
    const wins=0;
    const losses=0;

    if (losses<12){
        round()   
    }

    else{
        document.write('GAME OVER');
        document.write(wins);
        
    }











}











//press Any key to get Started!
const startbutton=function(x){
    const key=x.key
    if (key !==''){
        Game();
    }

    else {
    }

}


document.addEventListener('keypress', startbutton);
