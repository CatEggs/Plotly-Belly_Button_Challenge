const input = d3.select("#selDataset").property("value")

let getData = input.property("value")
// let getData = jQuery.get('/samples/<sample>');

getData.done(function(results) {
 
// Create pie chart from the selected data

let trace = [{
    
    values: results.sample_values,
    labels: results.otu_ids,
    hoverinfo: results.otu_labels,
    type: 'pie'
    
    }];

let pieLayout = {
    title: "Belly Button BioDiversity" ,
    height: 400,
    width: 500
};

let pieData = [trace]

Plotly.Plot('pie', pieData, pieLayout);


// Create bubble chart from the selected data

});

// input.on("change", handler) 