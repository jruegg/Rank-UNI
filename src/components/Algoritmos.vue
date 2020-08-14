<template>
  <div>
    <v-container>
      <v-row>
        <v-col align="center">
          <v-card>
            <table>
              <tr>
                <th>
                  Promedio
                </th>
                <th>
                  Rank
                </th>
              </tr>
              <tr>
                <td>
                  6.58
                </td>
                <td>
                  12
                </td>
              </tr>
              <tr>
                <td>
                  +0.58
                </td>
                <td>
                  +3
                </td>
              </tr>
            </table>
          </v-card>
        </v-col>
        <v-col align="center">
          <v-card>
            Puntos totales
            <v-progress-circular
              class="ma-2"
              :value="65"
              :size="80"
              :width="15"
              color="teal"
              :rotate="270"
            >
              13.68
            </v-progress-circular>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card raised height="100%">
            <apexchart
              type="line"
              height="150"
              :options="chartOptions"
              :series="series">
            </apexchart>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-timeline reverse>
            <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
            small
          >
            {{item.name}}
            <v-card
              :color="item.color"
              dark
            >
              <v-card-text>
                <table>
                  <tr>
                    <td>
                      Nota
                    </td>
                    <td>
                      {{item.nota}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Rank
                    </td>
                    <td>
                      {{item.rank}}
                    </td>
                  </tr>
                </table>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Algoritmos',

  components: {
  },

  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-sword-cross',
        nota: 14.5,
        rank: 11,
        name: 'PC03',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-shield-off',
        nota: 7.5,
        rank: 18,
        name: 'PC02',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-sword-cross',
        nota: 13.8,
        rank: 7,
        name: 'PC01',
      }],
    series: [{
      name: 'Notas',
      data: [13.8, 7.5, 14.5],
    }],
    chartOptions: {
      chart: {
        height: 200,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'CC925 - Algoritmos',
        align: 'center',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['PC01', 'PC02', 'PC03'],
      },
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 2,
        decimalsInFloat: false,
      },
    },
  }),
};

</script>

<style>
</style>
