var data = {"0": {"name": "Ayu Health Super-Speciality Hospital", "latitude": 13.00853032, "longitude": 77.56835543, "covid": 78, "non-covid": 136, "masks": 1200, "ventilators": 15}, "1": {"name": "Himamshu Hospital", "latitude": 13.01042239, "longitude": 77.56591998, "covid": 45, "non-covid": 121, "masks": 456, "ventilators": 16}, "2": {"name": "Manipal Hospital", "latitude": 13.00181329, "longitude": 77.56401911, "covid": 57, "non-covid": 135, "masks": 1345, "ventilators": 10}, "3": {"name": "PMC hospital", "latitude": 13.0074571, "longitude": 77.55432023, "covid": 68, "non-covid": 112, "masks": 1365, "ventilators": 0}, "4": {"name": "Ananya hospital", "latitude": 13.00131034, "longitude": 77.55088701, "covid": 33, "non-covid": 102, "masks": 1154, "ventilators": 0}, "5": {"name": "Fortis hospital", "latitude": 13.00340109, "longitude": 77.54908456, "covid": 43, "non-covid": 123, "masks": 1565, "ventilators": 0}, "6": {"name": "Eshwar Hospital", "latitude": 13.00992412, "longitude": 77.54041566, "covid": 77, "non-covid": 134, "masks": 2344, "ventilators": 0}, "7": {"name": "Ramaiah Memorial Hospital", "latitude": 13.02940317, "longitude": 77.5702033, "covid": 12, "non-covid": 89, "masks": 2466, "ventilators": 13}, "8": {"name": "K.C. General Hospital", "latitude": 12.99696269, "longitude": 77.56946936, "covid": 78, "non-covid": 145, "masks": 1245, "ventilators": 12}, "9": {"name": "Narayana Super Speciality Hospitals", "latitude": 12.99834261, "longitude": 77.56865397, "covid": 25, "non-covid": 123, "masks": 1335, "ventilators": 15}, "10": {"name": "Nayak hospital", "latitude": 12.99997342, "longitude": 77.56075754, "covid": 67, "non-covid": 155, "masks": 1645, "ventilators": 16}, "11": {"name": "Supriya Hospital", "latitude": 12.99353376, "longitude": 77.55856886, "covid": 56, "non-covid": 221, "masks": 3421, "ventilators": 7}, "12": {"name": "Nandana Health Care Services", "latitude": 12.99813236, "longitude": 77.54625215, "covid": 78, "non-covid": 145, "masks": 2343, "ventilators": 8}, "13": {"name": "Mallige Hospital", "latitude": 12.98625641, "longitude": 77.58041276, "covid": 67, "non-covid": 167, "masks": 1243, "ventilators": 4}, "14": {"name": "Suresh Hospital", "latitude": 12.99085632, "longitude": 77.55543603, "covid": 89, "non-covid": 222, "masks": 1243, "ventilators": 7}, "15": {"name": "Sreenivasa Hospital", "latitude": 12.97379441, "longitude": 77.572688, "covid": 24, "non-covid": 78, "masks": 1354, "ventilators": 27}, "16": {"name": "Sevabhai Hospital", "latitude": 12.98424915, "longitude": 77.55389108, "covid": 12, "non-covid": 78, "masks": 2345, "ventilators": 3}, "17": {"name": "Manipal Hospital, Millers Road", "latitude": 12.9896018, "longitude": 77.59208574, "covid": 36, "non-covid": 136, "masks": 1335, "ventilators": 65}, "18": {"name": "Gayathri Hospital", "latitude": 12.97605267, "longitude": 77.54281892, "covid": 67, "non-covid": 134, "masks": 2435, "ventilators": 46}, "19": {"name": "Apollo Hospitals Sheshadripuram", "latitude": 12.98968544, "longitude": 77.57225885, "covid": 47, "non-covid": 125, "masks": 2354, "ventilators": 22}, "20": {"name": "Punya hospital", "latitude": 12.98692549, "longitude": 77.53784074, "covid": 67, "non-covid": 167, "masks": 3454, "ventilators": 13}, "21": {"name": "B.B.M.P Hospital", "latitude": 12.98015094, "longitude": 77.53432168, "covid": 67, "non-covid": 135, "masks": 2335, "ventilators": 14}, "22": {"name": "Shobha Hospital", "latitude": 12.97638722, "longitude": 77.53166093, "covid": 36, "non-covid": 167, "masks": 2345, "ventilators": 12}, "23": {"name": "Kanva Diagnostic Hospital", "latitude": 12.98792911, "longitude": 77.55998506, "covid": 89, "non-covid": 222, "masks": 3222, "ventilators": 11}, "24": {"name": "UPHC hospital, srirampura", "latitude": 12.98784548, "longitude": 77.56573571, "covid": 67, "non-covid": 156, "masks": 1132, "ventilators": 17}, "25": {"name": "Bhagwan Mahaveer Jain Hospital", "latitude": 12.99436892, "longitude": 77.5953473, "covid": 45, "non-covid": 149, "masks": 1154, "ventilators": 13}, "26": {"name": "Sidvin Hospital", "latitude": 12.98230781, "longitude": 77.54942226, "covid": 56, "non-covid": 145, "masks": 1243, "ventilators": 0}, "27": {"name": "Chord Road Hospital", "latitude": 12.99820808, "longitude": 77.5404612, "covid": 78, "non-covid": 235, "masks": 1445, "ventilators": 0}, "28": {"name": "Vikram hospital", "latitude": 12.98862357, "longitude": 77.59197871, "covid": 13, "non-covid": 127, "masks": 2343, "ventilators": 32}, "29": {"name": "Sparsh hospital", "latitude": 12.98479307, "longitude": 77.59464989, "covid": 24, "non-covid": 67, "masks": 1234, "ventilators": 23}}

