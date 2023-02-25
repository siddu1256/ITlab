
var count=0,count1=0;
        var u=[];
     
        
        function c(d) { 
            u.push(d);
             
            if(u[count1]==u[count1-1]){count1++;    alert('enter in another box');}
            else{
                count1++;
            if(count%2==0 ){
                var t='d'+d; document.getElementById(t).src='https://imgs.search.brave.com/x0ryPlRDxpEZw1XUoERa6MVGzfWhtJvUwFBHlGE2wcE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy81L0JsYWNr/LVgtTGV0dGVyLVBO/Ry1GcmVlLUltYWdl/LnBuZw';
                document.getElementById(t).height='80'
    document.getElementById(t).width='80'
            }
            if(count%2==1){
                  var t='d'+d;
                  document.getElementById(t).src='https://imgs.search.brave.com/rCg3kA84RzTF_9fLMw8ffNbF-AJZ0uV93RJO-wqDWis/rs:fit:353:344:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC8yMDUt/MjA1NjI3NF90aWMt/dGFjLXRvZS1pbWct/bGV0dGVyLW8ucG5n';
                  document.getElementById(t).height='70'
    document.getElementById(t).width='70' 
            }
            count++;
           
            var h=check();
            if(h==1){
                document.getElementById('result').innerHTML='🥳🥳🎉🎉-----Person1 won-----🎉🎉🥳🥳';
        for(var i=1;i<10;i++){
           
            var t='c'+i;
   
            document.getElementById(t).onclick="";
        }

            }
            if(h==0){
                document.getElementById('result').innerHTML='🥳🥳🎉🎉-----Person2 won-----🎉🎉🥳🥳';
                for(var i=1;i<10;i++){
                    var t='c'+i;
                    document.getElementById(t).onclick="";
                }
                
            }
            if(h==3){
                document.getElementById('result').innerHTML='Continue.....'
            }
            if(h==4){
                document.getElementById('result').innerHTML='game tied';
                for(var i=1;i<10;i++){
                    var t='c'+i;
                    document.getElementById(t).onclick="";
                }
                
            }
        }
        }
       
function check() {
  
   var r=[5,5,5,5,5,5,5,5,5]
   for(var i=0;i<9;i++){
    var t='d'+(i+1);
    if(document.getElementById(t).src=='https://imgs.search.brave.com/rCg3kA84RzTF_9fLMw8ffNbF-AJZ0uV93RJO-wqDWis/rs:fit:353:344:1/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZnVsbC8yMDUt/MjA1NjI3NF90aWMt/dGFjLXRvZS1pbWct/bGV0dGVyLW8ucG5n'){
        r[i]=0;
    }
    else{ if(document.getElementById(t).src=='https://imgs.search.brave.com/x0ryPlRDxpEZw1XUoERa6MVGzfWhtJvUwFBHlGE2wcE/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy81L0JsYWNr/LVgtTGV0dGVyLVBO/Ry1GcmVlLUltYWdl/LnBuZw'){
        r[i]=1;
    }
    else {
    }
        }
    
}
  document.getElementById('result').innerHTML=' 0='+r[0]+' 1='+r[1]+' 2='+r[2]+' 3='+r[3]+' 4='+r[4]+' 5='+r[5]+' 6='+r[6]+' 7='+r[7]+' 8='+r[8];

if(r[0]=='1'&&r[1]=='1'&&r[2]=='1'){e=1;}
   else if(r[3]=='1'&&r[4]=='1'&&r[5]=='1'){e=1;}
   else if(r[6]=='1'&&r[7]=='1'&&r[8]=='1'){e=1;}
        else if(r[0]=='1'&&r[3]=='1'&&r[6]=='1'){e=1;}
            else if (r[1]=='1'&&r[4]=='1'&&r[7]=='1'){e=1;}
                else if(r[2]=='1'&&r[5]=='1'&&r[8]=='1'){e=1;}
                    else if(r[0]=='1'&&r[4]=='1'&&r[8]=='1'){e=1;}
                        else if(r[2]=='1'&&r[4]=='1'&&r[6]=='1'){e=1;}
    else {e=4}
 if(e==4){   
if(r[0]=='0'&&r[1]=='0'&&r[2]=='0'){e=0;}
   else if(r[3]=='0'&&r[4]=='0'&&r[5]=='0'){e=0;}
     else if(r[6]=='0'&&r[7]=='0'&&r[8]=='0'){e=0;}
        else if(r[0]=='0'&&r[3]=='0'&&r[6]=='0'){e=0;}
            else if (r[1]=='0'&&r[4]=='0'&&r[7]=='0'){e=0;}
                else if(r[2]=='0'&&r[5]=='0'&&r[8]=='0'){e=0;}
                    else if(r[0]=='0'&&r[4]=='0'&&r[8]=='0'){e=0;}
                        else if(r[2]=='0'&&r[4]=='0'&&r[6]=='0'){e=0;}
    else {e=4}
 }
    var y;
    for(var i=0;i<9;i++){
        if(r[i]=='5'){
            y='exists';
            break;
        }
        else{
            y='notexists';
        }
    }
            
if(e==1){return 1;}
    else if(e==0){return 0;}
    else if(y=='notexists'&& e==4){return 4}
    else {return 3}
     
   
}
