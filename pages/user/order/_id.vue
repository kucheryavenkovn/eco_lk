<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <h1> Вход</h1>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default { 
    async asyncData({$axios, params})
{ 
    const user =await
$axios.get('http://127.0.0.1/1ib/odata/standard.odata/'+encodeURI('Catalog_Контрагенты?$format=json$filter=Логин eq ') +'\''+ encodeURI(params.id)+'\'' ) 
return{user}
},

methods: {
    openUser(user) {
      this.$router.push('/user/' + user.Логин)
    },
  },
}
</script>