var app = new Vue({
    debug: true,
    el: '#example',
    components: {
        alert: vueboot.alert
    },
    data: {
        show: false
    },
    methods: {
        showAlert: function(){ this.show = true; },
        onClosed: function()
        {
            console.log('onClosed!');
            this.show = false;
        }
    }
});