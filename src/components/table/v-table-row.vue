<template>
  <div class="v-table-row">
     <div class="row row_id">{{row_data.id}}</div>
     <div class="row row_phone">{{row_data.msisdn}}</div>
     <div class="row row_name">{{row_data.name}}</div>
     <div class="row row_trpl">{{row_data.trpl}}</div>
     <div class="row row_status">{{row_data.status}}</div>
     <div class="row row_date">{{row_data.date}}</div>    
     <div class="del" @click="delUser">X</div>
  </div>
  
</template>

<script>

export default {
  name: "v-table-row",
  props: {
    row_data: {
        type: Object,
        default: () => {
            return {}
        }
    }
  },
  data: () => {
    return{

    }
  },
  computed: {},
   methods: {
    delUser() {
    this.$emit('delClient', this.row_data.id);

    }

  }

}
</script>

<style>
.v-table-row {
    display: flex;
    justify-content: space-around;
    border: 1px solid #ccc;
    margin-bottom: 5px;
}
.row {
    text-align: left;
    padding: 10px 5px;
    flex-basis: 16.6%;
}
.del {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
}



</style>
