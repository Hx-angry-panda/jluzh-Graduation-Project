<template>
    <div class="jluzh-input">
        <input :value="value" :disabled="disabled" :readonly="readonly"
               :type="type" :required="required"
               @input="$emit('input', $event.target.value)"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="iserror">
            <jluzh-icon name="warning"></jluzh-icon>
            <span>{{iserror}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        name: 'jluzh-Input',
        components: {
            'jluzh-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            iserror: {
                type: String
            },
            type: {
                type: String,
                default: 'text',
                validator(value){
                    return ['button','checkbox','color','date','datetime-local','email','file','hidden','month',
                        'number','password','radio','range','reset','search','submit','tel','text','time','url',
                        'week'].indexOf(value) >= 0
                }
            },
            required: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    $input-width: 140px;
    $input-padding: 7px 0.5em;
    $input-color: #555555;
    $input-font-size: 16px;
    $input-border-color: #CCCCCC;
    $input-hover-color: #40A9FF;
    $input-disable-color: #AAAAAA;
    $input-disable-bg: #F2F2F2;
    $input-disable-border-color: #CCCCCC;
    $input-readonly-color: #AAAAAA;
    $input-readonly-bg: #F2F2F2;
    $input-readonly-border-color: #CCCCCC;
    *{margin: 0; padding: 0; box-sizing: border-box;}
    .jluzh-input{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        :not(last-child){
            margin-right: .5em;
        }
        > input {
            width: $input-width;
            padding: $input-padding;
            color: $input-color;
            font-size: $input-font-size;
            line-height: $input-font-size;
            border: 1px solid $input-border-color;
            border-radius: 5px;
            outline: none;
            &:hover,&:focus{
                border-color: $input-hover-color;
            }
            &[disabled]{
                color: $input-disable-color;
                background: $input-disable-bg;
                border-color: $input-disable-border-color;
                cursor: not-allowed;
            }
            &[readonly]{
                color: $input-readonly-color;
                background: $input-readonly-bg;
                border-color: $input-readonly-border-color;
            }
        }
    }
</style>