import BarChart from './BarChart.js'

const barchart = new BarChart('canvas');

const title = 'Favorite season'
const xLabel = 'Seasons'
const yLabel = 'Number of votes'

const categories = ['Spring', 'Summer', 'Autumn', 'Winter']
const data = [10, 30, 6, 2]

barchart.setHeight(300)
barchart.setWidth(400)

barchart.setTitle(title)
barchart.setXAxisLabel(xLabel)
barchart.setYAxisLabel(yLabel)

barchart.setData(data)
barchart.setCategories(categories)

// const barchart2 = new BarChart('canvas2');
//barChart.drawGrid()