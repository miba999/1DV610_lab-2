import BarChart from './BarChart.js'

const barchart = new BarChart('canvas');
const title = 'Favorite season'
const xLabel = 'Seasons'
const yLabel = 'Number of votes'
const categories = ['Spring', 'Summer', 'Autumn', 'Winter']
const data = [11, 28, 4, 13]
barchart.setHeight(600)
barchart.setWidth(800)
barchart.setTitle(title)
barchart.setXAxisLabel(xLabel)
barchart.setYAxisLabel(yLabel)
barchart.setData(data)
barchart.setCategories(categories)

const barchart2 = new BarChart('canvas2');
const title2 = 'Favorite color'
const xLabel2 = 'Colors'
const yLabel2 = 'Number of votes'
const categories2 = ['Red', 'Green', 'Blue', 'Yellow', 'White', 'Black']
const data2 = [11, 28, 4, 113, 3, 10]
barchart2.setHeight(400)
barchart2.setWidth(400)
barchart2.setTitle(title2)
barchart2.setXAxisLabel(xLabel2)
barchart2.setYAxisLabel(yLabel2)
barchart2.setData(data2)
barchart2.setCategories(categories2)
barchart2.setRandomColors()