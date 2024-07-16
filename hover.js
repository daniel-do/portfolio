const crabity = document.querySelector(".crabity-video-container video");
const soundviz = document.querySelector(".soundviz-video-container video");
const toddstrash = document.querySelector(".toddstrash-video-container video");
const interactivedesigns = document.querySelector(".interactivedesigns-video-container video");
const riddleminotaur = document.querySelector(".riddleminotaur-video-container video");
const justkeepswimming = document.querySelector(".justkeepswimming-video-container video");
const pandaclimb = document.querySelector(".pandaclimb-video-container video");
const treeman = document.querySelector(".treeman-video-container video");
const chopsticks = document.querySelector(".chopsticks-video-container video");
const tbdungeon = document.querySelector(".tbdungeon-video-container video");
const dillosjourney = document.querySelector(".dillosjourney-video-container video");
const frostyfrenzy = document.querySelector(".frostyfrenzy-video-container video");

const crabityHoverText = document.querySelector(".crabity-video-container .hover-text");
const soundvizHoverText = document.querySelector(".soundviz-video-container .hover-text");
const toddstrashHoverText = document.querySelector(".toddstrash-video-container .hover-text");
const interactivedesignsHoverText = document.querySelector(".interactivedesigns-video-container .hover-text");
const riddleminotaurHoverText = document.querySelector(".riddleminotaur-video-container .hover-text");
const justkeepswimmingHoverText = document.querySelector(".justkeepswimming-video-container .hover-text");
const pandaclimbHoverText = document.querySelector(".pandaclimb-video-container .hover-text");
const treemanHoverText = document.querySelector(".treeman-video-container .hover-text");
const chopsticksHoverText = document.querySelector(".chopsticks-video-container .hover-text");
const tbdungeonHoverText = document.querySelector(".tbdungeon-video-container .hover-text");
const dillosjourneyHoverText = document.querySelector(".dillosjourney-video-container .hover-text");
const frostyfrenzyHoverText = document.querySelector(".frostyfrenzy-video-container .hover-text");

crabity.addEventListener("mouseenter", () => {
    crabity.play();
    crabityHoverText.classList.add("active");
});

crabity.addEventListener("mouseleave", () => {
    crabity.pause();
    crabityHoverText.classList.remove("active");
});

soundviz.addEventListener("mouseenter", () => {
    soundviz.play();
    soundvizHoverText.classList.add("active");
});

soundviz.addEventListener("mouseleave", () => {
    soundviz.pause();
    soundvizHoverText.classList.remove("active");
});

toddstrash.addEventListener("mouseenter", () => {
    toddstrash.play();
    toddstrashHoverText.classList.add("active");
});

toddstrash.addEventListener("mouseleave", () => {
    toddstrash.pause();
    toddstrashHoverText.classList.remove("active");
});

interactivedesigns.addEventListener("mouseenter", () => {
    interactivedesigns.play();
    interactivedesignsHoverText.classList.add("active");
});

interactivedesigns.addEventListener("mouseleave", () => {
    interactivedesigns.pause();
    interactivedesignsHoverText.classList.remove("active");
});

riddleminotaur.addEventListener("mouseenter", () => {
    riddleminotaur.play();
    riddleminotaurHoverText.classList.add("active");
});

riddleminotaur.addEventListener("mouseleave", () => {
    riddleminotaur.pause();
    riddleminotaurHoverText.classList.remove("active");
});

justkeepswimming.addEventListener("mouseenter", () => {
    justkeepswimming.play();
    justkeepswimmingHoverText.classList.add("active");
});

justkeepswimming.addEventListener("mouseleave", () => {
    justkeepswimming.pause();
    justkeepswimmingHoverText.classList.remove("active");
});

pandaclimb.addEventListener("mouseenter", () => {
    pandaclimb.play();
    pandaclimbHoverText.classList.add("active");
});

pandaclimb.addEventListener("mouseleave", () => {
    pandaclimb.pause();
    pandaclimbHoverText.classList.remove("active");
});

treeman.addEventListener("mouseenter", () => {
    treeman.play();
    treemanHoverText.classList.add("active");
});

treeman.addEventListener("mouseleave", () => {
    treeman.pause();
    treemanHoverText.classList.remove("active");
});

chopsticks.addEventListener("mouseenter", () => {
    chopsticks.play();
    chopsticksHoverText.classList.add("active");
});

chopsticks.addEventListener("mouseleave", () => {
    chopsticks.pause();
    chopsticksHoverText.classList.remove("active");
});

tbdungeon.addEventListener("mouseenter", () => {
    tbdungeon.play();
    tbdungeonHoverText.classList.add("active");
});

tbdungeon.addEventListener("mouseleave", () => {
    tbdungeon.pause();
    tbdungeonHoverText.classList.remove("active");
});

dillosjourney.addEventListener("mouseenter", () => {
    dillosjourney.play();
    dillosjourneyHoverText.classList.add("active");
});

dillosjourney.addEventListener("mouseleave", () => {
    dillosjourney.pause();
    dillosjourneyHoverText.classList.remove("active");
});

frostyfrenzy.addEventListener("mouseenter", () => {
    frostyfrenzy.play();
    frostyfrenzyHoverText.classList.add("active");
});

frostyfrenzy.addEventListener("mouseleave", () => {
    frostyfrenzy.pause();
    frostyfrenzyHoverText.classList.remove("active");
});