<template>
  <div id="home">
    <div class="left-bar">
      <ul>
        <li v-for="(item,index) in routeList" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>

      </ul>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        routeList:[]

      }
    },
    created(){
      this.$router.options.routes.some(item=>{
        if (item.path === '/home'){
          this.getRouter(item.children)
        }
      })

    },
    methods:{
      getRouter(arr){
        let role = sessionStorage.getItem('roles') || this.$store.getters.gettersRoles

        arr.map(item => {
          if (item.meta.indexOf(role)>-1){
            this.routeList.push({
              path:'/home/' + item.path,
              name:item.name

            })

          }
        })
      }




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #home{
    height: 100%;
  }
  .left-bar{
    float: left;
    width: 200px;
    height: 100%;
    background: rgb(226, 224, 224);
  }
  .right-content{
    overflow: hidden;
    height: 100%;
    padding: 30px;
  }
</style>
