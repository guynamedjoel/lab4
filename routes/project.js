exports.viewProject = function(req, res){
	var name = req.params.name; 

	res.render('project', {
		'jumbotron': {
			'name': name,
			'description': 'one-sentence description of project'
		}
	});
}

