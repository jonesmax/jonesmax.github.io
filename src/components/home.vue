<template>
  <div id="app">
    <div id="buttons">
       
        <a href="resume.pdf" target="_blank">
            <button id="resumeButton">RESUME</button>
        </a>
         <a href="https://github.com/jonesmax" target="_blank">
            <button id="gitButton">GITHUB</button>
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
            <div id="aboutme">
                <h1>Hello ... </h1>
                <p>I am an aspiring young designer, focusing on user interfaces whilst delievering full stack web applications.</p>
                <p>You can find me any given day coding random tools to help make our lives eaiser...</p>
                <p>Past experience working in Adobe creating products like logos, posters, business cards. I now use these skills towards the design of my work.</p>
                <p>HTML framework orientated, currently discovering VueJS.</p>
                

                
                <button v-on:click="changeActiveItem(itemDirectory) ">SKILLS</button>
                
                <img src="../images/logo.png">
            </div>
        </div>
        <div id="modalSkills"  v-if="itemDirectory.skills.active == true">
            <div id="topSkills">
                <li  v-for="item of skillList" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
                
            </div>
             <div id="botSkills">
                <li  v-for="item of frameList" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
            </div>
        </div>
        <div id="modalPro"  v-if="itemDirectory.projects.active == true">
            <div id="mainPro">
                <li  v-for="item of projectList" v-bind:key="item['.key']">
                        <h1 >{{item.name}}</h1>
                        <a :href="getLink(item)" target="_blank">
                            <img v-bind:src="'../'+item.url" :style="'float: '+item.float">
                        </a>
                        <div id="proDiv" :style="'float: '+item.float">
                            <h2>{{item.intro}}</h2>
                            <p>{{item.desc}}</p>
                            <p>{{item.other}}</p>
                            <a :href="getLink(item)" target="_blank">
                                    <button>GITHUB</button>
                            </a>
                        </div>
                </li>
            </div>
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
            },
            skillList:[
                {
                    name: "C"
                },
                {
                    name: "C++"
                },
                {
                    name: "Java"
                },
                {
                    name: "HTML"
                },
                {
                    name: "CSS"
                },
                {
                    name: "JavaScript"
                },
                {
                    name: "Python"
                },
                {
                    name: "C#"
                },
                {
                    name: "mySQL"
                },
                {
                    name: "jQuery"
                },
            ],
            frameList:[

                {
                    name: "VueJS"
                },
                {
                    name: "Firebase"
                },
                {
                    name: "Unity"
                },
                {
                    name: "React"
                },
                {
                    name: "REST"
                },
                {
                    name: "Photoshop"
                },
                {
                    name: "Git"
                },
                {
                    name: "Ubuntu"
                },
                {
                    name: "Angular"
                },
                {
                    name: "Bootstrap"
                },
            ],
            projectList:[
                {
                    name: "Homepage",
                    url: "images/homepage.png",
                    float: "left",
                    link: "http://maxwelljonesdesign.com/School_Tracker_VUE/",
                    intro: "VueJS",
                    desc: "Personal homepage application used as a landing page for everyday use.",
                    other: "Rest Api calls made to local database, as well as, calls to public and open source api's."
                },
                {
                    name: "Store",
                    url: "images/store.png",
                    float: "right",
                    link: "http://maxwelljonesdesign.com/store/",
                    intro: "VueJS",
                    desc: "Ecommerce mock design - UI",
                    other: "Rest Api calls made to Firebase Google database, purpose was to display skills of layout and graphic design."
                },
                {
                    name: "Du",
                    url: "images/du.jpg",
                    float: "left",
                    intro: "C++",
                    desc: "Console App - Du Linux Command Line",
                    other: "Remake of an Linux command '-du', this was one of the most challenging projects I've done, great example of reccursive methods and high level programming."
                },
                {
                    name: "Binary-Roman",
                    url: "images/binary.jpg",
                    float: "right",
                    intro: "C",
                    desc: "Console App - Binary to Roman Converter",
                    other: "Transferable Binary to Roman text converter on a single command line, displays skills of knowledge of C."
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
        getLink(person){
        
            return person.link;
        },
        changeActive(full,item){
            for (var key in full) {
                full[key]["active"] = false;
            }
            item.active = true;
            return full,item;
        },
        changeActiveItem(full){
            var item = full.skills;
            for (var key in full) {
                full[key]["active"] = false;
            }
            item.active = true;
            full.skills.active = true;
            console.log(full);
            return full,item;
    
        },
        getURL(item){
            var urls = "~"+item.url;
            console.log(urls);
            return urls;
        },
        changeSize(item){
            
            if (item.size == 10){
                return "font-size: 450%";
            }
            else if (item.size == 9){
                return "font-size: 350%";
            }
            else if (item.size == 8){
                return "font-size: 270%";
            }
            else if (item.size == 7){
                return "font-size: 220%";
            }
            else if (item.size == 6){
                return "font-size: 180%";
            }
            else if (item.size == 5){
                return "font-size: 130%";
            }
            else if (item.size == 4){
                return "font-size: 100%";
            }
            else if (item.size == 3){
                return "font-size: 90%";
            }
            else if (item.size == 2){
                return "font-size: 80%";
            }
            else if (item.size == 1){
                return "font-size: 80%";
            }
            return "font-size: 80%";
        },
        randomArrayShuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        console.log("array: "+array)
        return array;
        }
    },
    created(){
        this.randomArrayShuffle(this.skillList);
        this.randomArrayShuffle(this.frameList);
    }
}
</script>

