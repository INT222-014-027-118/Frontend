<template>
    <div class="bg-white dark:bg-gray-600 transition-colors rounded-lg shadow-md">
        <splide :options="primaryOptions" ref="primary" :class="[this.$route.name == 'Home' ? 'sm:px-14 md:px-16 lg:px-20' : 'md:pt-3']">
            <splide-slide class="flex justify-center " v-for="slide in slides" :key="slide" @click="gogo">
                <div class="">
                    <img :src="slide.src" class="h-full w-full object-contain" alt="slide.alt" />
                </div>
            </splide-slide>
        </splide>
        <splide :options="secondaryOptions" ref="secondary" v-show="this.$route.name != 'Home'" class="sm:px-14 md:px-16 lg:px-20 py-2">
            <splide-slide v-for="slide in slides" :key="slide.src">
                <img :src="slide.src" alt="slide.alt" />
            </splide-slide>
        </splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default {
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            primaryOptions: {
                rewind: true,
                start: 0,
                perPage: 1,
                autoplay: this.$route.name === "Home" ? true : false,
                pauseOnHover: true,
                arrows: this.$route.name === "Home" ? "slider" : "",
                focus: "center",
                type: "loop",
                weight: "500px",
                height: this.$route.name === "Home" ? "450px" : "400px",
                gap: "1rem",
                pagination: true,
                breakpoints: {
                    640: {
                        height: "50%",
                    },
                    768: {
                        height: "300px",
                    },
                },
            },
            secondaryOptions: {
                type: "slide",
                rewind: true,
                pagination: false,
                fixedWidth: 90,
                fixedHeight: 60,
                cover: true,
                focus: "center",
                isNavigation: true,
                updateOnMove: true,
                gap: "1rem",
                padding: {
                    left: "2rem",
                    right: "2rem",
                    top: "5rem",
                    bottom: "3rem",
                },
                breakpoints: {
                    640: {
                        fixedWidth: 60,
                        fixedHeight: 40,
                    },
                },
            },
            slides: [
                { src: "https://image.bestreview.asia/wp-content/uploads/2020/03/best-gaming-chair.jpg" },
                { src: "https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg" },
                { src: "https://instore.bnn.in.th/wp-content/uploads/2019/01/FTIM-10GamingGear.jpg" },
                { src: "https://image.bestreview.asia/wp-content/uploads/2021/06/best-gaming-mouse.jpg" },
                { src: "https://instore.bnn.in.th/wp-content/uploads/2020/05/gaming-gear-Cover-FB.jpg" },
                { src: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2020/10/Gaming-1000-bth-885x400.jpg" },
            ],
        };
    },
    methods: {
        gogo() {
            console.log("gogo");
        },
    },
    mounted() {
        // Set the sync target.
        this.$refs.primary.sync(this.$refs.secondary.splide);
    },
};
</script>
<style>
.splide__arrow {
    height: 100%;
    width: 80px;
    padding: 0 20px 0 20px;
    /* background-color: rgb(229, 231, 235); */
}
.splide__arrow:hover {
    transition-duration: 0.2s;
    background-color: rgba(0, 0, 0, 0.2);
}
.splide__arrow svg {
    fill: #ec6907;
    transition-duration: 0.2s;
    font-size: 15px;
}
.splide__arrow:hover svg {
    fill: #ec6907;
}
.splide__pagination__page:hover {
    background: #f6ae2d;
    cursor: pointer;
}
.splide__pagination__page.is-active {
    background: #ec6907;
    transform: scale(1);
}
.splide__pagination__page {
    background-color: rgba(0, 0, 0, 0.3);
}
.splide__pagination {
    bottom: 0.5em;
    left: 50%;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
    z-index: 1;
}
.splide__arrow--next {
    right: 0;
    border-radius: 0.5rem;
}
.splide__arrow--prev {
    left: 0;
    border-radius: 0.5rem;
}
.splide__slide {
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
}

@media only screen and (max-width: 640px) {
    /* .splide__pagination {
        bottom: -1em;
    } */
    .splide__arrow {
        display: none;
    }
}
</style>
