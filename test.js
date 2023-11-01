import BarChart from './BarChart.js';

const barchart = new BarChart('canvas');
barchart.setData([11, 28, 4, 13, 23]);
barchart.setCategories(['Spring', 'Summer', 'Autumn', 'Winter', 'Other'])
barchart.setColor('rgba(10, 50, 200, 0.6)');
barchart.setHeight(500);
barchart.setWidth(800);
barchart.setTitle('Favorite season');
barchart.setXAxisLabel('Seasons');
barchart.setYAxisLabel('Number of votes');

const barchart2 = new BarChart('canvas2');
const title2 = 'Favorite color'
const xLabel2 = 'Colors'
const yLabel2 = 'Number of votes'
const categories2 = ['Red', 'Green', 'Blue', 'Yellow', 'White', 'Black', 'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Other']
const data2 = [11, 28, 4, 50, 3, 100, 23, 52, 73, 23, 21, 150]
barchart2.setHeight(400)
barchart2.setWidth(800)
barchart2.setTitle(title2)
barchart2.setXAxisLabel(xLabel2)
barchart2.setYAxisLabel(yLabel2)
barchart2.setData(data2)
barchart2.setCategories(categories2)
barchart2.setRandomColors()