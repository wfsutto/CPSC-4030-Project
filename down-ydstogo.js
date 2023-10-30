d3.csv("2018-2022_nflfastR_clean.csv").then(
    function(dataset){
        console.log(dataset)

        var size = 360;

        var svg = d3.select("#downs")
                    .attr("width", size)
                    .attr("height", size*2)

        var colLabel = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11+'];

        var rowLabel = ['1', '2', '3', '4'];

        var table = d3.select("#downs").append("table")

        console.log(table)

        var thead = table.append('thead')
	    var	tbody = table.append('tbody');

	    // append the header row
	    thead.append('tr')
	        .selectAll('th')
	        .data(rowLabel).enter()
	        .append('th')
	        .text(function (rowLabel) { return rowLabel; });

	    // create a row for each object in the data
	    var rows = tbody.selectAll('tr')
	                    .data(dataset)
	                    .enter()
	                    .append('tr');

	    // create a cell in each row for each column
	    var cells = rows.selectAll('td')
	                    .data(function (d,i) {
	                        return d;
	                    })
	                    .enter()
	                    .append('td')
	                    .text(function(d){
                            return d;
                        });
    }
)