<template>
  <div class="v-table">
    <div class="v-search">
      <input 
        type="search" 
        v-model="search" 
        class="search-form" 
        placeholder="Поиск абонента" />
    </div>
   
      <div class="v-table_header">
          <p @click="sortById">Номер заявки <i class="material-icons">unfold_more</i></p>
          <p @click="sortByPhone">Номер телефона <i class="material-icons">unfold_more</i></p>
          <p @click="sortByName">Заказчик <i class="material-icons">unfold_more</i></p>
          <p @click="sortByTarif">Тариф <i class="material-icons">unfold_more</i></p>
          <p @click="sortByStatus">Статус <i class="material-icons">unfold_more</i></p>
          <p @click="sortByDate">Дата <i class="material-icons">unfold_more</i></p>
          
      </div>
      <div class="v-table_body">
          <v-table-row 
            v-for="(row, index) in paginatedUsers"
            :key="row.id"
            :row_data="row"
             @click="deleteFind(index)"        
          />
      </div>
      <div class="v-table_pagination">
          <div class="page"
            v-for="page in pages"
            :key="page"
            :class="{'page_selected':page === pageNumber}"
            @click="pageClick(page)"
          >{{page}}</div>
      </div>
    <v-form 
    @addClient="addNewUser"/>

</div>
  
  
</template>

<script>
import vTableRow from "./v-table-row.vue"
import vForm from "./v-form.vue"
 let sort_change = 'asc';
export default {
  name: "v-table",

  components: {
      vTableRow,
      vForm
  },
  props: {
      users_data: {
          type: Array,
          default: () => {
              return []
          }
      }
    
  },
  data: () => {
    return{
        search: '',
        usersPerPage: 5,
        pageNumber: 1,
        newUsers: {},
        
    }
  },
  computed: {  
     searcHandler(){
         return this.users_data.filter(elem => {
           return elem.name.toLowerCase().includes(this.search.toLowerCase());
         });
      }, 
     
      pages(){
        return Math.ceil(this.searcHandler.length / this.usersPerPage);
      },
      paginatedUsers(){        
          let from = (this.pageNumber - 1) * this.usersPerPage;
          let to = from + this.usersPerPage;
          return this.searcHandler.slice(from, to);
      },
     
    
  },
  methods: {
      pageClick(page){
          this.pageNumber = page;
      },
      sortByName(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      sortByPhone(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.msisdn > b.msisdn) return 1
                    if (a.msisdn < b.msisdn) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.msisdn > b.msisdn) return -1
                    if (a.msisdn < b.msisdn) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      sortById(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.id > b.id) return 1
                    if (a.id < b.id) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.id > b.id) return -1
                    if (a.id < b.id) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      sortByTarif(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.trpl > b.trpl) return 1
                    if (a.trpl < b.trpl) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.trpl > b.trpl) return -1
                    if (a.trpl < b.trpl) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      sortByStatus(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.status > b.status) return 1
                    if (a.status < b.status) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.status > b.status) return -1
                    if (a.status < b.status) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      sortByDate(){
        let u_data=this.users_data;       
        if(sort_change == 'asc'){
                u_data.sort((a, b) => {
                    if (a.date > b.date) return 1
                    if (a.date < b.date) return -1
              })              
          }else{
                u_data.sort((a, b) => {
                    if (a.date > b.date) return -1
                    if (a.date < b.date) return 1
              })             
          }
        sort_change = (sort_change == 'asc') ? 'desc' : 'asc';               
      },
      addNewUser(data){
       // console.log(data);
        let u_data=this.users_data;
      u_data.push(data);
       data = {};
      },
      
      deleteFind(index) {
      console.log(index);
        let u_data=this.users_data;
        u_data.splice(index, 1);
    } 

  }

}
</script>

<style>
.v-table {
    max-width: 1200px;
    margin: 0 auto;
}
.v-table_header {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}
.v-table_header > p {
    display: flex;  
    align-items: center;
    text-align: left;
    flex-basis: 16.6%;
}
.v-table_pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.page {
    padding: 5px;
    border: 1px solid #ccc;
    margin: 0 5px;
}
.page:hover {
    background: #aeaeae;
    cursor: pointer;
    color: #fff;
}
.page_selected {
    background: #817b7b;
    color: #fff;
}

</style>
