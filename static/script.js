$("#bushingSubmit").click(function(e) {
	e.preventDefault();
	var weight = $("#weight").val();
	var weightType = $("#weightType").val();
	console.log(weight);
	var url = "query?weight="+weight+"&weight_type=" + weightType;

	$("#content").load(url + " #content");
});