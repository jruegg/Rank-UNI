<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="text-center">
              Practica calificada 01
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" cols="5">
          <v-card>
            <table>
              <tr>
                <td>
                  Nota
                </td>
                <td>
                  13.8
                </td>
              </tr>
              <tr>
                <td>
                  Rank
                </td>
                <td>
                  7/18
                </td>
              </tr>
            </table>
          </v-card>
        </v-col>
        <v-col align="center" cols="7">
          <v-card class="pt-3">
            % Aprobados
          <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card raised height="100%">
            <apexchart type="bar" height="200" :options="chartBarOptions" :series="seriesBar">
            </apexchart>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Pc1',

  components: {
  },

  data: () => ({
    series: [13, 3, 2],
    chartOptions: {
      chart: {
        type: 'donut',
      },
      labels: ['Aprobados', 'Desaprobados', 'NSP'],
      colors: ['#13d3e8', '#de3333', '#e8c813'],
      legend: {
        show: false,
        position: 'top',
      },
      width: 300,
      markers: {
        size: 10,
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'end',
        style: {
          colors: ['black'],
          fontSize: '14px',
          fontWeight: 'bold',
        },
        dropShadow: {
          enabled: false,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '8px',
              },
              total: {
                show: true,
                color: '#000000',
                fontSize: '12px',
                offsetY: 0,
              },
              value: {
                show: true,
                fontSize: '20px',
                fontWeight: 400,
                offsetY: 0,
              },
            },
          },
        },
      },
    },

    seriesBar: [{
      name: 'Distribución',
      data: [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0,
        0, 3, 4, 2, 2, 0, 1, 1, 0],
    }],
    chartBarOptions: {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        min: 0,
        max: 20,
        tickAmount: 4,
        position: 'top',
      },
      yaxis: {
        decimalsInFloat: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },
  }),
};

</script>

<style>

th, td {
  padding: 12px;
  text-align: left;
}

</style>
