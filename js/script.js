var defaultGridSize = 16;

$(document).ready(function(){
	generateGrid(defaultGridSize);
	enableHovering();

	

	$("#clear").click(
		function(){
			$(".box").removeClass("blueBox");
		}
	);

	$("#setNumTiles").click(
		function(){
			var newTiles = prompt("how many tiles?");
			alert("So you want "+newTiles+" tiles?");
			deleteCurrentGrid();
			generateGrid(newTiles);
		}
	);
})

function generateGrid(gridSize){
	for(var i=0; i < gridSize; i++){
		var rowId = "row" + i;
		$("body").append('<div class="row" id="'+rowId+'"></div>');

		for(var j=0; j< gridSize; j++){
			var boxId = rowId+"box" + j;
			$("#"+rowId).append('<div class="box" id="'+boxId+'"></div>');
		}
	}
	enableHovering();
}

function deleteCurrentGrid(){
	$(".row").remove();
}

function enableHovering(){
	$(".box").hover(
	function(){
		$(this).addClass("blueBox");
	}, function() {
		//$(this).removeClass("blueBox");
	});
}



