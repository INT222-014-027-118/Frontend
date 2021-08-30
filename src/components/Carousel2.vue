<template>
    <div class="mx-auto container bg-gray-200">
        <splide :options="options" @splide:moved="moved" :class="[this.$route.name == 'Home' ? 'sm:px-20' : '']">
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
                height: "500px",
                padding: {
                    right: "5rem",
                    left: "5rem",
                },
                breakpoints: {
                    640: {
                        height: "50%",
                        padding: {
                            right: "0rem",
                            left: "0rem",
                        },
                        gap: "0rem",
                    },
                    768: {
                        height: "65%",
                        padding: {
                            right: "0rem",
                            left: "0rem",
                        },
                        gap: "0rem",
                    },
                    1024: {
                        height: "0",
                    },
                },
            },
            slides: [1, 2, 3, 4, 5],
        };
    },
};
</script>
<style>
.splide__arrow {
    height: 100%;
    width: 80px;
    padding: 0 20px 0 20px;
}
.splide__arrow:hover {
    transition-duration: 0.2s;
    background-color: rgba(0, 0, 0, 0.2);
}
.splide__arrow svg {
    fill: #000000;
    transition-duration: 0.2s;
    font-size: 15px;
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
}
.splide__arrow--prev {
    left: 0;
}

@media only screen and (max-width: 640px) {
    .splide__pagination {
        /* bottom: -1em; */
    }
    .splide__arrow {
        display: none;
    }
}
</style>
