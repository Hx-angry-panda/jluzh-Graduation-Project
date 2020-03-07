<template>
    <div class="jluzh-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator =  function (value) {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(function (key) {
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'jluzh-Col',
        data: function(){
            return {
                gutter: 0
            }
        },
        props: {
            span: {
                type: [Number,String]
            },
            offset: {
                type: [Number,String]
            },
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widthPc: {
                type: Object,
                validator
            }
        },
        computed: {
            colClass: function () {
                let {span,offset,ipad,narrowPc,pc,widthPc} = this
                let {createClasses} = this
                return [
                    ...createClasses({span,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrowPc,'narrowPc-'),
                    ...createClasses(pc,'pc-'),
                    ...createClasses(widthPc,'widthPc-')
                ]
            },
            colStyle: function () {
                return {
                    paddingLeft: this.gutter/2 + 'px',
                    paddingRight: this.gutter/2 + 'px'
                }
            }
        },
        methods: {
            createClasses: function (obj,str='') {
                if (!obj) {
                    return []
                }
                let array = []
                if(obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        }
    }
</script>
<style lang="scss" scoped>
    .jluzh-col{
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n /24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n /24) * 100%;
            }
        }

        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px){
            $class-prefix: col-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>