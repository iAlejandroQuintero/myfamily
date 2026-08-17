<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel Financiero Familiar</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: sans-serif; background: #f4f7f6; padding: 20px; }
        .container { max-width: 1000px; margin: auto; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        canvas { max-height: 300px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>💰 Panel Financiero Familiar</h1>
        <div class="grid">
            <div class="card">
                <h2>Patrimonio e Inversiones</h2>
                <canvas id="chartInversiones"></canvas>
            </div>
            <div class="card">
                <h2>Gastos Mensuales</h2>
                <canvas id="chartGastos"></canvas>
            </div>
        </div>
        <div class="card" style="margin-top:20px;">
            <h2>Enlaces de Inversión</h2>
            <div id="links-container"></div>
        </div>
    </div>
    <script src="finanzas_data.js"></script>
    <script>
        // Gráficos
        const ctx1 = document.getElementById('chartInversiones').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: finanzasData.map(d => d.integrante),
                datasets: [{ label: 'Inversión (COP)', data: finanzasData.map(d => d.inversion_actual), backgroundColor: '#0056b3' }]
            }
        });
        
        const ctx2 = document.getElementById('chartGastos').getContext('2d');
        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: Object.keys(resumenGeneral.gastos_mensuales),
                datasets: [{ data: Object.values(resumenGeneral.gastos_mensuales), backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'] }]
            }
        });
        
        const lc = document.getElementById('links-container');
        linksInversion.forEach(l => lc.innerHTML += `<a href="${l.url}" target="_blank">${l.nombre}</a><br>`);
    </script>
</body>
</html>