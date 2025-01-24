function getNumInMCStacks(num) {
    let stackSize = 64;
    if (document.getElementById("checkbox").checked) {
        stackSize = 16;
    }
    let res = "";
    let stackCount = Math.round(num / stackSize);
    let rest = num % stackSize;
    res = stackCount + " stacks et " + rest + " items";
    return res;
}

document.getElementById("input").addEventListener("input", function() {
    document.getElementById("result").innerHTML = getNumInMCStacks(this.value);
});

document.getElementById("checkbox").addEventListener("change", function() {
    document.getElementById("result").innerHTML = getNumInMCStacks(document.getElementById("input").value);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input").value = 75;
    document.getElementById("result").innerHTML = getNumInMCStacks(document.getElementById("input").value);
});