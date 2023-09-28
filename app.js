import BarChart from './BarChart.js'

const barchart = new BarChart('canvas');

const title = 'Favorite season'
const labels = ['Spring', 'Summer', 'Autumn', 'Winter', 'None']
const data = [10, 30, 6, 2, 10]

barchart.setHeight(450)
barchart.setWidth(800)
barchart.setTitle(title)
barchart.drawXLabels(labels)
barchart.setData(data)

// const barchart2 = new BarChart('canvas2');
//barChart.drawGrid()