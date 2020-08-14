<template>
  <div>
    <v-container>
      <v-row align="center">
        <v-col>
          <v-card color="red">
            4 Racha de calificaciones aprobadas
            <v-icon color="yellow">mdi-fire</v-icon>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="4" align="center">
          <v-progress-circular :value="60" :size="80" :width="15">
            60%
          </v-progress-circular>
          <v-btn small to="/uni">
            UNI
          </v-btn>
        </v-col>
        <v-col cols="4" align="center">
          <v-progress-circular :value="68" :size="80" :width="15">
            68%
          </v-progress-circular>
          <v-btn small to="/fc">
            FC
          </v-btn>
        </v-col>
        <v-col cols="4" align="center">
          <v-progress-circular :value="70" :size="80" :width="15">
            70%
          </v-progress-circular>
          <v-btn small to="/cc">
            CC
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-btn small>
            Estado de los cursos
          </v-btn>
          <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },

  data: () => ({
    series: [{
      name: 'Notas',
      data: [7.6, 12.4, 18.7, 10.9, 15.1],
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 120,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 4,
      },
      tooltip: {
        y: {
          formatter(val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: ['Base de datos', 'Estadística', 'UI/UX', 'Análisis numérico', 'Algoritmos'],
      },
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 2,
      },
    },
  }),
};
</script>

<style>
</style>
