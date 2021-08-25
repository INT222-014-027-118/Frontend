<template>
    <div class="select-none cursor-pointer lg:container mx-auto">
        <agile :options="myOptions" class="bg-gray-500">
            <div class="slide bg-red-200 ">
                <img src="https://chininter.co.th/wp-content/uploads/2020/10/G-703_A-600x600.jpg" class="h-full w-full object-contain" alt="" />
                <div class="">text</div>
            </div>
            <div class="slide bg-red-300 ">
                <h3 class="text-center">slide 2</h3>
            </div>
            <div class="slide bg-red-400 ">
                <h3 class="text-center">slide 3</h3>
            </div>
            <div class="slide bg-red-500 ">
                <h3 class="text-center">slide 4</h3>
            </div>
            <template v-slot:prevButton
                ><button><i class="material-icons"> arrow_back_ios </i></button>
            </template>
            <template v-slot:nextButton
                ><button><i class="material-icons"> arrow_forward_ios </i></button>
            </template>
        </agile>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myOptions: {
                navButtons: true,
                autoplay: false,
                autoplaySpeed: 4000,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 0,
                        settings: {
                            navButtons: false,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            navButtons: true,
                            dots: true,
                            infinite: true,
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style>
.agile__nav-button {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    width: 60px;
}
.agile__nav-button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
}
.agile__nav-button--prev {
    left: 0;
}
.agile__nav-button--next {
    right: 0;
}
.agile__dots {
    bottom: 10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
}
.agile__dot {
    margin: 0 10px;
}
.agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;
    background-color: rgba(0, 0, 0, 0.5);
}
.agile__dot--current button,
.agile__dot:hover button {
    /* background-color: #fff; */
    background-color: rgba(0, 0, 0, 0.1);
}

.slide {
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    width: 50%;
    height: 500px;
}
@media only screen and (max-width: 768px) {
    .slide {
        height: 300px;
    }
}
@media only screen and (max-width: 640px) {
    .slide {
        height: 200px;
    }
}
</style>
