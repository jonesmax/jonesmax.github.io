<template>
  <div id="app">
    
    <div id="content">
        <div id="topBar">
            <h1>Maxwell Jones</h1>
            
                <li  v-for="item of itemDirectory" v-bind:key="item['.key']" :style="getBackgroundColor(item) " v-on:click="changeActive(itemDirectory,item) ">
                    {{item.name}}
                </li>


        </div>
    </div>

  </div>
</template>

<script>

export default {
    data(){
        return{
            itemDirectory: [
                {
                    name: "Me",
                    active: true
                },
                {
                    name: "Skills",
                    active: false
                },
                {
                    name: "Projects",
                    active: false
                },
            ]
        }
    },
    methods:{
        getBackgroundColor(item){
            
            if(item.active == true){
                return "background-color: rgb(220, 220, 220)";
            }
        },
        changeActive(full,item){
            for (var key in full) {
                full[key]["active"] = false;
            }
            console.log(full);
            item.active = true;

            return full,item;
        }
    }
}
</script>

<style>

#app {
    margin-top: 150px;
}
#content{
    background-color: rgb(255, 255, 255);
    height: 600px;
    width: 55%;
    margin: auto;
    border-radius: 10px;
}
#topBar{
    background-color: rgb(204, 204, 204);
    width: 100%;
    height: 70px;
    border-radius: 10px 10px 0px 0px;
    font-family: Arial, Helvetica, sans-serif;
    float: left;
}
#topBar h1{
    margin: 0;
    padding-left: 15px;
    padding-top: 1.5%;
    padding-bottom: 1%;
    padding-right: 2%;
    float: left;
}
#topBar li{
    float: left;
    list-style-type:none;
    margin-top: 0.85%;
    margin-right: 3%;
    font-size: 22px;
    padding: 1.3%;
    border-radius: 15px;
}
#topBar li:hover{
    background-color: rgb(185, 185, 185);
    cursor: pointer;
}


</style>
