var allText =[];
        var config;

        function readTextFile(file,callback)
        {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState === 4)
                {
                    if(rawFile.status === 200 || rawFile.status == 0)
                    {
                        allText = rawFile.responseText.split(/\r\n|\n/);            
                        return  callback(null,allText);
                    }
                }
            }
            rawFile.send(null);
        }

        allText = readTextFile("data.csv",function(err,results){
            
            var randomColorFactor = function() {
                return Math.round(Math.random() * 255);
            };
            var randomColor = function(opacity) {
                return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
            };

            var Textlen = allText.length-1;
            var MONTHS =[];
            var DATAS =new Array();
            
            for(var j=0;j<allText[0].split(",").length-1;j++){  
                DATAS[j]=new Array();
            }
            
            for(var i=1;i<=Textlen;i++){
                MONTHS.push(allText[i].split(",")[0]);
                for(var j=1;j<=allText[i].split(",").length-1;j++){ 
                    DATAS[j-1].push(parseFloat(allText[i].split(",")[j])*100);
                    
                }
                
            }
            
            lineData = {
                    labels: MONTHS,
                    datasets: [{
                        label: allText[0].split(",")[1],
                        data: DATAS[0],
                        fill: false,
                        //borderColor: "rgba(110,220,220,0.8)",
                    }]
            }

            $.each(lineData.datasets, function(i, dataset) {
                var background = randomColor(0.5);
                dataset.borderColor = background;
                dataset.backgroundColor = background;
                dataset.pointBorderColor = background;
                dataset.pointBackgroundColor = background;
                dataset.pointBorderWidth = 1;
            });

            var ctx = document.getElementById("canvas").getContext("2d");
            var myLine = new Chart(ctx, {
                type: 'line',
                data: lineData,
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Soil Moisture'
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Smart Herb Garden Soil Moisture'
                    }
                }
            });
            myLine.update();
            
        });