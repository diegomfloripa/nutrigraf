var controller = app.controller("medidasCtrl", function($scope) {
	$scope.app = "Medidas Controller";
	$scope.medidas = [];

	var calculoFaulkner = function(medida) {
		var somaMedidas = parseInt(medida.triceps) + parseInt(medida.escapular) + parseInt(medida.suprailiaca) + parseInt(medida.abdominal);
		return (somaMedidas * 0.153 + parseFloat(5.783)) / 100;
	}

	var calculoIdealGordura = function(idade) {
		if(idade < 30) {
			return parseFloat(0.13) + parseFloat(0.01);
		} else {
			return parseFloat(0.13) + ((idade - 30) * 0.002);
		}
	}

	$scope.add = function(medida) {
		delete $scope.medida;
		var percentualGordura = calculoFaulkner(medida);
		var livreGordura = 1 - percentualGordura;
		var idealGordura = calculoIdealGordura(medida.idade)
		var sobraGordura = percentualGordura - idealGordura;

		console.log("percentualGordura: " + percentualGordura);
		console.log("livreGordura: " + livreGordura);
		console.log("idealGordura: " + idealGordura);
		console.log("sobraGordura: " + sobraGordura);

		//CHART PIE
	var dataPie = [
            {
              value: Math.round(percentualGordura * 100),
              color: "#F38630"
            },
            {
              value : Math.round(livreGordura * 100),
              color : "#E0E4CC"
            },
            {
              value : Math.round(idealGordura * 100),
              color : "#69D2E7"
            },
            {
              value : Math.round(sobraGordura * 100),
              color : "#45E469"
            }
          ]
    $scope.myChartPie = {"data": dataPie, "options": {} };


		//data.datasets[0].data.push(medida.peso);
		data.datasets[1].data.push(medida.altura);
	}

	//CHART Line (Default)
	var data = {
	    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [100,95,90,87,85,83,80,75] //peso
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: []
	        }
	    ]
	};
	$scope.myChart = {"data": data, "options": {} };

	
});