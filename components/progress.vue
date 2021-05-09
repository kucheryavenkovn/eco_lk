<template>
  <v-container v-if="loading" style="height: 75px">
        <v-row class="fill-height" align-content="center" justify="center">
            <v-col class="subtitle-1 text-center" cols="12">
                 Загрузка данных
            </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="violet accent-4"
            indeterminate
            rounded
            height="8"
          ></v-progress-linear>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default 
{
name:'progress',
computed:
{
    loading(){
        return this.$store.getters.loading
    },
        }
}
</script>

<style>

</style>