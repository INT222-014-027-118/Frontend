<template>
    <div class="mx-auto container">
        <splide :options="options" @splide:moved="moved" class="">
            <splide-slide class="flex justify-center " v-for="slide in slides" :key="slide">
                <div class="">
                    <!-- <img src="https://chininter.co.th/wp-content/uploads/2020/10/G-703_A-600x600.jpg" class="h-full w-full object-contain" alt="slide.alt" /> -->
                </div>
                <div class="">
                    <img src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg" class="h-full w-full object-contain" alt="slide.alt" />
                </div>
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
            options: {
                rewind: true,
                start: 0,
                perPage: 1,
                autoplay: true,
                pauseOnHover: false,
                gap: "5rem",
                arrows: "slider",
                focus: "center",
                type: "loop",
                weight: "500px",
                height: "35%",
                padding: {
                    right: "5rem",
                    left: "5rem",
                },
                breakpoints: {
                    640: {
                        height: "50%",
                        padding: {
                            right: "1rem",
                            left: "1rem",
                        },
                        gap: "1rem",
                    },
                },
            },
            slides: [1, 2, 3, 4, 5],
        };
    },
    // methods: {
    //     moved(splide, newIndex) {
    //         console.log("moved", newIndex);
    //     },
    // },
};
</script>
<style>
.splide__arrow svg {
    fill: #000000;
}
.splide__arrow:hover svg {
    fill: #ec6907;
}
.splide__pagination__page:hover {
    background: #ec6907;
    cursor: pointer;
}
.splide__pagination__page.is-active {
    background: #f6ae2d;
    transform: scale(1.4);
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

@media only screen and (max-width: 640px) {
    .splide__pagination {
        bottom: -1em;
    }
    .splide__arrow {
        display: none;
    }
}
</style>
