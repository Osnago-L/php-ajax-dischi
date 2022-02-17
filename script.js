var app = new Vue({
    el: '#app',
    data: {
      artists: []
    },
    methods: {
        getArray(){
            axios.get('http://localhost:81/api.php')
            .then((result)=> {
              // handle success
              this.artists = result.data;
              console.log(this.artists);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        }
    },
    created(){
        this.getArray()
    }
  })
