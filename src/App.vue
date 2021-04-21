<template>
    <div class="app" id="app" >
        <div class="app__wrap">
        <h1 class="app__title">Список задач</h1>
            <Nav class="app__nav"/>
        </div>
        <!-- /.wrap -->
        
        <router-view/>
    </div>
</template>


<script>
    import Nav from './components/Nav.vue';

    export default {
    name: 'App',
    components: {
        Nav,
    }
    }
    </script>


<style lang="scss">
    @import './style/reset.scss';
    @import './style/common-styles';

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    .app {

        &__wrap {
            margin-bottom: 40px;
            padding: 20px;
            background: linear-gradient(
            267.21deg,
            rgba(134, 4, 137, 0.785707) 0%,
            rgba(159, 12, 162, 0.762269) 43.22%,
            rgba(5, 1, 190, 0.734375) 100%
            );
        }

        &__title {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 35px;
            letter-spacing: 2px;
            color: #fff;
            text-shadow: 0 1px 0 #000;
            text-align: center;
        }

        &__nav {
            margin-bottom: 20px;
        }
    }
</style>
