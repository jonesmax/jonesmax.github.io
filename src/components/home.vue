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
                <p>I am an aspiring young designer, focusing on user interfaces while delivering full stack web applications.</p>
                <p>You can find me any given day coding random tools to help make school learning easier...</p>
                <p>Past experience working in Adobe creating products like logos, posters and business cards. I now use these skills towards the design of my work.</p>
                <p>HTML framework orientated, currently discovering VueJS.</p>
                

                
                <button v-on:click="changeActiveItem(itemDirectory) ">SKILLS</button>
                
                <img src="../images/logo.png">
            </div>
        </div>
        <div id="modalSkills"  v-if="itemDirectory.skills.active == true">
            <div id="topSkills">

                 <li id="topLevelLi"  v-for="item of topLevel" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
                <li id="twoLevelLi"  v-for="item of secondLevel" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
                <li id="threeLevelLi"  v-for="item of threeLevel" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
                <li id="fourLevelLi"  v-for="item of fourLevel" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
                <li id="fiveLevelLi"  v-for="item of  fiveLevel" v-bind:key="item['.key']">
                        <button>{{item.name}}</button>
                </li>
         
            </div>
             
        </div>
        <div id="modalPro"  v-if="itemDirectory.projects.active == true">
            <div id="mainPro">
                <li  v-for="item of projectList" v-bind:key="item['.key']">
                        <h1 >{{item.name}}</h1>
                        <a :href="getLink(item,'link')" target="_blank">
                            <img v-bind:src="'../'+item.url" :style="'float: '+item.float" v-on:click="checkActive(item)">
                        </a>
                        <div id="proDiv" :style="'float: '+item.float">
                            <h2>{{item.intro}}</h2>
                            <p>{{item.desc}}</p>
                            <p>{{item.other}}</p>
                            <a :href="getLink(item,'git')" target="_blank">
                                    <button v-on:click="checkActive(item)">GITHUB</button>
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
            topLevel:[
                {
                    name:"VueJS"
                    
                },
                {
                    name:"JavaScript"
                },
                {
                    name:"Photoshop"
                },
                {
                    name:"UI/UX"
                },
                {
                    name:"HTML/CSS"
                },
            ],
            secondLevel:[
                {
                    name:"Python"
                },
                {
                    name:"C++"
                },
                {
                    name:"Java"
                },
                {
                    name:"C#"
                },
                
                
            ],
             threeLevel:[
                {
                    name:"C"
                },
                {
                    name:"Firebase"
                },
                {
                    name:"Unity"
                },
                {
                    name:"REST"
                },
                {
                    name:"Bootstrap"
                },
                
                
            ],
            fourLevel:[
                {
                    name:"mySQL"
                },
                {
                    name:"Git"
                },
                {
                    name:"Ubuntu"
                },
            ],
            fiveLevel:[
                {
                    name:"CSS Layouts"
                },
                {
                    name:"AWS"
                },
                {
                    name:"jQuery"
                },
                {
                    name:"PHP"
                },
            ],
            projectList:[
                {
                    name: "Homepage",
                    url: "images/homepage.png",
                    float: "left",
                    link: "http://maxwelljonesdesign.com/School_Tracker_VUE/",
                    git:"https://github.com/jonesmax/School_Tracker_VUE",
                    intro: "VueJS",
                    desc: "Personal homepage application used as a landing page for everyday use.",
                    other: "Rest Api calls made to local database, as well as, calls to public and open source api's."
                },
                {
                    name: "Store",
                    url: "images/store.png",
                    float: "right",
                    git:"https://github.com/jonesmax/store",
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
                    link: "none",
                    git:"none",
                    desc: "Console App - Du Linux Command Line",
                    other: "Remake of an Linux command '-du', this was one of the most challenging projects I've done, great example of reccursive methods and high level programming."
                },
                {
                    name: "Binary-Roman",
                    url: "images/binary.jpg",
                    float: "right",
                    intro: "C",
                    link: "none",
                    git:"none",
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
        getLink(person,name){
            if (name == 'git'){
                if(person.link!='none'){
                    return person.git;
                }
            }
            if (name == 'link'){
                if(person.link!='none'){
                    return person.link;
                }
            }

            
            
        },
        checkActive(item){
            if(item.git=='none'){
                alert("Code available upon request (school project)")
            }
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
    height: 8vh;
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
    min-width: 500px;
    box-shadow: 7px 8px #4fafcc;
}
#topBar{
    background-color: rgb(255, 255, 255);
    height: 8.2vh;
    border-radius: 10px 10px 0px 0px;
    font-family: 'Trispace', sans-serif;
    float: left;
    width: 100%;
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
    margin-top: 1.4%;
    margin-right: 3%;
    font-size: 1.2vw;
    padding: 1.3%;
    border-radius: 15px;
}
#topBar li:hover{
    background-color: rgb(185, 185, 185);
    cursor: pointer;
}
#modalMe,#modalSkills,#modalPro{
    background-color: rgb(226, 226, 226);
    height: 52vh;
    width: 100%;
    border-radius: 10px;
    
    
    
}
#modalMe, #modalPro{
    overflow:hidden;
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
#modalSkills{
    height: 60.5vh;

}
#topLevelLi button{
    border-radius: 0px;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 100%;
    float: left;
    width: 20%;
    height: 13vh;
    background-color: rgb(125, 255, 108); /* Green */
    animation-name: Rise;
    animation-duration: 5s;
    position: relative;
    
}
#twoLevelLi button{
    border-radius: 0px;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 100%;
    float: left;
    width: 25%;
    height: 12vh;
    background-color: rgb(255, 252, 59); /* Green */
    animation-name: Rise;
    animation-duration: 4s;
    position: relative;
}
#threeLevelLi button{
    border-radius: 0px;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 100%;
    float: left;
    width: 20%;
    height: 10vh;
    background-color: rgb(190, 145, 0); /* Green */
    animation-name: Rise;
    animation-duration: 3s;
    position: relative;
}
#fourLevelLi button{
    border-radius: 0px;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 100%;
    float: left;
    width: 33.333%;
    height:9.2vh;
    background-color: rgb(253, 122, 0); /* Green */
    animation-name: Rise;
    animation-duration: 2s;
    position: relative;
}
#fiveLevelLi button{
    border-radius: 0px;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    font-size: 100%;
    float: left;
    width: 25%;
    height:8vh;
    
    background-color: rgb(0, 102, 255); /* Green */
    animation-name: Rise;
    animation-duration: 1s;
    position: relative;
    
}
#topSkills{
    
    height: 60vh;
    border-radius: 10px 10px 0px 0px ;
    
}
#topSkills p{
    width: 90%;
    margin: 50px;
    
    padding-top: 41%!important;
    
    
}
#botSkills{
    height: 1px;
    border-radius: 0px 0px 10px 10px;
    
}

