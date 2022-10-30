let arr  = [2,4,56,7]
log  = console.log

Array.prototype.myForEach = function(cb){
    for(let i = 0 ; i<this.length;i++){
        cb(this[i],i,this)
    }
}

arr.myForEach((val, index , array)=>{
    log(val)
    log(index)
})
