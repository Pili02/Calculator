var display="";
var answer="";
var operator="";
var ops=["+","-","*","/"];
var opcount=0;
var n1;
var n2;
$(".number").click(function () { 
    if($(this).text()==1){
        display+="1";
        $(".display").text(display);
    }
    else if($(this).text()==2){
        display+="2";
        $(".display").text(display);
    }
    else if($(this).text()==3){
        display+="3";
        $(".display").text(display);
    }
    else if($(this).text()==4){
        display+="4";
        $(".display").text(display);
    }
    else if($(this).text()==5){
        display+="5";
        $(".display").text(display);
    }
    else if($(this).text()==6){
        display+="6";
        $(".display").text(display);
    }
    else if($(this).text()==7){
        display+="7";
        $(".display").text(display);
    }
    else if($(this).text()==8){
        display+="8";
        $(".display").text(display);
    }
    else if($(this).text()==9){
        display+="9";
        $(".display").text(display);
    }
    else if($(this).text()==0){
        display+="0";
        $(".display").text(display);
    }
    else if($(this).text()=="AC"){
        display="";
        $(".display").text(display);
        opcount=0;
        operator="";
        $(".answer").text("");
    }
});

$(".operation").click(function () { 
    
    if (opcount==0){
        n1=Number(display);
        console.log("n1= "+n1);
        if($(this).text()=="+"){
            
            display+="+";
            $(".display").text(display);
            operator=ops[0];
        }
        else if($(this).text()=="-"){
            display+="-";
            $(".display").text(display);
            operator=ops[1];
        }
        else if($(this).text()=="*"){
            display+="*";
            $(".display").text(display);
            operator=ops[2];
        }
        else if($(this).text()=="/"){
            display+="/";
            $(".display").text(display);
            operator=ops[3];
        }
        opcount=1;
    }
});


$(".equal").click(function () { 
    if(opcount==1){

        var index=display.indexOf(operator);
        n2 = Number(display.slice(index+1));
        console.log("n2= "+n2 );
        if(n2!=null){
            console.log("operator= "+operator);
            if(operator=='+'){
                $(".answer").text(n1+n2);
            }
            else if(operator=='-'){
                $(".answer").text(n1-n2);
            }
            else if(operator=='*'){
                $(".answer").text(n1*n2);
            }
            else if(operator=='/'){
                console.log("ulla poichu");
                if(n2!=0){
                    console.log("ahh");
                    $(".answer").text(n1/n2);
                }
                else{
                    console.log("hey");
                    $(".answer").text("error");
                }
            }
            display="";
            $(".display").text(display);
            opcount=0;
            operator="";
            answer=""
            
        }
    }
});
