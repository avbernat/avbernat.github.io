am4core.ready(function () {

	// Themes begin
	am4core.useTheme(am4themes_moonrisekingdom);
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
	var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

	chart.data = [
			{
			key: "Adaptation & Plasticity",
			name: "How do organisms adapt to \n human-modified environments?",
			children: [
				{
				key: "Dispersal",
				name: "Why do insects disperse?",
				children: [
					{   key: "Flight",
						name: "We use a flight mill to explore the speed, \n distance, and repeatability of individual flight behavior.", value: 1360 },
					{   key: "Sims",
						name: "We program theoretical simulations to explore \n dispersal evolution based on landscape architecture, \n local adaptation, and diapause.", value: 1360
                }
						]
				},
				{
				key: "Mate \n Choice",
				name: "How do insects choose mates?",
				children: [
					{	key: "Lab \n Trials", 
						name: "We use mate trials to explore the drivers of \n mate preference and attractiveness.", value: 1935 }
						]
				},
                {
				key: "Long-term \n change",
				name: "Can we see evolution on human timescales?",
				children: [
					{   key: "Maps",
						name: "We map changes of host plant spatial \n distributions using herbarium records.", value: 1135 },
					{   key: "Field \n Data",
						name: "We collect long-term data from the field \n to monitor phenotypic and genetic changes on \n seasonal, annual, and decadal timescales.", value: 1935 }
				]
				},
				{
				key: "Field",
				name: "What happens to other species in the native community?",
				children: [
					{ 	key: "Host",
						name: "We explore how selection on the native host plant has \n changed in response to changes in its seed predators.", value: 1008 }
						]
				},
                {   key: "Morph",
						name: "What is the relationship between morphology, behavior, and local adaptation?",
                children: [
                    {   key: "Beak",
                        name: "We study how beak length impacts feeding success and fitness and \n the genetic and environmental factors that determine beak length.", value: 1008},
                    {   key: "Wing",
                        name: "We study how wing morphology impacts flight ability.", value: 1008}
                ]}


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