<style>
#app {
    font-family: 'Trispace', sans-serif;
    user-select: none;
    transition: all 0.3s ease;
}

#topBar img{
    width: 6%;
    float: right;
    margin-top: 0px;
    margin-right: 6px;
    border-radius: 10px 40px 0px 0px;
}
#buttons button, #aboutme button{
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
@keyframes buttonRise {
  0%   {opacity:0%; top: -50px; }
  100% {opacity:100%; top: 0px;}
}
@keyframes example {
  0%   {opacity:0%; left:-100px; top:0px;}
  100% {opacity:100%; left:0px; top:0px;}
}
@keyframes Rise {
  0%   {opacity:0%; top: -50px; }
  60%   {opacity:0%; top: -50px; }
  100% {opacity:100%; top: 0px;}
}
@keyframes Rise2 {
  0%   {opacity:0%; top: 50px; }
  60%   {opacity:0%; top: 50px; }
  100% {opacity:100%; top: 0px;}
}
#topBar li{
    animation-name: buttonRise;
    animation-duration: 0.5s;
    position: relative;
}
#aboutme{
    float: right;
    width: 50%;
    height: 51.5vh;
    background-color: rgb(206, 206, 206);
    margin:0!important;
    animation-name: example;
    animation-duration: 1s;
    position: relative;
    border-radius: 0px 0px 10px 0px;
}
#resumeButton{
    animation-name: buttonRise;
    animation-duration: 1s;
    position: relative;
}
#gitButton{
    animation-name: buttonRise;
    animation-duration: 1.5s;
    position: relative;
}
#aboutme p{
    margin-left: 25px;
    margin-right: 20px;
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
    padding-left: 20px;
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
    padding-top: 10px!important;
}
#modalMe h1,h2{
   margin-left: 25px;
}

#modalMe img{
    width: 30%;
    float: right;
    margin-right: 20px;
    margin-top: -10px;
    
}
#modalMe button{
    margin-left: 26px;
    
}
#software{
    width: 50%;
    float: left;
    
    background-color: rgb(255, 255, 255);
    height: 51.5vh;
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
#modalSkills li{
    list-style-type:none;
}
#topSkills button{
    border-radius: 0px;
    border: none;
    border-right: 1px solid rgb(255, 255, 255);
    font-size: 100%;
    float: left;
    width: 10%;
    height: 4vh;
    background-color: #4fafcc; /* Green */
    animation-name: Rise;
    animation-duration: 1.3s;
    position: relative;
}
#topSkills{
    background-color: rgb(255, 255, 255);
    height: 56vh;
    border-radius: 10px 10px 0px 0px ;
    
}
#botSkills{
    height: 1px;
    border-radius: 0px 0px 10px 10px;
    
}
#botSkills button{
    border-radius: 0px;
    border: none;
    border-right: 1px solid rgb(255, 255, 255);
    font-size: 100%;
    float: left;
    width: 10%;
    height: 4vh;
    background-color: #4fafcc; /* Green */
    animation-name: Rise2;
    animation-duration: 1.3s;
    position: relative;
}
#modalPro{
    overflow-y: auto;
    height: 51.5vh;
    padding-bottom: 30px;
}
#modalPro h1{
    margin: 0;
    margin-left: 2%;
    width: 50%;
    float: left;
}
#modalPro li{
    list-style-type:none;
    
}
#modalPro img{
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    height: 300px;
    min-width: 600px;
    margin-bottom: 30px;
}
#modalPro p{
    
   
}
#proDiv{
    background-color: rgb(199, 199, 199);
    width: 35%;
    margin:0;
    margin-top: 10px;
    height: 30vh;
    padding-left: 10px;
    padding-top: 10px;
}

#proDiv button{
    margin-top: 0px!important;
    background-color: #4fafcc; /* Green */
    border: none;
    color: rgb(37, 35, 63);
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 60px!important;
    font-family: 'Trispace', sans-serif;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
   
}
#proDiv button:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#proDiv h2{
    margin: 0;
    font-size: 120%;
    margin-top: 5px;
}

</style>
