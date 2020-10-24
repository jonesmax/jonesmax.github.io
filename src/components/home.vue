<template>
  <div id="app">
    
    <div id="content">
        <div id="topBar">
            <h1>Maxwell Jones</h1>
                <li  v-for="item of itemDirectory" v-bind:key="item['.key']" :style="getBackgroundColor(item) " v-on:click="changeActive(itemDirectory,item) ">
                    {{item.name}}
                </li>
        </div>
        <div id="modalMe"  v-if="itemDirectory.me.active == true">
            <h1>About Me</h1>
        </div>
        <div id="modalSkills"  v-if="itemDirectory.skills.active == true">
            <h1>My Skills</h1>
        </div>
        <div id="modalPro"  v-if="itemDirectory.projects.active == true">
            <h1>Projects</h1>
        </div>
    </div>
    
    


  </div>
</template>

<script>

export default {
    data(){
        return{
            itemDirectory: {
                me: {
                    name: "Me",
                    active: true
                },
                skills: {
                    name: "Skills",
                    active: false
                },
                projects: {
                    name: "Projects",
                    active: false
                },
            }
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
            item.active = true;

            return full,item;
        }
    }
}
</script>

<style>

#app {
    margin-top: 150px;
    user-select: none;
}
#content{
    background-color: rgb(255, 255, 255);
    height: 600px;
    width: 55%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 5px 8px #5f5f5f;
}
#topBar{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 70px;
    border-radius: 10px 10px 0px 0px;
    font-family: Arial, Helvetica, sans-serif;
    float: left;
}
h1{
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
#modalMe,#modalSkills,#modalPro{
    background-color: rgb(226, 226, 226);
    height: 600px;
    width: 100%;
    border-radius: 10px;
}
#modalMe h1, #modalSkills h1,#modalPro h1{
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    
}




</style>
