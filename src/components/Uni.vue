<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card raised height="100%">
            <v-card-title>Distribución UNI</v-card-title>
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
            <v-card-title>Top UNI</v-card-title>
            <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Uni',

  components: {
  },

  data: () => ({
    value: [1, 2, 4, 5, 5, 4, 6, 4, 3, 1],
    series: [{
      data: [17.5, 15, 14.5, 13, 12.8],
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
        categories: ['FC', 'FIM', 'FIEE', 'FIQT', 'FIIS'],
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
