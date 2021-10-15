<template>
    <div class="bg-white dark:bg-dark_tertiary transition-colors rounded-lg shadow-md" v-if="renderComponent">
        <splide :options="primaryOptions" ref="primary" :class="[this.$route.name == 'Home' ? 'sm:px-14 md:px-16 lg:px-20' : 'md:pt-3']">
            <splide-slide class="flex justify-center " v-for="slide in slides" :key="slide">
                <img :src="slide" class="h-full w-full object-contain" alt="slide.alt" @load="check(slide)" />
            </splide-slide>
        </splide>
        <splide :options="secondaryOptions" ref="secondary" v-show="this.$route.name != 'Home'" class="sm:px-14 md:px-16 lg:px-20 py-2">
            <splide-slide v-for="slide in slides" :key="slide">
                <img :src="slide" alt="slide.alt" />
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
    props: {
        images: Array,
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
            prop_productId: "",
            slides: [],
            renderComponent: true,
            loadCall: false,
            count: 0,
        };
    },
    watch: {
        images() {
            this.slides = this.images;
        },
    },
    methods: {
        forceRerender() {
            this.renderComponent = false;
            this.$nextTick(() => {
                this.renderComponent = true;
            });
        },
        syncIamage() {
            this.$refs.primary.sync(this.$refs.secondary.splide);
        },
        check() {
            this.count++;
            if (this.slides.length >= this.count) {
                this.resetImg();
                this.$emit("endload");
            }
        },
        resetImg() {
            setTimeout(() => {
                this.forceRerender();
            }, 10);
            setTimeout(() => {
                this.syncIamage();
            }, 10);
        },
    },
    async created() {
        this.slides = await this.images;
        this.resetImg();
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
    background-color: rgba(0, 0, 0, 0.1);
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
.splide--nav > .splide__track > .splide__list > .splide__slide {
    border: 3px solid transparent;
    border-color: #f6ae2d;
    cursor: pointer;
    opacity: 0.6;
}
.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
    border-color: #ec6907;
    opacity: 1;
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
