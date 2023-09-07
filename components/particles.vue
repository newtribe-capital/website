<template>
    <vue-particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="{
                fullScreen: {
                enable: false,
                zIndex: -1
            },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: 'push'
                        // },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.2,
                            size: 40
                        },
                        push: {
                            quantity: 2
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#ffffff'
                    },
                    links: {
                        color: '#ffffff',
                        distance: 200,
                        enable: true,
                        opacity: 0.1,
                        width: 1
                    },
                    // collisions: {
                    //     enable: true
                    // },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 3,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1600
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.2
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        random: true,
                        value: 5
                    }
                },
                detectRetina: true
            }"
    />
</template>
<script setup>
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async engine => {
//await loadFull(engine);
await loadSlim(engine);
};

const particlesLoaded = async container => {
console.log("Particles container loaded", container);
};
</script>