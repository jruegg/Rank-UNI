<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card raised height="100%">
            <v-card-title>Distribución FC</v-card-title>
            <v-sparkline
              fill
              height="150"
              :gradient="['#17d1a3', '#c1e3db']"
              :smooth="6"
              :value="value"
              auto-draw
            ></v-sparkline>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card raised height="100%">
            <v-card-title>Top FC</v-card-title>
            <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Fc',

  components: {
  },

  data: () => ({
    value: [1, 1, 3, 4, 5, 4, 9, 4, 2, 1],
    series: [{
      data: [17.7, 17.6, 17.6, 17.5, 17.5],
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
      colors: ['#618eed'],
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
        categories: ['N6', 'N2', 'N1', 'N3', 'N4'],
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
