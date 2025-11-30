var ricercatoriNodes = new vis.DataSet([
    { id: 1, label: 'Arthur Evans', shape: "circularImage", image: "/Images/ArthurEvans.jpg" },
    { id: 2, label: 'Heinrich Schliemann', shape: "circularImage", image: "/Images/HeinrichSchliemann.jpg" },
    { id: 3, label: 'Ekaterina Petrovna Lyschin', shape: "circularImage", image: "/Images/EkaterinaPetrovnaLyschin.jpg" },
    { id: 4, label: 'Agamennone' },
    { id: 5, label: 'Andromaca' },
    { id: 10, label: '', shape: "dot", size: 10, color: '#888' },
    { id: 11, label: '', shape: "dot", size: 10, color: '#888' },
    { id: 12, label: 'Sofia Egkastrōmenou', shape: "circularImage", image: "/Images/SophiaEngastromenou.jpg" }
]);

var ricercatoriEdges = new vis.DataSet([
    { from: 2, to: 10 },
    { from: 3, to: 10 },
    { from: 11, to: 4 },
    { from: 11, to: 5 },
    { from: 2, to: 11 },
    { from: 12, to: 11 }
]);

var greekMythologyNodes = new vis.DataSet([
]);

var greekMythologyEdges = new vis.DataSet([
]);

var realGreekNodes = new vis.DataSet([
    { id: 'Pisistrato', label: 'Pisistrato' },
    { id: 'Ippia', label: 'Ippia' },
    { id: 'Ipparco', label: 'Ipparco' }
]);

var realGreekEdges = new vis.DataSet([
    { from: 'Pisistrato', to: 'Ippia' },
    { from: 'Pisistrato', to: 'Ipparco' }
]);

// { id: 'Priamo+Ecuba', label: '', shape: "dot", size: 10, color: '#888' }