function write(){
    for(i=0;i<30;i++){
    var temp = i+1;
    document.body.innerHTML+= "<div id='two'>" + temp + ". " +data[i].name+ "<a id = 'rr' onclick='algo(event)'>Request Resources></a></div>";
        
    }
}

function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

function algo(e)
{ 
    var current = e.target;
    var parent = current.parentElement;
    var id = parent.innerText;
    var myarr = id.split(".");
    var ind = parseInt(myarr[0]) - 1;
    localStorage.setItem('index', ind);
    nearest();
   
}

function nearest(){
    var curr = localStorage.getItem('index');
    var arrr = [];

    for(i=0;i<30;i++){
        if(i!= parseInt(curr)){
            var distance = calcCrow(data[curr].latitude, data[curr].longitude, data[i].latitude, data[i].longitude);
            arrr.push([i, distance])
        }
    
    }
    arrr = arrr.sort(function(a,b) {
        return a[1] - b[1];
    });
    localStorage.setItem("names", JSON.stringify(arrr));
    window.location.href = './routing.html';


}

function title(){
    var curr = localStorage.getItem('index');
    document.getElementById('three').innerHTML = 'Allocating resources to '+ data[curr].name +':'; 
   
    
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

function results(){
    var curr = JSON.parse(localStorage.getItem("names"));
    var i =  document.getElementById('i').value;
    var ii = document.getElementById('ii').value;
    var iii = document.getElementById('iii').value;
    var iiii = document.getElementById('iiii').value;
    var cov = '<b>Covid beds: </b><br>';
    var ncov = '<b>Non-Covid beds: </b><br>';
    var masks = '<b>Masks: </b><br>';
    var vent = '<b>Ventilators: </b><br>';
    i = parseInt(i);
    ii = parseInt(ii);
    iii = parseInt(iii);
    iiii = parseInt(iiii);

    var j = 0;
    while(i>0 && j<curr.length ){
        if (i > data[curr[j][0]].covid){
            cov+=  '<b>'+data[curr[j][0]].covid+'</b>' + ' beds available at <b>' + data[curr[j][0]].name + ' ('+ round(curr[j][1],2)+'kms). </b><br>';  
            i = i - data[curr[j][0]].covid;
            j+=1;
        }

        
        if (i <= data[curr[j][0]].covid){
            cov+= '<b>'+ i + '</b>'+ ' beds available at <b>' + data[curr[j][0]].name +' ('+ round(curr[j][1],2)+'kms). </b><br>';  
            i = i - data[curr[j][0]].covid;
        }
            
        }
        i = ii;
        var j = 0;
        while(i>0 && j<curr.length ){
            if (i > data[curr[j][0]]['non-covid']){
                ncov+=  '<b>'+data[curr[j][0]]['non-covid']+'</b>' + ' beds available at <b>' + data[curr[j][0]].name + ' ('+ round(curr[j][1],2)+'kms). </b><br>';  
                i = i - data[curr[j][0]]['non-covid'];
                j+=1;
            }
    
                
            if (i <= data[curr[j][0]]['non-covid']){
                ncov+= '<b>'+ i + '</b>'+ ' beds available at <b>' + data[curr[j][0]].name +' ('+ round(curr[j][1],2)+'kms). </b><br>';  
                i = i - data[curr[j][0]]['non-covid'];
            }
                
            }

            i = iii;
        var j = 0;
        while(i>0 && j<curr.length ){
            if (i > data[curr[j][0]]['masks']){
                masks+=  '<b>'+data[curr[j][0]]['masks']+'</b>' + ' masks available at <b>' + data[curr[j][0]].name + ' ('+ round(curr[j][1],2)+'kms). </b><br>';  
                i = i - data[curr[j][0]]['masks'];
                j+=1;
            }
    
                
            if (i <= data[curr[j][0]]['masks']){
                masks+= '<b>'+ i + '</b>'+ ' masks available at <b>' + data[curr[j][0]].name +' ('+ round(curr[j][1],2)+'kms). </b><br>';  
                i = i - data[curr[j][0]]['masks'];
            }
                
            }

            i = iiii;
            var j = 0;
            while(i>0 && j<curr.length ){
                if (i > data[curr[j][0]]['ventilators']){
                    if(data[curr[j][0]]['ventilators']!=0){
                    vent+=  '<b>'+data[curr[j][0]]['ventilators']+'</b>' + ' ventilators available at <b>' + data[curr[j][0]].name + ' ('+ round(curr[j][1],2)+'kms). </b><br>';  }
                    i = i - data[curr[j][0]]['ventilators'];
                    j+=1;
                }
        
                    
                if (i <= data[curr[j][0]]['ventilators']){
                    vent+= '<b>'+ i + '</b>'+ ' ventilators available at <b>' + data[curr[j][0]].name +' ('+ round(curr[j][1],2)+'kms). </b><br>';  
                    i = i - data[curr[j][0]]['ventilators'];
                }
                    
                }
       
    

        document.getElementById('five').innerHTML = '';
        document.getElementById('five').innerHTML += cov + '<br><br>';
        document.getElementById('five').innerHTML += ncov + '<br><br>';
        document.getElementById('five').innerHTML += masks + '<br><br>';
        document.getElementById('five').innerHTML += vent + '<br><br>';

        
    }





