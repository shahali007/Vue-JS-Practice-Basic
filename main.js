Vue.component('friend-list',{
    props : ['list'],
    template : "<li>{{list.name}}</li>"
});

var app = new Vue({
    el : '#app',
    data : {
        message : "kire tui naki vue js sikhtasos?",
        friends : [
            {
                name : "Saiful Islam"
            },
            {
                name : "AL Helal"
            },
            {
                name : "Resel"
            },
        ]
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        rawText : 'Using mustaches: <span style="color: red">This should be red.</span>'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    },
    methods : {
        dataShow(){
            this.seen = !this.seen
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {},
    methods : {
        onSubmit(){
            alert("Hi, I am a form!")
        }
    }
});