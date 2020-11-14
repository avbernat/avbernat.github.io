am4core.ready(function () {

	// Themes begin
	am4core.useTheme(am4themes_moonrisekingdom);
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
	var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

	chart.data = [
			{
			key: "Adaptation",
			name: "How do organisms adapt to \n human-modified environments?",
			children: [
				{
				key: "Dispersal",
				name: "Why do insects disperse?",
				children: [
					{   key: "Mill",
						name: "Flight mill is used to explore the speed, \n distance, and periodicity of individual bugs.", value: 860 },
					{   key: "Theory",
						name: "Theoretical simulations are programmed to \n explore dispersal potential based on genetic \n and spatial metrics.", value: 2000 }
						]
				},
				{
				key: "Mates",
				name: "How do they choose mates?",
				children: [
					{	key: "Trials", 
						name: "Mate trials are used to \n explore mating behavior.", value: 1408 }
						]
				},
				{
				key: "Nativity",
				name: "What happens to the native community?",
				children: [
					{ 	key: "Host",
						name: "We map the persistence of host plants \n in competition with invasive plants.", value: 2208 }
						]
				},
				{
				key: "Time",
				name: "Can we see evolution on human timescales?",
				children: [
					{   key: "Rec",
						name: "We map changes of host plant spatial \n distributions using herbarium records.", value: 935 },
					{   key: "Theory",
						name: "We use theoretical simulations to \n observe phenotypic and genetic changes on \n seasonal, annual, and decadal timescales.", value: 1935 }
				]
				}

			]
		}
	];

	networkSeries.dataFields.value = "value";
	networkSeries.dataFields.key = "key";
	networkSeries.dataFields.name = "name";
	
	networkSeries.dataFields.children = "children";
	networkSeries.nodes.template.tooltipText = "{name}";
	networkSeries.nodes.template.fillOpacity = 1;

	networkSeries.nodes.template.label.text = "{key}"
	networkSeries.fontSize = 13;

	networkSeries.links.template.strokeWidth = 1;

	var hoverState = networkSeries.links.template.states.create("hover");
	hoverState.properties.strokeWidth = 3;
	hoverState.properties.strokeOpacity = 1;
	
	networkSeries.nodes.template.events.on("over", function(event) {
		event.target.dataItem.childLinks.each(function(link) {
			link.isHover = true;
		})
		if (event.target.dataItem.parentLink) {
			event.target.dataItem.parentLink.isHover = true;
		}
	
	})
	
	networkSeries.nodes.template.events.on("out", function(event) {
		event.target.dataItem.childLinks.each(function(link) {
			link.isHover = false;
		})
		if (event.target.dataItem.parentLink) {
			event.target.dataItem.parentLink.isHover = false;
		}
	})

}); // end am4core.ready()