
const chartdata='data.csv';

d3.csv(chartdata).then(function(datapoints) {
    console.log(datapoints)
    const Points =[];
    const Wins =[];
    const LapsLead =[];
    
 
 
       for (i=0;i<datapoints.length;i++){
          Points.push(datapoints[i].Points)
          Wins.push(datapoints[i].Wins)
          LapsLead.push(datapoints[i].LapsLead)
          
       }
       const myChart= document.getElementById('myChart').getContext('2d');
      
       const StandingsChart = new Chart(myChart,{
           type:'bar',
           data:{
               labels:['Max Verstappen', 'Lewis Hamilton', 'Valtteri Bottas', 'Sergio Perez', 'Carlos Sainz',
                       'Lando Norris', 'Charles Leclerc',  'Daniel Ricciardo', 'Pierre Gasly',  'Fernando Alonso',
                       'Esteban Ocon', 'Sebastian Vettel',  'Lance Stroll', 'Yuki Tsunoda', 'George Russell',
                       'Kimi Räikkönen', 'Nicholas Latifi', 'Antonio Giovinazzi', 'Mick Schumacher',  'Robert	Kubica',
                       'Nikita	Mazepin'],
               datasets:[{
                   label:'Points',
                   data: Points,
                           backgroundColor:[
                           'rgba(6, 0, 254, 0.98)',
                           'rgba(6, 229, 254, 0.8)',
                           'rgba(6, 0, 254, 0.98)',
                           'rgba(6, 229, 254, 0.8)',
                           'rgba(146, 0, 0, 10)',
                           'rgba(255, 169, 0, 0.98)',
                           'rgba(146, 0, 0, 10)',
                           'rgba(255, 169, 0, 0.98)',
                           'rgba(0, 0, 148, 0.39)',
                           'rgba(0, 0, 104, 1)',
                           'rgba(0, 0, 104, 1)',
                           'rgba(0, 116, 0, 0.98)',
                           'rgba(0, 116, 0, 0.98)',
                           'rgba(0, 0, 148, 0.39)',
                           'rgba(46, 164, 210, 0.75)',
                           'rgba(146, 0, 0, 1)',
                           'rgba(46, 164, 210, 0.75)',
                           'rgba(146, 0, 0, 1)',
                           'rgba(175, 0, 66, 0.75)',
                           'rgba(146, 0, 0, 1)',
                           'rgba(175, 0, 66, 0.75)'
                           ]
               }]
           },
           options: {

               scales:{
                x:{ ticks:{
                        color:'white'
                    
                    }

                },
                y:{
                    ticks:{
                        color:'white'
                    
                    }
                  
                }
            },
              
               
           plugins: {
               
           title: {
               display: true,
               text: 'Drivers Points Scored',
               color:'white'
           },
         
           legend: {
               display: false
               

           }
       }
   }
           
       }); 
      
    });