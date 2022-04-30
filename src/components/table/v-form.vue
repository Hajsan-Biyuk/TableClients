<template>
    <div class="v-form">
        <div class="form-group-wr">
  <p>Добавить нового абонента</p>
  <div class="form-group">
    <label>Номер заявки</label>
    <input type="text" class="form-control" v-model="newUser.id" >
  </div>

  <div class="form-group">
    <label>Номер телефона</label>
    <input type="text" class="form-control" v-model="newUser.msisdn" >
  </div>

  <div class="form-group">
    <label>Заказчик</label>
    <input type="text" class="form-control" v-model="newUser.name" >
  </div>

  <div class="form-group">
    <label>Тариф</label>
    <input type="text" class="form-control" v-model="newUser.trpl" >
  </div>

  <div class="form-group">
    <label>Статус</label>
    <input type="text" class="form-control" v-model="newUser.status" >
  </div>
    

    <button type="submit" class="btn btn-primary" @click="addUser">Добавить</button>
  </div>

    </div>
</template>

<script>
export default {
  name: "v-form",
  props: {
    //   users_data_form: {
    //       type: Array,
    //       default: () => {
    //           return []
    //       }
    //   }    
  },
  data: () => {
    return{
        newUser: {},
    }
  },
  computed: {
    
  },
  methods: {

    addUser() {
    this.$emit('addClient', this.newUser);

    } 

  }

}
</script>

<style>
.form-group-wr {
  text-align: left;
  border: #817b7b 1px solid;
  padding: 10px;
  margin-top: 30px;
  width: max-content;
}
.form-group-wr .form-group label,
.form-group-wr .form-group input {
  display: block;
}
.form-group-wr .form-group input {
  margin-bottom: 10px;
}
.form-group-wr button {
  text-align: center;
  width: 100%;
  margin-top: 20px;
  background: #817b7b;
  color: #fff;
  border:none;
  cursor: pointer;
  padding: 5px;
}
.form-group-wr button:hover {
  background: #aeaeae;
  color: black;
}
</style>