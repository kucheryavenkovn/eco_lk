<template>
 <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <order-form/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import OrderForm from '~/components/OrderForm.vue'
export default {
components:{
OrderForm
}
}
</script>

<style>

</style>