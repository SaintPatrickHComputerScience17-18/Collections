const Node = function(val){
    let value = val;
    let next = null;

    function getValue(){
        return value;
    }
    function getNext(){
        return next
    }
    function setNext(n){
        next=n;
    }

    return{getValue,getNext,setNext};
};
module.exports = Node;
