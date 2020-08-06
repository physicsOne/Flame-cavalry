(function(){
    var tense = new Date();
    var year = tense.getFullYear();
    var month = tense.getMonth();
	var today = tense.getDate();
    var calender = document.querySelector("#calender");
    var calenderHeader = document.querySelector("#calender-header");
    var monthIdentifier;
    function displayCalender(y,m){
        var table = document.querySelector("#calender table")
        var lastDayOfMonth = 32 - new Date(y,m,32).getDate();
        var firstDayOfMonth = new Date(y,m,0).getDay();
        var c = 0 - firstDayOfMonth;//dayofweak
        if(month < 0){
            year-=1;
            month = 11;
        }
        monthIdentifier =  (function(){
            switch(month){
                case 0 :
                    return "january";
                    break;
                case 1 :
                    return "february";
                    break;
                case 2 :
                    return "march";
                    break;
                case 3 :
                    return "april";
                    break;
                case 4 :
                    return "may";
                    break; 
                case 5 :
                    return "june";
                    break;
                case 6 :
                    return "july";
                    break;
                case 7 :
                    return "august";
                    break;
                case 8 :
                    return "september";
                    break;
                case 9 :
                    return "october";
                    break; 
                case 10 :
                    return "november";
                    break;
                case 11 :
                    return "december";
                    break;                                       
            }
        })();
        for(var i = 0; i < 5; i++){
            var row = document.createElement("tr");
            table.append(row);
            for(var a = 0; a < 7; a++){
                if(c >= lastDayOfMonth){break;}
                c++
                var column = document.createElement("td"); 
                if(c >0){          
                     column.textContent = c;
                }
                row.append(column);
				if(c === today && month === tense.getMonth()){
                    column.style.backgroundColor = 'green';
				}
            }
        }
        
        month = m;        
        calenderHeader.textContent = year + " " + monthIdentifier;
    }
    window.onload = displayCalender(year,month);
    function clearTable(){
        var table = document.querySelector("table");
        for (var i = 6; i > 1; i--){
            var lines = table.childNodes[i];
            table.removeChild(lines)
        }
    }
    document.querySelector("#previous").addEventListener("click",function(e){
        clearTable();
        month--;
        if(month<0){
            month = 11;
            year--;
        }
        displayCalender(year,month)
    })
    document.querySelector("#next").addEventListener("click",function(e){
        clearTable();
        month++;
        if(month>11){
            month = 0;
            year++;
        }
        displayCalender(year,month)
    })
})();