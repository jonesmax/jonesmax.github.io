<template>
  <div id="app">
    <div id="buttons">
        <a href="resume.pdf" target="_blank">
            <button>RESUME</button>
        </a>
         <a href="https://github.com/jonesmax" target="_blank">
            <button>GITHUB</button>
        </a>
    </div>
    <div id="content">
        <div id="topBar">
            <h1>Maxwell Jones</h1>
            <img src="../images/moving.gif">
                <li  v-for="item of itemDirectory" v-bind:key="item['.key']" :style="getBackgroundColor(item) " v-on:click="changeActive(itemDirectory,item) ">
                    {{item.name}}
                </li>
                
        </div>
        <div id="modalMe"  v-if="itemDirectory.me.active == true">
            <div id="software">
                <h1>Software Developer</h1>
                <h2>London, Ontario</h2>
                <h2>(905) 484-0574</h2>
                <h2>maxjones2001@hotmail.com</h2>

                <h3>Fanshawe College</h3>
                <h2>Computer Programmer Analyst</h2>
                <h2>Co-op Program</h2>
                <h2>Dean's Honour Roll</h2>
            </div>
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
    font-family: 'Trispace', sans-serif;
    user-select: none;
}
img{
    width: 6%;
    float: right;
    margin-top: 0px;
    margin-right: 6px;
    border-radius: 10px 40px 0px 0px;
}
button{
    margin-top: 0px!important;
    background-color: #4fafcc; /* Green */
    border: none;
    color: rgb(37, 35, 63);
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 90%;
    margin-left: 20px;
    border-radius: 4px;
    font-family: 'Trispace', sans-serif;
}
button:hover{
    background-color: rgba(51, 183, 235, 0.8);
    cursor: pointer;
}
#buttons{
    text-align: right;
    margin-bottom: 110px;
    margin-right: 0.7%;
    margin-top: 0.7%;
    
}
#content{
    background-color: rgb(255, 255, 255);
    margin-top: 125px;
    width: 55%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 7px 8px #4fafcc;
}
#topBar{
    background-color: rgb(255, 255, 255);
    width: 100;
    height: 8.2vh;
    border-radius: 10px 10px 0px 0px;
    font-family: 'Trispace', sans-serif;
    float: left;
    border-bottom: 2px solid #4fafcc;
    
}
#topBar h1{
    margin: 0;
    padding-left: 15px;
    padding-top: 1.7%;
    padding-bottom: 1%;
    padding-right: 2.5%;
    float: left;
    font-size: 4vh;
}
#topBar li{
    float: left;
    list-style-type:none;
    margin-top: 1.3%;
    margin-right: 3%;
    font-size: 2.3vh;
    padding: 1.3%;
    border-radius: 15px;
}
#topBar li:hover{
    background-color: rgb(185, 185, 185);
    cursor: pointer;
}
#modalMe,#modalSkills,#modalPro{
    background-color: rgb(226, 226, 226);
    height: 60vh;
    width: 100%;
    border-radius: 10px;
}
#modalMe h1, #modalSkills h1,#modalPro h1{
    font-size: 25px;
    font-family: 'Trispace', sans-serif;
    padding-top: 100px!important;
}
#modalMe h1,h2{
   margin-left: 25px;
}
#software{
    width: 50%;
    border-radius: 10px;
    /*background-color: rgb(168, 84, 84);*/
    height: 550px;
}
#software h1,h3{
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    width: 55%;
}
#software h2{
    font-size: 20px;
}
#software h3{
    font-size: 25px;
    font-family: 'Trispace', sans-serif;
    margin-left: 25px;
    margin-top: 70px;
}

</style>
