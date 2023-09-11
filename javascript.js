let arr = new Array();
arr = [{
        title: "What is force?",
        o1: "pull",
        o2: "push",
        o3: "push and push both",
        o4: "none of these",
        ans: "o3",
        qscore:10
},
{
        title: "What is state of motion?",
        o1: "position of rest",
        o2: "position of motion",
        o3: "both by the state of rest or motion",
        o4: "none of these",
        ans: "o3",
        qscore:10
},
{
        title: "The strength of force is expressed by?",
        o1: "weight",
        o2: "mass",
        o3: "magnitude",
        o4: "longitudinal force",
        ans: "o3",
        qscore:10
},
{
        title: "The force between two charged bodies is called",
        o1: "muscular force",
        o2: "gravitational force",
        o3: "magnetic force",
        o4: "electrostatic force",
        ans: "o4",
        qscore:10
},
{
        title: "When two forces act in opposite directions, then net force acting two forces",
        o1: "sum of two factors",
        o2: "difference bwteen two factors",
        o3: "both of these",
        o4: "none of these",
        ans: "o2",
        qscore:10
},
{
        title: "Magnetic force is",
        o1: "contact force",
        o2: "non-contact force",
        o3: "both a and b",
        o4: "none of these",
        ans: "o2",
        qscore:10
},
{
        title: "Force acts on an object may change",
        o1: "direction",
        o2: "shape",
        o3: "speed",
        o4: "all of above",
        ans: "o4",
        qscore:10
        
},
{
        title: "Leaves or fruits fall on the ground due to",
        o1: "magnetic force",
        o2: "gravitational force",
        o3: "electrostatic force",
        o4: "muscular force",
        ans: "o2",
        qscore:10
        
},
{
        title: "Unit of force",
        o1: "Kg-Newton",
        o2: "Newton",
        o3: "Meter/sec",
        o4: "Joul",
        ans: "o2",
        qscore:10
        
},
{
        title: "Value of 1 kilogram in gram",
        o1: "10",
        o2: "100",
        o3: "1000",
        o4: "10000",
        ans: "o3",
        qscore:10
        
}];
let score=0,i=0;
document.getElementsByClassName("result")[0].style.display="none";
document.getElementsByClassName("ans_tag")[0].style.display="none";
document.getElementsByClassName("ans_tag1")[0].style.display="none";
function restart(){
        score=0;
        i=0;
        document.getElementsByClassName("result")[0].style.display="none";
        document.getElementsByClassName("tag")[0].style.display="block";
        document.getElementsByClassName("ans_tag")[0].style.display="none";
        document.getElementsByClassName("ans_tag1")[0].style.display="none";
        document.getElementById("t").innerText="Quiz";
        var g=document.getElementById("check");
        g.style.display="none";
        allcheckedfalse(); 
        question_fun();
}
function result(){
        document.getElementsByClassName("tag")[0].style.display="none";
        document.getElementsByClassName("result")[0].style.display="block";
        document.getElementsByClassName("ans_tag")[0].style.display="block";
        document.getElementsByClassName("ans_tag1")[0].style.display="block";
        document.getElementById("t").innerText= "Score: "+score.toString();
        var g=document.getElementsByClassName("showquestion");
        for(var j=0;j<g.length;j++){
                var tag=document.createElement("span");
                tag.innerText=arr[j][arr[j].ans];
                tag.style.backgroundColor="lightgreen";
                tag.style.borderRadius="3px";
                g[j].innerHTML=arr[j].title+" - ";
                g[j].appendChild(tag);
                
        }
}
function checkstyle(g){
        g.style.width="125px";
        g.style.height="40px";
        g.style.textAlign="center";
        g.style.paddingTop="5px";
        g.style.borderRadius="2px";
        return;
}
function allcheckedfalse(){
        var inp=document.getElementsByTagName("input");
        var n=inp.length;
        for(var j=0;j<n;j++){
                inp[j].checked=false;
        }
}
function next(){   
        allcheckedfalse();     
        question_fun();
        var g=document.getElementById("check");
        g.style.display="none";
}
function submit(){
        var inp=document.getElementsByTagName("input");
        var n=inp.length;
        for(var j=0;j<n;j++){
                if(inp[j].checked==true){
                    var g=document.getElementById("check");
                    g.style.display="block";
                    if(inp[j].value==arr[i-1].ans){
                        g.innerHTML="CORRECT";
                        g.style.boxShadow = "20px 20px 50px 10px azure inset";
                        g.style.color="green";
                        checkstyle(g);
                        score+=arr[i-1].qscore;
                    }  
                    else{
                        g.innerHTML="INCORRECT";
                        g.style.boxShadow = "20px 20px 50px 10px bisque inset";
                        g.style.color="red";
                        checkstyle(g);
                    }  
                    index=j;                    
                }
        }
}
function beforesubmit(){
        var inp=document.getElementsByTagName("input");
        var n=inp.length;
        for(var j=0;j<n;j++){
                if(inp[j].checked){
                        return true;
                }
        }
        return false;
}
function hit(){
        var check_button=document.getElementsByClassName("btn")[0];
        if(check_button.textContent=="Submit"){
                if(beforesubmit()){
                        submit();
                        if(i==10){
                                result();
                        }
                        else{
                                check_button.innerText="Next";
                                check_button.style.backgroundColor = "green";
                                check_button.style.color = "white";
                        }
                        
                        
                }
                else{
                        alert("select any option the submit");
                }
                
        }
        else if(check_button.textContent=="Next"){
                next();
                check_button.innerText="Submit";
                check_button.style.backgroundColor = "gold";
                check_button.style.color = "black";
        }
        else{
                restart();
                check_button.innerText="Submit";
                check_button.style.backgroundColor = "gold";
                check_button.style.color = "black";
        }
        
}
function question_fun(){
    var h_tag=document.getElementById("q_title");
    var l_o1=document.getElementById("o1");
    var l_o2=document.getElementById("o2");
    var l_o3=document.getElementById("o3");
    var l_o4=document.getElementById("o4");
    h_tag.innerText=`Q${i+1} :- `+arr[i].title;
    l_o1.innerText=arr[i].o1;
    l_o2.innerText=arr[i].o2;
    l_o3.innerText=arr[i].o3;
    l_o4.innerText=arr[i].o4;
    i++;
}