// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return`This Saturday, I want to ${activity}!`
}

saturdayFun('bathe my dog');

function mondayWork(act = 'go to the office'){
    return `This Monday, I will ${act}.`
}

mondayWork('work from home')

let wrapAdjective = function(style = "*") {
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}
