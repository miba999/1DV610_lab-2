import BarChart from './BarChart.js'

const barchart = new BarChart('canvas');

const labels = ['Spring', 'Summer', 'Autumn', 'Winter', 'None']

barchart.setHeight(450)
barchart.setWidth(600)
barchart.drawXLabels(labels)
// const barchart2 = new BarChart('canvas2');
//barChart.drawGrid()