<script setup>
useHead({
    title: 'Kevin Orge'
});
</script>
<template>
    <div class="home-jumbotron">
        <div class="left-part">
            <div style="font-size: 2rem;">Hi,</div>
            <div style="font-size: 2.5rem;">I'm Kevin</div>
            <div style="font-size: 2.5rem;">Full-stack Developer</div>
            <div style="font-size: 2rem;">Ready to build web things</div>
        </div>
        <div class="right-part">
            <div>
                <a href="https://www.vecteezy.com/free-photos/cartoon-rocket" title="Cartoon Rocket Stock photos by Vecteezy">
                    <img src="~/assets/images/rocket.jpg" />
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .home-jumbotron {
        display: flex;
        flex-wrap: wrap;
        column-gap: 5px;
        margin: auto;
        position: relative;
        padding-top: 30px;
        width: 900px;
        z-index: 10;
    }
    .home-jumbotron .left-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
        column-gap: 5px;
        flex: 3;
    }
    .home-jumbotron .right-part {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
        flex: 1;
        position: relative;
    }
    .home-jumbotron .right-part > div {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); 
        width: 450px; 
        height: 450px; 
        background-color: #B6CAE7; 
        position: relative; 
        rotate: -25deg;
        overflow: hidden;
    }
    .home-jumbotron .right-part > div img {
        position: absolute; 
        height: 100%; 
        top: 0px; 
        left: -100px; 
        rotate: 10deg;
    }
    @media screen and (max-width: 900px) {
        .home-jumbotron {
            width: auto;
        }
        .home-jumbotron .left-part {
            padding: 0 10px;
            align-items: center;
        }
        .home-jumbotron .left-part div {
            width: 300px;
        }
        .home-jumbotron .right-part {
            align-items: center;
        }
        .home-jumbotron .right-part > div {
            width: 350px; 
            height: 350px; 
        }
        .home-jumbotron .right-part > div img {
            position: absolute; 
            height: 100%; 
            top: 0px; 
            left: -80px; 
            rotate: 10deg;
        }
    }
</style>