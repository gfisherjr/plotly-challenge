// Fetching data from the JSON file 
var json_file = "data/samples.json";

d3.json(json_file).then(function(data) {
    console.log(data);

    var sample_ids = data.samples[0].otu_ids;
    console.log(sample_ids);

    var sample_values = data.samples[0].sample_values.slice(0,10);
    console.log(sample_values);

    var sample_labels = data.samples[0].otu_labels.slice(0,10);
    console.log(sample_labels);

    var trace1 = {
        x: sample_values,
        y: sample_ids,
        type:"bar"
    }

    var plotdata = [trace1];
    
    Plotly.newPlot("plot", plotdata);
});