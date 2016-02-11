$(document).ready(function() {
	registerSearch();
});

function registerSearch() {
	$("#search").submit(function(ev){
		event.preventDefault();
		$.get($(this).attr('action'), {q: $("#q").val()}, function(data) {
			var template = $('#twitterTpl').html();
			var rendered = Mustache.to_html(template, data)
			$("#resultsBlock").empty().append(rendered);
		});	
	});
}

