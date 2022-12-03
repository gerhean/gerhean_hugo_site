// To animate some autumn leaves

var leaves = [
    "#home-leaf1", "#home-leaf2", "#home-leaf3", "#home-leaf4", "#home-leaf5"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function move_leaf(ind, leaf_id) {
    var leaf = $(leaf_id);
    var top = 100 * Math.random();
    var left = 100 * Math.random();
    leaf.css("top", top + "vh")
    leaf.css("left", left + "vw")
    
    while (true) {
        await sleep(50);
        top = leaf.position().top / window.innerHeight;
        left = leaf.position().left / window.innerWidth;
        top += Math.random() * 0.02 + 0.01;
        left -= 0.02 * Math.random() + 0.01;
        if (top > 1.2) {
            top = 0;
            left = 1 * Math.random();
        }
        if (left < -0.2) {
            left = 1;
            top = 1 * Math.random();
        }
        top *= 100;
        left *= 100;
        leaf.css("top", top + "vh")
        leaf.css("left", left + "vw")
    }
}

$.each(leaves, move_leaf);
