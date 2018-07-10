iziToast.settings({
    timeout: 10000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    onOpening: function(){
        console.log('callback abriu!')
    },
    onClosing: function(){
        console.log("callback fechou!")
    }
})