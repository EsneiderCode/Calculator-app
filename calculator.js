let answer = document.querySelector(".answer");
let counterArray = [''];
let textCalc = "";
answer.textContent = 0;

//Reset Button
function resetButton(){
    textCalc="";
    counterArray = [''];
    answer.textContent = 0;
}

//Delete Button
function deleteButton()
{
   
    if (counterArray.length==0)
    {
        counterArray='';
    }
        if (counterArray[counterArray.length-1]==''&&counterArray.length>1)
        {
            counterArray.pop();
            
        }
        if (counterArray[counterArray.length-1]!='+'&&
        counterArray[counterArray.length-1]!='x'&&
        counterArray[counterArray.length-1]!='-'&&
        counterArray[counterArray.length-1]!='/')
        {
            let char = counterArray[counterArray.length-1];
            counterArray[counterArray.length-1]=char.substring(0,char.length-1);
        }
        else{
            counterArray.pop();
            
        }
     if (textCalc[textCalc.length-2]!='-'&&
        textCalc[textCalc.length-2]!='+'&&
        textCalc[textCalc.length-2]!='x'&&
        textCalc[textCalc.length-2]!='/')
            {
                textCalc=textCalc.substring(0, textCalc.length-1);
            }
        else{
            
            textCalc=textCalc.substring(0,textCalc.length-3);
        }
        if (textCalc.length==0)
        {
            textCalc='0';
        }
        
       
     answer.textContent=textCalc;   
}




//Number Buttons
 function numberButton (props){
     
    
     if (props=='.' && counterArray.length==0)
     {
        counterArray.push('0.');
     }
        if (counterArray.length==0)
        {
            counterArray.push(props);
        }else if (counterArray[counterArray.length-1]=='+'||
        counterArray[counterArray.length-1]=='-'||
        counterArray[counterArray.length-1]=='x'||
        counterArray[counterArray.length-1]=='/')
        {
            counterArray.push(props);
        }
         else if ( counterArray[counterArray.length-1]!='+'||
         counterArray[counterArray.length-1]!='-'||
         counterArray[counterArray.length-1]!='x'||
         counterArray[counterArray.length-1]!='/')
         {
             counterArray[counterArray.length-1]+=props;
         }   
         else 
         {
                counterArray.push(props);
         }
         if (textCalc.length==1&&textCalc[0]=='0')
          {
             textCalc=props;
          }
         else
          {
                 textCalc+=props;
          }
            answer.textContent=textCalc;
 }

 function operationButton (props){
     if (counterArray.length==0 && props!= '-')
     {
         counterArray.push('0');
         counterArray.push(props);
         textCalc+=('0' + " "+ props+" ");
     }
     else if (
        counterArray[counterArray.length-1]=='+'||
        counterArray[counterArray.length-1]=='-'||
        counterArray[counterArray.length-1]=='x'||
        counterArray[counterArray.length-1]=='/'
        )
            {
                counterArray[counterArray.length-1]=props;
                    if (textCalc[textCalc.length-2]=='+'||
                        textCalc[textCalc.length-2]=='-'||
                        textCalc[textCalc.length-2]=='x'||
                        textCalc[textCalc.length-2]=='/'
                       )
                        {
                          let sign = [...textCalc];
                          sign[sign.length-2]=props;
                          textCalc=sign.join("");
                        }
            }
    else
        {
            counterArray.push(props);
            textCalc+= (' '+props+' ');
        }
    answer.textContent=textCalc; 
 }


 //Operation

 function equalButton (){
    for (let i=0; i<counterArray.length; i=i+2)
    {
        counterArray[i]=parseFloat(counterArray[i]);
    }

    //Multipling And Dividing
        while (counterArray.includes('x')||counterArray.includes('/'))
        {
            if (counterArray.includes('x') && counterArray.includes('/'))
            {
                let indexm=counterArray.indexOf('x');
                let indexd=counterArray.indexOf('/');
                if (indexm<indexd)
                {
                    counterArray.splice(indexm-1,3, counterArray[indexm-1]*counterArray[indexm+1]);
                }
                else
                {
                    counterArray.splice(indexd-1,3, counterArray[indexd-1]/counterArray[indexd+1]);
                }   
            }
            else if (counterArray.includes('/'))
            {
                let indexd=counterArray.indexOf('/');
                counterArray.splice(indexd-1,3, counterArray[indexd-1]/counterArray[indexd+1]);
            }
            else  {
                let indexm=counterArray.indexOf('x');
                counterArray.splice(indexm-1,3, counterArray[indexm-1]*counterArray[indexm+1]);
            }
           
        }

        while(counterArray.includes('+')||counterArray.includes('-'))
        {
             if (counterArray.includes('+'))
             {
                 let indexsum=counterArray.indexOf('+');
                 counterArray.splice(indexsum-1,3,  counterArray[indexsum-1]+counterArray[indexsum+1]);
             }
             else
             {
                 let indexsust = counterArray.indexOf('-');
                 counterArray.splice(indexsust-1, 3 , counterArray[indexsust-1]-counterArray[indexsust+1]);
             }
        }

     counterArray=counterArray.toString();
     textCalc=counterArray;
     answer.textContent=textCalc;
     if (counterArray=='Infinity')
     {
         counterArray=[''];
     }
     counterArray=[counterArray.toString()];
     console.log(counterArray);
     textCalc="";
}


