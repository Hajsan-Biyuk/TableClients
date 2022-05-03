<template>
    <div class="v-form">
        <div class="form-group-wr">
  <p>Добавить нового абонента</p>
  <!-- <div class="form-group">
    <label>Номер заявки</label>
    <input type="text" class="form-control" v-model="newUser.id" >
  </div> -->

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

   <div class="form-group">    
    <input type="hidden" class="form-control today" 
    :value="newUser.date = localeDate"
   />
  </div>
    

    <button type="submit" class="btn btn-primary" @click="addUser">Добавить</button>
  </div>

</div>
</template>

<script>

export default {
  name: "v-form",

  data: () => {
    return{
        newUser: {},
        date: 1580558031264,
    }
  },
  computed: {
    localeDate() {
            // Конвертируем число в строку. Для этого существуют специальные методы
            // toLocaleDateString() или toLocaleString() или toLocaleTimeString()
            // Итоговая строка будет зависеть от локализации системы пользователя. 
            // Для русской локали это будет "01.02.2020", 
            // для американской "2/1/2020", 
            // для немецкой — "1.2.2020"
            // Вы НЕ должны устанавливать формат даты самостоятельно
            return (new Date(this.date)).toLocaleDateString() 
        },
    
  },
  created(){
    this.intervalId = setInterval(() => this.date = Date.now(), 1000); // Обновляем значения не чаще раза в секунду. А то и реже.
  },
  beforeUnmount() {
        if (this.intervalId) { clearInterval(this.intervalId)}
    },
  methods: {

    addUser() {
    this.$emit('addClient', this.newUser);

    }, 
    formatDate: d => d.toLocaleString('ru-RU').replace(',', '').slice(0, -3),

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
.form-group-wr .form-group label {
  padding-left: 10px;
}
.form-group-wr .form-group input {
  margin: 0 auto 10px;
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