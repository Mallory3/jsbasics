const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];
const labels = ['Name','Height','Place']
var content,name,height,place = ""
var index 


// const tableColumn = document.createElement('th')

function createTable(){
  const section = document.querySelector('body')
  const tableGrid = document.createElement('table')
  tableGrid.style.border  = '1px solid black';
  tableGrid.className = 'tableGrid'
  section.appendChild(tableGrid)
}

function createRow(){
  const tableContainer = document.querySelector('table')
  const tableRow = document.createElement('tr')
  tableRow.className = 'tableRow'+index
  tableContainer.appendChild(tableRow)
}


function createColumn(){
  const tableRowContainer = document.querySelector('.tableRow'+index)
  const tableColumn = document.createElement('th')
  tableColumn.className = 'tableColumn'
  tableColumn.textContent = content
  tableRowContainer.appendChild(tableColumn)
}

// createColumn()

function createFirstLayer(){
  createRow()
  for(var x = 0;x!=labels.length;x++){
      content = labels[x]
      createColumn()
  }
  pullData()
}
createTable()
createFirstLayer()

function pullData(){
  
  for(index=0; index!=MOUNTAINS.length;index++){
      createRow()
      content = MOUNTAINS[index].name
      createColumn()
      content = MOUNTAINS[index].height
      createColumn()
      content = MOUNTAINS[index].place
      createColumn()
  }    
}
