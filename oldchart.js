var axis_rotated = false, axis_x_type = "";
var generate = function () { return c3.generate({
  bindto: '#chart',
  data: {
    columns: [
      ['sample', 30, 200, 100, 400, 150, 250]
    ]
  },
  axis: {
    rotated: axis_rotated,
    x: {
      type: axis_x_type
    }
  },
  grid: {
    x: {
//            lines: [{value: 3, text:'Label 3'}, {value: 4.5, text: 'Label 4.5'}]
    }
  }
}); }, chart = generate();
var queue = [
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids([{value: 2, text:'Label 2'}]);
},
function () {
  chart.xgrids.add([{value: 3, text:'Label 3', class:'hoge'}]);
},
function () {
  chart.xgrids.remove({value:2});
},
function () {
  chart.xgrids.remove({class:'hoge'});
},
function () {
  chart.xgrids.remove([{value: 1}, {value: 4}]);
},
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids.remove();
},
function () {
  axis_rotated = true;
  chart = generate();
},
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids([{value: 2, text:'Label 2'}]);
},
function () {
  chart.xgrids.add([{value: 3, text:'Label 3', class:'hoge'}]);
},
function () {
  chart.xgrids.remove({value:2});
},
function () {
  chart.xgrids.remove({class:'hoge'});
},
function () {
  chart.xgrids.remove([{value: 1}, {value: 4}]);
},
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids.remove();
},
function () {
  axis_rotated = false;
  axis_x_type = 'category';
  chart = generate();
},
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids([{value: 2, text:'Label 2'}]);
},
function () {
  chart.xgrids.add([{value: 3, text:'Label 3', class:'hoge'}]);
},
function () {
  chart.xgrids.remove({value:2});
},
function () {
  chart.xgrids.remove({class:'hoge'});
},
function () {
  chart.xgrids.remove([{value: 1}, {value: 4}]);
},
function () {
  chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
},
function () {
  chart.xgrids.remove();
},
];
var i = 0;
queue.forEach(function (f) {
  setTimeout(f, 1000 * i++);
});
