<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card raised height="100%">
            <v-card-title>Cursos</v-card-title>
            <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn disabled>Base de datos</v-btn>
        </v-col>
        <v-col>
          <v-btn to="/algoritmos">Algoritmos</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn disabled>Estadística</v-btn>
        </v-col>
        <v-col>
          <v-btn disabled>UI/UX</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-btn disabled>Análisis numérico</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Cursos',

  components: {
  },

  data: () => ({
    series: [{
      data: [7.6, 12.4, 18.7, 10.9, 15.1],
    }],
    chartOptions: {
      chart: {
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      colors: ['#cc33b8'],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff'],
        },
        formatter(val, opt) {
          return `${opt.w.globals.labels[opt.dataPointIndex]}:  ${val}`;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: ['Base de datos', 'Estadística', 'UI/UX', 'Análisis numérico', 'Algoritmos'],
      },
      yaxis: {
        labels: {
          show: false,
        },
        min: 0,
        max: 20,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter() {
              return '';
            },
          },
        },
      },
      legend: {
        show: false,
      },
    },
  }),
};

</script>

<style>
</style>
