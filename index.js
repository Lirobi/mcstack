function getNumInMCStacks(num) {
    let res = "";
    let stackCount = Math.round(num / 64);
    let rest = num % 64;
    res = stackCount + " stacks et " + rest + " items";
    return res;
}

document.getElementById("input").addEventListener("input", function() {
    document.getElementById("result").innerHTML = getNumInMCStacks(this.value);
});