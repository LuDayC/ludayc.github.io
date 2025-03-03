const drawRadarChart = (data, container) => {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(() => {
    const dataTable = new google.visualization.DataTable();
    
    // Definir las columnas
    dataTable.addColumn('string', 'Categoría');
    data[0].values.forEach((_, i) => {
      dataTable.addColumn('number', `Serie ${i + 1}`);
    });
    
    // Agregar los datos
    data.forEach(row => {
      dataTable.addRow([row.category, ...row.values]);
    });
    
    const options = {
      title: 'Radar Chart',
      hAxis: { title: 'Categorías' },
      vAxis: { minValue: 0 },
      legend: { position: 'top' },
      chartArea: { width: '80%', height: '70%' }
    };
    
    const chart = new google.visualization.LineChart(container);
    chart.draw(dataTable, options);
  });
};

// Datos de ejemplo
const sampleData = [
  { category: 'A', values: [30, 50, 70] },
  { category: 'B', values: [50, 60, 90] },
  { category: 'C', values: [80, 40, 60] }
];

// Renderizar el gráfico
drawRadarChart(sampleData, document.getElementById('chart-container'));