#modalPro{
    overflow-y: auto;
    height: 52vh;
    
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
button{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
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
#topLevelLi{
    
}
@media only screen and (max-width: 1850px) {
    #modalPro img{
        width: 95%;
        height: 95%;
        float: left;
        
    }
    #proDiv{
        width: 95%;
        margin: 0;
        padding: 0;
        margin-left: 20px;
        float: left;
    }
}

@media only screen and (max-width: 1200px) {
    #topBar img{
            display: none;
        }
}
@media only screen and (max-width: 1500px) {
   #topBar img{
            display: none;
        }
    #topBar h1{
        font-size: 2.7vw;
        padding-left:2%;
    }
    #topBar li{
        font-size: 1.9vw;
        
    }
    
    #topBar{
        width: 100%;
        height:6vh;
    }

   #modalMe h1, #modalMe h3{
       font-size: 2.1vh;
   }
   #modalMe h2, #modalMe h2{
       font-size: 2vh;
   }
   #modalMe p{
        font-size: 1.3vh;
    }

}
@media only screen and (max-width: 890px) {
   #topBar img{
            display: none;
        }
    #topBar h1{
        font-size: 2.7vh;
        padding-left:2%;
        padding-top: 1.5vh;
    }
    #topBar li{
        font-size: 1.3vh;
        margin-top: 3%;
        
    }
    #topBar{
        width: 100%;
        height:6vh;
    }
    #modalMe p{
        font-size: 1.35vh;
    }
     #modalMe h2{
        font-size: 1.25vh;
    }
}
@media only screen and (min-width: 2000px) {
   #modalMe h1, #modalMe h3{
       font-size: 2.5vh;
   }
    #modalMe h2{
       font-size: 2vh;
   }
   #modalMe p{
       font-size: 1.5vh;
   }
   #modalPro img{
       width: 50%;
       height: 31.7vh;
   }
   #proDiv{
       height: 31vh;
       padding-left: 20px;
       width: 40%;
   }
}

</style>
